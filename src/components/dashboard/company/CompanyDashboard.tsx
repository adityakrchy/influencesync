'use client';

import { useState } from 'react';
import { BarChart, Users, DollarSign, TrendingUp } from 'lucide-react';
import { StatCard } from '../shared/Stats';
import CampaignsList from './CampaignsList';
import InfluencersList from './InfluencersList';
import Analytics from './Analytics';

export default function CompanyDashboard() {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening</p>
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Create Campaign
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Campaigns"
          value="12"
          change="+2 from last month"
          icon={<BarChart className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Total Reach"
          value="2.4M"
          change="+15% from last month"
          icon={<Users className="h-6 w-6 text-green-600" />}
        />
        <StatCard
          title="Budget Spent"
          value="$45,678"
          change="68% of total budget"
          icon={<DollarSign className="h-6 w-6 text-yellow-600" />}
        />
        <StatCard
          title="Engagement Rate"
          value="4.8%"
          change="+0.5% from last month"
          icon={<TrendingUp className="h-6 w-6 text-purple-600" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CampaignsList />
        <InfluencersList />
      </div>

      {/* Analytics Section */}
      <Analytics />
    </div>
  );
}