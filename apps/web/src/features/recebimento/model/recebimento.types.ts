export type RecebimentoStatus = 'pendente' | 'descarregando' | 'concluido' | 'cancelado';

export type DockStatus = 'livre' | 'ocupada';

export type RecebimentoItem = {
  id: string;
  empresa: string;
  placa: string;
  transportadora: string;
  pesoKg: number;
  status: RecebimentoStatus;
  horaChegada: string;
};

export type DockItem = {
  id: string;
  nome: string;
  status: DockStatus;
  placa?: string;
};

export type MetricHintType = 'positive' | 'negative' | 'neutral';

export type MetricItem = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  hintType?: MetricHintType;
  /** Material symbol name, ex.: trending_up, trending_down */
  hintIcon?: string;
  icon: string;
  /** When set, renders a progress bar below the value (0–100). */
  progressPercent?: number;
};
