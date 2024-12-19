// src/components/dashboard/charts/PerformanceChart.tsx
'use client'

import { Card, AreaChart } from '@tremor/react'

const chartdata = [
  {
    date: '2023-01-01',
    Followers: 2890,
    Engagement: 2338,
  },
  // Add more data points...
]

export function PerformanceChart() {
  return (
    <Card>
      <h3 className="text-lg font-medium mb-4">Performance Overview</h3>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={['Followers', 'Engagement']}
        colors={['blue', 'purple']}
      />
    </Card>
  )
}