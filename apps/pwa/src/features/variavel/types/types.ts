export type VariavelStatus = 'pendente' | 'em_andamento';

export interface DemandaVariavel {
  id: string;
  date: string;
  status: VariavelStatus;
  caixas: number;
  totalItems: number;
}

export type ItemVariavelStatus = 'pendente' | 'em_pesagem' | 'concluido';

export interface ItemVariavel {
  id: string;
  sku: string;
  produto: string;
  lote: string;
  status: ItemVariavelStatus;
  solicitado?: string;
  pesoFinal?: string;
}

export type CaixaPesagemRowState = 'active' | 'pending';

export interface CaixaPesagem {
  id: string;
  numero: number;
  label: string;
  subtitle: string;
  rowState: CaixaPesagemRowState;
}
