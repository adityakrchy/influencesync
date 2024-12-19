// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
              Connect with Perfect Influencers for Your Brand
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 sm:leading-9">
              Streamline your influencer marketing campaigns with our powerful and intuitive platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold leading-6 text-blue-600 hover:underline"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
  {
    name: 'Content Approval',
    description: 'Streamlined content review and approval process with revision tracking and feedback system.',
    icon: '👍',
  },
  {
    name: 'Smart Matching',
    description: 'AI-powered matching algorithm that suggests the most relevant influencers based on brand requirements.',
    icon: '🤖',
  },
  {
    name: 'Performance Reports',
    description: 'Comprehensive campaign reports with detailed metrics and insights for data-driven decision making.',
    icon: '📈',
  },
  {
    name: 'Contract Management',
    description: 'Digital contract creation and management with customizable templates and e-signature support.',
    icon: '📝',
  },
  {
    name: 'Multi-Platform Integration',
    description: 'Connect and analyze data from multiple social media platforms in one unified dashboard.',
    icon: '🔗',
  },
  {
    name: 'Audience Insights',
    description: 'Detailed audience demographics and behavior analysis for better targeting and campaign optimization.',
    icon: '👥',
  },
  {
    name: 'Automated Payments',
    description: 'Automated payment scheduling and disbursement based on campaign milestones and deliverables.',
    icon: '💳',
  },
  {
    name: 'Collaboration Tools',
    description: 'Built-in tools for content calendars, task management, and team collaboration.',
    icon: '🤝',
  },
  {
    name: 'Fraud Detection',
    description: 'Advanced algorithms to detect fake followers and engagement, ensuring authentic influence.',
    icon: '🛡️',
  },
  {
    name: 'Real-Time Analytics',
    description: 'Live tracking of campaign performance metrics and engagement statistics.',
    icon: '⚡',
  },
  {
    name: 'Custom Branding',
    description: 'Personalized campaign microsites and branded content guidelines for consistency.',
    icon: '🎨',
  },
  {
    name: 'Compliance Tools',
    description: 'Built-in features to ensure FTC compliance and proper disclosure in sponsored content.',
    icon: '⚖️',
  },
  {
    name: 'Budget Management',
    description: 'Tools to track and optimize campaign spending with detailed cost analysis.',
    icon: '💰',
  },
  {
    name: 'Performance Benchmarks',
    description: 'Industry benchmarks and competitive analysis tools for campaign optimization.',
    icon: '📊',
  },
  {
    name: 'Crisis Management',
    description: 'Quick response tools and guidelines for managing campaign-related issues.',
    icon: '🚨',
  },
  {
    name: 'API Integration',
    description: 'Robust API for seamless integration with existing marketing tools and platforms.',
    icon: '🔌',
  },
  {
    name: 'Content Library',
    description: 'Centralized storage for campaign assets, guidelines, and approved content.',
    icon: '📚',
  },
  {
    name: 'Automated Reporting',
    description: 'Scheduled performance reports and insights delivered to stakeholders.',
    icon: '📫',
  },
  {
    name: 'Mobile App',
    description: 'Native mobile applications for on-the-go campaign management and communication.',
    icon: '📱',
  }
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
