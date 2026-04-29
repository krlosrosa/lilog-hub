import { PesagemCaixaRow } from '@/features/variavel/components/PesagemCaixaRow';
import type { CaixaPesagem } from '@/features/variavel/types/types';

export interface PesagemCaixasListProps {
  caixas: CaixaPesagem[];
  currentStep: number;
  totalSteps: number;
}

export const PesagemCaixasList = ({ caixas, currentStep, totalSteps }: PesagemCaixasListProps) => {
  return (
    <section className="flex flex-col gap-sm" aria-labelledby="pesagem-caixas-heading">
      <div className="flex items-center justify-between px-xs">
        <h3 id="pesagem-caixas-heading" className="font-sans text-body-lg font-bold text-foreground">
          Pesagem de Caixas
        </h3>
        <span className="font-label text-label-md text-primary">
          Passo {currentStep} de {totalSteps}
        </span>
      </div>
      <div className="flex flex-col gap-sm">
        {caixas.map((caixa) => (
          <PesagemCaixaRow key={caixa.id} caixa={caixa} />
        ))}
      </div>
    </section>
  );
};
