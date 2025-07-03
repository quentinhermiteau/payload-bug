import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { searchPlugin } from '@payloadcms/plugin-search'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { type S3StorageOptions, s3Storage } from '@payloadcms/storage-s3'
import { Plugin } from 'payload'

import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { beforeSyncWithSearch } from '@/search/beforeSync'
import { searchFields } from '@/search/fieldOverrides'
import { getServerSideURL } from '@/utilities/getURL'
import { Page } from 'payload-types'

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()

  if (doc.breadcrumbs && Array.isArray(doc.breadcrumbs) && doc.breadcrumbs.length > 0) {
    const breadcrumb = doc.breadcrumbs[doc.breadcrumbs.length - 1]
    const path = breadcrumb?.url ?? ''
    return path ? `${url}${path}` : url
  }

  return doc?.slug ? `${url}/${doc.slug}` : url
}

let s3Config: S3StorageOptions['config'] = {
  region: process.env.AWS_REGION ?? '',
  endpoint: 'https://s3.amazonaws.com',
}

if (process.env.env === 'local') {
  s3Config = {
    ...s3Config,
    endpoint: 'http://localhost:9000',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
    },
    forcePathStyle: true,
  }
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['pages'],
    generateLabel: (_, doc) => doc.title as string,
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
    generateImage: ({ doc }) => doc?.featuredImage,
  }),
  searchPlugin({
    collections: ['pages'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
  s3Storage({
    signedDownloads: true,
    collections: {
      media: true,
    },
    bucket: process.env.S3_BUCKET_NAME ?? '',
    config: s3Config,
  }),
]
