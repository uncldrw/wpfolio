// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import node from '@astrojs/node'

export default defineConfig({
  site: 'https://woistjason.de',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['dev.woistjason.de', 'localhost'],
    },
  },
  env: {
    schema: {
      CMS_URL: envField.string({
        context: 'server',
        access: 'secret',
        default: 'http://localhost:3000',
      }),
    },
  },
})
