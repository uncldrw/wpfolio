# wpfolio

Headless CMS + Astro Frontend — pnpm-Monorepo mit Docker.

## Stack

- **Frontend:** Astro 6 (SSR via @astrojs/node)
- **CMS:** Payload CMS v3 (Headless, REST + GraphQL API, Next.js-basiert)
- **Reverse Proxy:** Nginx
- **DB:** PostgreSQL 16
- **Package Manager:** pnpm Workspaces

## Struktur

```
src/
├── frontend/   # @wpfolio/frontend  (Astro)
├── cms/        # @wpfolio/cms       (Payload CMS)
└── nginx/      # Reverse Proxy (kein JS-Package)
docker-compose.yml
docker-compose.prod.yml
package.json          # Root-Workspace
pnpm-workspace.yaml
```

## Voraussetzungen

- Node.js >= 22.12
- pnpm >= 9 (`corepack enable && corepack prepare pnpm@9.12.3 --activate`)
- Docker + Docker Compose

## Erststart

```bash
cp .env.example .env
# .env mit sicheren Werten füllen

pnpm install        # Workspace-Deps lokal (für IDE/Intellisense)
pnpm run build      # Baut alle Docker-Images (cms, frontend, nginx)
pnpm run up         # Startet den kompletten Stack
```

## Build (alles)

```bash
pnpm run build           # docker compose build (cms + frontend + nginx)
pnpm run build:prod      # inkl. prod overrides
```

| Service | URL |
|---|---|
| Frontend | http://localhost:8080 |
| CMS Admin | http://localhost:8080/admin |
| CMS API | http://localhost:8080/api |

## Scripts

| Script | Beschreibung |
|---|---|
| `pnpm run build` | Baut alle Docker-Images (Reverse Proxy, CMS, Frontend) |
| `pnpm run build:prod` | Build mit prod overrides |
| `pnpm run build:cms` | Nur das CMS-Image |
| `pnpm run build:frontend` | Nur das Frontend-Image |
| `pnpm run build:nginx` | Nur das Nginx-Image |
| `pnpm run build:apps` | Lokale App-Builds (kein Docker) über alle Workspaces |
| `pnpm run dev` | Lokaler Dev-Modus für alle Workspaces parallel |
| `pnpm run dev:cms` | Nur CMS (lokal) |
| `pnpm run dev:frontend` | Nur Frontend (lokal) |
| `pnpm run up` | `docker compose up -d` |
| `pnpm run up:prod` | Prod-Stack starten |
| `pnpm run down` | Stack stoppen |
| `pnpm run logs` | Logs aller Container |

## Production

```bash
pnpm run build:prod
pnpm run up:prod
```
# wpfolio

Headless CMS + Astro frontend — monorepo with Docker.

## Stack

- **Frontend:** Astro 5 (static generation)
- **CMS:** Payload CMS v3 (Headless, REST + GraphQL API)
- **Proxy:** Nginx
- **DB:** PostgreSQL 16

## Structure

```
src/
├── frontend/   # Astro 5
├── cms/        # Payload CMS v3 (Next.js-based)
└── nginx/      # Reverse Proxy
docker-compose.yml
```

## Getting Started

```bash
cp .env.example .env
# Edit .env with secure values

docker compose up -d
```

| Service | URL |
|---|---|
| Frontend | http://localhost |
| CMS Admin | http://localhost/admin |
| CMS API | http://localhost/api |

## Production

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Development (local)

```bash
# CMS
cd src/cms && cp .env.example .env && npm install && npm run dev

# Frontend
cd src/frontend && npm install && npm run dev
```
