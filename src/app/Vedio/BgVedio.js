"use client";

import React from "react";
import Image from "next/image";
import desktopBg from "../assets/images/Al Saeed Foundation desktop.png";
import mobileBg from "../assets/images/Al Saeed Foundation mobile.png";
// import { motion } from "framer-motion";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const DonateSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // animate again when scrolling up
    }
  }, [inView, controls]);
  return (
    <div className="relative w-full mt-20 md:mt-40">
      {/* Container for responsive height */}
      <div className="h-[100vh] md:h-[70vh] relative w-full">
        {/* Responsive Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <div className="block md:hidden h-full w-full relative">
            <Image
              src={mobileBg}
              alt="Students Mobile"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block h-full w-full relative">
            <Image
              src={desktopBg}
              alt="Students Desktop"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start px-4 sm:px-6 md:px-20 lg:px-24 text-center md:text-left pt-40 md:pt-0 md:justify-center">


          {/* Urdu Heading */}
          <motion.h1
            ref={ref}
            className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2f3191] font-[Noto Nastaliq Urdu] leading-snug w-full max-w-screen-sm md:max-w-none flex flex-wrap justify-center md:justify-start items-center md:items-start gap-x-2 md:pl-12"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {["ساتھ", "ساتھ", "تربیت", "و", "تعلیم"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>




          {/* English Subtitle */}
          <h2 className="mt-2 sm:mt-4 text-base sm:text-md lg:text-lg text-black font-medium whitespace-nowrap text-center md:text-left">
            Donate to educate less-privileged children in Pakistan
          </h2>



          {/* Donate Button */}
          <motion.button
            className="mt-6 sm:mt-8 bg-[#ff0000] hover:bg-[#ae0000] text-white font-semibold px-8 sm:px-10 lg:px-14 py-2 sm:py-2.5 lg:py-3 rounded-md text-base sm:text-lg shadow-md self-center md:self-start md:ml-[4.5rem]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Donate Now
          </motion.button>


        </div>
      </div>
    </div>
  );
};

export default DonateSection;
