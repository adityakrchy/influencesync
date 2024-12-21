'use client';

import { useState } from 'react';
import { Upload, Grid, List, Filter, Search, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContentItem {
  id: string;
  type: 'image' | 'video' | 'story';
  mediaUrl: string;
  caption: string;
  campaign?: string;
  performance: {
    likes: number;
    comments: number;
    shares: number;
    reach: number;
  };
  status: 'published' | 'draft' | 'scheduled';
  publishDate: string;
}

export default function Content() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      type: 'image',
      mediaUrl: 'https://source.unsplash.com/random/800x800?1',
      caption: 'Summer collection showcase #fashion #style',
      campaign: 'Summer Fashion Campaign',
      performance: {
        likes: 1520,
        comments: 48,
        shares: 23,
        reach: 5200
      },
      status: 'published',
      publishDate: '2024-02-15'
    },
    // Add more content items...
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Manager</h1>
          <p className="text-gray-500">Manage and track your content performance</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
          <Upload className="h-5 w-5 mr-2" />
          Upload Content
        </button>
      </div>

      {/* Filters and Search */}
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
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-lg border-gray-300"
          >
            <option value="all">All Content</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
            <option value="scheduled">Scheduled</option>
          </select>
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {contentItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Media Preview */}
            <div className={viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}>
              <img
                src={item.mediaUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium line-clamp-2">{item.caption}</p>
                  {item.campaign && (
                    <p className="text-sm text-gray-500 mt-1">{item.campaign}</p>
                  )}
                </div>
                <span className={`
                  px-2 py-1 text-xs rounded-full
                  ${item.status === 'published' ? 'bg-green-100 text-green-800' :
                    item.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'}
                `}>
                  {item.status}
                </span>
              </div>

              {/* Performance Metrics */}
              <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Likes</p>
                  <p className="font-medium">{item.performance.likes}</p>
                </div>
                <div>
                  <p className="text-gray-500">Comments</p>
                  <p className="font-medium">{item.performance.comments}</p>
                </div>
                <div>
                  <p className="text-gray-500">Shares</p>
                  <p className="font-medium">{item.performance.shares}</p>
                </div>
                <div>
                  <p className="text-gray-500">Reach</p>
                  <p className="font-medium">{item.performance.reach}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex justify-end space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Eye className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}