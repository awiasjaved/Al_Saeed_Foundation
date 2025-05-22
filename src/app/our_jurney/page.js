"use client";

import React from "react";
import Image from "next/image";

// Data for each timeline event
const events = [
  {
    year: "2020",
    images: [
      "/images/20-left.jpg",
      "/images/20-right.jpg",
    ],
  },
  {
    year: "2019",
    images: [
      "/images/19-left.jpg",
      "/images/19-right.jpg",
    ],
  },
  {
    year: "2018",
    images: [
      "/images/18-left.jpg",
      "/images/18-right.jpg",
    ],
  },
];

// Single event component
const TimelineEvent = ({ year, images }) => (
  <div className="mb-20 flex flex-col items-center">
    {/* Year marker */}
    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full text-white font-bold text-lg">
      {year}
    </div>

    {/* Images grid */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {images.map((src, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-lg shadow-lg ${
            i % 2 === 0 ? "md:mr-4" : "md:ml-4"
          }`}
        >
          <Image
            src={src}
            alt={`${year} image ${i + 1}`}
            width={600}
            height={400}
            className="object-cover w-full h-64 sm:h-80"
          />
        </div>
      ))}
    </div>
  </div>
);

// Main timeline section
export default function TimelineSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-4">
          Our journey through 4 years!
        </h2>
        <p className="text-center text-gray-600 mb-12">
          The journey of a thousand schools began with a single idea and soon turned into a global movement.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 transform -translate-x-1/2" />

          {/* Render each event */}
          {events.map((event) => (
            <TimelineEvent key={event.year} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
