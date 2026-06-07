"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import desktopBg from "../assets/images/donation1.png";
import mobileBg from "../assets/images/donation1.png";

import { FaArrowRight } from "react-icons/fa6";

const Flowers = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Mobile Image */}
      <div className="block md:hidden relative w-full">
        <Image
          src={mobileBg}
          alt="Mobile Banner"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-[65vh]">
        <Image
          src={desktopBg}
          alt="Desktop Banner"
          priority
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

        {/* Urdu Text */}
        <h1 className="
          text-white font-extrabold leading-snug
          text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl
          max-w-4xl
          drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
          [text-shadow:_2px_2px_0_rgb(0_0_0),_-2px_-2px_0_rgb(0_0_0),_2px_-2px_0_rgb(0_0_0),_-2px_2px_0_rgb(0_0_0)]
        ">
          <span>آپ کا تعاون بدل سکتا ہے</span>
          <br />
          <span>مستحق بچوں کا مستقبل</span>
        </h1>

        {/* English Text */}
        <p className="
          text-white font-semibold
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl
          mt-4 max-w-3xl
          drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
          [text-shadow:_2px_2px_0_rgb(0_0_0),_-2px_-2px_0_rgb(0_0_0),_2px_-2px_0_rgb(0_0_0),_-2px_2px_0_rgb(0_0_0)]
        ">
          Your support can change the future of deserving children
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/donate_now">
            <button
              className="
                group
                flex
                items-center
                gap-2

                bg-red-600
                hover:bg-red-700

                text-white
                font-semibold

                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl

                px-6
                sm:px-8
                md:px-10
                lg:px-12

                py-3
                md:py-4

                rounded-lg
                shadow-xl

                transition-all
                duration-300
                hover:scale-105
              "
            >
              Donate Now

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Flowers;