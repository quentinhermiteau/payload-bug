import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { isAdmin } from '@/access/isAdmin'

export enum UserRole {
  Admin = 'admin',
  Press = 'press',
  Foundation = 'foundation',
  Group = 'group',
  Global = 'global',
  User = 'user',
}

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
  },
  access: {
    admin: authenticated,
    create: () => false,
    delete: isAdmin,
    read: authenticated,
    update: isAdmin,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Administrateur', value: UserRole.Admin },
        { label: 'Contributeur presse', value: UserRole.Press },
        { label: 'Contributeur fondation', value: UserRole.Foundation },
        { label: 'Contributeur groupe', value: UserRole.Group },
        { label: 'Contributeur global', value: UserRole.Global },
        { label: 'Utilisateur', value: UserRole.User },
      ],
      defaultValue: 'user',
    },
  ],
  timestamps: true,
}
