"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const funds = ["General Education", "Health", "Livelihood"];
const currencies = ["PKR", "AED"];
const presetAmounts = ["2,000", "5,000", "10,000", "15,000", "20,000"];

export default function ChangeDonate() {
  const [step] = useState(1);
  const [selectedFund, setSelectedFund] = useState(funds[0]);
  const [currency, setCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState(presetAmounts[0]);
  const [otherAmount, setOtherAmount] = useState("");
  const [purpose, setPurpose] = useState("General");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const finalAmount = amount === "other" ? otherAmount : amount;

  const fullMessage = `I am honoured to return to my alma mater as AKU’s Vice Provost Research. I still remember the day I joined AKU as a student 30 years ago and as a graduate 25 years ago. Thank you to my colleagues, friends, and well-wishers for a warm and joyous welcome back to our university!

This is a momentous year for the Aga Khan University. We have been extremely good consumers of knowledge with a good recent track record for knowledge creation. However, global research priorities are constantly evolving, and so is AKU’s research portfolio. What will maintain our University’s global footprint for decades and centuries to come, is the creation and preservation of knowledge as clearly articulated by our Chancellor. Whether the said knowledge is medical, educational, environmental, or focuses on media and culture, our goal is to foster a research environment that brings together a diverse group of people in their quest for knowledge. Our global footprint and collaborations across several continents is a strength that we will continue to leverage.

This was made evident during the COVID pandemic, with clinical trials on vaccine assessment and even projects on mental health taking center stage. While new tools and technologies have made detection and diagnosis of infectious and non-communicable diseases easier and much more efficient, our awareness of the environment and society in which we operate has increased several fold. As we move forward, we continue to delve deeper into the areas of big data and artificial intelligence using the IQRA framework (Impact, Quality, Relevance, and Access), extending our mission of creating impact across the communities in which we live and the communities in need.

Recent years have shown us the power of sharing knowledge and innovative prowess through global collaborations. As we mark the 40th year...`;

  return (
    <section className="py-12 bg-gray-50 ">
      {/* Header Banner like first image */}
      <div className="bg-white text-black py-12">
        <div className=" mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left: Photo */}
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/salim-virani.jpg" // Replace with actual image path
                alt="Dr. Salim S. Virani"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Message Teaser */}
          <div className="md:w-3/5 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Message from Dr. Salim S. Virani, Vice Provost, Research
            </h2>
            <p className="text-lg leading-relaxed">
              What will maintain our University&apos;s global footprint for
              decades and centuries to come, is the creation and preservation of
              knowledge as clearly articulated by our Chancellor.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-[#6B1E3A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              READ MORE →
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Change Begins With One Child
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Join our membership programme by pledging to support the education
            of at least one child living in poverty for just Rs. 3,600 per
            month.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - Description */}
          <div className="lg:w-1/2 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/child.jpg"
                alt="Happy child"
                width={700}
                height={450}
                className="w-full object-cover"
              />
            </div>

            <div className="prose text-gray-700 space-y-4">
              <p>
                Our Members are a dedicated community of individuals whose
                generosity provides sustained support to TCF — safeguarding the
                future of marginalised children through quality education.
              </p>
              <p>
                By providing monthly support for their education, you can become
                a guardian of their future, enabling them to pursue their dreams
                and build an empowered future.
              </p>
              <p className="font-semibold text-gray-800 text-lg">
                Become a part of our movement to make quality education
                accessible to the less privileged children in Pakistan!
              </p>
            </div>
          </div>

          {/* Right Side - Donation Card */}
          <motion.div
            className="lg:w-1/2 bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Send your donation amount on
            </h2>

            {/* Payment Methods */}
            <div className="space-y-6 mb-10">
              {[
                { name: "JazzCash", logo: "/logos/jazzcash.png" },
                { name: "Easypaisa", logo: "/logos/easypaisa.png" },
                { name: "Bank Transfer", logo: "/logos/bank.png" },
              ].map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image
                      src={logo}
                      alt={name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("../donate_now")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all active:scale-95"
            >
              Proceed to Donation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] bg-black/70 flex justify-center items-center p-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl shadow-2xl w-[92%] xl:w-[85%] max-w-7xl h-[78vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-6">
                <div>
                  <h2 className="text-3xl font-bold text-green-700">
                    Change Begins With One Child
                  </h2>
                  <p className="text-gray-500">Welcome Message</p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-3xl text-gray-500 hover:text-red-600"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 p-8 flex-1 overflow-hidden">
                {/* Left */}
                <div className="overflow-y-auto pr-5 h-full">
                  {" "}
                  <div className="whitespace-pre-line text-gray-700 leading-8">
                    {fullMessage}
                  </div>
                </div>

                {/* Right */}
            <div className="flex items-center justify-between border-b px-8 py-5 bg-gray-50 rounded-t-xl">

<Image
    src="/salim-virani.jpg"
    alt="Dr. Salim"
    width={600}
    height={700}
    className="w-full h-[420px] object-cover rounded-xl border shadow-lg"
/>

</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
