'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

import { Header } from 'payload-types'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()
  const rowNumber = data.rowNumber !== undefined ? data.rowNumber + 1 : ''

  const label = data?.data?.label ? `Nav item ${rowNumber}: ${data?.data?.label}` : 'Row'

  return <div>{label}</div>
}
