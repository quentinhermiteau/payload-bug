import { SelectField } from '@payloadcms/ui'
import type { SelectFieldServerComponent } from 'payload'

export const CustomSelectFieldServer: SelectFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <SelectField
      field={clientField}
      path={path}
      schemaPath={schemaPath}
      permissions={permissions}
    />
  )
}
