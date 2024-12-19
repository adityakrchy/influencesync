// src/components/messages/MessageInterface.tsx
'use client'

import { useState } from 'react'
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react'
import { motion } from 'framer-motion'

interface Message {
  id: string
  content: string
  timestamp: string
  sender: 'user' | 'other'
  read: boolean
}

interface Contact {
  id: string
  name: string
  avatar: string
  status: 'online' | 'offline'
  lastMessage: string
  unreadCount?: number
  lastSeen?: string
}

export default function MessageInterface() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [message, setMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Fashion Brand X',
      avatar: 'https://ui-avatars.com/api/?name=Fashion+Brand+X',
      status: 'online',
      lastMessage: "Let's discuss the campaign details",
      unreadCount: 3,
      lastSeen: 'just now'
    },
    {
      id: '2',
      name: 'Beauty Company Y',
      avatar: 'https://ui-avatars.com/api/?name=Beauty+Company+Y',
      status: 'offline',
      lastMessage: 'Thanks for your proposal',
      lastSeen: '2 hours ago'
    },
    // Add more contacts...
  ]

  const messages: Message[] = [
    {
      id: '1',
      content: "Hi! I'd like to discuss a potential collaboration",
      timestamp: '10:00 AM',
      sender: 'other',
      read: true
    },
    {
      id: '2',
      content: "Sure! I'd love to hear about your campaign",
      timestamp: '10:02 AM',
      sender: 'user',
      read: true
    },
    // Add more messages...
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return
    // Add logic to send message
    setMessage('')
  }

  return (
    <div className="h-[calc(100vh-4rem)] pt-10 flex">
      {/* Contacts Sidebar */}
      <div className="w-80 border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {contacts.map((contact) => (
            <motion.button
              key={contact.id}
              whileHover={{ backgroundColor: '#F3F4F6' }}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 flex items-center space-x-4 border-b border-gray-100
                ${selectedContact?.id === contact.id ? 'bg-blue-50' : ''}
              `}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full"
                />
                {contact.status === 'online' && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {contact.lastSeen}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unreadCount && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                  {contact.unreadCount}
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {selectedContact ? (
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium">{selectedContact.name}</h2>
                <p className="text-sm text-gray-500">
                  {selectedContact.status === 'online' ? 'Online' : selectedContact.lastSeen}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Phone className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Video className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{msg.content}</p>
                  <div
                    className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage()
                }}
              />
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Smile className="h-5 w-5 text-gray-500" />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty State
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-lg font-medium text-gray-900">
              Select a conversation
            </h3>
            <p className="text-sm text-gray-500">
              Choose a contact to start messaging
            </p>
          </div>
        </div>
      )}
    </div>
  )
}