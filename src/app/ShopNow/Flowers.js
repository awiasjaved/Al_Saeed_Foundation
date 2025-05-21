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
        {/* Mobile BG */}
        <div
          className="block md:hidden w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileBg.src})` }}
        />
        {/* Desktop BG */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${desktopBg.src})` }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative w-full h-full flex flex-col justify-end">
        {/* Button wrapper positions itself differently per breakpoint */}
        <div
          className="
            absolute
            bottom-100
            left-1/2
            transform -translate-x-1/2

            md:bottom-50
            md:right-200
            md:left-auto
            md:transform-none
          "
        >
          <Link href="/bookshop">
            <button className="bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-14 py-3 rounded-md text-lg shadow-md">
              <div className="flex items-center gap-2">
                Donate Now
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flowers;
