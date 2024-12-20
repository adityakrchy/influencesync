// src/components/discover/DiscoverInfluencers.tsx
'use client'

import { useState } from 'react'
import {
    Search,
    Filter,
    Users,
    Star,
    Heart,
    MessageCircle,
    Bookmark,
    TrendingUp,
    Globe,
    Instagram,
    Twitter,
    Youtube,
    Facebook,
    ChevronDown,
    Sliders
} from 'lucide-react'
import Link from 'next/link'

const categories = [
    'All Categories',
    'Fashion',
    'Beauty',
    'Lifestyle',
    'Travel',
    'Food',
    'Technology',
    'Fitness',
    'Gaming'
]

const influencers = [
    {
        id: 1,
        name: 'Sarah Johnson',
        username: '@sarahjohnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
        coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
        category: 'Fashion & Lifestyle',
        location: 'New York, USA',
        followers: '1.2M',
        engagement: '4.8%',
        rating: 4.9,
        verified: true,
        bio: 'Fashion and lifestyle influencer passionate about sustainable fashion.',
        platforms: {
            instagram: '850K',
            youtube: '500K',
            tiktok: '750K'
        },
        averageLikes: '45K',
        languages: ['English', 'Spanish'],
        priceRange: '$2,000 - $5,000',
        tags: ['Fashion', 'Lifestyle', 'Beauty', 'Travel'],
        recentPosts: [
            'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea',
            'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
        ]
    },
    {
        id: 2,
        name: 'David Chen',
        username: '@techwithdavid',
        avatar: 'https://ui-avatars.com/api/?name=David+Chen',
        coverImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        category: 'Tech & Gadgets',
        location: 'San Francisco, USA',
        followers: '850K',
        engagement: '5.2%',
        rating: 4.9,
        verified: true,
        bio: 'Tech enthusiast and gaming influencer, providing the latest insights on gadgets, reviews, and tech tutorials.',
        platforms: {
            instagram: '750K',
            youtube: '1M',
            tiktok: '500K'
        },
        averageLikes: '32K',
        languages: ['English', 'Mandarin'],
        priceRange: '$1,000 - $3,000',
        tags: ['Tech', 'Gadgets', 'Reviews', 'Tutorials'],
        recentPosts: [
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
        ]
    },
    {
        id: 3,
        name: 'Emily White',
        username: '@emilywhite',
        avatar: 'https://ui-avatars.com/api/?name=Emily+White',
        coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
        category: 'Beauty & Makeup',
        location: 'Los Angeles, USA',
        followers: '1.5M',
        engagement: '6.2%',
        rating: 4.9,
        verified: true,
        bio: 'Beauty and makeup influencer sharing the latest trends, tips, and tutorials.',
        platforms: {
            instagram: '1.2M',
            youtube: '800K',
            tiktok: '750K'
        },
        averageLikes: '55K',
        languages: ['English', 'French'],
        priceRange: '$3,000 - $7,000',
        tags: ['Beauty', 'Makeup', 'Skincare', 'Fashion'],
        recentPosts: [
            'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea',
            'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
        ]
    },
    // Add more influencers...
]

export default function DiscoverInfluencers() {
    const [selectedCategory, setSelectedCategory] = useState('All Categories')
    const [searchQuery, setSearchQuery] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        followers: 'all',
        engagement: 'all',
        priceRange: 'all',
        verified: false
    })

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Discover Influencers</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Find the perfect influencers for your brand
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <Sliders className="h-4 w-4 mr-2" />
                            Advanced Filters
                        </button>
                    </div>
                </div>

                {/* Search and Categories */}
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, category, or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Advanced Filters */}
                    {showFilters && (
                        <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Followers
                                    </label>
                                    <select
                                        value={filters.followers}
                                        onChange={(e) => setFilters({ ...filters, followers: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="all">All</option>
                                        <option value="1m+">1M+</option>
                                        <option value="500k-1m">500K-1M</option>
                                        <option value="100k-500k">100K-500K</option>
                                        <option value="50k-100k">50K-100K</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Engagement Rate
                                    </label>
                                    <select
                                        value={filters.engagement}
                                        onChange={(e) => setFilters({ ...filters, engagement: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="all">All</option>
                                        <option value="5+">5%+</option>
                                        <option value="3-5">3-5%</option>
                                        <option value="1-3">1-3%</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Price Range
                                    </label>
                                    <select
                                        value={filters.priceRange}
                                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="all">All</option>
                                        <option value="5000+">$5,000+</option>
                                        <option value="1000-5000">$1,000-$5,000</option>
                                        <option value="500-1000">$500-$1,000</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Verification
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={filters.verified}
                                            onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            Verified Only
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Influencer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {influencers.map((influencer) => (
                        <div
                            key={influencer.id}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Cover Image */}
                            <div className="relative h-32">
                                <img
                                    src={influencer.coverImage}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                                    <Bookmark className="h-5 w-5 text-gray-600" />
                                </button>
                            </div>

                            {/* Profile Info */}
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src={influencer.avatar}
                                            alt={influencer.name}
                                            className="w-16 h-16 rounded-full border-4 border-white -mt-12"
                                        />
                                        <div className="ml-3">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {influencer.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{influencer.username}</p>
                                        </div>
                                    </div>
                                    {influencer.verified && (
                                        <div className="bg-blue-500 p-1 rounded-full">
                                            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                                    {influencer.bio}
                                </p>

                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                    <Globe className="h-4 w-4 mr-1" />
                                    {influencer.location}
                                </div>

                                {/* Stats */}
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Followers</p>
                                        <p className="font-semibold text-gray-900">{influencer.followers}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Engagement</p>
                                        <p className="font-semibold text-gray-900">{influencer.engagement}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Rating</p>
                                        <div className="flex items-center justify-center">
                                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                            <p className="font-semibold text-gray-900">{influencer.rating}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Platforms */}
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        {Object.entries(influencer.platforms).map(([platform, followers]) => (
                                            <div
                                                key={platform}
                                                className="flex items-center text-sm text-gray-500"
                                            >
                                                {platform === 'instagram' && <Instagram className="h-4 w-4 mr-1" />}
                                                {platform === 'youtube' && <Youtube className="h-4 w-4 mr-1" />}
                                                {platform === 'tiktok' && <span className="mr-1">📱</span>}
                                                {followers}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {influencer.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex space-x-3">
                                    <Link href={'/contact'}>
                                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                        Contact
                                    </button>
                                    </Link>
                                    <Link href={`/influencer/${influencer.id}`}>
                                        <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                                            View Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}