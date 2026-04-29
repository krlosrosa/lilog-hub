import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

import type { ItemRecuperacao } from '@/features/recuperacao-avaria/types/types';

export interface ItemRecuperacaoCardProps {
  item: ItemRecuperacao;
}

const formatQuantidade = (item: ItemRecuperacao) => {
  const cx = item.caixas === 1 ? 'caixa' : 'caixas';
  return `${item.quantidade} ${item.unidade} (${item.caixas} ${cx})`;
};

export const ItemRecuperacaoCard = ({ item }: ItemRecuperacaoCardProps) => {
  const navigate = useNavigate();

  const handlePrimaryAction = () => {
    if (item.status === 'pendente') {
      navigate('/recuperacao-avaria/item');
      return;
    }
    /* tela estática — demais ações */
  };

  const isRecuperado = item.status === 'recuperado';
  const isEmRecuperacao = item.status === 'em_recuperacao';

  const cardClass = [
    'flex flex-col gap-md rounded-lg border border-outline-variant/20 p-md shadow-sm transition-transform',
    isRecuperado ? 'border-outline-variant/10 bg-surface-low opacity-80' : 'bg-card active:scale-[0.98]',
  ]
    .filter(Boolean)
    .join(' ');

  const skuClass = isRecuperado
    ? 'font-sans text-lg font-bold tracking-tight text-secondary-foreground'
    : 'font-sans text-lg font-bold tracking-tight text-primary';

  const statusChip =
    item.status === 'pendente' ? (
      <span className="flex shrink-0 items-center gap-xs rounded-full bg-tertiary-container px-2.5 py-1 font-label text-label-sm text-tertiary-foreground">
        <Icon name="pending" className="text-sm" />
        Pendente
      </span>
    ) : isEmRecuperacao ? (
      <span className="flex shrink-0 items-center gap-xs rounded-full bg-accent px-2.5 py-1 font-label text-label-sm text-accent-foreground">
        <Icon name="autorenew" className="text-sm" />
        Em Recuperação
      </span>
    ) : (
      <span className="flex shrink-0 items-center gap-xs rounded-full bg-surface-high px-2.5 py-1 font-label text-label-sm text-foreground">
        <Icon name="check_circle" className="text-sm" />
        Recuperado
      </span>
    );

  const actionButton =
    item.status === 'pendente' ? (
      <button
        type="button"
        onClick={handlePrimaryAction}
        className="flex min-h-btn items-center gap-sm rounded-lg bg-primary-container px-md py-2.5 font-label text-label-md font-medium text-primary-foreground transition-colors hover:bg-primary active:scale-95"
        aria-label={`Recuperar item ${item.sku}`}
      >
        Recuperar
        <Icon name="arrow_forward" className="text-sm" />
      </button>
    ) : isEmRecuperacao ? (
      <button
        type="button"
        onClick={handlePrimaryAction}
        className="flex min-h-btn items-center gap-sm rounded-lg bg-primary-container px-md py-2.5 font-label text-label-md font-medium text-primary-foreground transition-colors active:scale-95"
        aria-label={`Ver item ${item.sku}`}
      >
        Ver
        <Icon name="visibility" className="text-sm" />
      </button>
    ) : (
      <button
        type="button"
        onClick={handlePrimaryAction}
        className="flex min-h-btn items-center gap-sm rounded-lg bg-secondary px-md py-2.5 font-label text-label-md font-medium text-secondary-foreground transition-colors active:scale-95"
        aria-label={`Detalhes do item ${item.sku}`}
      >
        Detalhes
      </button>
    );

  return (
    <article className={cardClass}>
      <div className="flex items-start justify-between gap-sm">
        <div className="min-w-0 flex-1">
          <h3 className={skuClass}>{item.sku}</h3>
          <p className="line-clamp-1 font-sans text-body-md text-muted-foreground">{item.descricao}</p>
        </div>
        {statusChip}
      </div>
      <div className="flex items-end justify-between gap-md">
        <div className="flex min-w-0 flex-col">
          <span className="font-label text-label-sm uppercase tracking-tight text-outline">
            Quantidade Alvo
          </span>
          <span className="font-sans text-lg font-bold leading-tight text-foreground">{formatQuantidade(item)}</span>
        </div>
        {actionButton}
      </div>
    </article>
  );
};
