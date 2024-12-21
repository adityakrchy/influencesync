'use client';

import { useState } from 'react';
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
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CompanyAnalytics() {
  const [timeframe, setTimeframe] = useState('month');

  // Mock Data
  const generateData = (timeframe: string) => {
    const labels =
      timeframe === 'month'
        ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: labels.map(() => Math.floor(Math.random() * 10000) + 5000),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true,
        },
        {
          label: 'Expenses',
          data: labels.map(() => Math.floor(Math.random() * 5000) + 2000),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: true,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Company Analytics',
      },
    },
  };

  const chartData = generateData(timeframe);

  return (
    <div className="space-y-6 px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800">Company Analytics</h1>
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${timeframe === 'month' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          onClick={() => setTimeframe('month')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-md ${timeframe === 'year' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          onClick={() => setTimeframe('year')}
        >
          Yearly
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue vs. Expenses (Line Chart)</h2>
          <Line data={chartData} options={options} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue vs. Expenses (Bar Chart)</h2>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
