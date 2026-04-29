import { Icon } from '@/components/Icon';

export const AvariaConfirmFooter = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-card p-md pb-safe shadow-lg">
      <div className="mx-auto max-w-md">
        <button
          type="button"
          className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary font-sans text-body-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
          aria-label="Confirmar registro de avaria"
        >
          <Icon name="check_circle" className="text-2xl text-primary-foreground" />
          Confirmar Registro
        </button>
      </div>
    </footer>
  );
};
