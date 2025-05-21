// components/OurModel.tsx
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
  }
];

const Model = () => (
  <section className="py-16 px-4 bg-white min-h-[90vh]">
    <h2 className="text-4xl text-[#2f3192] md:text-4xl font-semibold text-center mb-12">
      Our Model
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center px-7"
        >
          <div className="w-20 h-20 mb-4 relative">
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="64px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Model;
