"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Desktop Images
import desktopBg1 from "../assets/images/landskap.png";
import desktopBg2 from "../assets/images/bgstudent.png";
import desktopBg3 from "../assets/images/landskapstudent.png";
import desktopBg4 from "../assets/images/doctorbg.png";
import desktopBg5 from "../assets/images/labour.png";

// Mobile Images
import mobileBg1 from "../assets/images/mobilesecreen.png";
import mobileBg2 from "../assets/images/mobilebgstudent (2).png";
import mobileBg3 from "../assets/images/mobilebgstudent.png";
import mobileBg4 from "../assets/images/doctormobile.png";
import mobileBg5 from "../assets/images/labourmobile.png";
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
    {
      desktop: desktopBg5,
      mobile: mobileBg5,
      urdu: "تعلیم ہر بچے کا حق",
      english: "Support education and stop child labor.",
    },
  ];

const DonateSection = () => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
    relative
    w-full
    h-[55vh]
    sm:h-[65vh]
    md:h-[75vh]
    lg:h-[85vh]
    xl:h-[90vh]
    2xl:h-screen
    overflow-hidden
    mt-[70px]
    md:mt-[120px]
  "
    >
      {" "}
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            currentImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}

          <div className="hidden md:block absolute inset-0">
            <Image
              src={slide.desktop}
              alt="banner"
              fill
              priority={index === 0}
              quality={100}
              sizes="100vw"
              className="
      object-cover
      object-center
      w-full
      h-full
      select-none
    "
            />
          </div>

          <div className="block md:hidden absolute inset-0">
           <Image
  src={slide.mobile}
  alt="banner"
  fill
  priority={index === 0}
  quality={100}
  sizes="100vw"
  className="
    object-cover
    object-top
    w-full
    h-full
    select-none
  "
/>
          </div>

          {/* LEFT BLUE SHADOW */}
          <div
            className="
    md:hidden
    absolute
    inset-0
    bg-gradient-to-t
    from-[#0b1f35]/75
    via-[#0b1f35]/50
    to-transparent
  "
          />
          <div
            className="
    hidden md:block
    absolute
    inset-y-0
    left-0
    w-[60%]
    lg:w-[55%]
    bg-gradient-to-r
    from-[#0b1f35]/95
    via-[#0b1f35]/60
    to-transparent
  "
          />
          {/* DARK OVERLAY */}
          {/* <div className="absolute inset-0 bg-black/20" /> */}
        </div>
      ))}
      {/* CONTENT WRAPPER */}
      <div className="absolute inset-0 z-20">
        {/* DESKTOP CONTENT */}
        <div
          className="
    hidden
    md:flex
    h-full
    items-center
    px-8
    lg:px-16
    xl:px-24
  "
        >
          <div className="max-w-[750px]">
            <h1
              className="
        text-white
        font-extrabold
        leading-relaxed
        text-4xl
        lg:text-5xl
        xl:text-6xl
        2xl:text-7xl
      "
              style={{ fontFamily: "Noto Nastaliq Urdu" }}
            >
              {slides[currentImage].urdu}
            </h1>

            <h2
              className="
        mt-4
        text-white
        font-semibold
        italic
        leading-relaxed
        text-xl
        lg:text-2xl
        xl:text-3xl
      "
            >
              {slides[currentImage].english}
            </h2>

            <button
              onClick={() => router.push("/donate_now")}
              className="
                  mt-6
                  lg:mt-8
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  font-bold
                  text-sm
                  md:text-base
                  lg:text-lg
                  px-6
                  lg:px-8
                  py-3
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

        {/* 📱 MOBILE CONTENT (BOTTOM FIXED) */}
        <div
          className="
    md:hidden
    absolute
    bottom-0
    left-0
    right-0
    z-30
    px-4
    sm:px-6
    pb-8
    sm:pb-10
  "
        >
          <div className="text-center max-w-[500px] mx-auto">
            <h1
              className="
        text-white
        font-extrabold
        leading-relaxed
        text-xl
        sm:text-2xl
      "
              style={{
                fontFamily: "Noto Nastaliq Urdu",
                textShadow: "0 4px 12px rgba(0,0,0,0.8)",
              }}
            >
              {slides[currentImage].urdu}
            </h1>

            <h2
              className="
        mt-2
        text-white
        italic
        leading-relaxed
        text-sm
        sm:text-base
        px-2
      "
            >
              {slides[currentImage].english}
            </h2>

            <button
              onClick={() => router.push("/donate_now")}
              className="
            mt-5
            bg-red-600
            hover:bg-red-700
            text-white
            font-bold
            text-sm
            sm:text-base
            px-6
            sm:px-8
            py-2.5
            sm:py-3
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:scale-105
            min-w-[150px]
          "
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
