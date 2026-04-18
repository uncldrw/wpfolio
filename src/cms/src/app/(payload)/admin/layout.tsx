import type { Metadata } from 'next'
import { RootLayout, metadata as rootMetadata, handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import React from 'react'

export const metadata: Metadata = rootMetadata

export default async function Layout({ children }: { children: React.ReactNode }) {
  const serverFunctions = handleServerFunctions

  return (
    <RootLayout config={configPromise} serverFunctions={serverFunctions}>
      {children}
    </RootLayout>
  )
}
