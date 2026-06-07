"use client";

import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const Page = () => {
  return (
    <>
      {/* Subscribe Section */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#02498E]
          via-[#0357A7]
          to-[#02498E]
          min-h-[20vh]
          flex
          items-center
          py-4
        "
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">

          {/* Content */}
          <div className="text-center mb-3 md:mb-4">
            <h2 className="text-white font-bold leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Join Our Community
            </h2>

            <p className="mt-1 text-white/90 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
              Become a part of our vibrant community and stay updated with
              our latest initiatives, events, and impact stories.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-6xl mx-auto">
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                p-3
                md:p-4
                shadow-2xl
              "
            >
              <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

                {/* First Name */}
                <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
                  <FaUser className="text-gray-400 mr-3 text-sm" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full outline-none text-gray-700 text-sm bg-transparent"
                  />
                </div>

                {/* Last Name */}
                <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
                  <FaUser className="text-gray-400 mr-3 text-sm" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full outline-none text-gray-700 text-sm bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-md">
                  <FaEnvelope className="text-gray-400 mr-3 text-sm" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full outline-none text-gray-700 text-sm bg-transparent"
                  />
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    text-sm
                    rounded-xl
                    px-5
                    py-3
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Subscribe Now
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white">
        <div className="max-w-7xl xl:max-w-[1600px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-center md:text-left text-xs sm:text-sm">
            © 2025 Al Saeed Foundation. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="hover:underline">
              Contact Us
            </a>

            <span>Managed By: Al Saeed Group</span>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Page;