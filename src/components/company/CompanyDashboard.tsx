// src/components/company/CompanyDashboard.tsx
'use client'

import { useState } from 'react'
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  BarChart,
  Search,
  Filter,
  Plus,
  Calendar,
  MessageCircle,
  Bell,
  ChevronDown,
  ExternalLink,
  Star
} from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function CompanyDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  return (
    <div className="space-y-8 pt-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Company Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your influencer marketing campaigns and track performance
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="block rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 3 months</option>
            <option value="year">Last 12 months</option>
          </select>

          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            title: 'Active Campaigns',
            value: '12',
            change: '+2 from last month',
            icon: BarChart,
            color: 'blue',
          },
          {
            title: 'Total Reach',
            value: '2.4M',
            change: '+15% from last month',
            icon: Users,
            color: 'green',
          },
          {
            title: 'Engagement Rate',
            value: '4.8%',
            change: '+0.5% from last month',
            icon: TrendingUp,
            color: 'purple',
          },
          {
            title: 'Budget Spent',
            value: '$45,678',
            change: '68% of total budget',
            icon: DollarSign,
            color: 'yellow',
          },
        ].map((stat) => (
          <Card key={stat.title} className="bg-white">
            <div className="p-6">
              <div className="flex items-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Campaigns */}
        <Card className="bg-white">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Active Campaigns</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'Summer Collection Launch',
                  influencers: 8,
                  progress: 75,
                  endDate: '2024-02-28',
                  budget: '$12,000',
                },
                {
                  title: 'Brand Awareness Campaign',
                  influencers: 12,
                  progress: 45,
                  endDate: '2024-03-15',
                  budget: '$18,000',
                },
                // Add more campaigns...
              ].map((campaign) => (
                <div
                  key={campaign.title}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {campaign.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {campaign.influencers} influencers
                      </p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-500">
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      Due: {new Date(campaign.endDate).toLocaleDateString()}
                    </div>
                    <div className="font-medium text-gray-900">
                      {campaign.budget}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h2>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {[
                  {
                    type: 'campaign',
                    content: 'New campaign request from Fashion Brand X',
                    time: '2 hours ago',
                    icon: Plus,
                  },
                  {
                    type: 'message',
                    content: 'Sarah Johnson accepted your campaign invitation',
                    time: '4 hours ago',
                    icon: MessageCircle,
                  },
                  {
                    type: 'notification',
                    content: 'Campaign "Summer Collection" reached 1M impressions',
                    time: '8 hours ago',
                    icon: Bell,
                  },
                  // Add more activities...
                ].map((activity, activityIdx) => (
                  <li key={activityIdx}>
                    <div className="relative pb-8">
                      {activityIdx !== 3 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <activity.icon className="h-5 w-5 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {activity.content}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time>{activity.time}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Influencers */}
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Top Performing Influencers</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search influencers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Influencer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reach
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ROI
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    name: 'Sarah Johnson',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                    category: 'Fashion & Lifestyle',
                    reach: '1.2M',
                    engagement: '4.8%',
                    roi: '3.2x',
                  },
                  // Add more influencers...
                ].map((influencer) => (
                  <tr key={influencer.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={influencer.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {influencer.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {influencer.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {influencer.reach}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {influencer.engagement}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {influencer.roi}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  )
}