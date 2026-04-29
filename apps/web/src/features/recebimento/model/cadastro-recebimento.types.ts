export type EmpresaOption = 'LDB' | 'ITB' | 'DPA';

export type PrioridadeOption = 'alta' | 'media' | 'baixa';

export type UnidadeOption = 'UN' | 'KG' | 'CX' | 'PL';

export type MetodoAdicaoItens = 'excel' | 'xml' | 'manual';

export type ItemRecebimento = {
  id: string;
  sku: string;
  descricao: string;
  lote: string;
  quantidade: number;
  unidade: UnidadeOption;
  /** Peso total da linha (kg). */
  pesoKg: number;
};

export type CadastroRecebimentoForm = {
  centroOrigem: string;
  placa: string;
  transportadora: string;
  empresas: EmpresaOption[];
  motorista: string;
  telefoneMotorista: string;
  documento: string;
  dataHoraPrevista: string;
  prioridade: PrioridadeOption;
  itens: ItemRecebimento[];
};

/** Valores de formulário de entrada de uma nova linha (antes de parse/validar). */
export type ItemInputForm = {
  /** Código (SKU); obrigatório para adicionar. */
  skuProduto: string;
  /** Descrição; se vazio, reutiliza o SKU na listagem. */
  descricao: string;
  lote: string;
  quantidade: string;
  unidade: UnidadeOption;
  pesoKg: string;
};
