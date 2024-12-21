'use client';

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundLines } from "@/components/ui/background-lines";

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
  ];

  return (
    <BackgroundLines className="flex bg-black items-center justify-center w-full flex-col px-4 h-full overflow-hidden py-8 sm:py-16">
      <div className="text-center pt-14 md:pt-10 sm:pt-20">
        <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
          Choose Your Plan
        </h1>
        <p className="mt-4 text-sm text-gray-300 sm:text-lg">
          Find a plan that's right for your business and scale with ease.
        </p>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl px-4">
        {plans.map((plan) => (
          <BackgroundGradient key={plan.name} className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="rounded-xl bg-transparent shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="text-center">
                <h2 className="text-xl font-bold text-indigo-400 sm:text-2xl">{plan.name}</h2>
                <p className="mt-4 text-3xl font-extrabold text-gray-100 sm:text-4xl">{plan.price}</p>
                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                  {plan.name === 'Enterprise' ? 'Contact us for custom pricing' : 'per month'}
                </p>
              </div>
              <ul className="mt-6 space-y-4 px-2 text-gray-300 text-sm sm:text-base">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-3 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex justify-center">
                <a
                  href={plan.link}
                  className={`inline-flex items-center rounded-md px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-medium ${plan.name === 'Pro'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </BackgroundLines>
  );
}
