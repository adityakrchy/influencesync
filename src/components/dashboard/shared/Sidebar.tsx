'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserRole } from '@/types';
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

interface SidebarProps {
  userRole: UserRole;
}

export default function DashboardSidebar({ userRole }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = {
    company: [
      { label: 'Dashboard', path: '/dashboard/company', icon: '📊' },
      { label: 'Campaigns', path: '/dashboard/company/campaigns', icon: '📱' },
      { label: 'Discover', path: '/dashboard/company/discover', icon: '🔍' },
      { label: 'Messages', path: '/dashboard/company/messages', icon: '💬' },
      { label: 'Analytics', path: '/dashboard/company/analytics', icon: '📈' },
      { label: 'Settings', path: '/dashboard/company/settings', icon: '⚙️' },
    ],
    influencer: [
      { label: 'Dashboard', path: '/dashboard/influencer', icon: '📊' },
      { label: 'Campaigns', path: '/dashboard/influencer/campaigns', icon: '📱' },
      { label: 'Content', path: '/dashboard/influencer/content', icon: '📸' },
      { label: 'Earnings', path: '/dashboard/influencer/earnings', icon: '💰' },
      { label: 'Messages', path: '/dashboard/influencer/messages', icon: '💬' },
      { label: 'Settings', path: '/dashboard/influencer/settings', icon: '⚙️' },
    ],
    admin: [
      { label: 'Dashboard', path: '/dashboard/admin', icon: '📊' },
      { label: 'Users', path: '/dashboard/admin/users', icon: '👥' },
      { label: 'Campaigns', path: '/dashboard/admin/campaigns', icon: '📱' },
      { label: 'Content', path: '/dashboard/admin/content', icon: '📸' },
      { label: 'Analytics', path: '/dashboard/admin/analytics', icon: '📈' },
      { label: 'Settings', path: '/dashboard/admin/settings', icon: '⚙️' },
    ],
  };

  return (
    <>
    {/* Mobile Menu Button */}
    <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
  >
    {isMobileMenuOpen ? (
      <X className="h-6 w-6 text-gray-600" />
    ) : (
      <Menu className="h-6 w-6 text-gray-600" />
    )}
  </button>

  {/* Mobile Menu Overlay */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    )}
  </AnimatePresence>

  {/* Sidebar Content */}
  <motion.aside
    className={`
      fixed top-0 left-0 z-40 h-full w-64 bg-white border-r border-gray-200
      transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:static
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    `}
  >
    <div className="h-full px-4 py-6 overflow-y-auto">
      {/* Navigation */}
      <nav className="space-y-1">
        {menuItems[userRole].map((item) => (
          <NavItem
            key={item.path}
            href={item.path}
            icon={item.icon}
            active={pathname === item.path}
          >
            {item.label}
          </NavItem>
        ))}
      </nav>

      {/* Mobile Menu Footer */}
      <div className="mt-auto pt-8 lg:hidden">
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
          <button
            onClick={() => {/* Handle logout */}}
            className="mt-4 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </motion.aside>
</>
)
}

function NavItem({ 
href, 
icon, 
children, 
active 
}: {
href: string;
icon: string;
children: React.ReactNode;
active?: boolean;
}) {
return (
<Link
  href={href}
  className={`
    flex items-center px-4 py-2.5 text-sm font-medium rounded-lg
    transition-colors duration-200
    ${active 
      ? 'bg-blue-50 text-blue-600' 
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }
  `}
>
  <span className="mr-3 text-lg">{icon}</span>
  {children}
</Link>
)
}