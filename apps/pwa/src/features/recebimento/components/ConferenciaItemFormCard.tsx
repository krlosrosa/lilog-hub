import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export const ConferenciaItemFormCard = () => {
  const navigate = useNavigate();

  const handleRegistrarAvaria = () => {
    navigate('/recebimento/check-list/avaria');
  };

  return (

    <section

      className="space-y-md rounded-lg border border-border bg-card p-md shadow-sm"

      aria-labelledby="conferencia-item-form-heading"

    >

      <h2 id="conferencia-item-form-heading" className="sr-only">

        Novo lote

      </h2>



      <div className="grid grid-cols-2 gap-gutter">

        <div className="col-span-2 space-y-xs">

          <label

            htmlFor="conferencia-item-lote"

            className="font-label text-label-md font-medium text-muted-foreground"

          >

            Lote

          </label>

          <input

            id="conferencia-item-lote"

            type="text"

            placeholder="Ex: LOT-2023-01"

            defaultValue=""

            readOnly

            className="min-h-btn w-full rounded border border-border bg-card px-md font-sans text-body-md text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Número do lote"

          />

        </div>



        <div className="space-y-xs">

          <label

            htmlFor="conferencia-item-caixas"

            className="font-label text-label-md font-medium text-muted-foreground"

          >

            Qtd. Caixas

          </label>

          <input

            id="conferencia-item-caixas"

            type="number"

            placeholder="0"

            defaultValue={10}

            readOnly

            className="min-h-btn w-full rounded border border-border bg-card px-md font-sans text-body-md text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Quantidade de caixas"

          />

        </div>



        <div className="space-y-xs">

          <label

            htmlFor="conferencia-item-unidades"

            className="font-label text-label-md font-medium text-muted-foreground"

          >

            Qtd. Unidades

          </label>

          <input

            id="conferencia-item-unidades"

            type="number"

            placeholder="0"

            defaultValue={120}

            readOnly

            className="min-h-btn w-full rounded border border-border bg-card px-md font-sans text-body-md text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Quantidade de unidades"

          />

        </div>



        <div className="col-span-2 space-y-xs">

          <label

            htmlFor="conferencia-item-peso"

            className="font-label text-label-md font-medium text-muted-foreground"

          >

            Peso (kg)

          </label>

          <input

            id="conferencia-item-peso"

            type="number"

            placeholder="0.00"

            step="0.01"

            defaultValue=""

            readOnly

            className="min-h-btn w-full rounded border border-border bg-card px-md font-sans text-body-md text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Peso em quilogramas"

          />

        </div>

      </div>



      <button

        type="button"

        className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary-container font-sans text-headline-md font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]"

        aria-label="Adicionar lote"

      >

        <Icon name="add" className="text-2xl" />

        Adicionar Lote

      </button>



      <button

        type="button"

        className="mt-sm flex min-h-btn w-full items-center justify-center gap-sm rounded-lg border-2 border-destructive/30 font-sans text-headline-md font-semibold text-destructive transition-transform hover:bg-destructive/5 active:scale-[0.98]"

        aria-label="Registrar avaria"

        onClick={handleRegistrarAvaria}

      >

        <Icon name="report_problem" className="text-2xl" />

        Registrar Avaria

      </button>

    </section>

  );

};


