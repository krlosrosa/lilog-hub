import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import type {
  ConferenciaItem,
  ConferenciaItemRouteState,
  ConferenciaItemStatus,
} from '@/features/recebimento/types/types';



export interface ConferenciaItemCardProps {

  item: ConferenciaItem;

}



type BadgeTone = {

  wrapper: string;

  icon: string;

  label: string;

  iconName: string;

};



const STATUS_BADGES: Record<ConferenciaItemStatus, BadgeTone> = {

  conferido: {

    wrapper:

      'bg-success text-success-foreground shadow-md shadow-success/10',

    icon: 'font-black',

    label: 'Conferido',

    iconName: 'check',

  },

  divergente: {

    wrapper:

      'bg-warning text-warning-foreground shadow-md shadow-warning/10',

    icon: 'font-black',

    label: 'Divergente',

    iconName: 'priority_high',

  },

  avaria: {

    wrapper:

      'bg-destructive text-destructive-foreground shadow-md shadow-destructive/10',

    icon: 'font-black',

    label: 'Avaria',

    iconName: 'close',

  },

  pendente: {

    wrapper: 'bg-surface-high text-muted-foreground',

    icon: '',

    label: 'Pendente',

    iconName: 'schedule',

  },

};



export const ConferenciaItemCard = ({ item }: ConferenciaItemCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const state: ConferenciaItemRouteState = {
      sku: item.sku,
      description: item.name,
      lote: item.lote,
    };
    navigate('/recebimento/conferencia/item', { state });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    handleClick();
  };

  return (

    <button
      type="button"
      role="listitem"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Abrir detalhes do item ${item.sku}: ${item.name}`}
      className="item-card w-full rounded-lg border border-border bg-card p-5 text-left shadow-sm transition-transform active:scale-[0.985]"
    >

      <div className="flex flex-1 flex-col gap-0">

        <div className="mb-4 space-y-xs">

          <div className="flex items-center gap-sm">

            <Icon name="inventory_2" className="text-xl text-primary" />

            <span className="font-sans text-body-lg font-extrabold leading-none tracking-tight text-foreground">

              {item.sku}

            </span>

          </div>

          <h2 className="font-sans text-body-md font-semibold leading-tight text-muted-foreground">

            {item.name}

          </h2>

        </div>



        <div className="mb-4 flex flex-wrap gap-1.5" role="list" aria-label="Status do item">

          {item.statuses.map((status) => {

            const cfg = STATUS_BADGES[status];

            return (

              <span

                key={status}

                role="listitem"

                className={`flex h-fit flex-shrink-0 items-center gap-1 rounded-md px-2 py-1 font-label text-label-sm font-extrabold uppercase tracking-wider ${cfg.wrapper}`}

              >

                <Icon name={cfg.iconName} className={`text-label-sm leading-none ${cfg.icon}`} />

                {cfg.label}

              </span>

            );

          })}

        </div>



        <div className="space-y-sm">

          <div className="flex items-center gap-2.5">

            <Icon name="layers" className="text-lg text-outline" />

            <span className="font-label text-label-md font-bold uppercase tracking-tight text-muted-foreground">

              Lote:{' '}

              <span className="ml-1 font-sans font-extrabold text-foreground">{item.lote}</span>

            </span>

          </div>

          {item.qty !== undefined ? (

            <div className="flex items-center gap-2.5">

              <Icon name="inventory" className="text-lg text-outline" />

              <span className="font-label text-label-md font-bold uppercase tracking-tight text-muted-foreground">

                QTD:{' '}

                <span className="ml-1 font-sans font-extrabold text-foreground">{item.qty}</span>

              </span>

            </div>

          ) : null}

        </div>

      </div>

    </button>

  );

};


