// src/components/messages/MessageNotification.tsx
interface MessageNotificationProps {
    message: {
      sender: string
      content: string
      timestamp: string
    }
  }
  
  export function MessageNotification({ message }: MessageNotificationProps) {
    return (
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={`https://ui-avatars.com/api/?name=${message.sender}`}
                alt=""
              />
            </div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {message.sender}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {message.content}
              </p>
              <div className="mt-2 flex space-x-3">
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Reply
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-500">
                  Mark as read
                </button>
              </div>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <span className="text-xs text-gray-500">
                {message.timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }