'use client';

import { useAuth } from '@/lib/dashauth';
import { Bell, MessageSquare, Settings, LogOut } from 'lucide-react';

export default function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-blue-600">
            Influence Connect
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MessageSquare className="h-5 w-5 text-gray-600" />
          </button>
          <div className="relative">
            <button className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`}
                alt={user?.name}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                {user?.name}
              </span>
            </button>
            {/* Add dropdown menu here */}
          </div>
        </div>
      </div>
    </header>
  );
}