# Build context = repo root (siehe docker-compose.yml)
FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

# ---- deps: install workspace deps für CMS ----
FROM base AS deps
COPY pnpm-workspace.yaml package.json .npmrc pnpm-lock.yaml ./
COPY src/cms/package.json ./src/cms/
COPY src/frontend/package.json ./src/frontend/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --filter @wpfolio/cms... --frozen-lockfile

# ---- builder: kompiliere CMS ----
FROM base AS builder
COPY --from=deps /app /app
COPY src/cms ./src/cms
WORKDIR /app/src/cms
RUN pnpm run build

# ---- deploy: schlanker prod-Bundle ----
FROM base AS deploy
COPY --from=builder /app /app
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm --filter @wpfolio/cms deploy --prod /prod/cms

# ---- runner ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
COPY --from=deploy /prod/cms ./
COPY --from=builder /app/src/cms/.next ./.next
COPY --from=builder /app/src/cms/src ./src
COPY --from=builder /app/src/cms/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src/cms/db-push.mjs ./db-push.mjs
COPY src/cms/start.sh ./start.sh
RUN chmod +x ./start.sh
# Patch @next/env to add .default export for tsx CJS/ESM interop in db-push.mjs.
# tsx transforms ESM `import x from '@next/env'` to CJS `require('@next/env').default`,
# but @next/env only exports module.exports (no .default). This one-liner adds it.
RUN node -e "\
const fs=require('fs'),\
p='./node_modules/@next/env/dist/index.js',\
c=fs.readFileSync(p,'utf8');\
if(!c.includes('module.exports.default=')){\
  fs.writeFileSync(p,c+'\nmodule.exports.default=module.exports;\n');\
  console.log('Patched @next/env');\
}else{console.log('@next/env already patched');}"
EXPOSE 3000
CMD ["./start.sh"]
