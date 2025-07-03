import { Field } from 'payload'

interface RichTextFieldProps {
  name: string
  label: string
  required?: boolean
}

export const TextField = ({ name, label, required = false }: RichTextFieldProps): Field => ({
  name,
  label,
  type: 'text',
  required: required,
})
