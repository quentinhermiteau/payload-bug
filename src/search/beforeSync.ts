import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

export const beforeSyncWithSearch: BeforeSync = async ({ originalDoc, searchDoc }) => {
  const { meta, breadcrumbs, slug, title, extract, type, publishedAt } = originalDoc

  const modifiedDoc: DocToSync = {
    ...searchDoc,
    slug: breadcrumbs?.[breadcrumbs.length - 1]?.url ?? slug,
    type,
    extract,
    publishedAt,
    meta: {
      ...meta,
      title: meta?.title ?? title,
      image: meta?.image?.id ?? meta?.image,
      description: meta?.description,
    },
  }

  return modifiedDoc
}
