// src/components/earnings/EarningsOverview.tsx
'use client'

import { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Download,
  ChevronDown,
  Filter,
  Eye
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { EarningsChart } from './EarningsChart'
import { TransactionHistory } from './TransactionHistory'
import { PaymentMethods } from './PaymentMethods'

export default function EarningsOverview() {
  const [timeframe, setTimeframe] = useState('month')
  const [filterStatus, setFilterStatus] = useState('all')

  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,450',
      change: '+8% from last month',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Pending Payments',
      value: '$2,150',
      change: '3 payments pending',
      icon: Calendar,
      color: 'yellow'
    },
    {
      title: 'Average Rate',
      value: '$850',
      change: 'per campaign',
      icon: TrendingUp,
      color: 'green'
    }
  ]

  return (
    <div className="space-y-6 pt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your earnings and payment history
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 3 months</option>
            <option value="year">Last 12 months</option>
          </select>
          
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
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

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Earnings Overview
            </h3>
            <EarningsChart timeframe={timeframe} />
          </div>
        </Card>

        <Card className="bg-white">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Payment Methods
            </h3>
            <PaymentMethods />
          </div>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Transaction History
            </h3>
            <div className="flex items-center space-x-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                <option value="all">All Transactions</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
          <TransactionHistory filterStatus={filterStatus} />
        </div>
      </Card>
    </div>
  )
}