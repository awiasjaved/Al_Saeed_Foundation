"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/images/catering.png",
    alt: "Catering to the most needy",
    desc: "Catering to the most needy",
  },
  {
    src: "/images/embedding s.png",
    alt: "Embedding schools in the heart of urban slums & rural communities",
    desc: "Embedding schools in the heart of urban slums & rural communities",
  },
  {
    src: "/images/holistic.png",
    alt: "Purpose-built schools",
    desc: "Purpose-built schools",
  },
  {
    src: "/images/ensuring.png",
    alt: "All female faculty & a 50% female student gender ratio",
    desc: "All female faculty & a 50% female student gender ratio",
  },
  {
    src: "/images/purpose.png",
    alt: "Ensuring a high quality of education",
    desc: "Ensuring a high quality of education",
  },
  {
    src: "/images/uplifting.png",
    alt: "Holistic student development & alumni support",
    desc: "Holistic student development & alumni support",
  },
  {
    src: "/images/uplift.png",
    alt: "Uplifting the entire community",
    desc: "Uplifting the entire community",
  },
  {
    src: "/images/teachertraining.png",
    alt: "In-depth teacher training",
    desc: "In-depth teacher training",
  },
];

const Model = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm md:text-base font-semibold">
            Our Educational Approach
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2f3192]">
            Our Model
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="
                group
                bg-white
                rounded-3xl
                p-6
                md:p-7
                border
                border-gray-100
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                text-center
              "
            >
              {/* Icon Circle */}
              <div
                className="
                  w-24 h-24 md:w-28 md:h-28
                  mx-auto mb-5
                  rounded-full
                  bg-blue-50
                  flex items-center justify-center
                  relative
                "
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="112px"
                  className="
                    object-contain
                    p-4
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Description */}
              <p
                className="
                  text-gray-700
                  font-medium
                  leading-relaxed
                  text-sm
                  sm:text-base
                  lg:text-lg
                "
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Model;