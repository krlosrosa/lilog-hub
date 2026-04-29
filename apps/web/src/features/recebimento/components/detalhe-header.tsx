'use client';

import Link from 'next/link';

import { Button, cn } from '@lilo-wms/ui';

import type { RecebimentoStatus } from '../model/recebimento.types';
import { MaterialIcon } from './material-icon';

type DetalheHeaderProps = {
  centro: string;
  recebimentoId: string;
  statusLabel: string;
  status: RecebimentoStatus;
  placa: string;
  horaInicio: string;
  docaLabel: string;
  onFinalizarConferenciaClick: () => void;
};

const statusIconName = (status: RecebimentoStatus): string => {
  if (status === 'descarregando') {
    return 'sync';
  }
  if (status === 'concluido') {
    return 'check_circle';
  }
  if (status === 'cancelado') {
    return 'cancel';
  }
  return 'schedule';
};

export const DetalheHeader = ({
  centro,
  recebimentoId,
  statusLabel,
  status,
  placa,
  horaInicio,
  docaLabel,
  onFinalizarConferenciaClick,
}: DetalheHeaderProps) => {
  const iconName = statusIconName(status);

  const handleImprimirClick = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleFinalizarClick = () => {
    onFinalizarConferenciaClick();
  };

  return (
    <>
      <nav className="mb-3 flex items-center gap-2 text-sm text-slate-600" aria-label="Caminho de navegação">
        <Link
          href={`/${centro}/recebimento`}
          className="flex items-center gap-1 font-medium text-slate-600 transition-colors hover:text-[#001736]"
          aria-label="Voltar para a lista de recebimentos"
        >
          <MaterialIcon name="arrow_back" className="text-base" />
          Recebimentos
        </Link>
        <MaterialIcon name="chevron_right" className="text-sm text-slate-400" decorative />
        <span className="font-semibold text-[#001736]">{recebimentoId}</span>
      </nav>

      <section className="flex flex-wrap items-center justify-between gap-4 border border-slate-300 bg-white p-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-[#001736]">{recebimentoId}</h1>
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase',
                status === 'descarregando' && 'bg-[#002B5B] text-[#7594CA]',
                status === 'pendente' && 'bg-slate-200 text-slate-700',
                status === 'concluido' && 'bg-emerald-100 text-emerald-800',
                status === 'cancelado' && 'bg-red-100 text-red-800',
              )}
            >
              <span
                className="material-symbols-outlined text-xs"
                style={{ fontVariationSettings: '"FILL" 1' }}
                aria-hidden
              >
                {iconName}
              </span>
              {statusLabel}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MaterialIcon name="local_shipping" className="text-sm" />
              <span className="font-mono text-[13px] font-medium uppercase">Placa: {placa}</span>
            </div>
            <div className="flex items-center gap-1">
              <MaterialIcon name="schedule" className="text-sm" />
              <span>Início: {horaInicio}</span>
            </div>
            <div className="flex items-center gap-1">
              <MaterialIcon name="dock" className="text-sm" />
              <span>Doca: {docaLabel}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 border-slate-300 px-4 py-2 text-sm font-semibold text-[#001736] hover:bg-slate-50"
            onClick={handleImprimirClick}
          >
            <MaterialIcon name="print" className="text-[18px]" />
            Imprimir manifesto
          </Button>
          <Button
            type="button"
            className="h-auto gap-2 bg-[#002B5B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#001736]"
            onClick={handleFinalizarClick}
          >
            <MaterialIcon name="check_circle" className="text-[18px] text-white" />
            Finalizar conferência
          </Button>
        </div>
      </section>
    </>
  );
};
