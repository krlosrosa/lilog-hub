import { compare, hash } from 'bcryptjs';

const SALT_ROUNDS = 12;

export const hashPassword = async (plain: string) => hash(plain, SALT_ROUNDS);

export const verifyPassword = async (plain: string, passwordHash: string) => compare(plain, passwordHash);
