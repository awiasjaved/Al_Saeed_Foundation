"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import desktopBg from "../assets/images/flower.png";
import mobileBg from "../assets/images/flowermobile (2).png";

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

      {/* Desktop / Tablet / Laptop */}
      <div className="hidden md:block relative w-full">
        <Image
          src={desktopBg}
          alt="Desktop Banner"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Button Overlay */}
<div
  className="
    absolute
    inset-0
    flex
    items-end
    justify-center
    z-10
    -translate-y-24
    sm:-translate-y-40
    md:-translate-y-32
    lg:-translate-y-40
    xl:-translate-y-48
  "
>
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

            <FaArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Flowers;