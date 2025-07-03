import { LexicalEditor } from '@payloadcms/richtext-lexical/lexical'
import { Undo } from 'lucide-react'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { ColorDropdownGroupItem } from '../types'

type Props = {
  active?: boolean
  anchorElem: HTMLElement
  editor: LexicalEditor
  enabled?: boolean
  item: ColorDropdownGroupItem
}

export const ColorDropdown = ({ editor, item }: Props): React.JSX.Element => {
  const [_activeColor, setActiveColor] = useState<string>('')

  const onChange = useCallback(
    (color: string): void => {
      editor.dispatchCommand(item.command, { color })
      setActiveColor(color)
    },
    [editor, item],
  )

  const onReset = useCallback((): void => {
    onChange('')
  }, [onChange])

  useEffect(() => {
    editor.read(() => {
      const current = item.current?.()
      if (current) {
        setActiveColor(current)
      }
    })
  }, [editor, item])

  const buttonColors = useMemo(
    () => item.colors?.filter((c) => c.type === 'button') ?? [],
    [item.colors],
  )

  return (
    <div>
      <button
        type="button"
        className="btn toolbar-popup__dropdown-item toolbar-popup__dropdown-item-h2 btn--icon btn--icon-style-none btn--size-medium btn--icon-position-left btn--has-tooltip btn--withoutPopup btn--style-none btn--withoutPopup"
        onClick={onReset}
      >
        <Undo strokeWidth={1.5} className="w-5 h-5 mr-1" /> Réinitialiser la couleur
      </button>
      {buttonColors.map((color, i) => (
        <button
          key={i}
          type="button"
          className="btn toolbar-popup__dropdown-item toolbar-popup__dropdown-item-h2 btn--icon btn--icon-style-none btn--size-medium btn--icon-position-left btn--has-tooltip btn--withoutPopup btn--style-none btn--withoutPopup"
          onClick={() => onChange(color.color)}
        >
          <span
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: color.color,
              borderRadius: '4px',
            }}
          />
          {color.label}{' '}
        </button>
      ))}
    </div>
  )
}
