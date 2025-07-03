import type { AccessArgs } from 'payload'

import { UserRole } from '@/collections/Users'
import type { User } from 'payload-types'

type canAccessHeader = (args: AccessArgs<User>) => boolean

export const canAccessHeader: canAccessHeader = ({ req: { user } }) => {
  return Boolean(user) && (user?.role === UserRole.Admin || user?.role === UserRole.Global)
}
