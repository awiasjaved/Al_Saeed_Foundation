"use client";

import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const page = () => {
  return (
    <section className="bg-[#2d3292] h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-20">
          Become a part of our vibrant community,<br />
          Subscribe to our mailing list!
        </h2>

        <form className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          {/* First Name */}
          <div className="flex items-center bg-white px-3 py-2 rounded-md w-full sm:w-1/4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center bg-white px-3 py-2 rounded-md w-full sm:w-1/4">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white px-3 py-2 rounded-md w-full sm:w-1/4">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-orange-400 text-white font-bold px-6 py-2 rounded-md hover:bg-orange-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
