"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import FooterEnd from "../Footer/FooterEnd";
import Flowers from "../ShopNow/Flowers";
import Subscribe from "../Subscribe/page";
import Ourjurney from "../our_jurney/page";
import Circle from "../slider/page";

import bgImageDesktop from "../assets/images/about.png";
import bgImageMobile from "../assets/images/mobileabout.png";

const textAnimation = {
  initial: {
    opacity: 0,
    letterSpacing: "-0.5em",
    y: -100,
  },
  animate: {
    opacity: 1,
    letterSpacing: "0em",
    y: 0,
  },
  transition: {
    duration: 0.7,
    ease: [0.215, 0.61, 0.355, 1.0],
  },
};

const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Banner */}
      <div
        className="
          hidden
          md:block
          h-[70vh]
          lg:h-[75vh]
          xl:h-[80vh]
          bg-cover
          bg-center
          bg-no-repeat
          relative
          mt-[120px]
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${bgImageDesktop.src})`,
        }}
      >
        {/* Left Side Gradient Shadow */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0b1f35]/90
            via-[#0b1f35]/60
            to-transparent
          "
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-3xl px-8 lg:px-20">
            <motion.div
              initial="initial"
              animate={shouldAnimate ? "animate" : "initial"}
              variants={textAnimation}
              transition={textAnimation.transition}
            >
              {/* Urdu */}
              <h1
                className="
                  text-white
                  text-3xl
                  lg:text-5xl
                  xl:text-6xl
                  font-bold
                  leading-relaxed
                  mb-4
                "
                dir="rtl"
                style={{
                  fontFamily: "Noto Nastaliq Urdu",
                  textShadow:
                    "0 4px 15px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)",
                }}
              >
                ایک عطیہ، ہزار زندگیوں کی روشنی
              </h1>

              {/* English */}
              <p
                className="
                  text-white
                  text-lg
                  lg:text-2xl
                  xl:text-3xl
                  font-medium
                  max-w-2xl
                "
                style={{
                  textShadow: "0 4px 12px rgba(0,0,0,0.6)",
                }}
              >
                One donation can light up thousands of lives.
              </p>

              {/* Donate Button */}
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
<div
  className="
    block
    md:hidden
    h-[55vh]
    sm:h-[60vh]
    bg-cover
    bg-center
    bg-no-repeat
    relative
    mt-[70px]
  "
  style={{
    backgroundImage: `url(${bgImageMobile.src})`,
  }}
>
  {/* Bottom Shadow Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#0b1f35]/95
      via-[#0b1f35]/60
      to-transparent
    "
  />

  {/* Content */}
  <div className="absolute inset-0 z-20 flex items-end">
    <div className="w-full px-4 sm:px-6 pb-8 sm:pb-12">
      <motion.div
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        variants={textAnimation}
        transition={textAnimation.transition}
        className="max-w-full text-center"
      >
        {/* Urdu Heading */}
        <h1
          dir="rtl"
          className="
            text-white
            font-extrabold
            leading-snug
            text-[24px]
            sm:text-[32px]
            mb-2
          "
          style={{
            fontFamily: "Noto Nastaliq Urdu",
            WebkitTextStroke: "0.5px white",
            textShadow: `
              0 2px 6px rgba(0,0,0,0.6),
              0 6px 18px rgba(0,0,0,0.5),
              0 0 25px rgba(255,255,255,0.25)
            `,
          }}
        >
          ایک عطیہ، ہزار زندگیوں کی روشنی
        </h1>

        {/* English Heading */}
        <h2
          className="
            mt-3
            text-white
            font-bold
            italic
            leading-relaxed
            text-sm
            sm:text-base
            max-w-[280px]
            sm:max-w-[340px]
            mx-auto
          "
          style={{
            textShadow: "0 6px 20px rgba(0,0,0,0.8)",
          }}
        >
          One donation can light up thousands of lives.
        </h2>

        {/* Donate Button */}
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
      </motion.div>
    </div>
  </div>
</div>

      {/* Sections */}
      <Circle />
      <Ourjurney />
      <Flowers />
      <FooterEnd />
      <Subscribe />
    </>
  );
};

export default Page;
