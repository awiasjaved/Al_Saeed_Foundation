// components/StatsSection.tsx
"use client";

import React from "react";
import Image from "next/image";


const StatsSection = () => {
  const stats = [
    {
      imgSrc: "/images/hourglass.png",
      alt: "Hourglass",
      label: "Years",
      value: "3",
    },
    {
      imgSrc: "/images/school-removebg-preview.png",
      alt: "School Building",
      label: "School Units",
      value: "02 No’s",
    },
    {
      imgSrc: "/images/students.png",
      alt: "Students",
      label: "Students",
      value: "436",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(({ imgSrc, alt, label, value }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 rounded-xl bg-white"
       
          
            
          >
            <div className="w-24 h-24 relative">
              <Image
                src={imgSrc}
                alt={alt}
                fill
                sizes="80px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h4 className="mt-4 text-xl font-semibold">{label}</h4>
            <p className="mt-2 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
