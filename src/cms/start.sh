#!/bin/sh
set -e

echo "[startup] Pushing database schema..."
node /app/node_modules/.bin/tsx /app/db-push.mjs

echo "[startup] Starting CMS server..."
exec pnpm start
