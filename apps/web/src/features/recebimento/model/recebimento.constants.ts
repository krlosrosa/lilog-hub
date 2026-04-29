import type { RecebimentoStatus } from './recebimento.types';

export const STATUS_CONFIG: Record<
  RecebimentoStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  pendente: {
    label: 'Pendente',
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    dot: 'bg-blue-600',
  },
  descarregando: {
    label: 'Descarregando',
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    dot: 'bg-orange-600',
  },
  concluido: {
    label: 'Concluído',
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    dot: 'bg-emerald-600',
  },
  cancelado: {
    label: 'Cancelado',
    bg: 'bg-red-100',
    text: 'text-red-700',
    dot: 'bg-red-600',
  },
};

export const STATUS_FILTER_OPTIONS: Array<{ value: RecebimentoStatus | 'todos'; label: string }> = [
  { value: 'todos', label: 'Todos' },
  { value: 'pendente', label: 'Pendente' },
  { value: 'descarregando', label: 'Descarregando' },
  { value: 'concluido', label: 'Concluído' },
  { value: 'cancelado', label: 'Cancelado' },
];

/** Total exibido no rodapé como referência operacional (mock estático). */
export const RECEBIMENTO_TOTAL_REFERENCIA = 124;
