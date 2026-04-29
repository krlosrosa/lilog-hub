'use client';

import type { ChangeEvent } from 'react';

import { Button, cn, Input, Label } from '@lilo-wms/ui';

import { STATUS_FILTER_OPTIONS } from '../model/recebimento.constants';
import type { RecebimentoStatus } from '../model/recebimento.types';
import { MaterialIcon } from './material-icon';

type RecebimentoFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: RecebimentoStatus | 'todos';
  onStatusFilterChange: (value: RecebimentoStatus | 'todos') => void;
};

const FILTER_DATE_LABEL = '24 Out, 2023';

export const RecebimentoFilters = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: RecebimentoFiltersProps) => {
  const searchId = 'recebimento-busca';

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleMaisFiltros = () => {
    // Mock estático: painel de filtros avançados no futuro
  };

  const handleExportar = () => {
    // Mock estático: exportação no futuro
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-4">
        <div className="relative w-72 max-w-full shrink-0">
          <Label htmlFor={searchId} className="sr-only">
            Buscar por ID, placa ou transportadora
          </Label>
          <MaterialIcon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 z-[1] -translate-y-1/2 text-slate-400"
          />
          <Input
            id={searchId}
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Buscar ID, Placa ou Transportadora…"
            className="h-auto min-h-0 rounded border-slate-200 py-2 pl-10 pr-4 text-xs focus-visible:ring-[#002B5B]"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por status">
          {STATUS_FILTER_OPTIONS.map((opt) => {
            const isActive = statusFilter === opt.value;
            return (
              <Button
                key={opt.value}
                type="button"
                size="sm"
                variant={isActive ? 'default' : 'secondary'}
                className={cn(
                  'h-auto min-h-0 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase leading-none tracking-wide',
                  isActive && 'bg-[#002B5B] text-white hover:bg-[#002B5B]/90',
                  !isActive && 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                )}
                onClick={() => onStatusFilterChange(opt.value)}
                aria-pressed={isActive}
              >
                {opt.label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto">
        <div
          className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-1.5"
          role="status"
        >
          <MaterialIcon name="event" className="text-slate-500" />
          <span className="text-xs text-slate-700">{FILTER_DATE_LABEL}</span>
        </div>
        <Button
          type="button"
          variant="outline"
          className="h-auto min-h-0 rounded border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
          onClick={handleMaisFiltros}
          aria-label="Mais opções de filtro"
        >
          <MaterialIcon name="filter_list" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-auto min-h-0 rounded border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
          onClick={handleExportar}
          aria-label="Exportar resultados"
        >
          <MaterialIcon name="download" />
        </Button>
      </div>
    </div>
  );
};
