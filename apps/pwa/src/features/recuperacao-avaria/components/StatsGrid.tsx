import { Icon } from '@/components/Icon';

export interface StatsGridProps {
  pendentes: number;
  ativas: number;
}

export const StatsGrid = ({ pendentes, ativas }: StatsGridProps) => {
  const pendentesLabel = String(pendentes).padStart(2, '0');
  const ativasLabel = String(ativas).padStart(2, '0');

  return (
    <section aria-label="Resumo das demandas" className="grid grid-cols-2 gap-gutter">
      <div className="flex flex-col gap-xs rounded-lg bg-primary-container p-md text-primary-foreground shadow-md">
        <Icon name="pending_actions" className="text-xl" aria-hidden />
        <span className="font-sans text-headline-lg">{pendentesLabel}</span>
        <span className="opacity-80 font-label text-label-md">Pendentes</span>
      </div>
      <div className="flex flex-col gap-xs rounded-lg border border-outline-variant bg-card p-md shadow-sm">
        <Icon name="sync" className="text-xl text-primary" aria-hidden />
        <span className="font-sans text-headline-lg text-foreground">{ativasLabel}</span>
        <span className="font-label text-label-md text-muted-foreground">Ativas</span>
      </div>
    </section>
  );
};
