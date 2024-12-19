'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/common/Navbar'

export default function ConditionalNavbarWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const hideNavbar = pathname?.startsWith('/dashboard')

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  )
}
