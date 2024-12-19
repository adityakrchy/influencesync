// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalNavbarWrapper from '@/components/ConditionalNavbarWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Influence Sync',
  description: 'Connect brands with influencers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalNavbarWrapper>{children}</ConditionalNavbarWrapper>
      </body>
    </html>
  )
}