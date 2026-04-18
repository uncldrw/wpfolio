import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:4321')
  .split(',')
  .map((o) => o.trim())

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Pages, Media, Users],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET ?? 'dev-secret-change-me',
  cors: allowedOrigins,
  csrf: allowedOrigins,
  typescript: {
    outputFile: './src/payload-types.ts',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? 'postgres://postgres:postgres@db:5432/payload',
    },
  }),
})
