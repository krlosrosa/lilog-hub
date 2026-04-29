import type { UserRole } from '@lilo-wms/types';
import { isUserRole } from '@lilo-wms/types';

const ROLE_SCORE: Record<UserRole, number> = {
  admin: 4,
  manager: 3,
  operator: 2,
  viewer: 1,
};

export const isRoleAtLeast = (userRole: UserRole, minRole: UserRole) =>
  ROLE_SCORE[userRole] >= ROLE_SCORE[minRole];

export const canAccessRole = (userRole: string, allowed: readonly UserRole[] | 'any') => {
  if (allowed === 'any') {
    return isUserRole(userRole);
  }
  if (!isUserRole(userRole)) {
    return false;
  }
  return allowed.includes(userRole);
};
