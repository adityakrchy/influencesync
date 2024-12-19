// src/components/about/LearnMore.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Shield,
  MessageCircle,
  DollarSign,
  BarChart,
  Star,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Smart Matching',
    description: 'Our AI-powered algorithm connects you with the perfect influencers based on your brand values and target audience.',
    icon: '🎯',
    color: 'blue'
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, engagement rates, and ROI with our comprehensive analytics dashboard.',
    icon: '📊',
    color: 'green'
  },
  {
    title: 'Secure Payments',
    description: 'Built-in escrow system ensures safe transactions and timely payments for all collaborations.',
    icon: '🔒',
    color: 'purple'
  },
  {
    title: 'Campaign Management',
    description: 'Streamline your influencer campaigns with our end-to-end campaign management tools.',
    icon: '📱',
    color: 'yellow'
  }
]

const benefits = [
  {
    title: 'For Brands',
    features: [
      'Access to verified influencers',
      'Campaign performance tracking',
      'Automated payments and contracts',
      'Detailed analytics and reporting',
      'Content approval workflow',
      'ROI measurement tools'
    ]
  },
  {
    title: 'For Influencers',
    features: [
      'Direct brand connections',
      'Secure payment system',
      'Performance analytics',
      'Campaign management tools',
      'Professional profile builder',
      'Brand collaboration tools'
    ]
  }
]

const testimonials = [
  {
    quote: "This platform has revolutionized how we manage our influencer campaigns. It's efficient, user-friendly, and delivers real results.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Fashion Brand X",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson"
  },
  {
    quote: "As an influencer, this platform has made it so much easier to connect with brands and manage collaborations professionally.",
    author: "David Chen",
    role: "Content Creator",
    image: "https://ui-avatars.com/api/?name=David+Chen"
  }
]

export default function LearnMore() {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Transform Your Influencer Marketing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Connect with the right influencers, manage campaigns efficiently, and measure real impact with our comprehensive platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 pointer-events-none" />
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run successful influencer marketing campaigns, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a brand or an influencer, our platform has everything you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of brands and influencers already using our platform.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}