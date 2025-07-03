import { Field, SelectField } from 'payload'

export const IconSelect = (options): Field => ({
  name: 'icon',
  type: 'text',
  index: true,
  label: 'Icône',
  admin: {
    components: {
      Field: {
        path: '@/fields/icons/IconComponent#IconComponent',
        clientProps: {
          options: options,
        },
      },
    },
  },
})

export const PositionIconSelect: SelectField = {
  name: 'positionIcon',
  label: "Position de l'icône",
  type: 'select',
  options: [
    { label: 'Gauche', value: 'left' },
    { label: 'Droite', value: 'right' },
  ],
  admin: {
    width: '50%',
  },
  validate: (value, { siblingData }: { siblingData: { icon?: string } }) => {
    if (siblingData.icon && !value) {
      return "Vous devez choisir une position pour l'icône"
    }

    return true
  },
}
