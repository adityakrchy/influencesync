'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle, XCircle } from 'lucide-react';

export default function UserManagement() {
  const [userType, setUserType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      type: 'influencer',
      status: 'active',
      verified: true,
      joinDate: '2024-01-15'
    },
    // Add more users...
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">User Management</h2>
        <button className="text-blue-600 text-sm">View All Users</button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="border border-gray-300 rounded-lg px-4"
        >
          <option value="all">All Users</option>
          <option value="influencer">Influencers</option>
          <option value="company">Companies</option>
          <option value="admin">Admins</option>
        </select>
      </div>

      {/* Users List */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-3 font-medium">User</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Joined</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="text-sm">
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.name}`}
                      alt=""
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="capitalize">{user.type}</span>
                </td>
                <td className="py-4">
                  <span className={`
                    px-2 py-1 rounded-full text-xs
                    ${user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    }
                  `}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4">
                  {new Date(user.joinDate).toLocaleDateString()}
                </td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}