// ../change_being_donate/page.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

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

const paymentMethods = [
  { id: "jazz",   label: "JazzCash" },
  { id: "easyp",  label: "Easypaisa" },
  { id: "bank",   label: "Bank Transfer" },
];


  const finalAmount = amount === "other" ? otherAmount : amount;

  function handleContinue() {
    console.log({
      step,
      selectedFund,
      currency,
      amount: finalAmount,
      purpose,
    });
    // → wire up your next step (router.push or form submit)
  }

  return (
    <section className="py-12 bg-gray-50">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Change Begins With One Child
        </h1>
        <p className="mt-4 text-gray-600">
          Join our membership programme by pledging to support the education of
          at least one child living in poverty for just Rs. 3,600 per month.
        </p>
      </div>

      {/* Two columns */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* ◀️ Left: image + description */}
        <div className="md:w-1/2 space-y-6">
          <Image
            src="/child.jpg"
            alt="Happy child"
            width={700}
            height={400}
            className="rounded-lg object-cover"
          />

          <p className="text-gray-700">
            Our Members are a dedicated community of individuals whose
            generosity provides sustained support to TCF — safeguarding the
            future of marginalised children through quality education.
          </p>
          <p className="text-gray-700">
            By providing monthly support for their education, you can become a
            guardian of their future, enabling them to pursue their dreams and
            build an empowered future.
          </p>
          <p className="font-semibold text-gray-800">
            Become a part of our movement to make quality education accessible
            to the less privileged children in Pakistan!
          </p>
        </div>

        {/* ▶️ Right: donation form */}
     <motion.div
  className="md:w-1/2 bg-white rounded-xl shadow-lg p-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h2 className="text-lg font-medium text-gray-800 mb-6 text-center">
    Send your donation amount on
  </h2>

  {/* Stacked list with logos */}
  <div className="flex flex-col items-center space-y-4 mb-6">
    {[
      { name: "JazzCash", logo: "/logos/jazzcash.png" },
      { name: "Easypaisa", logo: "/logos/easypaisa.png" },
      { name: "Bank Transfer", logo: "/logos/bank.png" },
    ].map(({ name, logo }) => (
      <div key={name} className="flex items-center space-x-3">
        <img src={logo} alt={name} className="h-6 w-6 object-contain" />
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
    ))}
  </div>

  <button
    onClick={handleContinue}
    className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
  >
    Donation &rarr;
  </button>
</motion.div>


      </div>
    </section>
  );
}
