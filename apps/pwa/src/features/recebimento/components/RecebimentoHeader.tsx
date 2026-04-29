import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export const RecebimentoHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card px-4 shadow-sm">
      <div className="flex items-center gap-sm">
        <button
          type="button"
          className="active:scale-95 rounded-md p-2 text-primary transition-transform duration-150"
          aria-label="Voltar"
          onClick={handleBack}
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <h1 className="font-sans text-body-lg font-semibold text-foreground">Recebimento</h1>
      </div>
      <button
        type="button"
        className="active:scale-95 rounded-md p-2 text-primary transition-transform duration-150"
        aria-label="Notificações"
      >
        <Icon name="notifications" className="text-xl" />
      </button>
    </header>
  );
};
