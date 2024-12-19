// src/components/profile/ProfilePage.tsx
'use client'

import { useState } from 'react'
import { 
  Camera, 
  MapPin, 
  Link as LinkIcon, 
  Instagram, 
  Twitter, 
  Youtube,
  Facebook,
  Edit2,
  Grid,
  List,
  Star,
  Users,
  DollarSign,
  BarChart
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="max-w-7xl mx-auto pt-10">
      {/* Profile Header */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
            <Camera className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="-mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-5">
              <div className="relative flex">
                <img
                  className="h-32 w-32 rounded-full ring-4 ring-white bg-white"
                  src="https://ui-avatars.com/api/?name=John+Doe&size=128"
                  alt="Profile"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="mt-6 sm:mt-0 sm:flex-1 min-w-0">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    John Doe
                  </h1>
                  <button className="ml-3 p-2 text-gray-400 hover:text-gray-500">
                    <Edit2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    New York, USA
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <LinkIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    influencer.com/johndoe
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Followers', value: '24.5K', icon: Users },
              { label: 'Avg. Engagement', value: '4.2%', icon: Star },
              { label: 'Completed Campaigns', value: '32', icon: BarChart },
              { label: 'Total Earnings', value: '$12,450', icon: DollarSign },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <stat.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">
                      {stat.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About & Social */}
          <div className="space-y-6">
            {/* About */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">About</h2>
              <p className="mt-4 text-gray-500">
                Lifestyle and fashion influencer with a passion for sustainable fashion.
                Collaborating with eco-friendly brands to promote conscious consumption.
              </p>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Categories</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Fashion', 'Lifestyle', 'Sustainability', 'Travel'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">Social Media</h2>
              <div className="mt-4 space-y-4">
                {[
                  { platform: 'Instagram', icon: Instagram, handle: '@johndoe', followers: '15K' },
                  { platform: 'Twitter', icon: Twitter, handle: '@johndoe', followers: '8K' },
                  { platform: 'YouTube', icon: Youtube, handle: 'John Doe', followers: '12K' },
                  { platform: 'Facebook', icon: Facebook, handle: 'John Doe', followers: '10K' },
                ].map((social) => (
                  <div key={social.platform} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <social.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {social.platform}
                        </p>
                        <p className="text-sm text-gray-500">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {social.followers} followers
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Portfolio */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">Portfolio</h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-gray-100 overflow-hidden"
                    >
                      <img
                        src={`https://source.unsplash.com/random/400x400?${i}`}
                        alt="Portfolio item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden">
                        <img
                          src={`https://source.unsplash.com/random/200x200?${i}`}
                          alt="Portfolio item"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Campaign Title {i + 1}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Brand collaboration with amazing results and engagement.
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            💰 $2,500
                          </span>
                          <span className="text-sm text-gray-500">
                            👥 15K reach
                          </span>
                          <span className="text-sm text-gray-500">
                            ❤️ 4.5% engagement
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}