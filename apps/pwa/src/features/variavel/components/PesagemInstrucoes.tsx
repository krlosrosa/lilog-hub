import { Icon } from '@/components/Icon';

export const PesagemInstrucoes = () => {
  return (
    <div className="flex items-center gap-md rounded-lg border border-primary-container/50 bg-primary-container/30 p-md">
      <Icon name="scale" className="text-2xl text-primary" />
      <p className="font-sans text-body-md text-primary">
        Pese cada caixa individualmente e informe os valores abaixo.
      </p>
    </div>
  );
};
