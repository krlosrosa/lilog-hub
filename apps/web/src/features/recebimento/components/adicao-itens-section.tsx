'use client';

import type { ChangeEvent, KeyboardEvent } from 'react';

import { Button, cn, Input, Label } from '@lilo-wms/ui';

import { formatPesoKgCompleto } from '../lib/format-peso-kg-completo';
import { METODO_TABS, UNIDADE_OPTIONS } from '../model/cadastro-recebimento.constants';
import type { ItemInputForm, ItemRecebimento, MetodoAdicaoItens, UnidadeOption } from '../model/cadastro-recebimento.types';
import { MaterialIcon } from './material-icon';

type AdicaoItensSectionProps = {
  metodo: MetodoAdicaoItens;
  onMetodoChange: (value: MetodoAdicaoItens) => void;
  itemInput: ItemInputForm;
  onItemInputChange: <K extends keyof ItemInputForm>(field: K, value: ItemInputForm[K]) => void;
  onAddItem: () => void;
  itens: ItemRecebimento[];
  onRemoveItem: (id: string) => void;
  totalItens: number;
  pesoTotalKg: number;
};

const fieldClass =
  'h-8 w-full rounded border border-slate-300 bg-white px-2 text-sm outline-none focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B]';
const labelClass = 'mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate-600';

