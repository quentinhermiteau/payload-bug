import type { CollectionBeforeChangeHook } from 'payload'

export const populateCreatedBy: CollectionBeforeChangeHook = ({ data, operation, req }) => {
  if (operation === 'update' && !req?.data?.createdBy && req.user) {
    return {
      ...data,
      createdBy: req.user.id,
    }
  }

  return data
}
