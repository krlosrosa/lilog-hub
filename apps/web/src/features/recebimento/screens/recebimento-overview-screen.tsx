'use client';

import { useMemo } from 'react';

import { filterRecebimentos } from '../lib/filter-recebimentos';
import { useRecebimentoFilters } from '../hooks/use-recebimento-filters';
import { DOCK_MOCK, METRICS_MOCK, RECEBIMENTO_MOCK } from '../model/recebimento.mock';
import { DockStatusGrid } from '../components/dock-status-grid';
import { RecebimentoFilters } from '../components/recebimento-filters';
import { RecebimentoHeader } from '../components/recebimento-header';
import { RecebimentoMetrics } from '../components/recebimento-metrics';
import { RecebimentoMobileList } from '../components/recebimento-mobile-list';
import { RecebimentoNovoFab } from '../components/recebimento-novo-fab';
import { RecebimentoTable } from '../components/recebimento-table';

type RecebimentoOverviewScreenProps = {
  centro: string;
};

export const RecebimentoOverviewScreen = ({ centro }: RecebimentoOverviewScreenProps) => {
  const { search, setSearch, statusFilter, setStatusFilter, pageIndex, setPageIndex } = useRecebimentoFilters();

  const recebimentosFiltrados = useMemo(
    () =>
      filterRecebimentos({
        items: RECEBIMENTO_MOCK,
        search,
        statusFilter,
      }),
    [search, statusFilter],
  );

  return (
    <div className="flex min-h-dvh w-full flex-col bg-background p-2">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col space-y-6">
        <RecebimentoHeader centro={centro} />
        <RecebimentoMetrics items={METRICS_MOCK} />
        <RecebimentoFilters
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
        <RecebimentoTable
          data={recebimentosFiltrados}
          centro={centro}
          pageIndex={pageIndex}
          onPageIndexChange={setPageIndex}
        />
        <RecebimentoMobileList items={recebimentosFiltrados} centro={centro} />
        <DockStatusGrid items={DOCK_MOCK} />
      </div>
      <RecebimentoNovoFab centro={centro} />
    </div>
  );
};
