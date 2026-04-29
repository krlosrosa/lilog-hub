import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export const PesagemHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-card px-margin-mobile py-3">
      <div className="flex items-center gap-md">
        <button
          type="button"
          onClick={handleBack}
          className="rounded-full p-2 text-primary transition-colors duration-150 hover:bg-accent active:scale-95"
          aria-label="Voltar para lista de itens"
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
        <h1 className="font-sans text-lg font-bold text-primary">Detalhamento de Item</h1>
      </div>
      <div
        className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-primary-container bg-surface"
        aria-hidden
      >
        <Icon name="person" className="text-lg text-primary" />
      </div>
    </header>
  );
};
