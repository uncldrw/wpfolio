import type { Metadata } from 'next'
import { RootLayout, metadata as rootMetadata } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import React from 'react'
import { serverFunction } from './serverFunctions'
import { importMap } from './importMap'

export const metadata: Metadata = rootMetadata

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={configPromise} serverFunction={serverFunction} importMap={importMap}>
      {children}
    </RootLayout>
  )
}
