'use client';

import { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

export function RegisterForm() {
  const [userType, setUserType] = useState<'company' | 'influencer' | 'admin'>('company');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const renderSpecificFields = () => {
    switch (userType) {
      case 'company':
        return (
          <>
            <input type="text" placeholder="Company Name" className="input-field text-black" />
            <input type="url" placeholder="Company Website" className="input-field text-black" />
            <select className="input-field text-black">
              <option>Select Industry</option>
              {/* Industry options */}
            </select>
            <select className="input-field text-black">
              <option>Company Size</option>
              {/* Size options */}
            </select>
            <select className="input-field text-black">
              <option>Marketing Budget</option>
              {/* Budget options */}
            </select>
          </>
        );
      case 'influencer':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <FaInstagram size={20} />
                <input
                  type="text"
                  placeholder="Instagram Handle"
                  className="input-field text-black"
                />
              </div>
              <div className="flex items-center space-x-2">
                <FaYoutube size={20} />
                <input
                  type="text"
                  placeholder="YouTube Channel"
                  className="input-field text-black"
                />
              </div>
              <div className="flex items-center space-x-2">
                <FaTiktok size={20} />
                <input
                  type="text"
                  placeholder="TikTok Handle"
                  className="input-field text-black"
                />
              </div>
              <div className="flex items-center space-x-2">
                <FaTwitter size={20} />
                <input
                  type="text"
                  placeholder="Twitter Handle"
                  className="input-field text-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Content Categories
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Tech', 'Lifestyle', 'Fitness', 'Food', 'Travel', 'Education'].map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="checkbox-field"
                    />
                    <span className="text-black">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <select className="input-field text-black">
              <option>Audience Size</option>
              {/* Size options */}
            </select>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Content Types</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="checkbox-field" />
                  <span className="ml-2 text-black">Photos</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="checkbox-field" />
                  <span className="ml-2 text-black">Videos</span>
                </label>
              </div>
            </div>
          </>
        );
      case 'admin':
        return (
          <>
            <input type="text" placeholder="Admin Code" className="input-field text-black" />
            <select className="input-field text-black">
              <option>Department</option>
              {/* Department options */}
            </select>
            <select className="input-field text-black">
              <option>Role</option>
              {/* Role options */}
            </select>
          </>
        );
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
      {/* User Type Selection */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-black mb-4">
          I want to register as:
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['company', 'influencer', 'admin'].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type as any)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium border 
                ${userType === type
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-black border-gray-300 hover:bg-gray-200'
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <form className="space-y-6">
        <input type="text" placeholder="Full Name" className="input-field text-black" />
        <input type="email" placeholder="Email" className="input-field text-black" />
        <input type="password" placeholder="Password" className="input-field text-black" />
        <input type="password" placeholder="Confirm Password" className="input-field text-black" />
        {renderSpecificFields()}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}
