import { Field } from 'payload'

import { PageTypes } from '@/collections/Pages'

export const searchFields: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'extract',
    label: 'Extrait de la page',
    type: 'text',
  },
  {
    name: 'publishedAt',
    label: 'Date de publication',
    type: 'date',
    admin: {
      date: {
        displayFormat: 'dd/MM/YYYY HH:mm',
      },
    },
  },
  {
    name: 'type',
    label: 'Type de la page',
    type: 'select',
    options: [
      { label: 'Page', value: PageTypes.Page },
      { label: 'Actualités presse', value: PageTypes.Press },
      { label: 'Réalisations', value: PageTypes.Realization },
      { label: 'Entités', value: PageTypes.Entity },
      { label: 'Actualités fondation', value: PageTypes.Foundation },
      { label: 'Actualités groupe', value: PageTypes.Group },
      { label: 'Documents de référence', value: PageTypes.RefDocuments },
      { label: 'Métiers', value: PageTypes.Jobs },
    ],
    admin: {
      components: {
        Field: {
          path: '@/fields/pageTypeOption/Field#Component',
        },
      },
    },
  },
]
