import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import React from 'react'

import { SerializedCustomParagraphNode } from '../../types'

export const ParagraphJSXConverter: JSXConverters<SerializedCustomParagraphNode> = {
  'custom-paragraph': ({ node, nodesToJSX }): React.ReactNode => {
    const children = nodesToJSX({
      nodes: node.children,
    })

    if (!children?.length) {
      return (
        <p>
          <br />
        </p>
      )
    }

    const style: React.CSSProperties = { paddingTop: '.5rem', paddingBottom: '.5rem' }
    const matchBackgroundColor = node.style?.match(/background-color: ([^;]+)/)
    const matchFontSize = node.style?.match(/font-size: ([^;]+)/)

    if (matchBackgroundColor) {
      style.backgroundColor = matchBackgroundColor[1]
    }
    if (matchFontSize) {
      style.fontSize = matchFontSize[1]
    }

    return <p style={style}>{children}</p>
  },
}
