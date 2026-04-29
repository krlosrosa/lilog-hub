import type { RecebimentoStatus } from './recebimento.types';

export type DetalheConferenciaRow = {
  id: string;
  sku: string;
  descricao: string;
  lote: string;
  contabil: number;
  fisico: number;
  /** `null` renders "—" or "..." when físico ainda em contagem */
  diferenca: number | null;
  /** When true, row destacado como divergência negativa */
  highlightFalta?: boolean;
};

export type DetalheTimelineStepState = 'done' | 'current' | 'pending';

export type DetalheTimelineStep = {
  id: string;
  title: string;
  subtitle: string;
  state: DetalheTimelineStepState;
};

export type DetalheKpis = {
  totalEsperado: number;
  totalRecebido: number;
  faltas: number;
  sobras: number;
  avarias: number;
  unidade: string;
  tempBauC: string;
  tempProdutoC: string;
};

export type DetalheAvariaRow = {
  id: string;
  sku: string;
  descricao: string;
  quantidade: number;
  imagens: { id: string; alt: string; src: string }[];
};

export type DetalheFotoEtapa = {
  id: string;
  titulo: string;
  tipo: 'imagem' | 'placeholder' | 'overlay';
  src?: string;
  alt?: string;
  overlayText?: string;
};

export type DetalheRecebimentoViewModel = {
  recebimentoId: string;
  status: RecebimentoStatus;
  statusLabel: string;
  placa: string;
  horaInicio: string;
  docaLabel: string;
  kpis: DetalheKpis;
  conferencia: DetalheConferenciaRow[];
  timeline: DetalheTimelineStep[];
  avarias: DetalheAvariaRow[];
  fotosEtapa: DetalheFotoEtapa[];
};
