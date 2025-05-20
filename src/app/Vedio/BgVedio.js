"use client";

import React from "react";
import Image from "next/image";
import bg from "../assets/images/Al Saeed Foundation desktop.png";

const DonateSection = () => {
  return (
<div className="relative w-full h-[70vh] mt-40">
  {/* Full-bleed background image */}
  <Image
    src={bg}
    alt="Students"
    fill
    style={{ objectFit: "cover", objectPosition: "center" }}
  />

  {/* Overlay gradient + text */}
  <div className="absolute inset-0 bg-gradient-to-r flex flex-col justify-center items-start px-6 md:px-20 text-left">
    
    {/* Urdu Heading */}
<h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#2f3191] font-[Noto Nastaliq Urdu] leading-snug text-center pl-4 md:pl-12">
  تعلیم و تربیت ساتھ ساتھ
</h1>
    {/* English Subtitle */}
    <h2 className="mt-4 text-base md:text-xl text-black font-medium">
      Donate to educate less-privileged children in Pakistan
    </h2>

    {/* Donate Button */}
<button className="mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-14 py-3 rounded-md text-lg shadow-md ml-36">
  Donate Now
</button>


  </div>
</div>



  );
};

export default DonateSection;
