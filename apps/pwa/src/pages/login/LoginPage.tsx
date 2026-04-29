import type { FormEvent } from 'react';

import { Icon } from '@/components/Icon';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

export const LoginPage = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background p-margin-mobile">
      <main className="w-full max-w-md">
        <div className="flex flex-col gap-xl rounded-lg border border-outline-variant bg-card p-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col items-center gap-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-container shadow-lg shadow-primary/20">
              <Icon name="inventory_2" className="text-[32px] text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="font-sans text-headline-lg text-foreground tracking-tight">
                WMS Logistics
              </h1>
              <p className="font-sans text-body-md text-muted-foreground">
                Central Distribution Hub
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
            <div className="space-y-gutter">
              <div className="flex flex-col gap-xs">
                <label
                  className="px-xs font-label text-label-md text-muted-foreground"
                  htmlFor="username"
                >
                  Usuário
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-md">
                    <Icon
                      name="person"
                      className="text-[20px] text-outline transition-colors group-focus-within:text-primary"
                    />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Digite o ID do operador"
                    autoComplete="username"
                    className="h-12 w-full rounded border border-outline-variant bg-background py-0 pl-11 pr-md font-sans text-body-md text-foreground placeholder:text-outline-variant transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label
                  className="px-xs font-label text-label-md text-muted-foreground"
                  htmlFor="password"
                >
                  Senha
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-md">
                    <Icon
                      name="lock"
                      className="text-[20px] text-outline transition-colors group-focus-within:text-primary"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="h-12 w-full rounded border border-outline-variant bg-background py-0 pl-11 pr-md font-sans text-body-md text-foreground placeholder:text-outline-variant transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="mt-gutter flex flex-col gap-xs">
                <label
                  className="px-xs font-label text-label-md text-muted-foreground"
                  htmlFor="unit"
                >
                  Unidade
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-md">
                    <Icon
                      name="location_on"
                      className="text-[20px] text-outline transition-colors group-focus-within:text-primary"
                    />
                  </div>
                  <select
                    id="unit"
                    name="unit"
                    defaultValue=""
                    aria-label="Selecionar unidade"
                    className="h-12 w-full appearance-none rounded border border-outline-variant bg-background py-0 pl-11 pr-md font-sans text-body-md text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option disabled value="">
                      Selecionar Unidade
                    </option>
                    <option value="hub-01">Central Distribution Hub</option>
                    <option value="wh-north">North Warehouse</option>
                    <option value="wh-south">South Warehouse</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-md">
                    <Icon name="expand_more" className="text-[20px] text-outline" />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex h-[52px] w-full shrink-0 items-center justify-center gap-sm rounded-lg bg-primary-container font-sans text-headline-md text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-150 active:scale-95"
            >
              Acessar
              <Icon name="login" className="text-[20px]" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-sm opacity-50">
            <div className="h-1 rounded-full bg-accent" />
            <div className="h-1 rounded-full bg-surface-high" />
          </div>
        </div>
      </main>
    </div>
  );
};
