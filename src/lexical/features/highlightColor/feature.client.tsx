'use client'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import { $getSelectionStyleValueForProperty } from '@payloadcms/richtext-lexical/lexical/selection'

import { ColorDropdown } from '../../components/ColorDropdown'
import getSelection from '../../getSelection'
import { ColorDropdownGroup, ColorFeatureProps } from '../../types'
import Icon from './Icon'
import { UPDATE_HL_COLOR } from './command'

// @ts-expect-error: Unreachable code error
export const HighlightColorFeatureClient = createClientFeature<ColorFeatureProps>(({ props }) => {
  const groups: ColorDropdownGroup[] = [
    {
      type: 'dropdown',
      ChildComponent: Icon,
      isEnabled({ selection }) {
        return !!getSelection(selection)
      },
      items: [
        {
          ...props,
          Component: ColorDropdown,
          key: 'highlightColor',
          command: UPDATE_HL_COLOR,
          current() {
            const selection = getSelection()

            return selection
              ? $getSelectionStyleValueForProperty(selection, 'background-color', '')
              : null
          },
        },
      ],
      key: 'highlightColorDropdown',
      order: 61,
    },
  ]

  return {
    enableFormats: ['highlightColor'],
    toolbarFixed: {
      groups,
    },
    toolbarInline: {
      groups,
    },
  }
})
