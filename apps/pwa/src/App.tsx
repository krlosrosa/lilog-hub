import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { BrowserRouter } from 'react-router-dom';

import { queryClient, queryPersister } from '@/lib/query-client';
import { AppRouter } from '@/router';

export const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: queryPersister,
        maxAge: 1000 * 60 * 60 * 24,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
};
