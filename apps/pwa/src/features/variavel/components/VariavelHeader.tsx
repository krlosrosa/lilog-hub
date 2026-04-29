import { Icon } from '@/components/Icon';

export const VariavelHeader = () => {
  const handleMenuPress = () => {
    /* tela estática — sem navegação */
  };

  const handleFilterPress = () => {
    /* tela estática — sem ação */
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-card px-margin-mobile py-3 shadow-sm">
        <div className="flex items-center gap-md">
          <button
            type="button"
            onClick={handleMenuPress}
            className="rounded-full p-2 text-primary transition-colors duration-150 hover:bg-accent active:scale-95"
            aria-label="Abrir menu"
          >
            <Icon name="menu" className="text-xl" />
          </button>
          <h1 className="font-sans text-lg font-semibold text-primary">WMS Logística</h1>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-surface-lowest bg-primary-container text-sm font-bold text-primary shadow-sm"
          aria-hidden
        >
          JD
        </div>
      </header>

      <section className="flex flex-col gap-sm border-b border-border bg-background px-margin-mobile pb-md pt-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-label text-label-md font-medium uppercase tracking-wider text-primary">
              Operação
            </span>
            <h2 className="font-sans text-headline-lg text-foreground">Demandas Pendentes</h2>
          </div>
          <button
            type="button"
            onClick={handleFilterPress}
            className="rounded-lg border border-border bg-card p-sm text-muted-foreground shadow-sm transition-transform active:scale-95"
            aria-label="Filtrar demandas"
          >
            <Icon name="filter_list" className="text-xl" />
          </button>
        </div>
        <p className="font-sans text-body-md text-muted-foreground">
          Gerenciamento de separação por peso variável (kg/un).
        </p>
      </section>
    </>
  );
};
