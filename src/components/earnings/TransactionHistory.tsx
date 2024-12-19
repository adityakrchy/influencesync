// src/components/earnings/TransactionHistory.tsx
interface Transaction {
    id: string
    date: string
    description: string
    amount: string
    status: 'completed' | 'pending' | 'failed'
    campaign: string
  }
  
  interface TransactionHistoryProps {
    filterStatus: string
  }
  
  export function TransactionHistory({ filterStatus }: TransactionHistoryProps) {
    const transactions: Transaction[] = [
      {
        id: '1',
        date: '2024-02-15',
        description: 'Summer Collection Campaign',
        amount: '$1,500',
        status: 'completed',
        campaign: 'Fashion Brand X'
      },
      // Add more transactions...
    ]
  
    const filteredTransactions = filterStatus === 'all'
      ? transactions
      : transactions.filter(t => t.status === filterStatus)
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.campaign}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${transaction.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                    ${transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${transaction.status === 'failed' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }