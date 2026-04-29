'use client';

import {
  useEffect,
  useId,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import { Button, cn } from '@lilo-wms/ui';

import { MaterialIcon } from './material-icon';

type FinalizarConferenciaModalProps = {
  open: boolean;
  /** Quando true, explica envio ao Depósito / unidade produtora */
  requerFluxoDeposito: boolean;
  temDivergencia: boolean;
  temAvaria: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const FinalizarConferenciaModal = ({
  open,
  requerFluxoDeposito,
  temDivergencia,
  temAvaria,
  onClose,
  onConfirm,
}: FinalizarConferenciaModalProps) => {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }
    panelRef.current?.focus();
  }, [open]);

  if (!open) {
    return null;
  }

  const handleOverlayClick = () => {
    onClose();
  };

  const handleOverlayKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    event.preventDefault();
    onClose();
  };

  const handlePanelClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleConfirmClick = () => {
    onConfirm();
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  const textoPendencias = (() => {
    if (temDivergencia && temAvaria) {
      return 'Há divergência na conferência e avarias registradas neste recebimento.';
    }
    if (temDivergencia) {
      return 'Há divergência na conferência neste recebimento.';
    }
    return 'Há avarias registradas neste recebimento.';
  })();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
        aria-label="Fechar modal"
        onClick={handleOverlayClick}
        onKeyDown={handleOverlayKeyDown}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        tabIndex={-1}
        className="relative w-full max-w-lg rounded-lg border border-slate-200 bg-white p-5 shadow-xl outline-none"
        onClick={handlePanelClick}
      >
        <div className="flex gap-3">
          <div
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full',
              requerFluxoDeposito ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-[#001736]',
            )}
            aria-hidden
          >
            <MaterialIcon
              name={requerFluxoDeposito ? 'warning' : 'help'}
              className={cn('text-2xl', requerFluxoDeposito ? 'text-amber-800' : 'text-[#001736]')}
            />
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            <h2 id={titleId} className="text-lg font-semibold text-[#001736]">
              Finalizar conferência
            </h2>
            {requerFluxoDeposito ? (
              <div id={descId} className="space-y-3 text-sm leading-relaxed text-slate-700">
                <p>{textoPendencias}</p>
                <p>
                  Ao confirmar, as pendências serão{' '}
                  <strong>encaminhadas ao Depósito</strong> para tratativa junto à{' '}
                  <strong>unidade produtora</strong>, conforme as regras de divergência e avaria.
                </p>
                <p className="text-slate-600">
                  Deseja confirmar a finalização da conferência com esse encaminhamento?
                </p>
              </div>
            ) : (
              <p id={descId} className="text-sm leading-relaxed text-slate-700">
                Não há divergências nem avarias pendentes no painel. Deseja confirmar a finalização da conferência?
              </p>
            )}
            <div className="flex flex-wrap justify-end gap-2 pt-1">
              <Button
                type="button"
                variant="outline"
                className="border-slate-300 text-slate-800 hover:bg-slate-50"
                onClick={handleCancelClick}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                className="bg-[#002B5B] text-white hover:bg-[#001736]"
                onClick={handleConfirmClick}
              >
                Confirmar finalização
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
