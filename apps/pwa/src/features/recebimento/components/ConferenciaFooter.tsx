import { Icon } from '@/components/Icon';

export const ConferenciaFooter = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex gap-md border-t border-border bg-card/95 p-md backdrop-blur-md">
      <button
        type="button"
        className="h-14 min-h-btn flex-1 rounded-lg bg-surface-high font-label text-label-md font-bold uppercase tracking-wider text-muted-foreground transition-transform active:scale-95"
        aria-label="Pausar conferência"
      >
        Pausar
      </button>
      <button
        type="button"
        className="flex h-14 min-h-btn flex-[2] items-center justify-center gap-sm rounded-lg bg-primary font-label text-label-md font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-95"
        aria-label="Finalizar carga"
      >
        <Icon name="done_all" className="text-2xl font-bold text-primary-foreground" />
        Finalizar Carga
      </button>
    </footer>
  );
};
