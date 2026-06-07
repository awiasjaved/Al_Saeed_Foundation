"use client";

import React from "react";
import Image from "next/image";

const StatsSection = () => {
  const stats = [
    {
      imgSrc: "/images/hourglass.png",
      alt: "Hourglass",
      label: "Years of Service",
      value: "6+",
    },
    {
      imgSrc: "/images/school-removebg-preview.png",
      alt: "School Building",
      label: "School Units",
      value: "03",
    },
    {
      imgSrc: "/images/students.png",
      alt: "Students",
      label: "Students",
      value: "726+",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
       

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">

          {stats.map(({ imgSrc, alt, label, value }, idx) => (
            <div
              key={idx}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                border border-gray-100
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                <Image
                  src={imgSrc}
                  alt={alt}
                  fill
                  sizes="(max-width:768px) 96px, 112px"
                  className="
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Number */}
              <h3
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  bg-gradient-to-r
                  from-red-600
                  to-red-400
                  bg-clip-text
                  text-transparent
                "
              >
                {value}
              </h3>

              {/* Label */}
              <p
                className="
                  mt-3
                  text-lg
                  md:text-xl
                  font-semibold
                  text-gray-700
                "
              >
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;