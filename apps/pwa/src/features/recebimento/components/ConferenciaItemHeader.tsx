import { useNavigate } from 'react-router-dom';



import { Icon } from '@/components/Icon';



export const ConferenciaItemHeader = () => {

  const navigate = useNavigate();



  const handleBack = () => {

    navigate(-1);

  };



  return (

    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card px-sm shadow-sm">

      <div className="flex min-w-0 flex-1 items-center gap-sm">

        <button

          type="button"

          onClick={handleBack}

          className="flex min-h-btn min-w-touch shrink-0 items-center justify-center rounded-full text-primary transition-transform active:scale-95 active:bg-surface-high"

          aria-label="Voltar"

        >

          <Icon name="arrow_back" className="text-2xl" />

        </button>

        <h1 className="truncate font-sans text-headline-md font-semibold text-foreground">

          Detalhes da Conferência

        </h1>

      </div>

      <button

        type="button"

        className="flex min-h-btn min-w-touch shrink-0 items-center justify-center rounded-full text-primary transition-transform active:scale-95 active:bg-surface-high"

        aria-label="Abrir leitor de código de barras"

      >

        <Icon name="barcode_scanner" className="text-2xl" />

      </button>

    </header>

  );

};


