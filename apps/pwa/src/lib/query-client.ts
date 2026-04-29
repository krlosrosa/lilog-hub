import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { del, get, set } from 'idb-keyval';

const QUERY_CACHE_KEY = 'lilo-wms-pwa-query-cache';

const idbStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const value = await get<string>(key);
    return value ?? null;
  },
  setItem: async (key: string, value: string): Promise<void> => {
    await set(key, value);
  },
  removeItem: async (key: string): Promise<void> => {
    await del(key);
  },
};

export const queryPersister = createAsyncStoragePersister({
  storage: idbStorage,
  key: QUERY_CACHE_KEY,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnReconnect: true,
    },
  },
});
