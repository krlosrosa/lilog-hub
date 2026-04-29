'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { createEmptyCadastroForm, DEFAULT_METODO_ADICAO, EMPTY_ITEM_INPUT } from '../model/cadastro-recebimento.defaults';
import type {
  CadastroRecebimentoForm,
  EmpresaOption,
  ItemInputForm,
  ItemRecebimento,
  MetodoAdicaoItens,
} from '../model/cadastro-recebimento.types';

const createItemId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
};

const parsePeso = (value: string): number => {
  const normalized = value.trim().replace(/\./g, '').replace(',', '.');
  const n = Number.parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
};

const parseQuantidade = (value: string): number => {
  const normalized = value.trim().replace(',', '.');
  const n = Number.parseFloat(normalized);
  return Number.isFinite(n) ? n : 0;
};

export const useCadastroRecebimento = () => {
  const router = useRouter();
  const [form, setForm] = useState<CadastroRecebimentoForm>(() => createEmptyCadastroForm());
  const [itemInput, setItemInput] = useState<ItemInputForm>(() => ({ ...EMPTY_ITEM_INPUT }));
  const [metodo, setMetodo] = useState<MetodoAdicaoItens>(DEFAULT_METODO_ADICAO);

  const { totalItens, pesoTotalKg } = useMemo(() => {
    const qtd = form.itens.reduce((acc, item) => acc + item.quantidade, 0);
    const peso = form.itens.reduce((acc, item) => acc + item.pesoKg, 0);
    return { totalItens: qtd, pesoTotalKg: peso };
  }, [form.itens]);

  const handleFormChange = useCallback(<K extends keyof CadastroRecebimentoForm>(field: K, value: CadastroRecebimentoForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleEmpresaToggle = useCallback((empresa: EmpresaOption) => {
    setForm((prev) => {
      const has = prev.empresas.includes(empresa);
      const empresas = has ? prev.empresas.filter((e) => e !== empresa) : [...prev.empresas, empresa];
      return { ...prev, empresas };
    });
  }, []);

  const handleItemInputChange = useCallback(<K extends keyof ItemInputForm>(field: K, value: ItemInputForm[K]) => {
    setItemInput((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleMetodoChange = useCallback((value: MetodoAdicaoItens) => {
    setMetodo(value);
  }, []);

  const handleAddItem = useCallback(() => {
    const sku = itemInput.skuProduto.trim();
    if (!sku) {
      return;
    }

    const quantidade = parseQuantidade(itemInput.quantidade);
    if (quantidade <= 0) {
      return;
    }

    const pesoKg = parsePeso(itemInput.pesoKg);
    const lote = itemInput.lote.trim();
    const descricaoTrim = itemInput.descricao.trim();
    const descricao = descricaoTrim || sku;

    const novo: ItemRecebimento = {
      id: createItemId(),
      sku,
      descricao,
      lote,
      quantidade,
      unidade: itemInput.unidade,
      pesoKg,
    };

    setForm((prev) => ({ ...prev, itens: [...prev.itens, novo] }));
    setItemInput({ ...EMPTY_ITEM_INPUT, unidade: itemInput.unidade });
  }, [itemInput]);

  const handleRemoveItem = useCallback((id: string) => {
    setForm((prev) => ({ ...prev, itens: prev.itens.filter((i) => i.id !== id) }));
  }, []);

  const handleCancel = useCallback(() => {
    router.back();
  }, [router]);

  const handleSubmit = useCallback(() => {
    // Fluxo futuro: POST /api/recebimentos
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console -- rascunho até existir API
      console.log('cadastro-recebimento', { form, metodo });
    }
  }, [form, metodo]);

  return {
    form,
    itemInput,
    metodo,
    totalItens,
    pesoTotalKg,
    handleFormChange,
    handleEmpresaToggle,
    handleItemInputChange,
    handleMetodoChange,
    handleAddItem,
    handleRemoveItem,
    handleCancel,
    handleSubmit,
  };
};
