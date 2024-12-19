// src/components/dashboard/RecentCampaigns.tsx
export function RecentCampaigns() {
    const campaigns = [
      {
        id: 1,
        name: 'Summer Collection Launch',
        brand: 'Fashion Brand X',
        status: 'active',
        progress: 75,
        dueDate: '2024-02-28',
      },
      // Add more campaigns...
    ]
  
    return (
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {campaign.name}
                </h4>
                <p className="text-sm text-gray-500">{campaign.brand}</p>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  campaign.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {campaign.status}
              </span>
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
              <span className="text-gray-500">
                Due: {new Date(campaign.dueDate).toLocaleDateString()}
              </span>
              <button className="text-blue-600 hover:text-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }