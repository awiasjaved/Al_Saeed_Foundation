"use client";

import React from "react";

import { motion } from "framer-motion";
const About = () => {

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      {/* Heading + intro */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-5xl leading-relaxed md:text-4xl text-[#ff0000] font-semibold mb-4 pt-20"
          initial={{ opacity: 0, y: -100 }}         // Start from top
          whileInView={{ opacity: 1, y: 0 }}       // Slide into place
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}  // Animate each time it's in view
        >
          About Al-Saeed Foundation
        </motion.h2>
        <motion.p
          className="text text-lg leading-relaxed pt-10"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1.5, x: 2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Trigger every time when 20% is in view
        >
          The Al-Saeed Foundation is a charitable organization committed to uplifting the lives of
          impoverished individuals and orphaned children. Through its various programs and initiatives,
          the foundation provides essential support, including education, healthcare, and social
          assistance, to those in need. With a mission to make a positive impact on the lives of the less
          fortunate, the Al Saeed Foundation plays a vital role in fostering hope and opportunities for a
          better future. The Al-Saeed Foundation is a compassionate and dedicated organization that focuses on
          serving impoverished individuals and orphaned children. We are a non-profit organization with a
          strong commitment to making a positive difference in the lives of those facing economic hardship and
          orphanhood. Our mission is to provide essential support, including education, healthcare, and social
          assistance, to help these vulnerable individuals lead better and more fulfilling lives. Through our
          work, we aim to offer hope and opportunities for a brighter future to those in need.
        </motion.p>
      </div>

      {/* Three columns: Vision / Mission / Values */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
        {/* Vision */}
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, x: -200 }}               // Start left and transparent
          whileInView={{ opacity: 1.5, x: 0 }}              // Move to center and fade in
          transition={{ duration: 1, ease: "easeOut" }} // Smooth motion
          viewport={{ once: false, amount: 0.3 }}         // Trigger on every scroll up/down
        >
          <h3 className="text-5xl font-semibold text-green-500 mb-2">
            Vision
          </h3>
          <h4 className="text-lg font-medium mb-4">Positive Change</h4>
          <p className="text text-md leading-relaxed">
            to remove barriers of class and privilege to make the citizens of Pakistan agents of positive
            change.
          </p>
        </motion.div>

        {/* Mission */}
      <motion.div
      className="text-center px-8"
      initial={{ opacity: 0, y: 100 }}               // Start from bottom
      whileInView={{ opacity: 1, y: 0 }}             // Move up and fade in
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false, amount: 0.3 }}        // Trigger on scroll up/down
    >
      <h3 className="text-5xl font-semibold text-orange-500 mb-2">
        Mission
      </h3>
      <h4 className="text-lg font-medium mb-4">Education / Future</h4>
      <p className="text text-md leading-relaxed">
        Through the power of quality education enabling moral, spiritual
        and intellectual enlightenment.
      </p>
    </motion.div>

        {/* Values */}
         <motion.div
      className="text-center px-8"
      initial={{ opacity: 0, x: 200 }}               // Start from right
      whileInView={{ opacity: 1.5, x: 0 }}             // Animate to center
      transition={{ duration: 1, ease: "easeOut" }} // Smooth motion
      viewport={{ once: false, amount: 0.3 }}        // Re-trigger on scroll up/down
    >
      <h3 className="text-5xl font-semibold text-green-700 mb-2">
        Values
      </h3>
      <ul className="text text-lg space-y-1">
        <li>Sincerity</li>
        <li>Service</li>
        <li>Beauty</li>
        <li>Positive Conduct</li>
      </ul>
    </motion.div>
      </div>
    </section>
  );
};

export default About;
