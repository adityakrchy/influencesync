// src/components/dashboard/admin/Content.tsx
'use client';

import { useState } from 'react';
import { Search, Filter, Flag, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'post' | 'story' | 'video';
  mediaUrl: string;
  creator: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  campaign?: string;
  reportReason?: string;
  reportedBy?: string;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
}

export default function AdminContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState('all');
  const [moderationStatus, setModerationStatus] = useState('pending');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      type: 'post',
      mediaUrl: 'https://source.unsplash.com/random/800x800?1',
      creator: {
        name: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
        verified: true
      },
      campaign: 'Summer Collection',
      reportReason: 'Inappropriate content',
      reportedBy: 'User123',
      status: 'pending',
      timestamp: '2024-02-15T10:00:00Z'
    },
    // Add more content items...
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Moderation</h1>
          <p className="text-gray-500">Review and moderate platform content</p>
        </div>
        <div className="flex gap-2">
          <select
            value={moderationStatus}
            onChange={(e) => setModerationStatus(e.target.value)}
            className="rounded-lg border-gray-300"
          >
            <option value="pending">Pending Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full rounded-lg border-gray-300"
          />
        </div>
        <select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          className="rounded-lg border-gray-300"
        >
          <option value="all">All Types</option>
          <option value="post">Posts</option>
          <option value="story">Stories</option>
          <option value="video">Videos</option>
        </select>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            {/* Media Preview */}
            <div className="aspect-square">
              <img
                src={item.mediaUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.creator.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="ml-2">
                    <div className="text-sm font-medium">{item.creator.name}</div>
                    {item.campaign && (
                      <div className="text-xs text-gray-500">{item.campaign}</div>
                    )}
                  </div>
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded-full
                  ${item.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : item.status === 'approved'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'}
                `}>
                  {item.status}
                </span>
              </div>

              {item.reportReason && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <div className="flex items-start">
                    <Flag className="h-4 w-4 text-red-500 mt-0.5" />
                    <div className="ml-2">
                      <div className="text-sm font-medium text-red-800">
                        Reported Content
                      </div>
                      <div className="text-sm text-red-600">
                        {item.reportReason}
                      </div>
                      <div className="text-xs text-red-500 mt-1">
                        Reported by: {item.reportedBy}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  {new Date(item.timestamp).toLocaleString()}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </button>
                  <button className="p-2 hover:bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
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