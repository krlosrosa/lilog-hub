import { useMemo, useState } from 'react';

import { DemandCard } from '@/features/recebimento/components/DemandCard';
import { DemandSearchBar } from '@/features/recebimento/components/DemandSearchBar';
import { DemandTabs } from '@/features/recebimento/components/DemandTabs';
import { RecebimentoHeader } from '@/features/recebimento/components/RecebimentoHeader';
import type { Demand, DemandTab } from '@/features/recebimento/types/types';

const STATIC_DEMANDS: Demand[] = [
  {
    id: '12345',
    status: 'aguardando',
    tags: ['ITB', 'DPA'],
    plate: 'ABC-1234',
    dock: 'Doca 04',
    carrier: 'LogiTrans S.A.',
  },
  {
    id: '12350',
    status: 'conferindo',
    tags: ['ITB'],
    plate: 'GHI-5678',
    dock: 'Doca 02',
    progress: 65,
  },
  {
    id: '12358',
    status: 'transito',
    tags: ['LDB'],
    plate: 'XYZ-9876',
    dock: 'Doca 12',
    carrier: 'Rapid Cargo Express',
  },
  {
    id: '12401',
    status: 'aguardando',
    tags: ['ITB', 'DPA', 'LDB'],
    plate: 'KKK-5512',
    dock: 'Pátio B',
    carrier: 'Brasil Logistics S.A.',
  },
];

const isNaoIniciada = (d: Demand) => d.status === 'aguardando' || d.status === 'transito';

const isConferenciaEmAndamento = (d: Demand) => d.status === 'conferindo';

const filterDemands = (demands: Demand[], tab: DemandTab): Demand[] => {
  if (tab === 'em_aberto') return demands.filter(isNaoIniciada);
  return demands.filter(isConferenciaEmAndamento);
};

export const ListaDemandaScreen = () => {
  const [activeTab, setActiveTab] = useState<DemandTab>('em_aberto');

  const visibleDemands = useMemo(() => filterDemands(STATIC_DEMANDS, activeTab), [activeTab]);

  const sectionTitle = activeTab === 'em_aberto' ? 'Demandas em Aberto' : 'Em andamento';
  const itemCount = visibleDemands.length;

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <RecebimentoHeader />
      <main className="px-margin-mobile pb-8 pt-20">
        <div className="mb-4">
          <DemandSearchBar />
        </div>
        <div className="mb-6">
          <DemandTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="mb-4 flex items-center justify-between gap-md">
          <h2 className="font-sans text-headline-md text-foreground">{sectionTitle}</h2>
          <span className="rounded-full bg-accent px-2.5 py-1 font-label text-label-sm text-accent-foreground">
            {itemCount} {itemCount === 1 ? 'item' : 'itens'}
          </span>
        </div>
        <div id="panel-demandas" role="tabpanel" aria-labelledby={activeTab === 'em_aberto' ? 'tab-em-aberto' : 'tab-pendentes'} className="space-y-3">
          {visibleDemands.length === 0 ? (
            <p className="rounded-lg border border-border bg-card p-md font-sans text-body-md text-muted-foreground">
              Nenhuma demanda nesta lista.
            </p>
          ) : (
            visibleDemands.map((demand) => <DemandCard key={demand.id} demand={demand} />)
          )}
        </div>
      </main>
    </div>
  );
};