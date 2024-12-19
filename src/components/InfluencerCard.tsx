'use client'
import { Influencer } from "@/types/auth";
import Link from "next/link";

export default function InfluencerCard({ influencer }: { influencer: Influencer }) {
  const ClickHandle = () => {
    console.log('clicked')
  }
  return (
    <div>
      <div className="group relative bg-white rounded-t-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <img
            src={influencer.image}
            alt={influencer.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          {influencer.verified && (
            <div className="absolute -right-1 -bottom-1 bg-blue-600 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {influencer.name}
          </h3>
          <p className="text-sm text-gray-500">{influencer.category}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-500">Followers</p>
          <p className="text-lg font-semibold text-gray-900">{influencer.followers}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-500">Engagement</p>
          <p className="text-lg font-semibold text-gray-900">{influencer.engagement}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {influencer.location}
        </div>

        <div className="flex flex-wrap gap-2">
          {influencer.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
      <div className="z-50">
        <Link href={`/influencer/${influencer.id}`} >
          <button onClick={ClickHandle} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-b-lg py-2 px-4 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
