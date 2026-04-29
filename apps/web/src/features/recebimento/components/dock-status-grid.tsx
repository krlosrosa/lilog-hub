'use client';

import { cn } from '@lilo-wms/ui';

import type { DockItem } from '../model/recebimento.types';
import { MaterialIcon } from './material-icon';

type DockStatusGridProps = {
  items: DockItem[];
  className?: string;
};

export const DockStatusGrid = ({ items, className }: DockStatusGridProps) => {
  return (
    <section
      className={cn(
        'w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm',
        className,
      )}
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-base font-semibold leading-6 tracking-tight text-[#001736]">Docas em Operação</h2>
          <p className="mt-1 text-xs leading-4 text-slate-500">Monitoramento em tempo real da ocupação das docas de descarga</p>
        </div>
        <div className="flex flex-wrap gap-6" role="list" aria-label="Legenda de status das docas">
          <div className="flex items-center gap-2" role="listitem">
            <div className="size-3 shrink-0 rounded-full bg-emerald-500" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Livre</span>
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <div className="size-3 shrink-0 rounded-full bg-orange-500" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Ocupada</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" role="list" aria-label="Status por doca">
        {items.map((dock) => {
          const isOcupada = dock.status === 'ocupada';
          return (
            <div
              key={dock.id}
              role="listitem"
              className={cn(
                'rounded border-l-4 bg-slate-50 p-4 shadow-sm transition-shadow hover:shadow-md',
                isOcupada ? 'border-orange-500' : 'border-emerald-500',
              )}
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{dock.nome}</span>
                <MaterialIcon
                  name={isOcupada ? 'local_shipping' : 'check_circle'}
                  className={cn('text-sm', isOcupada ? 'text-orange-500' : 'text-emerald-500')}
                />
              </div>
              {isOcupada && dock.placa ? (
                <div className="flex flex-col gap-2">
                  <span className="w-fit rounded bg-orange-100 px-2 py-1 text-[13px] font-bold text-[#001736]">{dock.placa}</span>
                  <span className="text-[10px] font-medium text-orange-700">EM DESCARGA</span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-bold text-emerald-700">DISPONÍVEL</span>
                  <span className="text-[10px] text-slate-400">Aguardando veículo</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
