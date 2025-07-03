import { CollectionConfig } from 'payload'

import { CustomSelectFieldServer } from './Field'

export const selectFields: CollectionConfig['fields'] = [
  {
    name: 'selectFieldServerComponent',
    type: 'select',
    admin: {
      components: {
        // @ts-expect-error
        Field: CustomSelectFieldServer,
      },
    },
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
    ],
  },
]
