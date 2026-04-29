import { Icon } from '@/components/Icon';

export const RecuperacaoInputSection = () => {
  const handleFinalize = () => {
    /* tela estática — sem ação */
  };

  const handleAddPhoto = () => {
    /* tela estática — sem ação */
  };

  return (
    <>
      <section className="flex flex-col gap-md" aria-labelledby="entrada-recuperacao-titulo">
        <h3 id="entrada-recuperacao-titulo" className="flex items-center gap-sm font-sans text-headline-md font-semibold text-foreground">
          <Icon name="inventory" className="text-xl text-primary" />
          Entrada de Recuperação
        </h3>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label htmlFor="caixas-recuperadas" className="ml-1 font-label text-label-md text-muted-foreground">
              Caixas Recuperadas
            </label>
            <input
              id="caixas-recuperadas"
              type="number"
              placeholder="0"
              readOnly
              tabIndex={0}
              className="min-h-btn w-full rounded-lg border border-border bg-card px-md font-sans text-headline-md text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Caixas recuperadas"
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label htmlFor="unidades-recuperadas" className="ml-1 font-label text-label-md text-muted-foreground">
              Unidades Recuperadas
            </label>
            <input
              id="unidades-recuperadas"
              type="number"
              placeholder="0"
              readOnly
              tabIndex={0}
              className="min-h-btn w-full rounded-lg border border-border bg-card px-md font-sans text-headline-md text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Unidades recuperadas"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-md" aria-labelledby="obs-recuperacao-titulo">
        <span id="obs-recuperacao-titulo" className="sr-only">
          Observações e fotos da recuperação
        </span>
        <div className="flex flex-col gap-xs">
          <label htmlFor="obs-recuperacao" className="ml-1 font-label text-label-md text-muted-foreground">
            Observações da Recuperação
          </label>
          <textarea
            id="obs-recuperacao"
            rows={4}
            readOnly
            placeholder="Descreva a condição dos itens recuperados..."
            className="w-full resize-none rounded-lg border border-border bg-card p-md font-sans text-body-md text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Observações da recuperação"
          />
        </div>
        <div className="flex flex-col gap-xs">
          <span className="ml-1 font-label text-label-md text-muted-foreground">Upload de Fotos</span>
          <div className="grid grid-cols-3 gap-sm">
            <button
              type="button"
              onClick={handleAddPhoto}
              className="flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface-low text-muted-foreground transition-colors hover:bg-surface active:scale-95"
              aria-label="Adicionar foto da recuperação"
            >
              <Icon name="add_a_photo" className="text-3xl" />
              <span className="mt-xs font-label text-label-sm font-bold uppercase">Adicionar</span>
            </button>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-surface-high" aria-hidden>
              <Icon name="image" className="text-2xl text-outline" />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-surface-high" aria-hidden>
              <Icon name="image" className="text-2xl text-outline" />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-lg">
        <button
          type="button"
          onClick={handleFinalize}
          className="min-h-btn w-full rounded-lg bg-primary font-sans text-headline-md font-semibold text-primary-foreground shadow-lg transition-transform duration-150 active:scale-95"
          aria-label="Finalizar recuperação"
        >
          Finalizar Recuperação
        </button>
      </div>
    </>
  );
};
