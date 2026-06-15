"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/images/catering.png",
    english: "Catering to the most needy",
    urdu: "سب سے زیادہ ضرورت مند افراد کی خدمت",
  },
  {
    src: "/images/embedding s.png",
    english: "Embedding schools in the heart of urban slums & rural communities",
    urdu: "شہری کچی آبادیوں اور دیہی علاقوں میں اسکولوں کا قیام",
  },
  {
    src: "/images/holistic.png",
    english: "Purpose-built schools",
    urdu: "مقصد کے مطابق تعمیر شدہ اسکول",
  },
  {
    src: "/images/ensuring.png",
    english: "All female faculty & a 50% female student gender ratio",
    urdu: "خواتین اساتذہ اور 50 فیصد طالبات کی شمولیت",
  },
  {
    src: "/images/purpose.png",
    english: "Ensuring a high quality of education",
    urdu: "معیاری تعلیم کی فراہمی کو یقینی بنانا",
  },
  {
    src: "/images/uplifting.png",
    english: "Holistic student development & alumni support",
    urdu: "طلبہ کی ہمہ جہت ترقی اور سابق طلبہ کی معاونت",
  },
  {
    src: "/images/uplift.png",
    english: "Uplifting the entire community",
    urdu: "پوری کمیونٹی کی ترقی اور بہتری",
  },
  {
    src: "/images/teachertraining.png",
    english: "In-depth teacher training",
    urdu: "اساتذہ کی جامع تربیت",
  },
];

const Model = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
       <div className="text-center mb-16 relative z-10">

  <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#2f3192] font-semibold">
    Educational Excellence
  </span>

  <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2f3192]">
    Our Model
  </h2>

  <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
    A sustainable educational framework designed to empower
    communities, nurture students, and create lasting impact.
  </p>

  <div className="w-24 h-1 bg-red-500 mx-auto mt-5 rounded-full"></div>
</div>

        {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
  {features.map((f, idx) => (
    <div
      key={idx}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        bg-white
        border
        border-slate-100
        shadow-[0_10px_35px_rgba(0,0,0,0.06)]
        hover:shadow-[0_20px_60px_rgba(47,49,146,0.15)]
        transition-all
        duration-700
        hover:-translate-y-3
        h-full
      "
    >
      {/* Top Color Strip */}
      <div className="h-2 w-full " />

      {/* Number */}
      <div className="absolute top-5 right-5">
        <span
          className="
            text-5xl
            font-black
            text-gray-100
            group-hover:text-blue-50
            transition-all
            duration-500
          "
        >
          {(idx + 1).toString().padStart(2, "0")}
        </span>
      </div>

      <div className="p-8 flex flex-col h-full">

        {/* Icon Box */}
        <div
          className="
            w-20
            h-20
            rounded-2xl
            bg-gradient-to-br
            from-blue-100
            to-red-100
            flex
            items-center
            justify-center
            relative
            mb-6
            group-hover:scale-110
            transition-all
            duration-500
          "
        >
          <Image
            src={f.src}
            alt={f.alt}
            fill
            sizes="80px"
            className="object-contain p-3"
          />
        </div>

        {/* Title */}
        <h3
  className="
    text-lg
    md:text-lg
    lg:text-xl
    font-bold
    text-gray-900
    mb-4
    leading-snug
  "
>
  {f.english}
</h3>
<h2
  className="
  
    text-gray-800
    
   leading-snug
   text-lg
    md:text-lg
    lg:text-xl
    
    text-right
    font-bold
    mb-4
  "
  dir="rtl"
>
  {f.urdu}
</h2>

      
       
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Model;