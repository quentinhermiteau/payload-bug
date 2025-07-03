import { formatSlug } from '@/fields/slug/formatSlug'
import type { CollectionBeforeChangeHook } from 'payload'

const formatPDFFilename = (filename: string): string => {
  const parts = filename.split('.')
  const extension = parts.pop()
  const nameWithoutExtension = parts.join('.')
  const formattedName = formatSlug(nameWithoutExtension)

  return `${formattedName}.${extension}`
}

export const formatPDFFilenameHook: CollectionBeforeChangeHook = async ({ data }) => {
  if (data.mimeType === 'application/pdf' && data.filename) {
    data.filename = formatPDFFilename(data.filename)
  }

  return data
}
