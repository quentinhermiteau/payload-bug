'use client'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import { $getSelectionStyleValueForProperty } from '@payloadcms/richtext-lexical/lexical/selection'

import { TextDropdown } from '../../components/TextDropdown'
import getSelection from '../../getSelection'
import { SizeDropdownGroup, SizeFeatureProps } from '../../types'
import Icon from './Icon'
import { UPDATE_TEXT_SIZE } from './command'

// @ts-expect-error: Unreachable code error
export const TextSizeFeatureClient = createClientFeature<SizeFeatureProps>(({ props }) => {
  const groups: SizeDropdownGroup[] = [
    {
      type: 'dropdown',
      ChildComponent: Icon,
      isEnabled({ selection }) {
        return !!getSelection(selection)
      },
      items: [
        {
          ...props,
          Component: TextDropdown,
          key: 'textSize',
          command: UPDATE_TEXT_SIZE,
          current() {
            const selection = getSelection()

            return selection ? $getSelectionStyleValueForProperty(selection, 'font-size', '') : null
          },
        },
      ],
      key: 'textSizeDropdown',
      order: 63,
    },
  ]

  return {
    enableFormats: ['textSize'],
    toolbarFixed: {
      groups,
    },
    toolbarInline: {
      groups,
    },
  }
})
