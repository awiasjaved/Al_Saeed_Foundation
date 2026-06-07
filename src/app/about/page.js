"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import FooterEnd from "../Footer/FooterEnd";
import Flowers from "../ShopNow/Flowers";
import Subscribe from "../Subscribe/page";
import Ourjurney from "../our_jurney/page";
import Circle from "../slider/page";

import bgImageDesktop from "../assets/images/about.png";
import bgImageMobile from "../assets/images/stab.jpg";

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
          bg-top
          bg-no-repeat
          relative
          mt-[80px]
        "
        style={{
          backgroundImage: `url(${bgImageDesktop.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl lg:text-6xl font-bold"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
          </motion.h1>
        </div>
      </div>

      {/* Mobile Banner */}
      <div
        className="
          block
          md:hidden
          h-[45vh]
          bg-cover
          bg-top
          bg-no-repeat
          relative
          mt-[70px]
        "
        style={{
          backgroundImage: `url(${bgImageMobile.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 flex items-end justify-center p-4">
          <motion.h1
            className="text-3xl font-bold text-white text-center"
            initial="initial"
            animate={shouldAnimate ? "animate" : "initial"}
            variants={textAnimation}
            transition={textAnimation.transition}
          >
          </motion.h1>
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