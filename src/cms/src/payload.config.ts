import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Menus } from './collections/Menus'
import { Submissions } from './collections/Submissions'
import { PluginConfigs } from './collections/PluginConfigs'
import { SitemapConfig } from './globals/SitemapConfig'

const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:4321,https://dev.woistjason.de')
  .split(',')
  .map((o) => o.trim())

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://dev.woistjason.de',
  collections: [Posts, Pages, Media, Users, Menus, Submissions, PluginConfigs],
  globals: [SitemapConfig],
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
