'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<any>()

  let label = 'Lien'

  if (data?.data?.label) {
    label += ` ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.label}`
  } else if (data?.data?.link?.label) {
    label += ` ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
  }

  return <div>{label}</div>
}
