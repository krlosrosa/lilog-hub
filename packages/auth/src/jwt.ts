import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';
import type { UserRole } from '@lilo-wms/types';

export type AccessTokenPayload = {
  sub: string;
  email: string;
  role: UserRole;
  warehouseId: string | null;
};

export const signAccessToken = (
  payload: AccessTokenPayload,
  options: { secret: string; expiresIn: string },
) => {
  const signOpts: SignOptions = {
    expiresIn: options.expiresIn as SignOptions['expiresIn'],
    issuer: 'lilo-wms',
  };
  return jwt.sign(payload, options.secret as Secret, signOpts);
};

export const verifyAccessToken = (token: string, secret: string): AccessTokenPayload => {
  const decoded = jwt.verify(token, secret, { issuer: 'lilo-wms' });
  if (typeof decoded !== 'object' || decoded === null) {
    throw new Error('Invalid token');
  }
  const d = decoded as AccessTokenPayload & Record<string, unknown>;
  if (typeof d.sub !== 'string' || typeof d.email !== 'string' || typeof d.role !== 'string') {
    throw new Error('Invalid token payload');
  }
  return {
    sub: d.sub,
    email: d.email,
    role: d.role as UserRole,
    warehouseId: (d.warehouseId as string | null) ?? null,
  };
};
