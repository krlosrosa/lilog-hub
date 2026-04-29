import { Icon } from '@/components/Icon';

export const ConferenciaHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card/95 px-2 shadow-sm backdrop-blur-md">
      <div className="flex items-center">
        <button
          type="button"
          className="flex min-h-btn min-w-touch items-center justify-center rounded-full p-3 text-primary transition-colors duration-150 active:scale-95 active:bg-surface-high"
          aria-label="Abrir menu"
        >
          <Icon name="menu" className="text-2xl" />
        </button>
        <h1 className="ml-xs font-sans text-body-lg font-bold tracking-tight text-primary">
          Conferência
        </h1>
      </div>
      <button
        type="button"
        className="flex min-h-btn min-w-touch items-center justify-center rounded-full p-3 text-primary transition-colors duration-150 active:scale-95 active:bg-surface-high"
        aria-label="Abrir leitor de código de barras"
      >
        <Icon name="barcode_scanner" className="text-2xl" />
      </button>
    </header>
  );
};
