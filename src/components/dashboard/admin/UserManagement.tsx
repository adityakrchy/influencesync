'use client';

import { useState } from 'react';
import { Users, DollarSign, BarChart, Shield } from 'lucide-react';
import { StatCard } from '../shared/Stats';
import UserManagement from './UserManagement';
import ContentModeration from './ContentModeration';
import SystemAnalytics from './SystemAnalytics';

export default function AdminDashboard() {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500">Platform overview and management</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="rounded-lg border-gray-300"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 3 months</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="12,345"
          change="+156 this month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Platform Revenue"
          value="$45,678"
          change="+12% from last month"
          icon={<DollarSign className="h-6 w-6 text-green-600" />}
        />
        <StatCard
          title="Active Campaigns"
          value="234"
          change="45 pending review"
          icon={<BarChart className="h-6 w-6 text-purple-600" />}
        />
        <StatCard
          title="Content Reports"
          value="18"
          change="12 new reports"
          icon={<Shield className="h-6 w-6 text-red-600" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserManagement />
        <ContentModeration />
      </div>

      {/* Analytics Section */}
      <SystemAnalytics />
    </div>
  );
}