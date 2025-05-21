"use client";

import React from "react";
import Image from "next/image";
import desktopBg from "../assets/images/Al Saeed Foundation desktop.png";
import mobileBg from "../assets/images/al saeed mobile.png";

const DonateSection = () => {
  return (
    <div className="relative w-full mt-20 md:mt-40">
      {/* Container for responsive height */}
      <div className="h-[90vh] md:h-[70vh] relative w-full">
        {/* Responsive Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <div className="block md:hidden h-full w-full relative">
            <Image
              src={mobileBg}
              alt="Students Mobile"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block h-full w-full relative">
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

        {/* Text Overlay */}
        {/* Default (mobile) pt-20; for md screens use md:pt-32 (adjust as desired), lg:pt-40 */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-center md:items-start pt-20 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-20 lg:px-24 text-center md:text-left">
          {/* Urdu Heading */}
          <h1 className=" pt-20 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2f3191] font-[Noto Nastaliq Urdu] leading-snug w-full max-w-screen-sm md:max-w-none md:pl-10">
            تعلیم و تربیت ساتھ ساتھ
          </h1>

          {/* English Subtitle */}
          <h2 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium w-full max-w-screen-sm md:max-w-md ">
            <span className="whitespace-nowrap">
              Donate to educate less-privileged children in Pakistan
            </span>
          </h2>

          {/* Donate Button */}
          <button className="mt-6 sm:mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-8 sm:px-10 lg:px-14 py-2 sm:py-2.5 lg:py-3 rounded-md text-base sm:text-lg shadow-md md:ml-25 ">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;