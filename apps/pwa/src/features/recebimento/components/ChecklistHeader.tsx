import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export const ChecklistHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 grid h-16 grid-cols-3 items-center border-b border-border bg-card px-4 shadow-sm">
      <div className="flex justify-start">
        <button
          type="button"
          className="active:scale-95 rounded-md p-2 text-primary-container transition-transform duration-150"
          aria-label="Voltar"
          onClick={handleBack}
        >
          <Icon name="arrow_back" className="text-xl" />
        </button>
      </div>
      <h1 className="truncate text-center font-sans text-body-lg font-semibold text-primary-container">
        Arrival Checklist
      </h1>
      <div className="flex justify-end">
        <button
          type="button"
          className="active:scale-95 rounded-md p-2 text-primary-container transition-transform duration-150"
          aria-label="Abrir leitor de código de barras"
        >
          <Icon name="barcode_scanner" className="text-xl" />
        </button>
      </div>
    </header>
  );

};
