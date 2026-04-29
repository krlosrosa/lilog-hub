import { DemandaCard } from '@/features/movimentacao/components/DemandaCard';
import type { DemandaStatic } from '@/features/movimentacao/types/types';

export interface DemandasAbertoSectionProps {
  demands: DemandaStatic[];
  urgentBadge: string;
}

export const DemandasAbertoSection = ({ demands, urgentBadge }: DemandasAbertoSectionProps) => {
  return (
    <section className="flex flex-col gap-md" aria-labelledby="movimentacao-demandas-aberto">
      <div className="flex items-center justify-between">
        <h2 id="movimentacao-demandas-aberto" className="font-sans text-headline-md text-foreground">
          Demandas em Aberto
        </h2>
        <span className="rounded-full bg-muted px-3 py-xs font-label text-label-sm font-semibold text-destructive">
          {urgentBadge}
        </span>
      </div>
      <div className="flex flex-col gap-md">
        {demands.map((demand) => (
          <DemandaCard key={demand.id} item={demand} />
        ))}
      </div>
    </section>
  );
};
