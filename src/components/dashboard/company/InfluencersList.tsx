export default function CampaignsList() {
    const campaigns = [
      {
        id: 1,
        name: 'Summer Collection Launch',
        influencers: 8,
        progress: 75,
        dueDate: '2024-02-28',
        budget: '$12,000',
        status: 'active'
      },
      // Add more campaigns...
    ];
  
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>
  
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{campaign.name}</h3>
                  <p className="text-sm text-gray-500">
                    {campaign.influencers} influencers
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
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
  
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-500">
                  Due: {new Date(campaign.dueDate).toLocaleDateString()}
                </span>
                <span className="font-medium">{campaign.budget}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  