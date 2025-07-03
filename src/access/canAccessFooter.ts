import type { AccessArgs } from 'payload'

import { UserRole } from '@/collections/Users'
import type { User } from 'payload-types'

type canAccessFooter = (args: AccessArgs<User>) => boolean

export const canAccessFooter: canAccessFooter = ({ req: { user } }) => {
  return Boolean(user) && (user?.role === UserRole.Admin || user?.role === UserRole.Global)
}
