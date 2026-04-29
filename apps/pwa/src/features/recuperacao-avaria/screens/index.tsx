import { Icon } from '@/components/Icon';
import { RecuperacaoBottomNav } from '@/features/recuperacao-avaria/components/RecuperacaoBottomNav';
import { RecuperacaoCard } from '@/features/recuperacao-avaria/components/RecuperacaoCard';
import { RecuperacaoHeader } from '@/features/recuperacao-avaria/components/RecuperacaoHeader';
import { RecuperacaoSearchBar } from '@/features/recuperacao-avaria/components/RecuperacaoSearchBar';
import { StatsGrid } from '@/features/recuperacao-avaria/components/StatsGrid';
import type { RecuperacaoDemanda } from '@/features/recuperacao-avaria/types/types';

const STATIC_DEMANDS: RecuperacaoDemanda[] = [
  {
    id: 'REC-99201',
    date: '15/10/2023',
    status: 'pendente',
    totalItems: 12,
    iconName: 'inventory',
  },
  {
    id: 'REC-88342',
    date: '14/10/2023',
    status: 'em_andamento',
    totalItems: 5,
    progress: 40,
    iconName: 'inventory_2',
  },
  {
    id: 'REC-77129',
    date: '12/10/2023',
    status: 'pendente',
    totalItems: 24,
    iconName: 'pallet',
  },
];

export const ListaDemandaAvariaScreen = () => {
  const handleVerTodas = () => {
    /* tela estática — sem ação */
  };

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <RecuperacaoHeader />
      <main className="flex flex-col gap-lg px-margin-mobile pb-32 pt-20">
        <RecuperacaoSearchBar />
        <StatsGrid pendentes={18} ativas={4} />
        <div className="mt-sm flex items-center justify-between">
          <h2 className="font-sans text-headline-md text-foreground">Demandas Recentes</h2>
          <button
            type="button"
            onClick={handleVerTodas}
            className="flex min-h-touch items-center gap-xs font-label text-label-md font-medium text-primary active:opacity-70"
            aria-label="Ver todas as demandas recentes"
          >
            Ver todas
            <Icon name="chevron_right" className="text-sm" aria-hidden />
          </button>
        </div>
        <section className="flex flex-col gap-md" aria-labelledby="lista-demandas-recentes">
          <span id="lista-demandas-recentes" className="sr-only">
            Lista das demandas recentes de recuperação de avaria
          </span>
          {STATIC_DEMANDS.map((demanda) => (
            <RecuperacaoCard key={demanda.id} demanda={demanda} />
          ))}
        </section>
      </main>
      <RecuperacaoBottomNav />
    </div>
  );
};
