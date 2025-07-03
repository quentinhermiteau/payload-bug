import { CollectionSlug, Payload, PayloadRequest } from 'payload'

import { seedGlobals } from './globals'

const collections: CollectionSlug[] = [
  'pages',
  // 'media',
  'redirects',
  // 'forms',
  // 'form-submissions',
  'search',
]

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding globals...`)

  await seedGlobals(payload)
  await payload.db.updateMany({
    collection: 'users',
    req,
    data: {
      role: 'admin',
    },
    where: {
      id: { not_equals: null },
    },
  })

  payload.logger.info('Seeded database successfully!')
}
