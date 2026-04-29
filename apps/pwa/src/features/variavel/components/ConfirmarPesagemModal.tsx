import { useEffect } from 'react';

import { Icon } from '@/components/Icon';

export interface ConfirmarPesagemModalProps {
  open: boolean;
  onClose: () => void;
  pesoTotalLabel?: string;
}

export const ConfirmarPesagemModal = ({
  open,
  onClose,
  pesoTotalLabel = '12.450',
}: ConfirmarPesagemModalProps) => {
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleBackdropClick = () => {
    onClose();
  };

  const handleConfirm = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md">
      <button
        type="button"
        aria-label="Fechar confirmação de pesagem"
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        tabIndex={-1}
        onClick={handleBackdropClick}
      />
      <div
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-primary-container/10 bg-card shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmar-pesagem-titulo"
      >
        <div className="p-xl text-center">
          <div className="mx-auto mb-md flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <Icon name="check_circle" className="text-3xl text-primary" filled />
          </div>
          <h3
            id="confirmar-pesagem-titulo"
            className="mb-xs font-sans text-headline-lg font-bold text-foreground"
          >
            Confirmar Pesagem
          </h3>
          <p className="mb-xl font-sans text-body-md leading-relaxed text-muted-foreground">
            Deseja finalizar a pesagem das caixas e prosseguir com o armazenamento?
          </p>
          <div className="mb-xl rounded-2xl border border-primary-container/10 bg-surface-low p-lg">
            <p className="mb-1 font-label text-label-md font-medium uppercase tracking-widest text-secondary-foreground">
              Peso Total Acumulado
            </p>
            <p className="font-sans text-headline-lg font-black tracking-tight text-primary tabular-nums">
              {pesoTotalLabel} kg
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <button
              type="button"
              className="min-h-btn w-full rounded-lg bg-primary font-sans text-body-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
              aria-label="Confirmar e prosseguir com armazenamento"
              onClick={handleConfirm}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="min-h-btn w-full rounded-lg bg-transparent font-sans text-body-lg font-semibold text-secondary-foreground transition-transform hover:bg-accent active:scale-95"
              aria-label="Cancelar confirmação de pesagem"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
