"use client";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">

  <span className="inline-block bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-full text-sm md:text-base mb-5">
    About Our Foundation
  </span>

  <h2
    className="
      font-[Montserrat]
      font-extrabold
      text-[#ff0000]
      leading-tight
      text-center
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      xl:text-7xl
    "
  >
    About Al-Saeed Foundation
  </h2>

  <div className="w-24 h-1 bg-red-500 mx-auto mt-5 rounded-full"></div>

  {/* English Paragraph */}
  <p
    className="
      font-[Poppins]
      text-gray-700
      leading-loose
      mt-8
      text-lg
      sm:text-xl
      md:text-2xl
      lg:text-2xl
      xl:text-3xl
      text-justify
      md:text-center
      max-w-5xl
      mx-auto
    "
  >
    The Al-Saeed Foundation is a charitable organization committed
    to uplifting the lives of impoverished individuals and orphaned
    children through education, healthcare, and social welfare
    initiatives. We believe every child deserves an opportunity
    to learn, grow, and build a brighter future.
  </p>

  {/* Urdu Paragraph */}
  <p
    className="
      font-[Noto Nastaliq Urdu, serif]
      text-gray-800
      leading-loose
      mt-6
      text-lg
      sm:text-xl
      md:text-2xl
      lg:text-2xl
      xl:text-3xl
      text-right
      max-w-5xl
      mx-auto
    "
    dir="rtl"
  >
    السعید فاؤنڈیشن ایک فلاحی ادارہ ہے جو غریب افراد اور یتیم بچوں کی زندگیوں کو تعلیم، صحت اور سماجی بہبود کے اقدامات کے ذریعے بہتر بنانے کے لیے پرعزم ہے۔ ہم یقین رکھتے ہیں کہ ہر بچے کو سیکھنے، ترقی کرنے اور ایک روشن مستقبل بنانے کا موقع ملنا چاہیے۔
  </p>

</div>

        {/* Cards */}
      {/* Vision / Mission / Values */}
<div
  className="
  mt-16
  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-3
  gap-8
  lg:gap-10
  "
>

  {/* Vision */}
  <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-gray-100">

    <h3 className="font-[Montserrat] font-bold text-green-600 text-3xl lg:text-4xl mb-3">
      Vision
    </h3>

    <h4 className="font-semibold text-xl text-gray-800 mb-4">
      A Brighter Future for Every Underprivileged Child
    </h4>

    <p className="text-gray-600 text-lg leading-relaxed">
      Empowering disadvantaged children through education,
      care, and opportunity, enabling them to grow with
      dignity, confidence, and hope.
    </p>
  </div>

  {/* Mission */}
  <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-gray-100">

    <h3 className="font-[Montserrat] font-bold text-orange-500 text-3xl lg:text-4xl mb-3">
      Mission
    </h3>

    <h4 className="font-semibold text-xl text-gray-800 mb-4">
      Empowering Lives Through Education and Care
    </h4>

    <p className="text-gray-600 text-lg leading-relaxed">
      To provide quality education, compassionate support,
      and essential resources that empower children and
      families to overcome challenges and build a brighter future.
    </p>
  </div>

  {/* Values */}
  <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-gray-100">

    <h3 className="font-[Montserrat] font-bold text-green-700 text-3xl lg:text-4xl mb-3">
      Values
    </h3>

    <ul className="space-y-3 text-lg text-gray-700 font-medium">
      <li>Sincerity</li>
      <li>Service</li>
      <li>Compassion</li>
      <li>Integrity</li>
      <li>Positive Conduct</li>
    </ul>
  </div>

</div>

{/* Urdu Section */}
<div className="mt-24">

  <div className="text-center mb-12">

   

   

    <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>

  </div>

  <div
    className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
    "
  >

    {/* Urdu Vision */}
    <div className="bg-gradient-to-br from-green-50 to-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-green-100">

      <h3 className="text-green-600 font-bold text-3xl mb-4">
        اقدار
      </h3>

      <h4 className="text-xl font-semibold text-gray-800 mb-4">
        ہر مستحق بچے کے لیے روشن مستقبل
      </h4>

      <p className="text-gray-700 leading-loose text-lg">
        محروم اور نادار بچوں کو تعلیم، تربیت اور مواقع فراہم کرکے
        انہیں باوقار، پُراعتماد اور امید سے بھرپور زندگی گزارنے
        کے قابل بنانا۔
      </p>
    </div>

    {/* Urdu Mission */}
    <div className="bg-gradient-to-br from-orange-50 to-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-orange-100">

      <h3 className="text-orange-500 font-bold text-3xl mb-4">
        مقصد
      </h3>

      <h4 className="text-xl font-semibold text-gray-800 mb-4">
        تعلیم، رہنمائی اور بہتر مستقبل
      </h4>

      <p className="text-gray-700 leading-loose text-lg">
        معیاری تعلیم، اخلاقی تربیت اور سماجی معاونت کے ذریعے
        یتیم اور مستحق بچوں کو بااختیار بنانا تاکہ وہ معاشرے
        کے مفید اور کامیاب شہری بن سکیں۔
      </p>
    </div>

    {/* Urdu Values */}
    <div className="bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-8 text-center border border-blue-100">

      <h3 className="text-blue-600 font-bold text-3xl mb-4">
        اقدار
      </h3>

      <ul className="space-y-4 text-lg text-gray-700 font-medium">
        <li>اخلاص</li>
        <li>خدمت</li>
        <li>ہمدردی</li>
        <li>دیانت داری</li>
        <li>مثبت کردار</li>
      </ul>
    </div>

  </div>

</div>
      </div>
    </section>
  );
};

export default About;