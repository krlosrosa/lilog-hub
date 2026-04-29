export type UserRole = 'admin' | 'manager' | 'operator' | 'viewer';

export const USER_ROLES: readonly UserRole[] = ['admin', 'manager', 'operator', 'viewer'] as const;

export const isUserRole = (value: string): value is UserRole => {
  return (USER_ROLES as readonly string[]).includes(value);
};
