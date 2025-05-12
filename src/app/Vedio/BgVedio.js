"use client";

import React from "react";
import Image from "next/image";
import bg from "../assets/images/donate.jpeg";

const DonateSection = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col md:flex-row">
      {/* Left: text & button */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full 
                      bg-gradient-to-r from-white to-blue-100 
                      flex flex-col justify-center items-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center">
          Change begins with{" "}
          
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center">
          
          <span className="bg-yellow-300 px-2">EDUCATION</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 text-center">
          Donate to educate less-privileged children
        </p>
        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 
                           text-black font-semibold 
                           px-6 py-3 rounded-lg">
          Donate Now
        </button>
      </div>

      {/* Right: photo cropped to right half */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
        <Image
          src={bg}
          alt="Students"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "right center",
          }}
        />
      </div>
    </div>
  );
};

export default DonateSection;
