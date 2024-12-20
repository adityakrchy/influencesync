'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserRole } from '@/types';

interface SidebarProps {
  userRole: UserRole;
}

export default function DashboardSidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = {
    company: [
      { label: 'Dashboard', path: '/company' },
      { label: 'Campaigns', path: '/company/campaigns' },
      { label: 'Discover', path: '/company/discover' },
      { label: 'Messages', path: '/company/messages' },
      { label: 'Analytics', path: '/company/analytics' },
      { label: 'Settings', path: '/company/settings' },
    ],
    influencer: [
      { label: 'Dashboard', path: '/influencer' },
      { label: 'Campaigns', path: '/influencer/campaigns' },
      { label: 'Content', path: '/influencer/content' },
      { label: 'Earnings', path: '/influencer/earnings' },
      { label: 'Messages', path: '/influencer/messages' },
      { label: 'Settings', path: '/influencer/settings' },
    ],
    admin: [
      { label: 'Dashboard', path: '/admin' },
      { label: 'Users', path: '/admin/users' },
      { label: 'Campaigns', path: '/admin/campaigns' },
      { label: 'Content', path: '/admin/content' },
      { label: 'Analytics', path: '/admin/analytics' },
      { label: 'Settings', path: '/admin/settings' },
    ],
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <nav className="p-4 space-y-1">
        {menuItems[userRole].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`
              flex items-center px-4 py-2 text-sm font-medium rounded-lg
              ${pathname === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
