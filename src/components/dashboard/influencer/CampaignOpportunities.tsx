export default function CampaignOpportunities() {
    const opportunities = [
      {
        id: 1,
        brand: 'Fashion Brand X',
        campaign: 'Summer Collection Launch',
        budget: '$2,500',
        requirements: 'Photo + Story',
        deadline: '2024-02-28',
        status: 'new'
      },
      // Add more opportunities...
    ];
  
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Campaign Opportunities</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>
  
        <div className="space-y-4">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{opportunity.brand}</h3>
                  <p className="text-sm text-gray-500">{opportunity.campaign}</p>
                </div>
                {opportunity.status === 'new' && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    New
                  </span>
                )}
              </div>
  
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Budget:</span>
                  <span className="ml-2 font-medium">{opportunity.budget}</span>
                </div>
                <div>
                  <span className="text-gray-500">Required:</span>
                  <span className="ml-2">{opportunity.requirements}</span>
                </div>
              </div>
  
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  