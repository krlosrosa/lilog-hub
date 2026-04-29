import { Icon } from '@/components/Icon';

export const RecuperacaoHeader = () => {
  const handleMenuPress = () => {
    /* tela estática — sem navegação */
  };

  const handleNotificationsPress = () => {
    /* tela estática — sem ação */
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background px-margin-mobile py-3">
      <div className="flex items-center gap-md">
        <button
          type="button"
          onClick={handleMenuPress}
          className="active:scale-95 rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent"
          aria-label="Abrir menu"
        >
          <Icon name="menu" className="text-xl" />
        </button>
        <h1 className="font-sans text-lg font-semibold text-primary">Recuperação de Avaria</h1>
      </div>
      <button
        type="button"
        onClick={handleNotificationsPress}
        className="active:scale-95 rounded-full p-2 text-primary transition-transform duration-150 hover:bg-accent"
        aria-label="Notificações"
      >
        <Icon name="notifications" className="text-xl" />
      </button>
    </header>
  );
};
