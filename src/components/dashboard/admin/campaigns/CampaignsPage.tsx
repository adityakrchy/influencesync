// src/components/dashboard/admin/Campaigns.tsx
'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Campaign {
  id: string;
  title: string;
  company: {
    name: string;
    logo: string;
  };
  influencers: number;
  budget: string;
  status: 'active' | 'pending' | 'completed' | 'rejected';
  startDate: string;
  endDate: string;
  performance: {
    reach: string;
    engagement: string;
  };
}

export default function AdminCampaigns() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Summer Collection Launch',
      company: {
        name: 'Fashion Brand X',
        logo: 'https://ui-avatars.com/api/?name=Fashion+Brand+X'
      },
      influencers: 8,
      budget: '$12,000',
      status: 'active',
      startDate: '2024-02-15',
      endDate: '2024-03-15',
      performance: {
        reach: '245K',
        engagement: '4.8%'
      }
    },
    // Add more campaigns...
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
          <p className="text-gray-500">Monitor and manage platform campaigns</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Export Report
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full rounded-lg border-gray-300"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border-gray-300"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={campaign.company.logo}
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {campaign.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {campaign.company.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {campaign.influencers} influencers • {campaign.budget}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${campaign.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : campaign.status === 'completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'}
                    `}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div>Reach: {campaign.performance.reach}</div>
                      <div>Engagement: {campaign.performance.engagement}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{new Date(campaign.startDate).toLocaleDateString()}</div>
                    <div>{new Date(campaign.endDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <XCircle className="h-4 w-4 text-red-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">50</span> campaigns
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}