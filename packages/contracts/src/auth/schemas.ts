import { z } from 'zod';

export const userRoleSchema = z.enum(['admin', 'manager', 'operator', 'viewer']);

export const healthQuerySchema = z.object({
  ping: z.string().optional(),
});

export type HealthQuery = z.infer<typeof healthQuerySchema>;
