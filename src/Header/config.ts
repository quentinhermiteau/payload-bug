import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { canAccessHeader } from '@/access/canAccessHeader'
import { ButtonBlock } from '@/blocks/Button'
import { link } from '@/fields/link'
import { RichTextField } from '@/fields/richText'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: anyone,
    update: canAccessHeader,
  },
  fields: [
    {
      label: 'Ecoindex',
      name: 'ecoindex',
      type: 'group',
      fields: [
        {
          name: 'ecoindexText',
          label: 'Texte ecoindex',
          type: 'text',
          required: true,
          localized: true,
        },
        link({
          appearances: false,
          disableLabel: true,
        }),
        RichTextField({
          name: 'richText',
          label: 'Texte lien ecoindex',
          required: true,
          features: { bold: true },
        }),
      ],
    },
    {
      name: 'languages',
      labels: {
        singular: 'Langue',
        plural: 'Langues',
      },
      type: 'array',
      fields: [
        {
          name: 'countryLabel',
          label: 'Label pays',
          type: 'text',
          required: true,
        },
        {
          name: 'countryCode',
          label: 'Code pays',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'group',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'navItems',
      label: 'Menu',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'label',
          label: 'Label du menu',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description du menu',
          type: 'text',
          required: true,
        },
        {
          name: 'button',
          label: 'Bouton du menu',
          type: 'blocks',
          minRows: 1,
          maxRows: 1,
          defaultValue: [
            {
              blockType: 'button',
              style: 'primary',
            },
          ],
          blocks: [ButtonBlock],
          labels: {
            singular: 'un bouton',
            plural: 'des boutons',
          },
        },
        {
          name: 'image',
          label: 'Image du menu',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      minRows: 1,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
}
