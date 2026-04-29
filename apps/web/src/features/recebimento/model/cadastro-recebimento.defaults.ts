import type { CadastroRecebimentoForm, ItemInputForm, MetodoAdicaoItens } from './cadastro-recebimento.types';

export const EMPTY_ITEM_INPUT: ItemInputForm = {
  skuProduto: '',
  descricao: '',
  lote: '',
  quantidade: '',
  unidade: 'UN',
  pesoKg: '',
};

export const createEmptyCadastroForm = (): CadastroRecebimentoForm => ({
  centroOrigem: '',
  placa: '',
  transportadora: '',
  empresas: [],
  motorista: '',
  telefoneMotorista: '',
  documento: '',
  dataHoraPrevista: '',
  prioridade: 'media',
  itens: [],
});

export const DEFAULT_METODO_ADICAO: MetodoAdicaoItens = 'manual';
