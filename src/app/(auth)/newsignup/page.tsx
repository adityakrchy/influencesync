"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { Separator } from "@/components/ui/separator";

const App = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleExpand = (section: string) => {
    setActiveSection(section);

    if (section === "left") {
        // Expand left section and collapse right section
        gsap.to("#leftSection", {
          width: "100%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to("#rightSection", {
          width: "0%",
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.set("#rightSection", { display: "none" });
          },
        });
      } else if (section === "right") {
        // Expand right section and collapse left section
        gsap.to("#rightSection", {
          width: "100%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to("#leftSection", {
          width: "0%",
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.set("#leftSection", { display: "none" });
          },
        });
    }
  };

  return (
    <div className="flex h-screen relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
      {/* Left Section */}
      <div
        id="leftSection"
        className={`text-white flex flex-col justify-center w-1/2 transition-all duration-500 p-8 ${
          activeSection === "right" ? "hidden" : "block"
        }`}
      >
        {activeSection === "left" ? (
          // Company Registration Form
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
              Company Registration
            </h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-600">
              Company Registration
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Register your company to unlock exciting opportunities.
            </p>
            <button
              type="button"
              onClick={() => handleExpand("left")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition"
            >
              Register Company
            </button>
          </div>
        )}
      </div>
      {/* <Separator /> */}

      {/* Right Section */}
      <div
        id="rightSection"
        className={`text-white w-1/2 flex flex-col justify-center items-center p-8 transition-all duration-500 ${
          activeSection === "left" ? "hidden" : "block"
        }`}
      >
        {activeSection === "right" ? (
          // Influencer Registration Form
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-purple-600 text-center">
              Influencer Registration
            </h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Social Media Handle"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h1 className="text-4xl font-extrabold mb-4 text-center text-indigo-600">
              Influencer Registration
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Join us and make an impact with your influence.
            </p>
            <button
              type="button"
              onClick={() => handleExpand("right")}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-md shadow-lg hover:opacity-90 transition"
            >
              Register as Influencer
            </button>
          </div>
        )}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 pointer-events-none" />
    </div>
  );
};

export default App;
