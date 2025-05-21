"use client";
import React from 'react';
import Link from 'next/link';
import desktopBg from '../assets/images/onespark.png';
import mobileBg from '../assets/images/onespark-mobile.png';
import { FaArrowRight } from 'react-icons/fa6';

const Flowers = () => {
  return (
    <div className="relative h-[90vh] w-full">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileBg.src})` }}
        />
        {/* Desktop Background */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${desktopBg.src})` }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative w-full h-full flex flex-col items-center justify-end text-center px-4 sm:px-6 md:px-10">
        {/* Button */}
        <Link href="/bookshop">
          <button className="mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-14 py-3 rounded-md text-lg shadow-md md:ml-0  ">
            <div className="flex items-center gap-2">
              Donate Now
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Flowers;
