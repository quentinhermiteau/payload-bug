import { LexicalEditor } from '@payloadcms/richtext-lexical/lexical'
import { Type } from 'lucide-react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { SizeDropdownGroupItem } from '../types'

type Props = {
  active?: boolean
  anchorElem: HTMLElement
  editor: LexicalEditor
  enabled?: boolean
  item: SizeDropdownGroupItem
}

export const TextDropdown = ({ editor, item }: Props): React.JSX.Element => {
  const [activeSize, setActiveSize] = useState<string>('')

  const onChange = useCallback(
    (size: string): void => {
      editor.dispatchCommand(item.command, { size })
      setActiveSize(size || '')
    },
    [editor, item],
  )

  useEffect(() => {
    editor.read(() => {
      const current = item.current?.()
      if (current) {
        setActiveSize(current)
      }
    })
  }, [editor, item])

  const buttonSizes = useMemo(() => item.sizes ?? [], [item.sizes])

  return (
    <div>
      {buttonSizes.map((size) => (
        <button
          key={size}
          type="button"
          className={`btn toolbar-popup__dropdown-item toolbar-popup__dropdown-item-h2 btn--icon btn--icon-style-none btn--size-medium btn--icon-position-left btn--has-tooltip btn--withoutPopup btn--style-none btn--withoutPopup ${activeSize === size ? 'active' : ''}`}
          onClick={() => onChange(size)}
        >
          <Type style={{ width: '12px', height: '12px' }} />
          {size}
        </button>
      ))}
    </div>
  )
}
