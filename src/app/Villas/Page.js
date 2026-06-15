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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
       

        {/* Stats Cards */}
       <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    xl:gap-8
    items-stretch
  "
>

         {stats.map(({ imgSrc, alt, label, value }, idx) => (
  <div
    key={idx}
    className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      bg-white/90
      backdrop-blur-xl
      border
      border-white/30
      p-8
      lg:p-10
      text-center
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      transition-all
      duration-700
      hover:-translate-y-4
      hover:scale-[1.03]
      hover:shadow-[0_25px_70px_rgba(239,68,68,0.18)]
      h-full
      flex
      flex-col
      justify-between
    "
  >
    {/* Background Glow */}
    <div
      className="
        absolute
        -top-20
        -right-20
        w-40
        h-40
        rounded-full
        bg-blue-100
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
      "
    />

    {/* Top Border */}
    <div
      className="
        absolute
        top-0
        left-0
        w-full
        h-1.5
        bg-gradient-to-r
        from-blue-600
        via-red-300
        to-red-600
      "
    />

    {/* Icon */}
    <div
      className="
        relative
        mx-auto
        flex
        items-center
        justify-center
        w-28
        h-28
        md:w-32
        md:h-32
        rounded-full
        bg-gradient-to-br
        from-blue-50
        to-white
        shadow-lg
        border
        border-red-100
      "
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width:768px) 112px, 128px"
        className="object-contain p-4"
      />
    </div>

    {/* Number */}
    <h3
      className="
        mt-8
        text-5xl
        md:text-6xl
        font-black
        bg-gradient-to-r
        from-red-600
        via-red-500
        to-blue-900
        bg-clip-text
        text-transparent
      "
    >
      {value}
    </h3>

    {/* Label */}
    <p
      className="
        mt-4
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