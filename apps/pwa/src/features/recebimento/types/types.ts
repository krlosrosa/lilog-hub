export type DemandStatus = 'aguardando' | 'conferindo' | 'transito';

/** Em aberto: não iniciadas. Pendentes: conferência em andamento. */
export type DemandTab = 'em_aberto' | 'pendentes';

export interface Demand {
  id: string;
  status: DemandStatus;
  tags: string[];
  plate: string;
  dock: string;
  carrier?: string;
  progress?: number;
}

/** Metadados de entrada para cards de fotos obrigatórias no check-list de chegada. */
export interface ChecklistPhoto {
  id: string;
  label: string;
  /** Nome do ícone Material Symbols (mesmo padrão de `Icon`). */
  icon: string;
}

export const PHOTO_ITEMS: ChecklistPhoto[] = [
  { id: 'truck_closed', label: 'Foto Caminhão Fechado', icon: 'local_shipping' },
  { id: 'truck_open', label: 'Foto Caminhão Aberto', icon: 'open_in_full' },
  { id: 'seal', label: 'Foto do Lacre', icon: 'lock' },
];

/** Estado opcional em `location.state` ao abrir a tela de check-list a partir de uma demanda. */
export interface ChecklistRouteState {
  plate: string;
  dock: string;
  demandId: string;
}

export type ConferenciaItemStatus =
  | 'conferido'
  | 'divergente'
  | 'avaria'
  | 'pendente';

export interface ConferenciaItem {
  id: string;
  sku: string;
  name: string;
  lote: string;
  qty?: number;
  statuses: ConferenciaItemStatus[];
}

export interface ConferenciaOrder {
  code: string;
  done: number;
  total: number;
}

/** Estado em `location.state` ao abrir a tela de detalhe a partir de um card. */
export interface ConferenciaItemRouteState {
  sku: string;
  description: string;
  lote: string;
}

/** Detalhe do item exibido na tela de conferência por SKU. */
export interface ConferenciaItemDetail {
  sku: string;
  description: string;
  lote: string;
}

/** Lote já conferido na lista de histórico. */
export interface LoteConferido {
  id: string;
  lotCode: string;
  /** Ex.: "15/10/2023 • 14:30" */
  dateTimeLabel: string;
  units: number;
}

/** Registro de avaria vinculado ao item. */
export interface ItemAvaria {
  id: string;
  sku: string;
  description: string;
  /** Ex.: "2 Caixas / 24 Unidades" */
  damageSummary: string;
}

/** Valores de select na tela de registro de avaria (check-list avaria). */
export type AvariaType = 'quebra' | 'umidade' | 'vencido' | 'violado';

export type AvariaNatureza = 'transporte' | 'armazenagem' | 'fabricacao';

export type AvariaOcorrencia = 'entrada' | 'inventario' | 'separacao';

/** Preview estático de mídia na faixa horizontal. */
export interface AvariaMedia {
  id: string;
  alt: string;
}

/** Dados mock para previews de fotos (UI estática). */
export const AVARIA_MEDIA_PREVIEWS: AvariaMedia[] = [
  { id: 'preview-1', alt: 'Produto avariado com caixa amassada' },
  { id: 'preview-2', alt: 'Detalhe do item quebrado' },
];
