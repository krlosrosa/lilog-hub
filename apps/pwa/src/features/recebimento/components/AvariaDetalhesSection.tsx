import { Icon } from '@/components/Icon';

const selectFieldClass =
  'min-h-btn w-full rounded-lg border border-outline-variant bg-surface px-md font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring';

const numberInputClass =
  'min-h-btn w-full rounded-lg border border-outline-variant bg-surface px-md text-center font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring';

export const AvariaDetalhesSection = () => {
  return (
    <section aria-labelledby="heading-avaria-detalhes" className="flex flex-col gap-gutter">
      <div className="flex items-center gap-sm px-xs">
        <Icon name="inventory_2" className="text-xl text-primary" />
        <h2 id="heading-avaria-detalhes" className="font-sans text-headline-md text-foreground">
          Detalhes do Item
        </h2>
      </div>
      <div className="flex flex-col gap-md rounded-lg border border-outline-variant bg-card p-md shadow-sm">
        <div className="flex flex-col gap-sm">
          <label htmlFor="avaria-lote" className="ml-xs font-label text-label-md text-muted-foreground">
            Lote
          </label>
          <select
            id="avaria-lote"
            className={selectFieldClass}
            defaultValue=""
            aria-label="Selecionar lote"
          >
            <option value="">Selecione o lote</option>
            <option value="l102030">LT-102030 (Exp. 12/24)</option>
            <option value="l102031">LT-102031 (Exp. 02/25)</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-sm">
            <label htmlFor="avaria-qtd-caixas" className="ml-xs font-label text-label-md text-muted-foreground">
              Qtd. Caixas
            </label>
            <input
              id="avaria-qtd-caixas"
              type="number"
              className={numberInputClass}
              defaultValue={0}
              aria-label="Quantidade de caixas avariadas"
            />
          </div>
          <div className="flex flex-col gap-sm">
            <label htmlFor="avaria-qtd-unidades" className="ml-xs font-label text-label-md text-muted-foreground">
              Qtd. Unidades
            </label>
            <input
              id="avaria-qtd-unidades"
              type="number"
              className={numberInputClass}
              defaultValue={0}
              aria-label="Quantidade de unidades avariadas"
            />
          </div>
        </div>
        <div className="flex flex-col gap-sm">
          <label htmlFor="avaria-peso" className="ml-xs font-label text-label-md text-muted-foreground">
            Peso (kg)
          </label>
          <div className="relative">
            <input
              id="avaria-peso"
              type="number"
              step="0.01"
              placeholder="0.00"
              className="min-h-btn w-full rounded-lg border border-outline-variant bg-surface px-md pr-12 font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
              aria-label="Peso em quilogramas"
            />
            <span className="pointer-events-none absolute end-md top-1/2 -translate-y-1/2 font-label text-label-md text-muted-foreground">
              kg
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
