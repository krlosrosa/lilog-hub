import { Icon } from '@/components/Icon';



import type { ItemAvaria } from '@/features/recebimento/types/types';



export interface ItensAvariaListProps {

  itens: ItemAvaria[];

}



export const ItensAvariaList = ({ itens }: ItensAvariaListProps) => {

  if (itens.length === 0) {

    return null;

  }



  return (

    <section className="space-y-gutter" aria-labelledby="itens-avaria-heading">

      <div className="flex items-center justify-between px-xs">

        <h2 id="itens-avaria-heading" className="font-sans text-headline-md font-semibold text-foreground">

          Itens com Avaria

        </h2>

      </div>



      <div className="overflow-hidden rounded-lg border border-destructive/20 bg-destructive/10">

        <ul className="divide-y divide-border" role="list">

          {itens.map((item) => (

            <li key={item.id} className="flex items-center justify-between px-md py-md">

              <div className="min-w-0 flex-1 space-y-xs pr-sm">

                <p className="font-sans text-body-md font-bold text-foreground">{item.sku}</p>

                <p className="font-sans text-body-md text-muted-foreground">{item.description}</p>

              </div>

              <div className="flex shrink-0 items-center gap-md">

                <div className="text-right">

                  <p className="font-sans text-body-md font-bold text-destructive">{item.damageSummary}</p>

                  <p className="font-label text-label-sm font-semibold uppercase tracking-tighter text-muted-foreground">

                    Total Avariado

                  </p>

                </div>

                <button

                  type="button"

                  className="flex min-h-touch min-w-touch items-center justify-center rounded-full text-destructive/70 transition-colors hover:bg-destructive/10 hover:text-destructive"

                  aria-label={`Remover avaria do item ${item.sku}`}

                >

                  <Icon name="delete" className="text-xl" />

                </button>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </section>

  );

};


