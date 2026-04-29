import { useSyncExternalStore } from 'react';

const subscribeToOnlineStatus = (onStoreChange: () => void): (() => void) => {
  window.addEventListener('online', onStoreChange);
  window.addEventListener('offline', onStoreChange);
  return () => {
    window.removeEventListener('online', onStoreChange);
    window.removeEventListener('offline', onStoreChange);
  };
};

const getIsOnlineSnapshot = (): boolean => navigator.onLine;

const getIsOnlineServerSnapshot = (): boolean => true;

export const useOfflineStatus = (): { isOnline: boolean; isOffline: boolean } => {
  const isOnline = useSyncExternalStore(
    subscribeToOnlineStatus,
    getIsOnlineSnapshot,
    getIsOnlineServerSnapshot,
  );

  return { isOnline, isOffline: !isOnline };
};
