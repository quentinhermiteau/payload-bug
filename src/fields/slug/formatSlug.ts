import type { FieldHook } from 'payload'

const accentMap = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  à: 'a',
  è: 'e',
  ì: 'i',
  ò: 'o',
  ù: 'u',
  â: 'a',
  ê: 'e',
  î: 'i',
  ô: 'o',
  û: 'u',
  ä: 'a',
  ë: 'e',
  ï: 'i',
  ö: 'o',
  ü: 'u',
  ã: 'a',
  õ: 'o',
  ñ: 'n',
  ç: 'c',
  Á: 'A',
  É: 'E',
  Í: 'I',
  Ó: 'O',
  Ú: 'U',
  À: 'A',
  È: 'E',
  Ì: 'I',
  Ò: 'O',
  Ù: 'U',
  Â: 'A',
  Ê: 'E',
  Î: 'I',
  Ô: 'O',
  Û: 'U',
  Ä: 'A',
  Ë: 'E',
  Ï: 'I',
  Ö: 'O',
  Ü: 'U',
  Ã: 'A',
  Õ: 'O',
  Ñ: 'N',
  Ç: 'C',
}

export const formatSlug = (val: string): string => {
  const slugText = val.replace(/[^\u0000-\u007E]/g, (char) => accentMap[char] ?? char)
  return slugText
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
