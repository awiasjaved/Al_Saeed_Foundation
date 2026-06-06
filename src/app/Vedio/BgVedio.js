"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import desktopBg from "../assets/images/bggrayschool.png";
import mobileBg from "../assets/images/bggrayschool.png";

const DonateSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden mt-[80px] md:mt-[110px]">

      {/* IMAGE WRAPPER */}
      <div className="relative w-full">

        {/* MOBILE IMAGE */}
        <div className="block md:hidden relative w-full h-[420px] sm:h-[480px]">
          <Image
            src={mobileBg}
            alt="Banner Mobile"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* DESKTOP IMAGE */}
        <div className="hidden md:block relative w-full h-[550px] lg:h-[650px]">
          <Image
            src={desktopBg}
            alt="Banner Desktop"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY (better readability) */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-20 flex items-center">

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

            {/* TEXT BOX */}
            <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[600px] text-center md:text-left">

              {/* URDU HEADING */}
              <h1
                className="
                  text-red-600
                  font-bold
                  leading-snug
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
                style={{ fontFamily: "Noto Nastaliq Urdu" }}
              >
                تعلیم سے بدلے زندگی
              </h1>

              {/* ENGLISH TEXT */}
              <h2
                className="
                  mt-3
                  text-blue-900
                  font-bold
                  italic
                  leading-snug
                  text-base
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                "
              >
                Give your Zakat and
                <br />
                Donations for Education.
              </h2>

              {/* BUTTON */}
              <button
                onClick={() => router.push("/donate_now")}
                className="
                  mt-5
                  sm:mt-6
                  md:mt-8
                  bg-red-600
                  text-white
                  font-bold
                  text-sm
                  sm:text-lg
                  md:text-xl
                  px-6
                  sm:px-8
                  md:px-10
                  py-2.5
                  sm:py-3
                  rounded-md
                  shadow-lg
                  transition-all
                  hover:scale-105
                  hover:bg-red-700
                "
              >
                Donate Now
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonateSection;