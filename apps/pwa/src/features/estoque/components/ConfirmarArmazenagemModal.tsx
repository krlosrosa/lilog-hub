import { Icon } from '@/components/Icon';

import type { ArmazenagemItem } from '@/features/estoque/types/types';

export interface ConfirmarArmazenagemModalProps {
  item: ArmazenagemItem | null;
  onClose: () => void;
}

export const ConfirmarArmazenagemModal = ({ item, onClose }: ConfirmarArmazenagemModalProps) => {
  if (!item) {
    return null;
  }

  const handleConfirmar = () => {
    onClose();
  };

  const handleCancelar = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-gutter"
      role="presentation"
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-xl bg-card shadow-2xl animate-in fade-in zoom-in duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmar-armazenagem-titulo"
        aria-describedby="confirmar-armazenagem-descricao"
      >
        <div className="h-2 w-full bg-primary" aria-hidden="true" />
        <div className="flex flex-col items-center p-lg text-center">
          <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-primary-container">
            <Icon name="move_to_inbox" className="text-3xl text-primary-foreground" />
          </div>
          <h2 id="confirmar-armazenagem-titulo" className="mb-sm font-sans text-headline-lg text-foreground">
            Confirmar Armazenagem?
          </h2>
          <p
            id="confirmar-armazenagem-descricao"
            className="mb-xl px-sm font-sans text-body-lg text-muted-foreground"
          >
            Confirmar a colocação de{' '}
            <span className="font-bold text-primary">{item.sku}</span> no endereço{' '}
            <span className="font-bold text-foreground">{item.enderecoAlvo}</span>?
          </p>
          <div className="flex w-full flex-col gap-gutter">
            <button
              type="button"
              className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary font-sans text-headline-md text-primary-foreground shadow-md transition-all active:scale-95"
              aria-label="Confirmar armazenagem e atualizar estoque"
              onClick={handleConfirmar}
            >
              <Icon name="check_circle" />
              Confirmar
            </button>
            <button
              type="button"
              className="flex min-h-btn w-full items-center justify-center rounded-lg border border-border bg-surface-low font-sans text-headline-md text-muted-foreground transition-all active:scale-95"
              aria-label="Cancelar confirmação de armazenagem"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
          </div>
        </div>
        <div className="bg-surface px-lg py-3 text-center">
          <p className="flex items-center justify-center gap-xs font-label text-label-sm text-muted-foreground">
            <Icon name="info" className="text-sm" />
            ESTA AÇÃO ATUALIZARÁ O ESTOQUE EM TEMPO REAL
          </p>
        </div>
      </div>
    </div>
  );
};
