import type { RecuperacaoItemData } from '@/features/recuperacao-avaria/types/types';

export interface ItemAvariaInfoProps {
  data: Pick<
    RecuperacaoItemData,
    'sku' | 'statusBadge' | 'productName' | 'locationLine' | 'caixasAvariadas' | 'unidadesAvariadas'
  >;
}

export const ItemAvariaInfo = ({ data }: ItemAvariaInfoProps) => {
  return (
    <section className="flex flex-col gap-xs" aria-labelledby="recuperacao-item-titulo">
      <div className="flex items-baseline justify-between gap-sm">
        <span className="font-label text-label-md uppercase tracking-wider text-muted-foreground">SKU: {data.sku}</span>
        <span className="shrink-0 rounded-full bg-tertiary-container px-2 py-0.5 font-label text-label-sm text-tertiary-foreground">
          {data.statusBadge}
        </span>
      </div>
      <h2 id="recuperacao-item-titulo" className="font-sans text-headline-lg font-bold text-foreground">
        {data.productName}
      </h2>
      <p className="font-sans text-body-md text-muted-foreground">{data.locationLine}</p>
      <div
        className="mt-sm grid grid-cols-2 gap-md rounded-lg border border-border bg-surface-low p-md"
        aria-label="Quantidades avariadas"
      >
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm uppercase tracking-tight text-muted-foreground">Caixas avariadas</span>
          <span className="font-sans text-headline-md font-bold text-foreground">{data.caixasAvariadas}</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm uppercase tracking-tight text-muted-foreground">Unidades avariadas</span>
          <span className="font-sans text-headline-md font-bold text-foreground">{data.unidadesAvariadas}</span>
        </div>
      </div>
    </section>
  );
};