export const AdicaoItensSection = ({
  metodo,
  onMetodoChange,
  itemInput,
  onItemInputChange,
  onAddItem,
  itens,
  onRemoveItem,
  totalItens,
  pesoTotalKg,
}: AdicaoItensSectionProps) => {
  const skuId = 'item-sku-produto';
  const descId = 'item-descricao';
  const loteId = 'item-lote';
  const qtdId = 'item-quantidade';
  const unId = 'item-unidade';
  const pesoId = 'item-peso-kg';

  const handleMetodoKeyDown = (value: MetodoAdicaoItens) => (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    event.preventDefault();
    onMetodoChange(value);
  };

  const handleSkuChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemInputChange('skuProduto', event.target.value);
  };

  const handleDescricaoChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemInputChange('descricao', event.target.value);
  };

  const handleLoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemInputChange('lote', event.target.value);
  };

  const handleQtdChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemInputChange('quantidade', event.target.value);
  };

  const handlePesoChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemInputChange('pesoKg', event.target.value);
  };

  const handleUnidadeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onItemInputChange('unidade', event.target.value as UnidadeOption);
  };

  const handleAddClick = () => {
    onAddItem();
  };

  return (
    <section
      className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm"
      aria-labelledby="adicao-itens-heading"
    >
      <div className="mb-4 flex flex-col gap-3 border-b border-slate-300 pb-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1">
          <MaterialIcon name="inventory_2" className="text-[20px] text-[#002B5B]" />
          <h2 id="adicao-itens-heading" className="text-base font-semibold text-[#002B5B]">
            Adição de itens
          </h2>
        </div>
        <div
          className="flex rounded-lg bg-slate-100 p-0.5"
          role="tablist"
          aria-label="Método de adição de itens"
        >
          {METODO_TABS.map((tab) => {
            const isActive = metodo === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(
                  'rounded-md px-3 py-1 text-sm font-semibold transition-all',
                  isActive ? 'bg-white text-[#002B5B] shadow-sm' : 'text-slate-600 hover:text-[#002B5B]',
                )}
                onClick={() => onMetodoChange(tab.value)}
                onKeyDown={handleMetodoKeyDown(tab.value)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {metodo === 'manual' ? (
        <div className="mb-3 rounded-lg border border-slate-300 bg-slate-50 p-2">
          <div className="grid grid-cols-12 items-end gap-3">
            <div className="col-span-12 space-y-2 lg:col-span-3">
              <div>
                <Label htmlFor={skuId} className={labelClass}>
                  SKU / produto
                </Label>
                <div className="relative">
                  <Input
                    id={skuId}
                    type="text"
                    className={cn(fieldClass, 'pr-8')}
                    placeholder="Código ou nome"
                    value={itemInput.skuProduto}
                    onChange={handleSkuChange}
                    autoComplete="off"
                  />
                  <MaterialIcon
                    name="search"
                    className="pointer-events-none absolute right-2 top-1.5 text-[18px] text-slate-500"
                    decorative
                  />
                </div>
              </div>
              <div>
                <Label htmlFor={descId} className={labelClass}>
                  Descrição (opcional)
                </Label>
                <Input
                  id={descId}
                  type="text"
                  className={fieldClass}
                  placeholder="Nome do produto"
                  value={itemInput.descricao}
                  onChange={handleDescricaoChange}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <Label htmlFor={loteId} className={labelClass}>
                Lote
              </Label>
              <Input
                id={loteId}
                type="text"
                className={fieldClass}
                placeholder="BATCH-001"
                value={itemInput.lote}
                onChange={handleLoteChange}
                autoComplete="off"
              />
            </div>

            <div className="col-span-6 lg:col-span-2">
              <Label htmlFor={qtdId} className={labelClass}>
                Quantidade
              </Label>
              <Input
                id={qtdId}
                type="number"
                min={0}
                step="any"
                className={fieldClass}
                placeholder="0"
                value={itemInput.quantidade}
                onChange={handleQtdChange}
              />
            </div>

            <div className="col-span-6 lg:col-span-2">
              <Label htmlFor={unId} className={labelClass}>
                Unidade
              </Label>
              <select
                id={unId}
                className={cn(fieldClass, 'appearance-none')}
                value={itemInput.unidade}
                onChange={handleUnidadeChange}
                aria-label="Unidade de medida"
              >
                {UNIDADE_OPTIONS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <Label htmlFor={pesoId} className={labelClass}>
                Peso (kg)
              </Label>
              <Input
                id={pesoId}
                type="text"
                inputMode="decimal"
                className={fieldClass}
                placeholder="0,00"
                value={itemInput.pesoKg}
                onChange={handlePesoChange}
                autoComplete="off"
              />
            </div>

            <div className="col-span-12 flex items-end lg:col-span-1">
              <Button
                type="button"
                onClick={handleAddClick}
                className="h-8 w-full min-h-0 items-center justify-center rounded border-0 bg-[#002B5B] p-0 text-white hover:bg-[#002B5B]/90"
                aria-label="Adicionar item à lista"
              >
                <MaterialIcon name="add" className="text-[20px] text-white" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mb-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600"
          role="status"
        >
          Importação por {metodo === 'excel' ? 'planilha Excel' : 'arquivo XML'} em breve.
        </div>
      )}

      <div className="overflow-x-auto rounded border border-slate-300">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                SKU
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                Descrição
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                Lote
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                Qtd
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                UN
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                Peso total
              </th>
              <th className="border-b border-slate-300 px-2 py-1 text-right text-[10px] font-bold uppercase tracking-wide text-slate-600">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {itens.length === 0 ? (
              <tr>
                <td className="h-8 px-2 py-2 text-sm text-slate-500" colSpan={7}>
                  Nenhum item adicionado. Inclua produtos no modo &quot;Entrada manual&quot;.
                </td>
              </tr>
            ) : (
              itens.map((item) => {
                const handleRemove = () => {
                  onRemoveItem(item.id);
                };
                return (
                  <tr key={item.id} className="h-8 hover:bg-blue-50">
                    <td className="px-2 py-1 font-mono text-sm text-[#002B5B]">{item.sku}</td>
                    <td className="px-2 py-1 text-sm text-slate-800">{item.descricao}</td>
                    <td className="px-2 py-1 font-mono text-sm text-slate-800">{item.lote || '—'}</td>
                    <td className="px-2 py-1 text-sm font-bold text-slate-800">{item.quantidade}</td>
                    <td className="px-2 py-1 text-sm text-slate-800">{item.unidade}</td>
                    <td className="px-2 py-1 text-sm text-slate-800">{formatPesoKgCompleto(item.pesoKg)}</td>
                    <td className="px-2 py-1 text-right">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemove}
                        className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700"
                        aria-label={`Remover item ${item.sku}`}
                      >
                        <MaterialIcon name="delete" className="text-[18px]" />
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap justify-end gap-6 rounded-lg border border-[#002B5B]/10 bg-indigo-50/50 p-2">
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-600">Total de itens</p>
          <p className="text-base font-semibold text-[#002B5B]">{totalItens}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-600">Peso total bruto</p>
          <p className="text-base font-semibold text-[#002B5B]">{formatPesoKgCompleto(pesoTotalKg)}</p>
        </div>
      </div>
    </section>
  );
};
