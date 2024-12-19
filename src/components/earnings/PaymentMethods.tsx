import { ChevronDown } from "lucide-react"

// src/components/earnings/PaymentMethods.tsx
export function PaymentMethods() {
    const paymentMethods = [
      {
        id: '1',
        type: 'bank_account',
        name: 'Bank Account',
        last4: '4242',
        isDefault: true,
      },
      {
        id: '2',
        type: 'paypal',
        name: 'PayPal',
        email: 'john@example.com',
        isDefault: false,
      },
    ]
  
    return (
      <div className="mt-4 space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {method.type === 'bank_account' ? (
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  🏦
                </div>
              ) : (
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  💳
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {method.name}
                </p>
                <p className="text-sm text-gray-500">
                  {method.type === 'bank_account' 
                    ? `****${method.last4}`
                    : method.email
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {method.isDefault && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Default
                </span>
              )}
              <button className="text-gray-400 hover:text-gray-500">
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
        
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Add Payment Method
        </button>
      </div>
    )
  }