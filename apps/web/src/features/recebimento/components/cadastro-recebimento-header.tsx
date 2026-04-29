'use client';

import { Button, cn } from '@lilo-wms/ui';

import { MaterialIcon } from './material-icon';

type CadastroRecebimentoHeaderProps = {
  onCancel: () => void;
};

export const CadastroRecebimentoHeader = ({ onCancel }: CadastroRecebimentoHeaderProps) => {
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <header className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span
          className="material-symbols-outlined text-[#002B5B]"
          style={{ fontVariationSettings: '"FILL" 1' }}
          aria-hidden
        >
          input
        </span>
        <h1 className="text-xl font-semibold tracking-tight text-[#002B5B]">Novo Recebimento</h1>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={handleCancelClick}
        className={cn('h-8 min-h-0 gap-1 rounded-lg border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100')}
        aria-label="Cancelar e voltar"
      >
        <MaterialIcon name="cancel" className="text-[18px]" />
        Cancelar
      </Button>
    </header>
  );
};
