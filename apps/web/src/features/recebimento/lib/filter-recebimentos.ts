import type { RecebimentoItem, RecebimentoStatus } from '../model/recebimento.types';

type FilterInput = {
  items: RecebimentoItem[];
  search: string;
  statusFilter: RecebimentoStatus | 'todos';
};

export const filterRecebimentos = ({ items, search, statusFilter }: FilterInput): RecebimentoItem[] => {
  const query = search.trim().toLowerCase();

  return items.filter((row) => {
    if (statusFilter !== 'todos' && row.status !== statusFilter) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [row.id, row.empresa, row.placa, row.transportadora]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
};
