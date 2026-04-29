export interface PesagemSkuCardProps {
  sku: string;
  produto: string;
  lote: string;
  solicitado: string;
  badgeLabel?: string;
}

export const PesagemSkuCard = ({
  sku,
  produto,
  lote,
  solicitado,
  badgeLabel = 'Peso Variável',
}: PesagemSkuCardProps) => {
  return (
    <section className="flex flex-col gap-sm rounded-lg border border-border bg-card p-md shadow-sm">
      <div className="flex items-start justify-between gap-sm">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm font-semibold uppercase tracking-wider text-secondary-foreground">
            SKU: {sku}
          </span>
          <h2 className="mt-1 font-sans text-headline-md font-semibold text-foreground">{produto}</h2>
        </div>
        <span className="rounded-full bg-accent px-sm py-xs font-label text-label-md text-accent-foreground">
          {badgeLabel}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-md border-t border-surface-low pt-md">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm text-muted-foreground">Lote</span>
          <span className="font-sans text-body-md font-semibold text-foreground">{lote}</span>
        </div>
        <div className="flex flex-col items-end gap-xs text-right">
          <span className="font-label text-label-sm text-muted-foreground">Solicitado</span>
          <span className="font-sans text-body-md font-bold text-primary">{solicitado}</span>
        </div>
      </div>
    </section>
  );
};
