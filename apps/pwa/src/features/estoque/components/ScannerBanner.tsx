import { Icon } from '@/components/Icon';

export const ScannerBanner = () => {
  return (
    <div
      className="flex items-center gap-md rounded-2xl border border-primary/10 bg-primary/5 p-md"
      role="region"
      aria-label="Leitura rápida por código de barras"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon name="barcode_scanner" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="mb-xs block font-sans text-body-md font-bold text-foreground">Leitura Rápida</span>
        <span className="font-label text-label-md text-muted-foreground">Aponte o scanner para o item</span>
      </div>
      <button
        type="button"
        className="rounded-lg border border-primary/10 bg-card p-2 text-primary shadow-sm transition-all active:scale-95"
        aria-label="Adicionar foto do código (em breve)"
      >
        <Icon name="add_a_photo" />
      </button>
    </div>
  );
};
