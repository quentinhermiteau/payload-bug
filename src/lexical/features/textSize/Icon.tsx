import {
  COMMAND_PRIORITY_CRITICAL,
  SELECTION_CHANGE_COMMAND,
} from '@payloadcms/richtext-lexical/lexical'
import { useLexicalComposerContext } from '@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext'
import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from '@payloadcms/richtext-lexical/lexical/selection'
import { ALargeSmall } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import getSelection from '../../getSelection'
import { UPDATE_TEXT_SIZE } from './command'

type UpdateTextSizePayload = {
  size: string
}

export default function Icon(): React.JSX.Element {
  const [size, setSize] = useState<string>('16px')
  const [editor] = useLexicalComposerContext()

  const updateCurrentSize = (): boolean => {
    const selection = getSelection()
    if (selection) {
      const currentSize = $getSelectionStyleValueForProperty(selection, 'font-size', size)
      setSize(currentSize)
    }
    return false
  }

  useEffect(() => {
    const unregister = editor.registerCommand<UpdateTextSizePayload>(
      UPDATE_TEXT_SIZE,
      (payload: UpdateTextSizePayload) => {
        setSize(payload.size)
        editor.update(() => {
          const selection = getSelection()
          if (selection) {
            $patchStyleText(selection, { 'font-size': payload.size || '' })
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
      editor.read(updateCurrentSize)
    }, 0)

    const unregisterSelection = editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      updateCurrentSize,
      COMMAND_PRIORITY_CRITICAL,
    )

    return () => {
      clearTimeout(timerId)
      unregisterSelection()
    }
  }, [editor])

  return (
    <div className="text-sm" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <ALargeSmall style={{ width: '1.25rem', height: '1.25rem' }} />
      <span style={{ fontSize: '12px' }}>{size}</span>
    </div>
  )
}
