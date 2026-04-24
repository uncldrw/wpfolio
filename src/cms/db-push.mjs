#!/usr/bin/env node
/**
 * db-push.mjs - Runs Payload's pushDevSchema to create/update DB tables
 * This bypasses the NODE_ENV=production check in connect.js
 */
import { getPayload } from 'payload';
// tsx compiles payload.config.ts as CJS, so the ESM default import receives
// { default: buildConfig(...) } rather than the Promise directly.
import _config from './src/payload.config.ts';
const config = _config?.default ?? _config;

async function main() {
  console.log('[db-push] Initializing Payload to push schema...');
  
  // Force the push flag
  process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = 'true';
  // Temporarily pretend we're in development for the DB connect check
  const originalEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = 'development';
  
  try {
    const payload = await getPayload({ config });
    console.log('[db-push] Schema pushed successfully!');
    await payload.db.destroy?.();
  } catch (err) {
    console.error('[db-push] Error:', err.message);
    process.exit(1);
  } finally {
    process.env.NODE_ENV = originalEnv;
  }
  
  process.exit(0);
}

main();
