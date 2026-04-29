import { DemandaVariavelCard } from '@/features/variavel/components/DemandaVariavelCard';
import { VariavelBottomNav } from '@/features/variavel/components/VariavelBottomNav';
import { VariavelHeader } from '@/features/variavel/components/VariavelHeader';
import { VariavelSearchBar } from '@/features/variavel/components/VariavelSearchBar';
import type { DemandaVariavel } from '@/features/variavel/types/types';

const STATIC_DEMANDAS: DemandaVariavel[] = [
  {
    id: '#WMS-88291',
    date: '24 Mai, 2024',
    status: 'em_andamento',
    caixas: 12,
    totalItems: 8,
  },
  {
    id: '#WMS-88304',
    date: '25 Mai, 2024',
    status: 'pendente',
    caixas: 45,
    totalItems: 15,
  },
  {
    id: '#WMS-88312',
    date: '25 Mai, 2024',
    status: 'pendente',
    caixas: 6,
    totalItems: 4,
  },
  {
    id: '#WMS-88315',
    date: '26 Mai, 2024',
    status: 'em_andamento',
    caixas: 22,
    totalItems: 10,
  },
];

export const ListaDemandaVariavelScreen = () => {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <VariavelHeader />
      <main className="mx-auto flex max-w-4xl flex-col gap-lg px-margin-mobile pb-32 pt-md">
        <VariavelSearchBar />
        <section aria-labelledby="lista-demandas-variavel-heading">
          <h2 id="lista-demandas-variavel-heading" className="sr-only">
            Lista de demandas por peso variável
          </h2>
          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            {STATIC_DEMANDAS.map((demanda) => (
              <DemandaVariavelCard key={demanda.id} demanda={demanda} />
            ))}
          </div>
        </section>
      </main>
      <VariavelBottomNav />
    </div>
  );
};
