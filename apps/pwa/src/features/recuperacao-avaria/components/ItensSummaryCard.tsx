import { Icon } from '@/components/Icon';

export interface ItensSummaryCardProps {
  demandId: string;
  dateLabel: string;
  progressPercent: number;
  recoveredCount: number;
  totalCount: number;
  pendingCount: number;
}

export const ItensSummaryCard = ({
  demandId,
  dateLabel,
  progressPercent,
  recoveredCount,
  totalCount,
  pendingCount,
}: ItensSummaryCardProps) => {
  return (
    <section
      className="rounded-lg border border-outline-variant/30 bg-card p-md shadow-sm"
      aria-labelledby="itens-demanda-id-heading"
    >
      <div className="mb-md flex items-start justify-between">
        <div>
          <span className="font-label text-label-sm font-semibold uppercase tracking-wider text-primary">
            ID da Demanda
          </span>
          <h2 id="itens-demanda-id-heading" className="font-sans text-headline-lg text-foreground">
            #{demandId}
          </h2>
          <p className="mt-xs flex items-center gap-sm font-sans text-body-md text-muted-foreground">
            <Icon name="calendar_today" className="text-sm" />
            {dateLabel}
          </p>
        </div>
        <div className="flex min-w-16 flex-col items-center justify-center rounded-lg bg-primary-container px-md py-sm text-primary-foreground">
          <span className="font-label text-label-sm opacity-90">Progresso</span>
          <span className="font-sans text-headline-md font-semibold">{progressPercent}%</span>
        </div>
      </div>
      <div
        className="mb-sm h-2.5 w-full overflow-hidden rounded-full bg-surface-high"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso da recuperação"
      >
        <div className="h-full rounded-full bg-primary-container" style={{ width: `${progressPercent}%` }} />
      </div>
      <div className="flex justify-between font-label text-label-md text-muted-foreground">
        <span>
          {recoveredCount} de {totalCount} itens recuperados
        </span>
        <span className="font-bold text-primary">{pendingCount} pendentes</span>
      </div>
    </section>
  );
};
