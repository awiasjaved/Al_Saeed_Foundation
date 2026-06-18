"use client";

import { useRouter } from "next/navigation";

export default function SponsorStudents() {
const router = useRouter();

const sponsors = [
{
value: "3",
title: "Sponsor Students",
amount: "Rs. 8,100/- Month",
},
{
value: "5",
title: "Sponsor Students",
amount: "Rs. 13,500/- Month",
},
{
value: "10",
title: "Sponsor Students",
amount: "Rs. 27,000/- Month",
},
{
value: "3",
title: "Sponsor Students",
amount: "Rs. 97,500/- Year",
},
{
value: "5",
title: "Sponsor Students",
amount: "Rs. 162,500/- Year",
},
{
value: "10",
title: "Sponsor Students",
amount: "Rs. 325,000/- Year",
},
];

return ( <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-red-50"> <div className="max-w-7xl mx-auto px-4">


    {/* Sponsor Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

      {sponsors.map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            bg-white
            rounded-3xl
            p-8
            lg:p-10
            min-h-[280px]
            shadow-xl
            border
            border-gray-100
            hover:-translate-y-3
            hover:shadow-2xl
            transition-all
            duration-300
            text-center
          "
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-[#002f86] rounded-t-3xl" />

          <h2 className="text-6xl lg:text-7xl font-extrabold text-[#002f86] group-hover:text-red-600 transition-all">
            {item.value}
          </h2>

          <h3 className="font-bold text-xl text-gray-800 mt-3">
            {item.title}
          </h3>

          <p className="text-red-600 font-bold text-2xl mt-4">
            {item.amount}
          </p>

          <button
            onClick={() => router.push("/donate_now")}
            className="
              mt-6
              w-full
              whitespace-nowrap
              bg-red-600
              hover:bg-[#002f86]
              text-white
              font-bold
              text-base
              py-3
              rounded-lg
              shadow-xl
              transition-all
              duration-300
            "
          >
            Donate Now
          </button>
        </div>
      ))}

    </div>

    {/* Bottom Section */}
    <div className="max-w-5xl mx-auto text-center">

      <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold mb-5">
        Sponsor a Child
      </span>

      <h2 className="text-4xl lg:text-6xl font-extrabold text-[#002f86] mb-8">
        Your Zakat is in Safe Hands
      </h2>

      <p className="text-lg lg:text-2xl text-gray-600 leading-10">
        Sponsor deserving students through AL Saeed School.
        Your Zakat helps provide quality education, books,
        uniforms, meals and a brighter future for children
        from underprivileged families.
      </p>

      <button
        onClick={() => router.push("/donate_now")}
        className="
          mt-10
          bg-red-600
          hover:bg-[#002f86]
          text-white
          font-bold
          text-lg
          px-10
          py-4
          rounded-xl
          shadow-xl
          transition-all
          duration-300
        "
      >
        Donate Now
      </button>

    </div>

  </div>
</section>

);
}
