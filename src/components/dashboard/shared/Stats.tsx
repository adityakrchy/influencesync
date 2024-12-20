interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    icon: React.ReactNode;
  }
  
  export function StatCard({ title, value, change, icon }: StatCardProps) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-blue-50">
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
            {change && (
              <p className="text-sm text-green-600">{change}</p>
            )}
          </div>
        </div>
      </div>
    );
  }