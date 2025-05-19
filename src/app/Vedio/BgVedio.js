"use client";

import React from "react";
import Image from "next/image";
import bg from "../assets/images/Al Saeed Foundation desktop.png";

const DonateSection = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Full-bleed background image */}
      <Image
        src={bg}
        alt="Students"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Overlay gradient + text */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r 
          flex flex-col justify-center items-start
          px-6 md:px-20
        "
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Change begins with
        </h1>
        <h1 className="pl-8 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          <span className="bg-green-300 px-2">EDUCATION</span>
        </h1>
        <p className="pl-7 mt-4 text-lg md:text-xl text-gray-700">
          Donate to educate less-privileged children
        </p>
        <button className="mt-6 bg-green-300 hover:bg-green-400 text-black font-semibold px-12 py-3 rounded-lg">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonateSection;
