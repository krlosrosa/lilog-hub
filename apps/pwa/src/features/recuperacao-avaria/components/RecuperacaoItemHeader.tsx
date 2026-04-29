import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

export const RecuperacaoItemHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleInfo = () => {
    /* tela estática — sem ação */
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background px-margin-mobile shadow-sm">
      <div className="flex items-center gap-md">
        <button
          type="button"
          onClick={handleBack}
          className="flex min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent active:scale-95"
          aria-label="Voltar para lista de itens da demanda"
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <h1 className="font-sans text-lg font-semibold tracking-tight text-primary">Recuperação de Avaria</h1>
      </div>
      <button
        type="button"
        onClick={handleInfo}
        className="flex min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent active:scale-95"
        aria-label="Informações da recuperação"
      >
        <Icon name="info" className="text-xl" />
      </button>
    </header>
  );
};
