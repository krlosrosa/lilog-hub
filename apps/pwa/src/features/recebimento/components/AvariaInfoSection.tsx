import { Icon } from '@/components/Icon';

const selectFieldClass =
  'min-h-btn w-full rounded-lg border border-outline-variant bg-surface px-md font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring';

export const AvariaInfoSection = () => {
  return (
    <section aria-labelledby="heading-avaria-info" className="flex flex-col gap-gutter">
      <div className="flex items-center gap-sm px-xs">
        <Icon name="info" className="text-xl text-primary" />
        <h2 id="heading-avaria-info" className="font-sans text-headline-md text-foreground">
          Informações da Avaria
        </h2>
      </div>
      <div className="flex flex-col gap-md rounded-lg border border-outline-variant bg-card p-md shadow-sm">
        <div className="flex flex-col gap-sm">
          <label htmlFor="avaria-tipo" className="ml-xs font-label text-label-md text-muted-foreground">
            Tipo de Avaria
          </label>
          <select
            id="avaria-tipo"
            className={selectFieldClass}
            defaultValue=""
            aria-label="Selecionar tipo de avaria"
          >
            <option value="">Selecione o tipo</option>
            <option value="quebra">Quebra/Ruptura</option>
            <option value="umidade">Umidade/Molhado</option>
            <option value="vencido">Vencimento</option>
            <option value="violado">Lacre Violado</option>
          </select>
        </div>
        <div className="flex flex-col gap-sm">
          <label htmlFor="avaria-natureza" className="ml-xs font-label text-label-md text-muted-foreground">
            Natureza
          </label>
          <select
            id="avaria-natureza"
            className={selectFieldClass}
            defaultValue=""
            aria-label="Selecionar natureza da avaria"
          >
            <option value="">Selecione a natureza</option>
            <option value="transporte">Dano no Transporte</option>
            <option value="armazenagem">Erro de Armazenagem</option>
            <option value="fabricacao">Defeito de Fabricação</option>
          </select>
        </div>
        <div className="flex flex-col gap-sm">
          <label htmlFor="avaria-ocorrencia" className="ml-xs font-label text-label-md text-muted-foreground">
            Ocorrência
          </label>
          <select
            id="avaria-ocorrencia"
            className={selectFieldClass}
            defaultValue=""
            aria-label="Selecionar ocorrência da avaria"
          >
            <option value="">Selecione a ocorrência</option>
            <option value="entrada">Recebimento</option>
            <option value="inventario">Inventário Cíclico</option>
            <option value="separacao">Separação/Picking</option>
          </select>
        </div>
      </div>
    </section>
  );
};
