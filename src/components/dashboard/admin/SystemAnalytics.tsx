'use client';

import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SystemAnalytics() {
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Influencers',
        data: [150, 180, 220, 280, 350, 400],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      },
      {
        label: 'Companies',
        data: [100, 120, 150, 180, 220, 250],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
      }
    ]
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Platform Revenue',
        data: [15000, 18000, 22000, 25000, 28000, 32000],
        backgroundColor: 'rgb(59, 130, 246)',
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">System Analytics</h2>
        <button className="text-blue-600 text-sm">Download Report</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            User Growth
          </h3>
          <Line
            data={userGrowthData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>

        {/* Revenue Chart */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Platform Revenue
          </h3>
          <Bar
            data={revenueData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => `$${value}`
                  }
                },
              },
            }}
          />
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Server Uptime</p>
          <p className="text-xl font-semibold">99.9%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">API Requests</p>
          <p className="text-xl font-semibold">1.2M/day</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Response Time</p>
          <p className="text-xl font-semibold">145ms</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Error Rate</p>
          <p className="text-xl font-semibold">0.02%</p>
        </div>
      </div>
    </div>
  );
}