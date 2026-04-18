import React from 'react'

// Root layout intentionally renders no html/body — each route group manages its own shell.
// The (payload) group uses Payload's RootLayout which provides html + body.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
