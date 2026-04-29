'use client';

import type { ChangeEvent } from 'react';

import { cn, Input, Label } from '@lilo-wms/ui';

import {
  CENTRO_ORIGEM_OPTIONS,
  EMPRESA_CHECKBOXES,
  PRIORIDADE_OPTIONS,
} from '../model/cadastro-recebimento.constants';
import type { CadastroRecebimentoForm, EmpresaOption, PrioridadeOption } from '../model/cadastro-recebimento.types';
import { MaterialIcon } from './material-icon';

type DadosRecebimentoFormProps = {
  form: CadastroRecebimentoForm;
  onFormChange: <K extends keyof CadastroRecebimentoForm>(field: K, value: CadastroRecebimentoForm[K]) => void;
  onEmpresaToggle: (empresa: EmpresaOption) => void;
};

const fieldClass =
  'h-8 w-full rounded border border-slate-300 bg-white px-2 text-sm outline-none focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B]';
const labelClass = 'mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate-600';

export const DadosRecebimentoForm = ({ form, onFormChange, onEmpresaToggle }: DadosRecebimentoFormProps) => {
  const centroId = 'cadastro-centro-origem';
  const placaId = 'cadastro-placa';
  const transportadoraId = 'cadastro-transportadora';
  const motoristaId = 'cadastro-motorista';
  const telefoneId = 'cadastro-telefone-motorista';
  const documentoId = 'cadastro-documento';
  const dataHoraId = 'cadastro-data-hora-prevista';
  const prioridadeId = 'cadastro-prioridade';

  const handleCentroChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFormChange('centroOrigem', event.target.value);
  };

  const handlePlacaChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('placa', event.target.value);
  };

  const handleTransportadoraChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('transportadora', event.target.value);
  };

  const handleMotoristaChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('motorista', event.target.value);
  };

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('telefoneMotorista', event.target.value);
  };

  const handleDocumentoChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('documento', event.target.value);
  };

  const handleDataHoraChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFormChange('dataHoraPrevista', event.target.value);
  };

  const handlePrioridadeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFormChange('prioridade', event.target.value as PrioridadeOption);
  };

  const handleEmpresaChange = (empresa: EmpresaOption) => () => {
    onEmpresaToggle(empresa);
  };

  return (
    <section
      className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm"
      aria-labelledby="dados-recebimento-heading"
    >
      <div className="mb-4 flex items-center gap-1 border-b border-slate-300 pb-2">
        <MaterialIcon name="description" className="text-[20px] text-[#002B5B]" />
        <h2 id="dados-recebimento-heading" className="text-base font-semibold text-[#002B5B]">
          Dados do Recebimento
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Label htmlFor={centroId} className={labelClass}>
            Centro de origem
          </Label>
          <select
            id={centroId}
            className={cn(fieldClass, 'appearance-none')}
            value={form.centroOrigem}
            onChange={handleCentroChange}
            aria-label="Centro de origem"
          >
            {CENTRO_ORIGEM_OPTIONS.map((opt) => (
              <option key={opt.label + opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-2 lg:col-span-2">
          <Label htmlFor={placaId} className={labelClass}>
            Placa
          </Label>
          <Input
            id={placaId}
            type="text"
            className={fieldClass}
            placeholder="ABC-1234"
            value={form.placa}
            onChange={handlePlacaChange}
            autoComplete="off"
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <Label htmlFor={transportadoraId} className={labelClass}>
            Transportadora
          </Label>
          <Input
            id={transportadoraId}
            type="text"
            className={fieldClass}
            placeholder="Nome da transportadora"
            value={form.transportadora}
            onChange={handleTransportadoraChange}
            autoComplete="organization"
          />
        </div>

        <div className="col-span-12 lg:col-span-3">
          <p className={labelClass}>Empresas</p>
          <div
            className="flex h-8 items-center gap-4 rounded border border-dashed border-slate-300 bg-slate-50 px-2"
            role="group"
            aria-label="Empresas vinculadas"
          >
            {EMPRESA_CHECKBOXES.map((item) => {
              const checked = form.empresas.includes(item.value);
              return (
                <label key={item.value} className="flex cursor-pointer items-center gap-1">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-slate-300 text-[#002B5B] focus:ring-[#002B5B]"
                    checked={checked}
                    onChange={handleEmpresaChange(item.value)}
                    aria-label={item.label}
                  />
                  <span className="text-sm text-slate-800">{item.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <Label htmlFor={motoristaId} className={labelClass}>
            Motorista
          </Label>
          <Input
            id={motoristaId}
            type="text"
            className={fieldClass}
            placeholder="Nome completo"
            value={form.motorista}
            onChange={handleMotoristaChange}
            autoComplete="name"
          />
        </div>

        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <Label htmlFor={telefoneId} className={labelClass}>
            Telefone motorista
          </Label>
          <Input
            id={telefoneId}
            type="text"
            className={fieldClass}
            placeholder="(00) 00000-0000"
            value={form.telefoneMotorista}
            onChange={handleTelefoneChange}
            autoComplete="tel"
          />
        </div>

        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <Label htmlFor={documentoId} className={labelClass}>
            Documento
          </Label>
          <Input
            id={documentoId}
            type="text"
            className={fieldClass}
            placeholder="Ref: 987654321"
            value={form.documento}
            onChange={handleDocumentoChange}
            autoComplete="off"
          />
        </div>

        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <Label htmlFor={dataHoraId} className={labelClass}>
            Data/hora prevista
          </Label>
          <Input
            id={dataHoraId}
            type="datetime-local"
            className={fieldClass}
            value={form.dataHoraPrevista}
            onChange={handleDataHoraChange}
          />
        </div>

        <div className="col-span-12 md:col-span-12 lg:col-span-2">
          <Label htmlFor={prioridadeId} className={labelClass}>
            Prioridade
          </Label>
          <select
            id={prioridadeId}
            className={cn(fieldClass, 'appearance-none')}
            value={form.prioridade}
            onChange={handlePrioridadeChange}
            aria-label="Prioridade do recebimento"
          >
            {PRIORIDADE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};
