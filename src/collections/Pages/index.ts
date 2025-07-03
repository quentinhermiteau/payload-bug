import type { CollectionConfig, Field } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { ButtonBlock } from '@/blocks/Button'
import { slugField } from '@/fields/slug'
import { populateCreatedBy } from '@/hooks/populateCreatedBy'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { UserRole } from '../Users'

export enum PageTypes {
  Page = 'page',
  Press = 'press',
  Realization = 'realization',
  Entity = 'entity',
  Foundation = 'foundation',
  Group = 'group',
  RefDocuments = 'refDocuments',
  Jobs = 'jobs',
}

export const PageTypesByUserRole = {
  [UserRole.Admin]: [
    PageTypes.Page,
    PageTypes.Press,
    PageTypes.Realization,
    PageTypes.Entity,
    PageTypes.Foundation,
    PageTypes.Group,
    PageTypes.RefDocuments,
    PageTypes.Jobs,
  ],
  [UserRole.Press]: [PageTypes.Press],
  [UserRole.Foundation]: [PageTypes.Page, PageTypes.Foundation],
  [UserRole.Group]: [PageTypes.Group],
  [UserRole.Global]: [
    PageTypes.Page,
    PageTypes.Press,
    PageTypes.Realization,
    PageTypes.Entity,
    PageTypes.Foundation,
    PageTypes.Group,
    PageTypes.RefDocuments,
    PageTypes.Jobs,
  ],
  [UserRole.User]: [],
}

const blocksConfig: Field = {
  name: 'layout',
  label: 'Sections',
  labels: {
    singular: 'une section',
    plural: 'des sections',
  },
  type: 'blocks',
  blocks: [ButtonBlock],
}

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: ({ req }) => {
      const isAuthenticated = authenticated({ req })
      if (isAuthenticated) {
        return true
      }

      const { previewSecret, draft } = req.query

      if (draft === 'true') {
        return previewSecret === process.env.PREVIEW_SECRET
      }

      return authenticatedOrPublished({ req })
    },
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
    breadcrumbs: true,
    meta: true,
    ecoindex: true,
    publishedAt: true,
    unpublishedAt: true,
    redirectLink: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt', 'createdBy'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre de la page',
      type: 'text',
      unique: true,
      localized: true,
    },
    {
      type: 'group',
      name: 'content',
      fields: [
        {
          ...blocksConfig,
          required: true,
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    beforeChange: [populatePublishedAt, populateCreatedBy],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: false,
    },
    maxPerDoc: 50,
  },
}
