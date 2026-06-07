"use client";

import React from "react";
import Image from "next/image";
import officeImg from "../assets/images/office.jpeg";
import staffImg from "../assets/images/staff.png";
import lookingImg from"../assets/images/goodlooking.jpeg";
import studentImg from"../assets/images/student1.jpeg";
import student1Img from"../assets/images/namazstudent.png";
import student2Img from"../assets/images/pgclass.png";
import student3Img from"../assets/images/oneclass.jpeg";
import student4Img from"../assets/images/bundle student.png";
import student5Img from"../assets/images/twoclass.jpeg";
import student6Img from"../assets/images/threeclass.png";
import student7Img from"../assets/images/fourclass.jpeg";
import student8Img from"../assets/images/fiveclass.jpeg";
import student9Img from"../assets/images/sixclass.jpeg";
import student10Img from"../assets/images/sevenclass.jpeg";
import student11Img from"../assets/images/eight.jpeg";
import student12Img from"../assets/images/nine.jpeg";
import student13Img from"../assets/images/ten.png";
const events = [
 {
    image: officeImg,
  },
  {
    image: staffImg,
  },
  {
    
    image: lookingImg,
   
  },
  {

    image: studentImg, 
  
  },
  {
    
    image: student3Img,
   
  },
  {
 
    image: student2Img,

  },
  {
 
    image: student4Img ,

  },
  {
 
    image: student5Img,

  },
  {
 
    image:student6Img,

  },
  {
    image: student7Img,
  },
  {
    image: student8Img,
  },
  {
    image: student9Img,
  },
   {
        image: student11Img,
      },
      {
        image: student10Img,
      },
      {
        image: student12Img,
      },
        {
        image: student13Img,
      },
      
    
];

export default function TimelineSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#02498E] mb-4">
          Our Journey Through The Years
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore the milestones and achievements of our foundation over
          the years and see how we continue to create impact.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                border
                border-gray-200
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
            
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}