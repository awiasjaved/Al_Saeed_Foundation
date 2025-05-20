"use client";

import React from "react";
import Image from "next/image";
import desktopBg from "../assets/images/Al Saeed Foundation desktop.png";
import mobileBg from "../assets/images/Al Saeed Foundation mobile.png";

const DonateSection = () => {
  return (
    <div className="relative w-full mt-20 md:mt-40">
      {/* Responsive height - taller on mobile */}
      <div className="h-[120vh] md:h-[70vh]">
        {/* Media query-based approach using CSS instead of JS */}
        <div className="relative h-full w-full">
          {/* Mobile image - only shows on smaller screens */}
          <div className="block md:hidden relative h-full w-full">
            <Image
              src={mobileBg}
              alt="Students Mobile"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          
          {/* Desktop image - only shows on larger screens */}
          <div className="hidden md:block relative h-full w-full">
            <Image
              src={desktopBg}
              alt="Students Desktop"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Overlay gradient + text - responsive positioning */}
        <div className="absolute inset-0 bg-gradient-to-r flex flex-col md:justify-center justify-start pt-32 md:pt-0 items-center md:items-start px-4 md:px-20 text-center md:text-left">
          {/* Urdu Heading - responsive sizing */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#2f3191] font-[Noto Nastaliq Urdu] leading-snug md:pl-12">
            تعلیم و تربیت ساتھ ساتھ
          </h1>
          
          {/* English Subtitle - responsive sizing */}
          <h2 className="mt-2 md:mt-4 text-lg md:text-base lg:text-xl text-black font-medium max-w-md">
            Donate to educate less-privileged children in Pakistan
          </h2>

          {/* Donate Button - responsive positioning */}
          <button className="mt-6 md:mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-8 md:px-14 py-2 md:py-3 rounded-md text-base md:text-lg shadow-md md:ml-36 mx-auto md:mx-0">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;