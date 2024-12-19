'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/price' },
  ]
  const authLinks = [
    { name: 'Sign in', href: '/signin' },
    { name: 'Sign up', href: '/signup' },
  ]

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash) // Set the active hash when hash changes
    }

    // Set the initial hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-white">
              <span className="text-2xl font-extrabold tracking-wide">InfluenceSync</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href.includes('#') && activeHash === item.href.split('#')[1])
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium transition duration-300 rounded-md ${
                    isActive
                      ? 'text-white bg-blue-700'
                      : 'text-gray-200 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Authentication Buttons */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              href={authLinks[0].href}
              className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium"
            >
              {authLinks[0].name}
            </Link>
            <Link
              href={authLinks[1].href}
              className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100"
            >
              {authLinks[1].name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-blue-600 hover:text-white"
            >
              <span>{isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                )}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href.includes('#') && activeHash === item.href.split('#')[1])
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? 'text-white bg-blue-700'
                      : 'text-gray-200 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          <div className="border-t border-blue-700 px-2 pt-4 pb-3">
            <Link
              href={authLinks[0].href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-blue-600 hover:text-white"
            >
              {authLinks[0].name}
            </Link>
            <Link
              href={authLinks[1].href}
              className="mt-1 block rounded-md bg-white px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-100"
            >
                {authLinks[1].name}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
