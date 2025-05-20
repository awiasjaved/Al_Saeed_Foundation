"use client";
import React from 'react'
import Link from 'next/link'
import bgImage from '../assets/images/onespark.png'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const Flowers = () => {
  const title = [
    { char: "L", color: "text-[#5eb192]" },
    { char: "I", color: "text-[#e8c74e]" },
    { char: "T", color: "text-[#dd7984]" },
    { char: "T", color: "text-[#5eb192]" },
    { char: "L", color: "text-[#dd7984]" },
    { char: "E", color: "text-[#589cb2]" },
    { char: " ", color: "" },
    { char: "M", color: "text-[#e8c74e]" },
    { char: "U", color: "text-[#dd7984]" },
    { char: "M", color: "text-[#589cb2]" },
    { char: "I", color: "text-[#a6bf5c]" },
    { char: "N", color: "text-[#e8c74e]" },
    { char: "S", color: "text-[#dd7984]" },
  ];

  return (
   
    <div className="relative h-[90vh] w-full">
    {/* Background Image */}
    <div className="absolute inset-0">
      <div
        className="w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </div>
  
    {/* Content */}
    <div className="relative w-full h-[70vh] flex flex-col items-center justify-end text-center px-4 sm:px-6 md:px-10">
     
        {/* Title */}
      
  
      {/* Button */}
      <Link href="/bookshop">
        <button className="mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-14 py-3 rounded-md text-lg shadow-md ml-36">
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
