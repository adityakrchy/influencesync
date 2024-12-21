'use client'

import { BackgroundLines } from "@/components/ui/background-lines"

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      features: [
        'Basic analytics',
        'Access to public influencers',
        'Email support',
      ],
      cta: 'Get Started',
      link: '/register',
    },
    {
      name: 'Pro',
      price: '$49/month',
      features: [
        'Advanced analytics',
        'Priority support',
        'Up to 50 collaborations/month',
      ],
      cta: 'Upgrade Now',
      link: '/register',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited collaborations',
        'Dedicated account manager',
        'Custom features on demand',
      ],
      cta: 'Contact Us',
      link: '/contact',
    },
  ]

  return (
    // <div className="flex min-h-screen pt-24 flex-col items-center bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 py-16">
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-full overflow-none p-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Choose Your Plan
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Find a plan that's right for your business and scale with ease.
        </p>
      </div>

      <div className="mt-12 grid gap-8 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-xl bg-transparent shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-indigo-600">{plan.name}</h2>
              <p className="mt-4 text-4xl font-extrabold text-gray-300">{plan.price}</p>
              <p className="mt-2 text-sm text-gray-200">
                {plan.name === 'Enterprise' ? 'Contact us for custom pricing' : 'per month'}
              </p>
            </div>
            <ul className="mt-6 space-y-4 px-6 text-gray-400">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="mr-3 text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 mb-6 flex justify-center">
              <a
                href={plan.link}
                className={`inline-flex items-center rounded-md px-6 py-3 text-lg font-medium ${plan.name === 'Pro'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </BackgroundLines>
  )
}
