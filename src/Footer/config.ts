import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { canAccessFooter } from '@/access/canAccessFooter'
import { link } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: anyone,
    update: canAccessFooter,
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'columns',
      label: 'Colonnes',
      labels: {
        singular: 'Colonne',
        plural: 'Colonnes',
      },
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          label: 'Titre',
          type: 'text',
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'bottomBanner',
      label: 'Bannière en bas de page',
      type: 'group',
      fields: [
        {
          name: 'navItems',
          label: false,
          type: 'array',
          labels: {
            singular: 'Élément',
            plural: 'Éléments',
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Footer/RowLabel#RowLabel',
            },
          },
        },
      ],
    },
  ],
}
