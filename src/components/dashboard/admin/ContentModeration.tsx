export default function ContentModeration() {
  const reports = [
    {
      id: 1,
      content: {
        type: 'post',
        preview: 'https://source.unsplash.com/random/400x400',
        author: 'Sarah Johnson'
      },
      reason: 'Inappropriate content',
      reportedBy: 'User123',
      date: '2024-02-15',
      status: 'pending'
    },
    // Add more reports...
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Content Moderation</h2>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>All Reports</option>
            <option>Pending</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-start space-x-4">
              <img
                src={report.content.preview}
                alt=""
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{report.content.author}</h3>
                    <p className="text-sm text-gray-500">
                      Reported by: {report.reportedBy}
                    </p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded-full text-xs
                    ${report.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                    }
                  `}>
                    {report.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Reason: {report.reason}
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm">
                    Remove Content
                  </button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">
                    Approve
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                    Review Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}