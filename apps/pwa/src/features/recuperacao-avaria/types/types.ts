export type RecuperacaoStatus = 'pendente' | 'em_andamento';

export interface RecuperacaoDemanda {
  id: string;
  date: string;
  status: RecuperacaoStatus;
  totalItems: number;
  /** 0–100; apenas quando `status` é `em_andamento`. */
  progress?: number;
  /** Nome do ícone Material Symbols (alinhado a `Icon`). */
  iconName: string;
}

export type ItemStatus = 'pendente' | 'em_recuperacao' | 'recuperado';

export interface ItemRecuperacao {
  sku: string;
  descricao: string;
  status: ItemStatus;
  quantidade: number;
  unidade: string;
  caixas: number;
}

export interface RecuperacaoFotoOriginal {
  src: string;
  alt: string;
}

export interface RecuperacaoDamageHistory {
  motivo: string;
  natureza: string;
  origem: string;
  fotosOriginais: RecuperacaoFotoOriginal[];
  observacoes: string;
}

export interface RecuperacaoItemData {
  sku: string;
  statusBadge: string;
  productName: string;
  locationLine: string;
  /** Quantidade de caixas afetadas pela avaria. */
  caixasAvariadas: number;
  /** Quantidade de unidades afetadas pela avaria. */
  unidadesAvariadas: number;
  damageHistory: RecuperacaoDamageHistory;
}
