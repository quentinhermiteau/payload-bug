'use client'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import { $getSelectionStyleValueForProperty } from '@payloadcms/richtext-lexical/lexical/selection'

import { ColorDropdown } from '../../components/ColorDropdown'
import getSelection from '../../getSelection'
import { ColorDropdownGroup, ColorFeatureProps } from '../../types'
import Icon from './Icon'
import { UPDATE_TEXT_COLOR } from './command'

// @ts-expect-error: Unreachable code error
export const TextColorFeatureClient = createClientFeature<ColorFeatureProps>(({ props }) => {
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
          key: 'textColor',
          command: UPDATE_TEXT_COLOR,
          current() {
            const selection = getSelection()

            return selection ? $getSelectionStyleValueForProperty(selection, 'color', '') : null
          },
        },
      ],
      key: 'textColorDropdown',
      order: 60,
    },
  ]

  return {
    enableFormats: ['textColor'],
    toolbarFixed: {
      groups,
    },
    toolbarInline: {
      groups,
    },
  }
})
