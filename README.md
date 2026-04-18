# wpfolio

Headless WordPress + Nuxt frontend — monorepo with Docker.

## Stack

- **Frontend:** Nuxt 3
- **CMS:** WordPress (Headless via REST API / WPGraphQL)
- **Proxy:** Nginx
- **DB:** MariaDB

## Structure

```
src/
├── frontend/   # Nuxt 3
├── wordpress/  # WordPress (PHP-FPM)
└── nginx/      # Reverse Proxy
```

## Getting Started

```bash
cp .env.example .env
# Edit .env with your values

docker compose up -d
```

Frontend: http://localhost  
WordPress Admin: http://localhost/wp-admin

## Production

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
