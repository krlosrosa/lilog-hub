import type { RecebimentoItem, RecebimentoStatus } from './recebimento.types';
import { RECEBIMENTO_MOCK } from './recebimento.mock';
import type {
  DetalheAvariaRow,
  DetalheConferenciaRow,
  DetalheFotoEtapa,
  DetalheKpis,
  DetalheRecebimentoViewModel,
  DetalheTimelineStep,
} from './detalhe-recebimento.types';

const STATUS_LABEL: Record<RecebimentoStatus, string> = {
  pendente: 'Aguardando',
  descarregando: 'Em conferência',
  concluido: 'Concluído',
  cancelado: 'Cancelado',
};

const CONFERENCIA_MOCK: DetalheConferenciaRow[] = [
  {
    id: 'c1',
    sku: '78910001',
    descricao: 'CAIXA PLÁSTICA PADRÃO G',
    lote: 'L-49202',
    contabil: 500,
    fisico: 500,
    diferenca: 0,
  },
  {
    id: 'c2',
    sku: '78910045',
    descricao: 'PRODUTO CONGELADO TIPO A',
    lote: 'L-49210',
    contabil: 240,
    fisico: 228,
    diferenca: -12,
    highlightFalta: true,
  },
  {
    id: 'c3',
    sku: '78910222',
    descricao: 'PALETE MADEIRA TRATADA',
    lote: 'L-49198',
    contabil: 400,
    fisico: 164,
    diferenca: null,
  },
];

const TIMELINE_MOCK: DetalheTimelineStep[] = [
  {
    id: 't1',
    title: 'Criação do recebimento',
    subtitle: '08:00 AM • ADM_WS',
    state: 'done',
  },
  {
    id: 't2',
    title: 'Início conferência',
    subtitle: '08:45 AM • OPER_04',
    state: 'current',
  },
  {
    id: 't3',
    title: 'Término conferência',
    subtitle: 'Pendente',
    state: 'pending',
  },
  {
    id: 't4',
    title: 'Liberação final',
    subtitle: 'Pendente',
    state: 'pending',
  },
];

const KPI_DEFAULT: DetalheKpis = {
  totalEsperado: 1240,
  totalRecebido: 892,
  faltas: 12,
  sobras: 0,
  avarias: 4,
  unidade: 'un',
  tempBauC: '-18.4',
  tempProdutoC: '-16.2',
};

const IMG_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBYAJavwxqswfD6LjbXzlXe9D3TVqeQ0_pCM_4i5avajY6puPrkm5jzRsrZCHwxdyefFG4JIrvssDRXO3xM9cTx340IfZsn2QEpweuuccVupTXyp6h5WYdWfsH_VCt5oBEvJWf6xZy23x3rloTvfQn30ybBP38Ugsb-G94U8HtjEMUTcnUrkaaI5wV5A7EyXgslIl_pHkwlvhQiwvHPLHZtj2_9m7wW4IE7CyLrZYlYy6GKC0d4E6hf3yFyNeBLq7hIwYceNdQD1eIG';

const IMG_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAtFkjg8TS0RwAgEW6mbNKpnUEpIh8Fz2EoOYMkQVfP8PCSOOMsIl9Umg0_148sD6jUOcv-WKA0cbXieAy-gAvQZ0ZW0_iAiRIhY3Pg6yGF8aLeTkOyBDmvXFNPlw2MM0XHzluT389lIZrh8JsNtklXfdBePgvelNZ0PE4a8RARNhdZdRYcBj7ySt-4kCVEw1DlYIPIQc3lrj8b8jTQknh4d4pvEdG1DFIpdZIfbNCmpQX3iTvtx9ixNY3hXgfnJmv1zt-hFL33Xyv6';

const IMG_3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDAEcL8lF8vjbNJD6lhIj_-1KDSpIzhyn0_sgNZo0bUpOHwUENGBs_6Rc-QY2ksULcOAqIv16_jWw0BNNocXXvRbFfdy4yan3LdxCENGv0IiancI8QCt5wXjAY7vJY4XYc0mdmal_QJwefyvrBWGcUxRa_6V6EIxqwLgmRuhRZlQXWszAamEeTXXg30CunDfUxsIHCsc-nLaQmWS2VzyBU3ZnDZmKHIE7GqtCVXbwhLjiI6mBlAtC0nzUuTeoNwXcmHUsuafA3V8KUm';

const AVARIAS_MOCK: DetalheAvariaRow[] = [
  {
    id: 'a1',
    sku: '78910089',
    descricao: 'Embalagem secundária térmica',
    quantidade: 4,
    imagens: [
      { id: 'a1-1', alt: 'Dano 1', src: IMG_1 },
      { id: 'a1-2', alt: 'Dano 2', src: IMG_2 },
      { id: 'a1-3', alt: 'Dano 3', src: IMG_3 },
    ],
  },
  {
    id: 'a2',
    sku: '78910112',
    descricao: 'Palete plástico higienizável',
    quantidade: 2,
    imagens: [],
  },
];

const FOTOS_ETAPA_MOCK: DetalheFotoEtapa[] = [
  { id: 'f1', titulo: '1. Baú fechado', tipo: 'imagem', src: IMG_2, alt: 'Baú fechado' },
  { id: 'f2', titulo: '2. Baú aberto', tipo: 'imagem', src: IMG_3, alt: 'Baú aberto' },
  { id: 'f3', titulo: '3. Lacre', tipo: 'placeholder' },
  {
    id: 'f4',
    titulo: '4. Outras',
    tipo: 'overlay',
    src: IMG_1,
    alt: 'Outras fotos',
    overlayText: '+5',
  },
];

const resolveBaseRow = (id: string): RecebimentoItem => {
  const found = RECEBIMENTO_MOCK.find((r) => r.id === id);
  if (found) {
    return found;
  }
  return { ...RECEBIMENTO_MOCK[0], id };
};

const docaFromPlaca = (placa: string): string => {
  const dock = RECEBIMENTO_MOCK.find((r) => r.placa === placa);
  if (!dock) {
    return '04';
  }
  const idx = RECEBIMENTO_MOCK.indexOf(dock);
  return String((idx % 6) + 1).padStart(2, '0');
};

export const buildDetalheRecebimentoView = (recebimentoId: string): DetalheRecebimentoViewModel => {
  const base = resolveBaseRow(recebimentoId);
  const doca = docaFromPlaca(base.placa);

  return {
    recebimentoId: base.id,
    status: base.status,
    statusLabel: STATUS_LABEL[base.status],
    placa: base.placa,
    horaInicio: base.horaChegada,
    docaLabel: doca,
    kpis: KPI_DEFAULT,
    conferencia: CONFERENCIA_MOCK,
    timeline: TIMELINE_MOCK.map((step, i) =>
      i === 1
        ? {
            ...step,
            subtitle: `${base.horaChegada} • OPER_04`,
          }
        : step,
    ),
    avarias: AVARIAS_MOCK,
    fotosEtapa: FOTOS_ETAPA_MOCK,
  };
};
