# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app

FROM base AS builder
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages
RUN pnpm install --frozen-lockfile
RUN pnpm turbo run build --filter=@lilo-wms/worker
RUN pnpm --filter=@lilo-wms/worker deploy /deploy --prod

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S -u 1001 -G nodejs nestjs
COPY --from=builder --chown=nestjs:nodejs /deploy ./
USER nestjs
CMD ["node", "dist/main.js"]
