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
