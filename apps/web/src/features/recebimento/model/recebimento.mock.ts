import type { DockItem, MetricItem, RecebimentoItem } from './recebimento.types';

export const RECEBIMENTO_MOCK: RecebimentoItem[] = [
  {
    id: '#RC-884920',
    empresa: 'LDB',
    placa: 'ABC-1234',
    transportadora: 'Logistics Express Ltda',
    pesoKg: 14250,
    status: 'descarregando',
    horaChegada: '08:45 AM',
  },
  {
    id: '#RC-884921',
    empresa: 'ITB',
    placa: 'KLO-9821',
    transportadora: 'Rápido Federal S.A.',
    pesoKg: 8400,
    status: 'pendente',
    horaChegada: '09:12 AM',
  },
  {
    id: '#RC-884922',
    empresa: 'LDB, ITB',
    placa: 'MWQ-5502',
    transportadora: 'Global Transports',
    pesoKg: 22100,
    status: 'concluido',
    horaChegada: '07:30 AM',
  },
  {
    id: '#RC-884923',
    empresa: 'DPA',
    placa: 'XYZ-0092',
    transportadora: 'Sul Cargas & Co',
    pesoKg: 11000,
    status: 'cancelado',
    horaChegada: '09:55 AM',
  },
  {
    id: '#RC-884924',
    empresa: 'LDB, DPA',
    placa: 'JKL-4421',
    transportadora: 'Trans-Norte Logística',
    pesoKg: 17800,
    status: 'descarregando',
    horaChegada: '10:15 AM',
  },
  {
    id: '#RC-884925',
    empresa: 'ITB, DPA',
    placa: 'PTR-8811',
    transportadora: 'Rodoviária Prime',
    pesoKg: 4100,
    status: 'pendente',
    horaChegada: '10:30 AM',
  },
];

export const METRICS_MOCK: MetricItem[] = [
  {
    id: 'total-hoje',
    label: 'TOTAL HOJE',
    value: '124',
    hint: '+12% vs ontem',
    hintType: 'positive',
    icon: 'calendar_today',
  },
  {
    id: 'descargas-ativas',
    label: 'DESCARGAS ATIVAS',
    value: '08',
    icon: 'move_to_inbox',
    progressPercent: 65,
  },
  {
    id: 'chegadas-pendentes',
    label: 'CHEGADAS PENDENTES',
    value: '15',
    hint: 'Próximo veículo em 12 min',
    hintType: 'neutral',
    icon: 'schedule',
  },
  {
    id: 'tempo-medio',
    label: 'TEMPO MÉDIO (MIN)',
    value: '42.5',
    hint: '-4m de melhoria',
    hintType: 'positive',
    hintIcon: 'trending_down',
    icon: 'timer',
  },
];

export const DOCK_MOCK: DockItem[] = [
  { id: 'doca-01', nome: 'Doca 01', status: 'ocupada', placa: 'ABC-1234' },
  { id: 'doca-02', nome: 'Doca 02', status: 'livre' },
  { id: 'doca-03', nome: 'Doca 03', status: 'ocupada', placa: 'MWQ-5502' },
  { id: 'doca-04', nome: 'Doca 04', status: 'livre' },
  { id: 'doca-05', nome: 'Doca 05', status: 'livre' },
  { id: 'doca-06', nome: 'Doca 06', status: 'ocupada', placa: 'JKL-4421' },
];
