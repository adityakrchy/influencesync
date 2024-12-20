'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function EarningsTracker() {
  const earnings = [
    {
      id: 1,
      campaign: 'Fashion Brand X',
      amount: '$2,500',
      status: 'paid',
      date: '2024-02-15'
    },
    // Add more earnings...
  ];

  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [1500, 2300, 1800, 2500, 2800, 3200],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Earnings Overview</h2>
        <button className="text-blue-600 text-sm">Download Report</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <div>
          <Line
            data={earningsData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
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

        {/* Recent Transactions */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {earnings.map((earning) => (
              <div
                key={earning.id}
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{earning.campaign}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(earning.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{earning.amount}</p>
                  <p className="text-sm text-gray-500">{earning.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <p className="text-xl font-semibold">$12,450</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Pending Payments</p>
          <p className="text-xl font-semibold">$3,200</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Average per Campaign</p>
          <p className="text-xl font-semibold">$2,100</p>
        </div>
      </div>
    </div>
  );
}