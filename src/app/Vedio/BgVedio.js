"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Desktop Images
import desktopBg1 from "../assets/images/landskap.png";
import desktopBg2 from "../assets/images/bgstudent.png";
import desktopBg3 from "../assets/images/landskapstudent.png";
import desktopBg4 from "../assets/images/doctorbg.png";

// Mobile Images
import mobileBg1 from "../assets/images/mobile secreen.png";
import mobileBg2 from "../assets/images/mobileredblue.png";
import mobileBg3 from "../assets/images/mobilebgstudent.png";
import mobileBg4 from "../assets/images/doctormobilebg.png";

const DonateSection = () => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    {
      desktop: desktopBg1,
      mobile: mobileBg1,
      urdu: "تعلیم سے بدلے زندگی",
      english: "Give your Zakat and Donations for Education.",
    },
    {
      desktop: desktopBg2,
      mobile: mobileBg2,
      urdu: "ہر بچہ حق رکھتا ہے تعلیم کا",
      english: "Every child deserves the right to education.",
    },
    {
      desktop: desktopBg3,
      mobile: mobileBg3,
      urdu: "مستقبل کی امید، آج کی تعلیم",
      english: "Education is the hope of tomorrow.",
    },
    {
      desktop: desktopBg4,
      mobile: mobileBg4,
      urdu: "ایک عطیہ، ہزار زندگیوں کی روشنی",
      english: "One donation can light up thousands of lives.",
    },
  ];

  // Change Image Every 8 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
   <section className="relative w-full overflow-hidden mt-[80px] md:mt-[110px]">
  <div
    className="
      relative
      w-full
      h-[55vh]
      sm:h-[60vh]
      md:h-[70vh]
      lg:h-[80vh]
      xl:h-[90vh]
      2xl:h-screen
      overflow-hidden
    "
  >
    {/* Images Fade Effect */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          currentImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        {/* Mobile Image */}
        <div className="block md:hidden w-full h-full relative">
          <Image
            src={slide.mobile}
            alt="mobile banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Tablet + Desktop Image */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src={slide.desktop}
            alt="desktop banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    ))}

    {/* Content */}
 {/* Content */}
<div className="absolute inset-0 z-20 flex items-end md:items-center">
  <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-0">
    <div className="max-w-full sm:max-w-[80%] md:max-w-[650px] text-center md:text-left">

      {/* Urdu Heading */}
      <h1
        className="
          text-white
          font-extrabold
          leading-snug
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          2xl:text-7xl
        "
        style={{
          fontFamily: "Noto Nastaliq Urdu",
          WebkitTextStroke: "1px white",
          textShadow: `
            0 2px 6px rgba(0,0,0,0.6),
            0 6px 18px rgba(0,0,0,0.5),
            0 0 25px rgba(255,0,0,0.35)
          `,
        }}
      >
        {slides[currentImage].urdu}
      </h1>

      {/* English Heading */}
      <h2
        className="
          mt-3
          text-white
          font-bold
          italic
          leading-snug
          text-base
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl
        "
        style={{
          textShadow: "0 6px 20px rgba(0,0,0,0.8)",
        }}
      >
        {slides[currentImage].english}
      </h2>

      {/* Button */}
      <button
        onClick={() => router.push("/donate_now")}
        className="
          mt-5
          md:mt-8
          bg-red-600
          hover:bg-red-700
          text-white
          font-bold
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          px-5
          sm:px-7
          md:px-8
          lg:px-10
          py-2.5
          md:py-3.5
          rounded-lg
          shadow-2xl
          transition-all
          duration-300
          hover:scale-105
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
