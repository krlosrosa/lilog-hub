import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export interface ItensVariavelHeaderProps {
  demandaId: string;
  statusLabel: string;
}

export const ItensVariavelHeader = ({ demandaId, statusLabel }: ItensVariavelHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFilterPress = () => {
    /* tela estática — sem ação */
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-card px-margin-mobile py-3">
      <div className="flex items-center gap-md">
        <button
          type="button"
          onClick={handleBack}
          className="rounded-full p-2 text-primary transition-colors duration-150 hover:bg-accent active:scale-95"
          aria-label="Voltar para lista de demandas"
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <div className="flex flex-col gap-0">
          <h1 className="font-sans text-lg font-bold text-primary">Picking Demand</h1>
          <p className="font-label text-label-sm text-muted-foreground">
            {demandaId} •{' '}
            <span className="font-bold text-primary">{statusLabel}</span>
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleFilterPress}
        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent active:scale-95"
        aria-label="Filtrar itens da demanda"
      >
        <Icon name="filter_list" className="text-xl" />
      </button>
    </header>
  );
};
