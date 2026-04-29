import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

export const ItensHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFilter = () => {
    /* tela estática — sem ação */
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background px-margin-mobile">
      <div className="flex items-center gap-md">
        <button
          type="button"
          onClick={handleBack}
          className="flex min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent active:scale-95"
          aria-label="Voltar para lista de demandas de recuperação"
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <h1 className="font-sans text-lg font-semibold tracking-tight text-primary">Demanda de Recuperação</h1>
      </div>
      <div className="flex items-center gap-xs">
        <button
          type="button"
          onClick={handleFilter}
          className="flex min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent active:scale-95"
          aria-label="Abrir filtros"
        >
          <Icon name="filter_list" className="text-xl" />
        </button>
      </div>
    </header>
  );
};
