"use client";

import React from "react";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 bg-white min-h-screen">
      {/* Heading + intro */}
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-[#ff0000] font-semibold mb-6 pt-20 leading-snug"
        
        >
          About Al-Saeed Foundation
        </h2>

        <p
          className="text-base sm:text-lg leading-relaxed text-justify sm:text-center pt-6"
          
        >
          The Al-Saeed Foundation is a charitable organization committed to uplifting the lives of
          impoverished individuals and orphaned children. Through its various programs and initiatives,
          the foundation provides essential support, including education, healthcare, and social
          assistance, to those in need. With a mission to make a positive impact on the lives of the less
          fortunate, the Al Saeed Foundation plays a vital role in fostering hope and opportunities for a
          better future. We are a compassionate and dedicated non-profit organization committed to serving
          those facing economic hardship and orphanhood. Our mission is to provide essential support—education,
          healthcare, and social assistance—to help vulnerable individuals lead better and more fulfilling lives.
        </p>
      </div>

      {/* Three columns: Vision / Mission / Values */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Vision */}
        <div
          className="text-center px-4"
       
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-green-500 mb-2">Vision</h3>
          <h4 className="text-lg font-medium mb-4">Positive Change</h4>
          <p className="text-base leading-relaxed">
            To remove barriers of class and privilege to make the citizens of Pakistan agents of positive
            change.
          </p>
        </div>

        {/* Mission */}
        <div
          className="text-center px-4"
          
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-2">Mission</h3>
          <h4 className="text-lg font-medium mb-4">Education / Future</h4>
          <p className="text-base leading-relaxed">
            Through the power of quality education enabling moral, spiritual, and intellectual enlightenment.
          </p>
        </div>

        {/* Values */}
        <div
          className="text-center px-4"
         
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-green-700 mb-2">Values</h3>
          <ul className="text-base sm:text-lg space-y-1 mt-4">
            <li>Sincerity</li>
            <li>Service</li>
            <li>Beauty</li>
            <li>Positive Conduct</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
