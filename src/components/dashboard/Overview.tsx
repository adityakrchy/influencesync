// src/components/dashboard/Overview.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  BarChart, 
  DollarSign, 
  Users, 
  TrendingUp,
  ShoppingBag,
  Activity
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { PerformanceChart } from './charts/PerformanceChart'
import { RecentCampaigns } from './RecentCampaigns'
import { RecentActivities } from './RecentActivities'

const statsCards = [
  {
    title: 'Total Followers',
    value: '24.5K',
    change: '+12%',
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Total Earnings',
    value: '$12,450',
    change: '+8%',
    icon: DollarSign,
    color: 'green',
  },
  {
    title: 'Active Campaigns',
    value: '8',
    change: '+2',
    icon: ShoppingBag,
    color: 'purple',
  },
  {
    title: 'Engagement Rate',
    value: '4.2%',
    change: '+0.3%',
    icon: Activity,
    color: 'yellow',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function DashboardOverview() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 pt-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, John! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your campaigns today.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <select className="form-select rounded-lg border-gray-300 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 12 months</option>
          </select>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat, index) => (
          <motion.div key={stat.title} variants={item}>
            <Card className="hover:shadow-md transition-shadow">
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
                    <p className="text-sm text-green-600">
                      {stat.change} from last month
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Performance Overview
              </h3>
              <PerformanceChart />
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Recent Campaigns
              </h3>
              <RecentCampaigns />
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div variants={item}>
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            <RecentActivities />
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}