import { PageTypesByUserRole } from '@/collections/Pages'
import { UserRole } from '@/collections/Users'
import { SelectField } from '@payloadcms/ui'
import type { Option, OptionObject, SelectFieldServerProps } from 'payload'
import React from 'react'

export const Component: React.FC<SelectFieldServerProps> = ({
  clientField,
  path,
  schemaPath,
  permissions,
  req,
}) => {
  const filteredOptions = (options: Option[], role: string): Option[] => {
    return options.filter((option: OptionObject) => {
      return PageTypesByUserRole[role].includes(option.value)
    })
  }

  return (
    <SelectField
      field={{
        ...clientField,
        options: filteredOptions(clientField.options, req.user?.role ?? UserRole.User),
      }}
      path={path}
      schemaPath={schemaPath}
      permissions={permissions}
    />
  )
}
