'use client';

import { useEffect, useState } from 'react';

import type { RecebimentoStatus } from '../model/recebimento.types';

export const useRecebimentoFilters = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<RecebimentoStatus | 'todos'>('todos');
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [search, statusFilter]);

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    pageIndex,
    setPageIndex,
  };
};
