'use client';

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, type KeyboardEvent, type MouseEvent } from 'react';

import { cn } from '@lilo-wms/ui';

import { RECEBIMENTO_TOTAL_REFERENCIA } from '../model/recebimento.constants';
import type { RecebimentoItem } from '../model/recebimento.types';
import { formatHoraChegada } from '../lib/format-time';
import { formatWeightKg } from '../lib/format-weight';
import { MaterialIcon } from './material-icon';
import { StatusBadge } from './status-badge';

const PAGE_SIZE = 6;

type RecebimentoTableProps = {
  data: RecebimentoItem[];
  centro: string;
  pageIndex: number;
  onPageIndexChange: (index: number) => void;
  className?: string;
};

export const RecebimentoTable = ({
  data,
  centro,
  pageIndex,
  onPageIndexChange,
  className,
}: RecebimentoTableProps) => {
  const router = useRouter();

  const handleNavigateToDetalhe = (recebimentoId: string) => {
    router.push(`/${centro}/recebimento/${encodeURIComponent(recebimentoId)}`);
  };

  const handleRowKeyDown =
    (recebimentoId: string) =>
    (event: KeyboardEvent<HTMLTableRowElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      handleNavigateToDetalhe(recebimentoId);
    };

  const columns = useMemo<ColumnDef<RecebimentoItem>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID RECEBIMENTO',
        cell: ({ getValue }) => (
          <span className="font-mono text-sm font-medium leading-5 text-[#001736]">{String(getValue())}</span>
        ),
      },
      {
        accessorKey: 'empresa',
        header: 'EMPRESA',
        cell: ({ getValue }) => (
          <span className="text-sm font-semibold leading-5 text-slate-700">{String(getValue())}</span>
        ),
      },
      {
        accessorKey: 'placa',
        header: 'PLACA',
        cell: ({ getValue }) => (
          <span className="text-sm font-bold leading-5 tracking-wide">{String(getValue())}</span>
        ),
      },
      {
        accessorKey: 'transportadora',
        header: 'TRANSPORTADORA',
        cell: ({ getValue }) => <span className="text-sm leading-5 text-slate-800">{String(getValue())}</span>,
      },
      {
        accessorKey: 'pesoKg',
        header: 'PESO',
        cell: ({ getValue }) => (
          <span className="font-mono text-sm font-medium leading-5 text-slate-800">
            {formatWeightKg(Number(getValue()))}
          </span>
        ),
      },
      {
        accessorKey: 'status',
        header: 'STATUS',
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: 'horaChegada',
        header: 'HORA CHEGADA',
        cell: ({ getValue }) => (
          <span className="text-sm leading-5 text-slate-500">{formatHoraChegada(String(getValue()))}</span>
        ),
      },
      {
        id: 'acoes',
        header: 'AÇÕES',
        cell: ({ row }) => {
          const id = row.original.id;
          const handleAcoesClick = (event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
          };
          const handleAcoesKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
            event.stopPropagation();
          };
          return (
            <button
              type="button"
              className="inline-flex text-slate-400 transition-colors hover:text-[#001736]"
              aria-label={`Ações para recebimento ${id}`}
              onClick={handleAcoesClick}
              onKeyDown={handleAcoesKeyDown}
            >
              <MaterialIcon name="more_vert" />
            </button>
          );
        },
        enableSorting: false,
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize: PAGE_SIZE } },
    onPaginationChange: (updater) => {
      const current = { pageIndex, pageSize: PAGE_SIZE };
      const next = typeof updater === 'function' ? updater(current) : updater;
      onPageIndexChange(next.pageIndex);
    },
  });

  useEffect(() => {
    const maxPage = Math.max(0, Math.ceil(data.length / PAGE_SIZE) - 1);
    if (pageIndex > maxPage) {
      onPageIndexChange(maxPage);
    }
  }, [data.length, onPageIndexChange, pageIndex]);

  const pageCount = table.getPageCount();
  const rowsOnPage = table.getRowModel().rows.length;

  return (
    <div className={cn('hidden overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:block', className)}>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <caption className="sr-only">Lista de recebimentos do centro</caption>
          <thead className="sticky top-0 z-10 border-b border-slate-200 bg-slate-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-3 py-1.5 text-left text-xs font-bold uppercase leading-4 tracking-[0.05em] text-slate-500"
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-3 py-8 text-center text-sm text-slate-500">
                  Nenhum recebimento encontrado com os filtros atuais.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row, index) => {
                const recebimentoId = row.original.id;
                const handleRowClick = () => {
                  handleNavigateToDetalhe(recebimentoId);
                };
                return (
                <tr
                  key={row.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Abrir detalhes do recebimento ${recebimentoId}`}
                  className={cn(
                    'cursor-pointer transition-colors hover:bg-slate-50',
                    index % 2 === 1 && 'bg-slate-50/50',
                  )}
                  onClick={handleRowClick}
                  onKeyDown={handleRowKeyDown(recebimentoId)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3 py-1.5 align-middle">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Mostrando <span className="font-bold text-slate-700">{rowsOnPage}</span> de{' '}
          <span className="font-bold text-slate-700">{RECEBIMENTO_TOTAL_REFERENCIA}</span> resultados
        </p>
        <div className="flex flex-wrap items-center justify-end gap-1">
          <button
            type="button"
            className="rounded border border-slate-200 p-0.5 text-slate-400 transition-colors hover:bg-white hover:text-[#001736] disabled:opacity-40"
            onClick={() => onPageIndexChange(pageIndex - 1)}
            disabled={!table.getCanPreviousPage()}
            aria-label="Página anterior"
          >
            <MaterialIcon name="chevron_left" className="text-[18px]" />
          </button>
          {Array.from({ length: pageCount }, (_, i) => i).map((i) => {
            const isActive = pageIndex === i;
            return (
              <button
                key={i}
                type="button"
                className={cn(
                  'min-h-7 rounded px-2.5 py-0.5 text-xs font-bold leading-none transition-colors',
                  isActive
                    ? 'bg-[#002B5B] text-white'
                    : 'text-slate-600 hover:bg-white',
                )}
                onClick={() => onPageIndexChange(i)}
                aria-label={`Ir para página ${i + 1}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            type="button"
            className="rounded border border-slate-200 p-0.5 text-slate-400 transition-colors hover:bg-white hover:text-[#001736] disabled:opacity-40"
            onClick={() => onPageIndexChange(pageIndex + 1)}
            disabled={!table.getCanNextPage()}
            aria-label="Próxima página"
          >
            <MaterialIcon name="chevron_right" className="text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
