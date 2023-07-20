import '@/styles/globals.css'
import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'MEV-AI',
  description: 'AI Platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
