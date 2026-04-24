# Build context = repo root (siehe docker-compose.yml)
FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# ---- deps ----
FROM base AS deps
COPY pnpm-workspace.yaml package.json .npmrc pnpm-lock.yaml ./
COPY src/cms/package.json ./src/cms/
COPY src/frontend/package.json ./src/frontend/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --filter @wpfolio/frontend... --frozen-lockfile

# ---- builder ----
FROM base AS builder
COPY --from=deps /app /app
COPY src/frontend ./src/frontend
WORKDIR /app/src/frontend
RUN pnpm run build

# ---- deploy ----
FROM base AS deploy
COPY --from=builder /app /app
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm --filter @wpfolio/frontend deploy --prod /prod/frontend

# ---- runner ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
COPY --from=deploy /prod/frontend ./
COPY --from=builder /app/src/frontend/dist ./dist
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
