export interface ItensVariavelSummaryProps {
  total: number;
  progressoPercent: number;
}

export const ItensVariavelSummary = ({ total, progressoPercent }: ItensVariavelSummaryProps) => {
  const clamped = Math.min(100, Math.max(0, progressoPercent));

  return (
    <div className="grid grid-cols-2 gap-sm">
      <div className="flex flex-col gap-xs rounded-lg border border-border bg-card p-md shadow-sm">
        <span className="font-label text-label-md text-muted-foreground">Total Itens</span>
        <span className="font-sans text-headline-md font-bold text-primary">{total}</span>
      </div>
      <div className="flex flex-col gap-xs rounded-lg border border-border bg-card p-md shadow-sm">
        <span className="font-label text-label-md text-muted-foreground">Progresso</span>
        <div className="flex items-center gap-sm">
          <span className="font-sans text-headline-md font-bold text-primary">{clamped}%</span>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-surface-high"
            role="progressbar"
            aria-valuenow={clamped}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progresso da demanda ${clamped} por cento`}
          >
            <div className="h-full rounded-full bg-primary" style={{ width: `${clamped}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
