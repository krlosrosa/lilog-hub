import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export const AvariaHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card px-md shadow-sm">
      <div className="flex items-center gap-md">
        <button
          type="button"
          className="rounded-full p-sm text-primary transition-transform active:scale-95"
          aria-label="Voltar"
          onClick={handleBack}
        >
          <Icon name="arrow_back" className="text-xl text-primary" />
        </button>
        <h1 className="font-sans text-body-lg font-semibold text-primary">Registro de Avaria</h1>
      </div>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent"
        role="img"
        aria-label="Perfil do operador"
      >
        <Icon name="person" className="text-xl text-accent-foreground" />
      </div>
    </header>
  );
};
