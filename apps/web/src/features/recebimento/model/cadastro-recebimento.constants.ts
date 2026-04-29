import type { EmpresaOption, PrioridadeOption, UnidadeOption } from './cadastro-recebimento.types';

export const CENTRO_ORIGEM_OPTIONS: Array<{ value: string; label: string }> = [
  { value: '', label: 'Selecione o Centro' },
  { value: 'sp-01', label: 'CD São Paulo - 01' },
  { value: 'rj-05', label: 'CD Rio de Janeiro - 05' },
  { value: 'cwb-12', label: 'Filial Curitiba - 12' },
];

export const PRIORIDADE_OPTIONS: Array<{ value: PrioridadeOption; label: string }> = [
  { value: 'media', label: 'Média' },
  { value: 'alta', label: 'Alta' },
  { value: 'baixa', label: 'Baixa' },
];

export const UNIDADE_OPTIONS: UnidadeOption[] = ['UN', 'KG', 'CX', 'PL'];

export const EMPRESA_CHECKBOXES: Array<{ value: EmpresaOption; label: string }> = [
  { value: 'LDB', label: 'LDB' },
  { value: 'ITB', label: 'ITB' },
  { value: 'DPA', label: 'DPA' },
];

export const METODO_TABS: Array<{ value: 'excel' | 'xml' | 'manual'; label: string }> = [
  { value: 'excel', label: 'Via Excel' },
  { value: 'xml', label: 'Via XML' },
  { value: 'manual', label: 'Entrada Manual' },
];
