import {
  COMMAND_PRIORITY_CRITICAL,
  SELECTION_CHANGE_COMMAND,
} from '@payloadcms/richtext-lexical/lexical'
import { useLexicalComposerContext } from '@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext'
import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from '@payloadcms/richtext-lexical/lexical/selection'
import { Baseline } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import getSelection from '../../getSelection'
import { UPDATE_TEXT_COLOR } from './command'

type UpdateTextColorPayload = {
  color: string
}

export default function Icon(): React.JSX.Element {
  const [color, setColor] = useState<string>('')
  const [editor] = useLexicalComposerContext()

  const updateCurrentColor = (): boolean => {
    const selection = getSelection()
    if (selection) {
      const currentColor = $getSelectionStyleValueForProperty(selection, 'color', '')
      setColor(currentColor)
    }
    return false
  }

  useEffect(() => {
    const unregister = editor.registerCommand<UpdateTextColorPayload>(
      UPDATE_TEXT_COLOR,
      (payload: UpdateTextColorPayload) => {
        setColor(payload.color)
        editor.update(() => {
          const selection = getSelection()
          if (selection) {
            $patchStyleText(selection, { color: payload.color || '' })
          }
        })
        return false
      },
      COMMAND_PRIORITY_CRITICAL,
    )
    return unregister
  }, [editor])

  useEffect(() => {
    const timerId = setTimeout(() => {
      editor.read(updateCurrentColor)
    }, 0)

    const unregisterSelection = editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      updateCurrentColor,
      COMMAND_PRIORITY_CRITICAL,
    )

    return () => {
      clearTimeout(timerId)
      unregisterSelection()
    }
  }, [editor])

  return <Baseline className="icon w-5 h-5" style={{ color }} />
}
