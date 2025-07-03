'use client'

import { SelectInput, useField } from '@payloadcms/ui'
import { FieldClientComponent, OptionObject, PayloadComponent } from 'payload'

// @ts-expect-error
export const IconComponent: PayloadComponent<FieldClientComponent> = ({ field, path, options }) => {
  const { value, setValue } = useField<string>({ path: path ?? field.name })

  return (
    // @ts-expect-error: Ignore --field-width error
    <div className="field-type select" style={{ '--field-width': '50%' }}>
      <label className="field-label">Choix de l&apos;icône</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={(e: OptionObject) => setValue(e?.value ?? null)}
      />
    </div>
  )
}
