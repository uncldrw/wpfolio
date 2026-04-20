#!/bin/sh
set -e

echo "[startup] Running DB schema push..."
node --import tsx/esm db-push.mjs || echo "[startup] Schema push failed (may be OK if tables exist)"

echo "[startup] Starting CMS server..."
exec npm start
