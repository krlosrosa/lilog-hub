import { useLocation } from 'react-router-dom';

import { ConferenciaItemFormCard } from '@/features/recebimento/components/ConferenciaItemFormCard';
import { ConferenciaItemHeader } from '@/features/recebimento/components/ConferenciaItemHeader';
import { ConferenciaItemSaveFooter } from '@/features/recebimento/components/ConferenciaItemSaveFooter';
import { ConferenciaItemSkuCard } from '@/features/recebimento/components/ConferenciaItemSkuCard';
import { ItensAvariaList } from '@/features/recebimento/components/ItensAvariaList';
import { LotesConferidosList } from '@/features/recebimento/components/LotesConferidosList';
import type {
  ConferenciaItemDetail,
  ConferenciaItemRouteState,
  ItemAvaria,
  LoteConferido,
} from '@/features/recebimento/types/types';

const STATIC_LOTES: LoteConferido[] = [
  {
    id: '1',
    lotCode: 'LOT-23-04A',
    dateTimeLabel: '15/10/2023 • 14:30',
    units: 240,
  },
  {
    id: '2',
    lotCode: 'LOT-23-04B',
    dateTimeLabel: '15/10/2023 • 15:10',
    units: 120,
  },
];

const STATIC_AVARIA: ItemAvaria[] = [
  {
    id: 'a1',
    sku: 'HDM-21-02-B',
    description: 'Embalagem Violada - Lacre Rompido',
    damageSummary: '2 Caixas / 24 Unidades',
  },
];

export const ConferenciaItemScreen = () => {
  const location = useLocation();
  const routeState = location.state as ConferenciaItemRouteState | undefined;

  const detail: ConferenciaItemDetail = {
    sku: routeState?.sku ?? '',
    description: routeState?.description ?? '',
    lote: routeState?.lote ?? '',
  };

  const avariasFiltradas: ItemAvaria[] = STATIC_AVARIA.filter((a) => a.sku === detail.sku);

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <ConferenciaItemHeader />
      <main className="mx-auto max-w-lg space-y-gutter px-margin-mobile pb-32 pt-20">
        <ConferenciaItemSkuCard detail={detail} />
        <ConferenciaItemFormCard />
        <LotesConferidosList lotes={STATIC_LOTES} />
        <ItensAvariaList itens={avariasFiltradas} />
      </main>
      <ConferenciaItemSaveFooter />
    </div>
  );
};
