import { Icon } from '@/components/Icon';

import type { LoteConferido } from '@/features/recebimento/types/types';

export interface LotesConferidosListProps {
  lotes: LoteConferido[];
}

export const LotesConferidosList = ({ lotes }: LotesConferidosListProps) => {
  const totalUnits = lotes.reduce((acc, l) => acc + l.units, 0);
  const countLabel = `${lotes.length} ${lotes.length === 1 ? 'Lote' : 'Lotes'}`;

  return (
    <section className="space-y-gutter" aria-labelledby="lotes-conferidos-heading">
      <div className="flex items-center justify-between px-xs">
        <h2 id="lotes-conferidos-heading" className="font-sans text-headline-md font-semibold text-foreground">
          Lotes Conferidos
        </h2>
        <span className="rounded-full bg-secondary px-sm py-xs font-label text-label-md font-medium text-secondary-foreground">
          {countLabel}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <ul className="divide-y divide-border" role="list">
          {lotes.map((lote) => (
            <li key={lote.id} className="flex items-center justify-between p-md">
              <div className="flex min-w-0 flex-1 items-center gap-md">
                <div className="flex size-10 shrink-0 items-center justify-center rounded bg-surface-low text-primary">
                  <Icon name="inventory_2" className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-sans text-body-md font-bold text-foreground">{lote.lotCode}</p>
                  <p className="font-label text-label-md text-muted-foreground">{lote.dateTimeLabel}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-md">
                <div className="text-right">
                  <p className="font-sans text-headline-md font-semibold text-primary">{lote.units}</p>
                  <p className="font-label text-label-sm font-semibold uppercase tracking-tighter text-muted-foreground">
                    Unidades
                  </p>
                </div>
                <button
                  type="button"
                  className="flex min-h-touch min-w-touch items-center justify-center rounded-full text-outline transition-colors hover:bg-destructive/10 hover:text-destructive"
                  aria-label={`Remover lote ${lote.lotCode}`}
                >
                  <Icon name="delete" className="text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-border bg-accent p-md">
          <p className="font-sans text-headline-md font-semibold text-accent-foreground">Total Geral</p>
          <div className="text-right">
            <p className="font-sans text-headline-lg font-bold text-primary">{totalUnits}</p>
            <p className="font-label text-label-sm font-semibold uppercase text-accent-foreground">
              Unidades Totais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
