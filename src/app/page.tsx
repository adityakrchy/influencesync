'use client'
// src/app/page.tsx
import InfluencerCard from '@/components/InfluencerCard';
import Link from 'next/link'
import { popularInfluencers } from './data/influencer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white">
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        {/* Hero Section */}
        <div className="relative h-screen isolate px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-extrabold tracking-tight text-gray-300 sm:text-7xl">
                Connect with Perfect Influencers for Your Brand
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-400 sm:leading-9">
                Streamline your influencer marketing campaigns with our powerful and intuitive platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-full z-50 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="text-lg z-50 font-semibold leading-6 text-blue-600 hover:underline"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>

      <section className="py-5 w-full bg-gradient-to-b from-gray-200 to-white">
        <div className="w-[75%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">
              Featured Creators
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Popular Influencers
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Connect with our top-performing influencers who are making waves across different niches
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {popularInfluencers.map((influencer) => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/discover"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Discover More Influencers
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <div id='features' className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-24 sm:py-32">
        <div className="mx-auto max-w-screen-full px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold leading-7 text-indigo-600 uppercase tracking-wide">
              Explore Our Features
            </h2>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
              Empowering Your Success
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Discover the tools and features designed to help you achieve your goals efficiently.
            </p>
          </div>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className='pt-5'>
                <div
                  className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-5xl text-white">{feature.icon}</span>
                  </div>
                  <h3 className="mt-10 text-xl font-semibold text-gray-800 text-center group-hover:text-indigo-500 transition duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const features = [
  {
    name: 'Find Perfect Matches',
    description: 'Advanced search filters to find the right influencers for your brand based on niche, audience demographics, and engagement rates.',
    icon: '🎯',
  },
  {
    name: 'Secure Payments',
    description: 'Safe and secure payment processing with escrow protection for all collaborations and automated payouts.',
    icon: '🔒',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Track your campaign performance with detailed analytics, including reach, engagement, ROI, and audience insights.',
    icon: '📊',
  },
  {
    name: 'Verified Profiles',
    description: 'All influencers go through a verification process to ensure authenticity and maintain platform quality.',
    icon: '✅',
  },
  {
    name: 'Campaign Management',
    description: 'Easily create, manage, and track multiple campaigns with customizable goals and performance metrics.',
    icon: '📱',
  },
  {
    name: 'Messaging Platform',
    description: 'Built-in messaging system for seamless communication between brands and influencers.',
    icon: '💬',
  },
  // {
  //   name: 'Content Approval',
  //   description: 'Streamlined content review and approval process with revision tracking and feedback system.',
  //   icon: '👍',
  // },
  // {
  //   name: 'Smart Matching',
  //   description: 'AI-powered matching algorithm that suggests the most relevant influencers based on brand requirements.',
  //   icon: '🤖',
  // },
  // {
  //   name: 'Performance Reports',
  //   description: 'Comprehensive campaign reports with detailed metrics and insights for data-driven decision making.',
  //   icon: '📈',
  // },
  // {
  //   name: 'Contract Management',
  //   description: 'Digital contract creation and management with customizable templates and e-signature support.',
  //   icon: '📝',
  // },
  // {
  //   name: 'Multi-Platform Integration',
  //   description: 'Connect and analyze data from multiple social media platforms in one unified dashboard.',
  //   icon: '🔗',
  // },
  // {
  //   name: 'Audience Insights',
  //   description: 'Detailed audience demographics and behavior analysis for better targeting and campaign optimization.',
  //   icon: '👥',
  // },
  // {
  //   name: 'Automated Payments',
  //   description: 'Automated payment scheduling and disbursement based on campaign milestones and deliverables.',
  //   icon: '💳',
  // },
  // {
  //   name: 'Collaboration Tools',
  //   description: 'Built-in tools for content calendars, task management, and team collaboration.',
  //   icon: '🤝',
  // },
  // {
  //   name: 'Fraud Detection',
  //   description: 'Advanced algorithms to detect fake followers and engagement, ensuring authentic influence.',
  //   icon: '🛡️',
  // },
  // {
  //   name: 'Real-Time Analytics',
  //   description: 'Live tracking of campaign performance metrics and engagement statistics.',
  //   icon: '⚡',
  // },
  // {
  //   name: 'Custom Branding',
  //   description: 'Personalized campaign microsites and branded content guidelines for consistency.',
  //   icon: '🎨',
  // },
  // {
  //   name: 'Compliance Tools',
  //   description: 'Built-in features to ensure FTC compliance and proper disclosure in sponsored content.',
  //   icon: '⚖️',
  // },
  // {
  //   name: 'Budget Management',
  //   description: 'Tools to track and optimize campaign spending with detailed cost analysis.',
  //   icon: '💰',
  // },
  // {
  //   name: 'Performance Benchmarks',
  //   description: 'Industry benchmarks and competitive analysis tools for campaign optimization.',
  //   icon: '📊',
  // },
  // {
  //   name: 'Crisis Management',
  //   description: 'Quick response tools and guidelines for managing campaign-related issues.',
  //   icon: '🚨',
  // },
  // {
  //   name: 'API Integration',
  //   description: 'Robust API for seamless integration with existing marketing tools and platforms.',
  //   icon: '🔌',
  // },
  // {
  //   name: 'Content Library',
  //   description: 'Centralized storage for campaign assets, guidelines, and approved content.',
  //   icon: '📚',
  // },
  // {
  //   name: 'Automated Reporting',
  //   description: 'Scheduled performance reports and insights delivered to stakeholders.',
  //   icon: '📫',
  // },
  // {
  //   name: 'Mobile App',
  //   description: 'Native mobile applications for on-the-go campaign management and communication.',
  //   icon: '📱',
  // }
];

const FeatureCard = ({ name, description, icon }: {
  name: string;
  description: string;
  icon: string;
}) => (
  <div id='features' className="flex flex-col items-start p-8 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
    <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-indigo-600">
      <span className="text-4xl">{icon}</span>
      {name}
    </dt>
    <dd className="mt-4 text-base leading-7 text-gray-600">
      {description}
    </dd>
  </div>
)
