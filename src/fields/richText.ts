import {
  AlignFeature,
  BoldFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

import { HighlightColorFeature } from '@/lexical/features/highlightColor/feature.server'
import { TextColorFeature } from '@/lexical/features/textColor/feature.server'
import { TextSizeFeature } from '@/lexical/features/textSize/feature.server'

interface ColorOption {
  type: 'button' | 'palette'
  label: string
  color: string
}

interface RichTextFeatures {
  align?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  headings?: boolean | ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')[]
  link?: boolean
  highlight?: boolean | ColorOption[]
  textColor?: boolean | ColorOption[]
  textSize?: boolean | string[]
}

interface RichTextFieldProps {
  name: string
  label: string
  required?: boolean
  features?: RichTextFeatures
  placeholder?: string
  admin?: Record<string, any>
}

const hasContent = (data): boolean => {
  if (!data || !data.root || !data.root.children || !Array.isArray(data.root.children)) {
    return false
  }

  for (const node of data.root.children) {
    if (!node.children || !Array.isArray(node.children)) continue

    for (const child of node.children) {
      if (
        child.type === 'link' ||
        (child.type === 'text' && child.text && child.text.trim().length > 0)
      ) {
        return true
      }
    }
  }

  return false
}

export const RichTextField = ({
  name,
  label,
  required = false,
  features = {},
  placeholder,
  admin = {},
}: RichTextFieldProps): Field => ({
  name,
  label,
  type: 'richText',
  editor: lexicalEditor({
    admin: {
      placeholder: placeholder ?? 'Saisissez votre texte ici...',
      ...admin,
    },
    features: ({ rootFeatures }) => {
      if (Object.keys(features).length === 0) {
        return []
      }
      const enabledFeatures = [...rootFeatures]

      let textColors: ColorOption[] = []
      if (Array.isArray(features.textColor)) {
        textColors = features.textColor
      }

      let textSizes: string[] = []
      if (Array.isArray(features.textSize)) {
        textSizes = features.textSize
      }

      const featureMap = {
        headings: HeadingFeature({
          enabledHeadingSizes:
            features.headings === true
              ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
              : Array.isArray(features.headings)
                ? features.headings
                : [],
        }),
        align: AlignFeature(),
        bold: BoldFeature(),
        italic: ItalicFeature(),
        underline: UnderlineFeature(),
        link: LinkFeature(),
        highlight: HighlightColorFeature({
          colors: [{ type: 'button', label: 'Jaune', color: '#ffff00' }],
        }),
        textColor: TextColorFeature({
          colors:
            features.textColor === true
              ? [{ type: 'button', label: 'Vert Jade', color: '#008874' }]
              : textColors,
        }),
        textSize: TextSizeFeature({
          sizes:
            features.textSize === true
              ? ['12px', '14px', '16px', '18px', '20px', '26px']
              : textSizes,
        }),
      }

      for (const [key, feature] of Object.entries(featureMap)) {
        if (features?.[key]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          enabledFeatures.push(feature as any)
        }
      }

      return enabledFeatures
    },
  }),
  required,
  admin,
  localized: true,
  hooks: {
    beforeChange: [
      ({ value }) => {
        if (value && !hasContent(value)) {
          return null
        }
        return value
      },
    ],
  },
})
