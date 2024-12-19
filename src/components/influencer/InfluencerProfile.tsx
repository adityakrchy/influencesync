// src/components/influencer/InfluencerProfile.tsx
'use client'

import { useState } from 'react'
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Globe, 
  Mail, 
  MessageCircle,
  Star,
  Users,
  Heart,
  DollarSign,
  BarChart,
  Share2,
  Bookmark,
  Grid,
  List,
  Filter
} from 'lucide-react'

const influencer = {
  id: '1',
  name: 'Sarah Johnson',
  username: '@sarahjohnson',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
  bio: 'Lifestyle and fashion influencer passionate about sustainable fashion and conscious living. Collaborating with eco-friendly brands to promote mindful consumption.',
  location: 'New York, USA',
  category: 'Lifestyle & Fashion',
  verified: true,
  stats: {
    followers: '1.2M',
    engagement: '4.8%',
    avgLikes: '45K',
    totalPosts: '2.3K',
    completedCampaigns: 156,
  },
  rates: {
    post: '$2,500',
    story: '$1,000',
    video: '$5,000',
  },
  social: {
    instagram: 'sarahjohnson',
    twitter: 'sarahjohnson',
    youtube: 'SarahJohnsonOfficial',
    facebook: 'sarahjohnsonofficial',
  },
  tags: ['Fashion', 'Lifestyle', 'Sustainability', 'Travel', 'Beauty'],
  languages: ['English', 'Spanish'],
  achievements: [
    'Top Fashion Influencer 2023',
    'Sustainability Ambassador',
    'Brand Collaboration Expert',
  ],
}

export default function InfluencerProfile() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTab, setSelectedTab] = useState('portfolio')

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Cover Image */}
      <div className="relative h-80 w-full">
        <img
          src={influencer.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="mx-auto h-32 w-32 rounded-full border-4 border-white shadow-lg"
                  />
                  {influencer.verified && (
                    <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1.5 border-4 border-white">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {influencer.name}
                    </h1>
                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Top Creator
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500">{influencer.username}</p>
                  <p className="mt-1 text-sm text-gray-500">{influencer.location}</p>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row sm:space-x-3">
                <button className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Message
                </button>
                <button className="mt-2 sm:mt-0 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                <button className="mt-2 sm:mt-0 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Bookmark className="h-5 w-5 mr-2" />
                  Save
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: 'Followers', value: influencer.stats.followers, icon: Users },
                { label: 'Engagement', value: influencer.stats.engagement, icon: Heart },
                { label: 'Avg. Likes', value: influencer.stats.avgLikes, icon: Star },
                { label: 'Campaigns', value: influencer.stats.completedCampaigns, icon: BarChart },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <stat.icon className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">{stat.label}</span>
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-8 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['portfolio', 'about', 'reviews', 'rates'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`
                      whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                      ${selectedTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {selectedTab === 'portfolio' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Recent Content</h2>
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
                      <select className="ml-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                        <option>All Content</option>
                        <option>Photos</option>
                        <option>Videos</option>
                        <option>Stories</option>
                      </select>
                    </div>
                  </div>

                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="relative aspect-square rounded-lg overflow-hidden group"
                        >
                          <img
                            src={`https://source.unsplash.com/random/400x400?${i}`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                            <div className="hidden group-hover:flex space-x-4">
                              <span className="text-white flex items-center">
                                <Heart className="h-5 w-5 mr-1" />
                                45K
                              </span>
                              <span className="text-white flex items-center">
                                <MessageCircle className="h-5 w-5 mr-1" />
                                234
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg border border-gray-200 p-4"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={`https://source.unsplash.com/random/200x200?${i}`}
                              alt=""
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-gray-900">
                                Campaign Title {i + 1}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Collaboration with Brand X showcasing their new sustainable collection.
                              </p>
                              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Heart className="h-4 w-4 mr-1" />
                                  45K
                                </span>
                                <span className="flex items-center">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  234
                                </span>
                                <span>Posted 2 days ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {selectedTab === 'about' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Bio</h3>
                    <p className="mt-2 text-gray-500">{influencer.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Categories</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {influencer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {Object.entries(influencer.social).map(([platform, handle]) => (
                        <a
                          key={platform}
                          href={`https://${platform}.com/${handle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                        >
                          {platform === 'instagram' && <Instagram className="h-5 w-5 text-pink-500" />}
                          {platform === 'twitter' && <Twitter className="h-5 w-5 text-blue-400" />}
                          {platform === 'youtube' && <Youtube className="h-5 w-5 text-red-500" />}
                          {platform === 'facebook' && <Facebook className="h-5 w-5 text-blue-600" />}
                          <span className="text-gray-900">{handle}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Achievements</h3>
                    <ul className="mt-4 space-y-4">
                      {influencer.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-center space-x-3 text-gray-500"
                        >
                          <Star className="h-5 w-5 text-yellow-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {selectedTab === 'rates' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {Object.entries(influencer.rates).map(([type, rate]) => (
                      <div
                        key={type}
                        className="bg-white rounded-lg border border-gray-200 p-6"
                      >
                        <h3 className="text-lg font-medium text-gray-900 capitalize">
                          {type}
                        </h3>
                        <p className="mt-2 text-3xl font-bold text-blue-600">{rate}</p>
                        <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
                          Book Now
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-blue-900">Custom Packages</h3>
                    <p className="mt-2 text-blue-700">
                      Looking for a custom collaboration? Contact us to discuss your specific needs
                      and get a personalized quote.
                    </p>
                    <button className="mt-4 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                      <Mail className="h-5 w-5 mr-2" />
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Add reviews content here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}