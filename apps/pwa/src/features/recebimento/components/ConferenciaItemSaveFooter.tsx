import { Icon } from '@/components/Icon';



export const ConferenciaItemSaveFooter = () => {

  return (

    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-margin-mobile py-md backdrop-blur-md">

      <button

        type="button"

        className="flex min-h-btn w-full items-center justify-center gap-sm rounded-xl bg-primary-container font-sans text-headline-md font-semibold text-primary-foreground transition-transform active:scale-95"

        aria-label="Salvar conferência"

      >

        <Icon name="save" className="text-2xl" filled />

        Salvar Conferência

      </button>

    </footer>

  );

};


