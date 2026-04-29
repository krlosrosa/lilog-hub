'use client';

import { useRouter } from 'next/navigation';
import type { KeyboardEvent } from 'react';

import { Card, CardContent, cn } from '@lilo-wms/ui';

import { formatHoraChegada } from '../lib/format-time';
import { formatWeightKg } from '../lib/format-weight';
import type { RecebimentoItem } from '../model/recebimento.types';
import { MaterialIcon } from './material-icon';
import { StatusBadge } from './status-badge';

type RecebimentoMobileListProps = {
  items: RecebimentoItem[];
  centro: string;
  className?: string;
};

export const RecebimentoMobileList = ({ items, centro, className }: RecebimentoMobileListProps) => {
  const router = useRouter();

  const handleNavigateToDetalhe = (recebimentoId: string) => {
    router.push(`/${centro}/recebimento/${encodeURIComponent(recebimentoId)}`);
  };

  const handleCardKeyDown =
    (recebimentoId: string) =>
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      handleNavigateToDetalhe(recebimentoId);
    };
  if (items.length === 0) {
    return (
      <div
        className={cn(
          'rounded-lg border border-dashed border-slate-200 p-4 text-center text-sm text-slate-500 lg:hidden',
          className,
        )}
      >
        Nenhum recebimento encontrado com os filtros atuais.
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-3 lg:hidden', className)}>
      {items.map((item) => (
        <Card key={item.id} className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[13px] font-medium text-[#001736]">{item.id}</p>
                <p className="text-[13px] leading-[18px] text-slate-600">{item.transportadora}</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-[13px]">
              <div>
                <dt className="text-[10px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-500">Empresa</dt>
                <dd className="font-semibold text-slate-700">{item.empresa}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-500">Placa</dt>
                <dd className="text-sm font-bold leading-5 tracking-normal">{item.placa}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-500">Peso</dt>
                <dd className="font-mono text-[13px]">{formatWeightKg(item.pesoKg)}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-500">Chegada</dt>
                <dd className="text-[13px] text-slate-500">{formatHoraChegada(item.horaChegada)}</dd>
              </div>
            </dl>
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="inline-flex text-slate-400 transition-colors hover:text-[#001736]"
                aria-label={`Ações para recebimento ${item.id}`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                <MaterialIcon name="more_vert" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
