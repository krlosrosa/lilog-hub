'use client';

import { Button, cn } from '@lilo-wms/ui';

import { AdicaoItensSection } from '../components/adicao-itens-section';
import { CadastroRecebimentoHeader } from '../components/cadastro-recebimento-header';
import { DadosRecebimentoForm } from '../components/dados-recebimento-form';
import { useCadastroRecebimento } from '../hooks/use-cadastro-recebimento';

type CadastroRecebimentoScreenProps = {
  centro: string;
};

export const CadastroRecebimentoScreen = ({ centro }: CadastroRecebimentoScreenProps) => {
  const {
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
  } = useCadastroRecebimento();

  const handleFooterCancel = () => {
    handleCancel();
  };

  const handleFooterSubmit = () => {
    handleSubmit();
  };

  return (
    <div
      className="min-h-dvh w-full bg-[#FAF8FF] p-2 text-slate-900 antialiased"
      data-centro={centro}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col space-y-4 p-2 lg:p-5">
        <CadastroRecebimentoHeader onCancel={handleCancel} />
        <DadosRecebimentoForm
          form={form}
          onFormChange={handleFormChange}
          onEmpresaToggle={handleEmpresaToggle}
        />
        <AdicaoItensSection
          metodo={metodo}
          onMetodoChange={handleMetodoChange}
          itemInput={itemInput}
          onItemInputChange={handleItemInputChange}
          onAddItem={handleAddItem}
          itens={form.itens}
          onRemoveItem={handleRemoveItem}
          totalItens={totalItens}
          pesoTotalKg={pesoTotalKg}
        />
        <footer className="flex flex-wrap justify-end gap-2 py-4" aria-label="Ações do cadastro">
          <Button
            type="button"
            variant="outline"
            onClick={handleFooterCancel}
            className={cn(
              'h-auto min-h-0 rounded-lg border border-[#002B5B] px-4 py-2 text-sm font-semibold text-[#002B5B] hover:bg-blue-50',
            )}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={handleFooterSubmit}
            className={cn(
              'h-auto min-h-0 gap-1 rounded-lg bg-[#002B5B] px-6 py-2 text-sm font-bold text-white shadow-md hover:bg-[#001736]',
            )}
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }} aria-hidden>
              check_circle
            </span>
            Cadastrar recebimento
          </Button>
        </footer>
      </div>
    </div>
  );
};
