import { ConferenciaFilterChips } from '@/features/recebimento/components/ConferenciaFilterChips';
import { ConferenciaFooter } from '@/features/recebimento/components/ConferenciaFooter';
import { ConferenciaHeader } from '@/features/recebimento/components/ConferenciaHeader';
import { ConferenciaItemCard } from '@/features/recebimento/components/ConferenciaItemCard';
import { ConferenciaOrderCard } from '@/features/recebimento/components/ConferenciaOrderCard';
import { ConferenciaSearchBar } from '@/features/recebimento/components/ConferenciaSearchBar';
import type { ConferenciaItem, ConferenciaOrder } from '@/features/recebimento/types/types';

const STATIC_ORDER: ConferenciaOrder = {
  code: '#WH-290424',
  done: 12,
  total: 48,
};

const STATIC_ITEMS: ConferenciaItem[] = [
  {
    id: '1',
    sku: 'HDM-21-02-B',
    name: 'Cabo HDMI Premium 2.1 - 2m',
    lote: '2024/03-A',
    statuses: ['conferido', 'divergente'],
  },
  {
    id: '2',
    sku: 'KB-RGB-BL-01',
    name: 'Teclado Mecânico RGB Switch Blue',
    lote: '2024/01-Z',
    qty: 12,
    statuses: ['conferido'],
  },
  {
    id: '3',
    sku: 'MS-G502-HERO',
    name: 'Mouse Gamer Hero G502 - 16k DPI',
    lote: '2023/12-X',
    statuses: ['conferido', 'avaria'],
  },
  {
    id: '4',
    sku: 'MN-27C-144',
    name: 'Monitor 27" Curvo 144Hz',
    lote: '2024/04-B',
    statuses: ['pendente'],
  },
];

export const ConferenciaScreen = () => {
  return (

    <div className="min-h-dvh bg-background font-sans text-foreground">

      <ConferenciaHeader />

      <main className="mx-auto max-w-lg px-margin-mobile pb-32 pt-20">

        <section className="mb-lg" aria-labelledby="conferencia-busca-heading">

          <h2 id="conferencia-busca-heading" className="sr-only">

            Buscar itens

          </h2>

          <ConferenciaSearchBar />

        </section>

        <ConferenciaFilterChips />

        <ConferenciaOrderCard order={STATIC_ORDER} />

        <div className="space-y-lg" role="list" aria-label="Itens da carga">

          {STATIC_ITEMS.map((item) => (

            <ConferenciaItemCard key={item.id} item={item} />

          ))}

        </div>

      </main>

      <ConferenciaFooter />

    </div>

  );

};
