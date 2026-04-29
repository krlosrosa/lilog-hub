# lilo-wms

Turborepo + pnpm: **api** (Nest), **web** (Next 15 + shadcn no `@lilo-wms/ui`), **pwa** (Vite + React PWA offline), **worker** (BullMQ + Redis).  

Pacotes: `@lilo-wms/db` (Drizzle), `types`, `auth`, `contracts`, `config-*`, `ui` (shadcn/ui).

## Setup

```bash
cp .env.example .env
pnpm install
pnpm build
pnpm dev
```

- **Postgres** e **Redis** são opcionais até você usar o DB ou filas; o worker tenta conexão preguiçosa (lazy) e não derruba o `dev` se o Redis estiver fora.
- **Drizzle:** `pnpm db:push` aplica o schema stub em `packages/db` (quando o Postgres estiver acessível).

## Adicionar componentes shadcn em `packages/ui`

A partir da raiz do monorepo (ajuste a flag `-c` se o CLI exigir):

```bash
pnpm dlx shadcn@latest add button -c packages/ui
```

Ou entre em `packages/ui` e use o [components.json](packages/ui/components.json) como base.

## Apps

| App   | Porta padrão |
| ----- | ------------ |
| web   | 3000         |
| pwa   | 5173         |
| api   | 4000         |
| worker| (processo)   |

## Scripts

| Comando | Descrição |
| ------- | --------- |
| `pnpm dev` | api + web + worker |
| `pnpm build` | build de tudo (depende de `^build`) |
| `pnpm --filter @lilo-wms/db db:push` | Drizzle push |
| `pnpm --filter @lilo-wms/pwa dev` | PWA (Vite) em modo desenvolvimento |
| `pnpm --filter @lilo-wms/pwa preview` | Pré-visualizar build de produção do PWA |
