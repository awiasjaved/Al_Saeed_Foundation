"use client";

import React from "react";

const AboutTCF = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading + intro */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          About Al-Saeed Foundation
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Al-Saeed Foundation is a charitable organization committed to uplifting the lives of 
impoverished individuals and orphaned children. Through its various programs and initiatives, 
the foundation provides essential support, including education, healthcare, and social 
assistance, to those in need. With a mission to make a positive impact on the lives of the less 
fortunate, the Al Saeed Foundation plays a vital role in fostering hope and opportunities for a 
better future.
The Al-Saeed Foundation is a compassionate and dedicated organization that focuses on 
serving impoverished individuals and orphaned children.
We are a non-profit organization with a strong commitment to making a positive difference in 
the lives of those facing economic hardship and orphanhood our mission is to provide essential 
support, including education, healthcare, and social assistance, to help these vulnerable 
individuals lead better and more fulfilling lives.Through our work, we aim to offer hope and 
opportunities for a brighter future to those in need.
        </p>
      </div>

      {/* Three columns: Vision / Mission / Values */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision */}
        <div className="text-center px-4">
          <h3 className="text-2xl font-semibold text-green-500 mb-2">
            Vision
          </h3>
          <h4 className="text-lg font-medium mb-4">Positive Change</h4>
          <p className="text-gray-600 leading-relaxed">
            to remove barries of class and privilege to make the citizens of Pakistan agents of positive 
change.   
          </p>
        </div>

        {/* Mission */}
        <div className="text-center px-4">
          <h3 className="text-2xl font-semibold text-orange-500 mb-2">
            Mission
          </h3>
          <h4 className="text-lg font-medium mb-4">Education / Future</h4>
          <p className="text-gray-600 leading-relaxed">
            Through the power of quality education enabling moral, spiritual
            and intellectual enlightenment.
          </p>
        </div>

        {/* Values */}
        <div className="text-center px-4">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Values
          </h3>
          <ul className="text-gray-600 space-y-1">
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

export default AboutTCF;
