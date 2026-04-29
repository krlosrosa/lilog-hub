import { ConnectionOptions } from 'bullmq';

/**
 * Tuned for dev: lazy connect, no hard crash on first command if Redis is down.
 * In production, ensure Redis is up or handle reconnect at process level.
 */
export const parseRedis = (url: string): ConnectionOptions => {
  try {
    const u = new URL(url);
    return {
      host: u.hostname,
      port: u.port ? Number(u.port) : 6379,
      username: u.username || undefined,
      password: u.password || undefined,
      maxRetriesPerRequest: null,
      lazyConnect: true,
      enableReadyCheck: false,
    };
  } catch {
    return {
      host: '127.0.0.1',
      port: 6379,
      maxRetriesPerRequest: null,
      lazyConnect: true,
      enableReadyCheck: false,
    };
  }
};
