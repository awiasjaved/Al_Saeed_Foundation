// components/OurModel.tsx
"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/images/model/catering.png",
    alt: "Catering to the most needy",
    desc: "Catering to the most needy",
  },
  {
    src: "/images/model/embedded.png",
    alt: "Embedding schools in the heart of urban slums & rural communities",
    desc: "Embedding schools in the heart of urban slums & rural communities",
  },
  {
    src: "/images/model/purpose-built.png",
    alt: "Purpose-built schools",
    desc: "Purpose-built schools",
  },
  {
    src: "/images/model/female-faculty.png",
    alt: "All female faculty & a 50% female student gender ratio",
    desc: "All female faculty & a 50% female student gender ratio",
  },
  {
    src: "/images/model/quality-education.png",
    alt: "Ensuring a high quality of education",
    desc: "Ensuring a high quality of education",
  },
  {
    src: "/images/model/holistic-support.png",
    alt: "Holistic student development & alumni support",
    desc: "Holistic student development & alumni support",
  },
  {
    src: "/images/model/uplift-community.png",
    alt: "Uplifting the entire community",
    desc: "Uplifting the entire community",
  },
  {
    src: "/images/model/management.png",
    alt: "Professional Management",
    desc: "Professional Management",
  },
];

const Model = () => (
  <section className="py-16 px-4 bg-white">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
      Our Model
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {features.map((f, idx) => (
        <div key={idx} className="flex flex-col items-center text-center px-4">
          <div className="w-16 h-16 mb-4 relative">
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes="64px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-gray-700">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Model;
