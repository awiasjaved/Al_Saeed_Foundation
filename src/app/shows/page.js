"use client";

import Image from "next/image";

export default function DonationServices() {
  const services = [
   
    {
      title: "Education Support",
      image: "/images/educationalsports.png",
    },
    {
      title: "Food Distribution",
      image: "/images/foodspot.png",
    },
    {
      title: "Orphan Care",
      image:
        "/images/orphan.png",
    },
    {
      title: "Medical Support",
      image: "/images/medicalspot.png",
    },
     {
      title: " Books, Uniform & Shoes Donation",
      image: "/images/shoeas.png",
    },
    {
      title: " Toys & Stationery Donation",
      image: "/images/toys.png",
    },
 
  ];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#002f86]">
            Donate for a Cause
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Your support helps us transform lives through education,
            healthcare, food assistance and community welfare.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-xl
                h-[380px]
                group
              "
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  z-10
                "
              >
                <h3
                  className="
                    text-white
                    text-3xl
                    font-bold
                    leading-tight
                    mb-5
                  "
                >
                  {service.title}
                </h3>

                <button
                  className="
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}