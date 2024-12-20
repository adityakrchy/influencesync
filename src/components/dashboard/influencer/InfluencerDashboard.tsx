'use client';

import { useState } from 'react';
import { Users, DollarSign, Star, BarChart } from 'lucide-react';
import { StatCard } from '../shared/Stats';
import CampaignOpportunities from './CampaignOpportunities';
import ContentManager from './ContentManager';
import EarningsTracker from './EarningsTracker';

export default function InfluencerDashboard() {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Influencer Dashboard</h1>
          <p className="text-gray-500">Track your performance and manage campaigns</p>
        </div>
        <div>
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
          title="Total Followers"
          value="24.5K"
          change="+12% from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Total Earnings"
          value="$12,450"
          change="+8% from last month"
          icon={<DollarSign className="h-6 w-6 text-green-600" />}
        />
        <StatCard
          title="Engagement Rate"
          value="4.2%"
          change="+0.3% from last month"
          icon={<Star className="h-6 w-6 text-yellow-600" />}
        />
        <StatCard
          title="Active Campaigns"
          value="3"
          change="2 pending approval"
          icon={<BarChart className="h-6 w-6 text-purple-600" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CampaignOpportunities />
        <ContentManager />
      </div>

      {/* Earnings Section */}
      <EarningsTracker />
    </div>
  );
}
