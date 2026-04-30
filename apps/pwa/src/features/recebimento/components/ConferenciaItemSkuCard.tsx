import { Icon } from '@/components/Icon';



import type { ConferenciaItemDetail } from '@/features/recebimento/types/types';



export interface ConferenciaItemSkuCardProps {

  detail: ConferenciaItemDetail;

}



export const ConferenciaItemSkuCard = ({ detail }: ConferenciaItemSkuCardProps) => {

  return (

    <section

      className="space-y-md rounded-lg border border-border bg-card p-md shadow-sm"

      aria-labelledby="conferencia-item-sku-heading"

    >

      <h2 id="conferencia-item-sku-heading" className="sr-only">

        Dados do item

      </h2>



      <div className="space-y-xs">

        <label

          htmlFor="conferencia-item-sku-input"

          className="font-label text-label-md font-medium uppercase tracking-wider text-muted-foreground"

        >

          SKU do Item

        </label>

        <div className="relative">

          <input

            id="conferencia-item-sku-input"

            readOnly

            value={detail.sku}

            className="min-h-btn w-full rounded border-0 bg-surface-low px-md font-sans text-headline-md font-semibold text-primary outline-none ring-primary focus-visible:ring-2"

            aria-readonly="true"

          />

          <span

            className="pointer-events-none absolute right-md top-1/2 flex -translate-y-1/2 text-muted-foreground"

            aria-hidden="true"

          >

            <Icon name="edit" className="text-xl" />

          </span>

        </div>

      </div>



      <div className="space-y-xs">

        <label

          htmlFor="conferencia-item-desc"

          className="font-label text-label-md font-medium uppercase tracking-wider text-muted-foreground"

        >

          Descrição

        </label>

        <textarea

          id="conferencia-item-desc"

          readOnly

          rows={2}

          value={detail.description}

          className="w-full resize-none rounded border-0 bg-surface-low px-md py-sm font-sans text-body-lg text-foreground outline-none ring-primary focus-visible:ring-2"

          aria-readonly="true"

        />

      </div>



      <div className="flex items-center gap-2.5">

        <Icon name="layers" className="text-lg text-outline" />

        <span className="font-label text-label-md font-bold uppercase tracking-tight text-muted-foreground">

          Lote:{' '}

          <span className="ml-1 font-sans font-extrabold text-foreground">{detail.lote}</span>

        </span>

      </div>

    </section>

  );

};


