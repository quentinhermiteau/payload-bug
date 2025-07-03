import type { CollectionBeforeChangeHook } from 'payload'

export const populatePublishedAt: CollectionBeforeChangeHook = ({ data, operation, req }) => {
  if (operation === 'create' || operation === 'update') {
    if (req.data) {
      if (!req.data.publishedAt) {
        const now = new Date()
        return {
          ...data,
          publishedAt: now,
        }
      }

      return { ...data }
    }
  }

  return data
}
