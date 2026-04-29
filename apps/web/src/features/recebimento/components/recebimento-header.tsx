'use client';

import Link from 'next/link';

import { Button } from '@lilo-wms/ui';

import { formatCentroLabel } from '../lib/format-centro';
import { MaterialIcon } from './material-icon';

type RecebimentoHeaderProps = {
  centro: string;
};

export const RecebimentoHeader = ({ centro }: RecebimentoHeaderProps) => {
  const centroLabel = formatCentroLabel(centro);
  const novoRecebimentoHref = `/${centro}/recebimento/novo`;

  return (
    <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h1 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#001736]">
          Gerenciamento de Recebimentos
        </h1>
        <p className="mt-0.5 text-[13px] leading-[18px] text-slate-500">
          Centro: <span className="font-semibold text-slate-700">{centroLabel}</span>
          <span> — Recebimento de depósito</span>
        </p>
      </div>
      <Button
        asChild
        className="h-auto min-h-0 shrink-0 rounded bg-[#002B5B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:bg-[#002B5B]/90 active:opacity-80"
      >
        <Link href={novoRecebimentoHref} aria-label="Abrir cadastro de novo recebimento">
          <MaterialIcon name="add_circle" className="text-[20px]" />
          Registrar chegada
        </Link>
      </Button>
    </div>
  );
};
