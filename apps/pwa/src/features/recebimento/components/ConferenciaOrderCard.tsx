import type { ConferenciaOrder } from '@/features/recebimento/types/types';

export interface ConferenciaOrderCardProps {
  order: ConferenciaOrder;
}

export const ConferenciaOrderCard = ({ order }: ConferenciaOrderCardProps) => {
  return (
    <section
      className="mb-lg flex items-center justify-between rounded-lg bg-primary p-lg shadow-lg shadow-primary/20"
      aria-labelledby="conferencia-ordem-heading"
    >
      <div>
        <p className="mb-xs font-label text-label-sm font-bold uppercase tracking-widest text-primary-foreground/75">
          Ordem de Carga
        </p>
        <p
          id="conferencia-ordem-heading"
          className="font-sans text-headline-md font-extrabold tracking-tight text-primary-foreground"
        >
          {order.code}
        </p>
      </div>
      <div className="text-right">
        <p className="mb-xs font-label text-label-sm font-bold uppercase tracking-widest text-primary-foreground/75">
          Progresso
        </p>
        <p className="font-sans text-headline-md font-extrabold tracking-tight text-primary-foreground">
          {order.done}{' '}
          <span className="font-sans text-body-md font-medium text-primary-foreground/70">
            / {order.total}
          </span>
        </p>
      </div>
    </section>
  );
};
