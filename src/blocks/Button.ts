import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import type { Block } from 'payload'
import React, { createElement } from 'react'

import { link } from '@/fields/link'

const options = [
  {
    label: React.createElement(ArrowRight, { style: { width: 18, height: 18 } }),
    value: 'arrow-right',
  },
  {
    label: React.createElement(ArrowUpRight, { style: { width: 18, height: 18 } }),
    value: 'arrow-up-right',
  },
  {
    label: React.createElement(ChevronRight, { style: { width: 18, height: 18 } }),
    value: 'chevron-right',
  },
]

const colorOptions: any[] = [
  { label: 'Bleu', value: 'primary', background: '#0A0082' },
  {
    label: 'Blanc, Bordure bleue ',
    value: 'primary-outline',
    background: '#FFFFFF',
    border: '#0A0082',
  },
  { label: 'Vert', value: 'secondary', background: '#00AA91' },
  {
    label: 'Blanc, Bordure verte',
    value: 'secondary-outline',
    background: '#FFFFFF',
    border: '#00AA91',
  },
].map((color) => ({
  label: createElement(
    'div',
    { style: { display: 'flex', alignItems: 'center' } },
    createElement('span', {
      style: {
        display: 'inline-block',
        width: '16px',
        height: '16px',
        backgroundColor: color.background,
        border: `3px solid ${color?.border ?? color.background}`,
        marginRight: '5px',
        borderRadius: '4px',
      },
    }),
    color.label,
  ),
  value: color.value,
}))

export const ButtonBlock: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  imageURL: '/blocks/button.png',
  fields: [
    {
      type: 'radio',
      name: 'linkOrPdf',
      label: 'Ajouter un lien ou un PDF',
      defaultValue: 'link',
      options: [
        {
          label: 'Lien',
          value: 'link',
        },
        {
          label: 'PDF',
          value: 'pdf',
        },
      ],
    },
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        admin: {
          condition: (_, siblingData) => siblingData.linkOrPdf === 'link',
        },
      },
    }),
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          equals: 'application/pdf',
        },
      },
      localized: true,
      admin: {
        condition: (_, siblingData) => siblingData.linkOrPdf === 'pdf',
      },
    },
  ],
}
