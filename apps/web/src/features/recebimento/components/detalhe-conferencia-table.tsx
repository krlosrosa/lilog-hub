'use client';

import { useMemo, useState, type ChangeEvent } from 'react';

import { Input } from '@lilo-wms/ui';

import type { DetalheConferenciaRow } from '../model/detalhe-recebimento.types';
import { MaterialIcon } from './material-icon';

type DetalheConferenciaTableProps = {
  rows: DetalheConferenciaRow[];
};

const formatDiferenca = (d: number | null): { text: string; className: string } => {
  if (d === null) {
    return { text: '…', className: 'font-bold text-slate-600' };
  }
  if (d === 0) {
    return { text: '0', className: 'font-bold text-green-600' };
  }
  if (d < 0) {
    return { text: String(d), className: 'font-bold text-red-600' };
  }
  return { text: `+${d}`, className: 'font-bold text-amber-800' };
};

export const DetalheConferenciaTable = ({ rows }: DetalheConferenciaTableProps) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) {
      return rows;
    }
    return rows.filter((r) => `${r.sku} ${r.descricao}`.toLowerCase().includes(q));
  }, [filter, rows]);

  return (
    <div className="overflow-hidden border border-slate-300 bg-white">
      <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-600">
          Lista de conferência (contábil x físico)
        </h3>
        <div className="relative w-full sm:max-w-xs">
          <MaterialIcon
            name="search"
            className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-sm text-slate-400"
            decorative
          />
          <Input
            type="search"
            placeholder="Filtrar SKU ou descrição..."
            value={filter}
            onChange={handleFilterChange}
            className="h-8 w-full border-slate-300 pl-8 text-xs"
            aria-label="Filtrar linhas da conferência"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Conferência contábil versus físico</caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">SKU</th>
              <th className="p-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">Descrição</th>
              <th className="p-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">Lote</th>
              <th className="p-2 text-right text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                Contábil
              </th>
              <th className="p-2 text-right text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                Físico
              </th>
              <th className="p-2 text-right text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                Dif.
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-slate-500">
                  Nenhuma linha encontrada para o filtro atual.
                </td>
              </tr>
            ) : (
              filtered.map((row) => {
                const diff = formatDiferenca(row.diferenca);
                const rowBg = row.highlightFalta ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-slate-50';
                return (
                  <tr key={row.id} className={`h-8 border-b border-slate-100 ${rowBg}`}>
                    <td className="px-2 py-1 font-mono text-[13px]">{row.sku}</td>
                    <td className="px-2 py-1 font-medium text-slate-800">{row.descricao}</td>
                    <td className="px-2 py-1 font-mono text-xs text-slate-700">{row.lote}</td>
                    <td className="px-2 py-1 text-right">{row.contabil}</td>
                    <td className="px-2 py-1 text-right">{row.fisico}</td>
                    <td className={`px-2 py-1 text-right ${diff.className}`}>{diff.text}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
