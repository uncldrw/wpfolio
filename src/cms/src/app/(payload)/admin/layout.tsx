import type { Metadata } from 'next'
import { RootLayout, metadata as rootMetadata } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import React from 'react'
import '@payloadcms/next/dist/prod/styles.css'

export const metadata: Metadata = rootMetadata

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout config={configPromise}>{children}</RootLayout>
}
