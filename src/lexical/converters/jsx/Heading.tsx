import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import React from 'react'

import { CustomHeadingNode } from '../../nodes/CustomHeadingNode'

export const HeadingJSXConverter: JSXConverters<CustomHeadingNode> = {
  'custom-heading': ({ node, nodesToJSX }): React.ReactNode => {
    const children = nodesToJSX({
      nodes: node.children,
    })

    const style: React.CSSProperties = { paddingTop: '.5rem', paddingBottom: '.5rem' }
    const match = node.style?.match(/background-color: ([^;]+)/)
    if (match) {
      style.backgroundColor = match[1]
    }

    if (node.tag === 'h1') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h1 style={style}>
            <br />
          </h1>
        )
      }
      return <h1 style={style}>{children}</h1>
    }
    if (node.tag === 'h2') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h2 style={style}>
            <br />
          </h2>
        )
      }
      return <h2 style={style}>{children}</h2>
    }
    if (node.tag === 'h3') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h3 style={style}>
            <br />
          </h3>
        )
      }
      return <h3 style={style}>{children}</h3>
    }
    if (node.tag === 'h4') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h4 style={style}>
            <br />
          </h4>
        )
      }
      return <h4 style={style}>{children}</h4>
    }
    if (node.tag === 'h5') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h5 style={style}>
            <br />
          </h5>
        )
      }
      return <h5 style={style}>{children}</h5>
    }
    if (node.tag === 'h6') {
      if (!children || (Array.isArray(children) && children.length === 0)) {
        return (
          <h6 style={style}>
            <br />
          </h6>
        )
      }
      return <h6 style={style}>{children}</h6>
    }

    return null
  },
}
