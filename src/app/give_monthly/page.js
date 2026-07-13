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

  const fullMessage = `OFFICE OF THE REGISTRAR
JOINT STOCK COMPANIES, LAHORE

OFFICIAL FILING CERTIFICATE

Organization:AL-SAEED FOUNDATION (ASF)

Registered Address:House No. 325,Block No. 2,Sector C-1,Township,Lahore.

This is to certify that the under noted document(s) have been duly filed
under the provisions of the Societies Registration Act, 1860 and
Companies Act, 2017.

Filed Documents:
• List of Office Bearers for the Year 2025
Official Fee:
Rs. 250/- (Rupees Two Hundred and Fifty Only)
Certificate Number:
RP/12172-L/S/21/1322
Issue Date:
15 August 2025
Issued By:
Office of the Registrar
Joint Stock Companies,
Lahore

This certificate confirms the successful filing of the required statutory
documents submitted by AL-SAEED FOUNDATION (ASF).
`;

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      {/* Header Banner like first image */}
      <div className="bg-white text-black py-12">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Photo */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px]
h-[360px] sm:h-[430px] md:h-[480px] lg:h-[520px]
bg-white rounded-xl shadow-lg border p-3 overflow-hidden">
              <Image
                src="/images/punjab.png"
                alt="Punjab Charity Commission Certificate"
                width={700}
                height={950}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Message Teaser */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
               Office of the Registrar Joint Stock Companies, Lahore
            </h2>

            <p className="text-base sm:text-lg leading-7 text-gray-700">
                AL-SAEED FOUNDATION (ASF) has officially filed its statutory documents
  with the Office of the Registrar Joint Stock Companies, Lahore under the
  provisions of the Societies Registration Act, 1860 and Companies Act,
  2017. This filing confirms the submission of the organization's office
  bearers for the year 2025.
        <p><strong>Organization:</strong> AL-SAEED FOUNDATION (ASF)</p>
      <p><strong>Status:</strong> Official Filing Completed</p>
      <p><strong>Authority:</strong> Registrar Joint Stock Companies</p>
      <p><strong>Location:</strong> Lahore, Punjab</p>
      <p><strong>Date:</strong> 15 August 2025</p>

            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mx-auto lg:mx-0 w-fit bg-[#02498E] hover:bg-[#01386d] text-white px-6 py-3 rounded-lg transition"
            >
              READ MORE →
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}


      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] bg-black/70 flex justify-center items-center p-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl shadow-2xl
w-[96%]
sm:w-[94%]
lg:w-[90%]
max-w-7xl
h-[92vh]
sm:h-[88vh]
flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-6">
                <div>
                  <h2 className="text-3xl font-bold text-green-700">
                    Punjab Charity Commission
                  </h2>

                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-3xl text-gray-500 hover:text-red-600"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-6 p-4 sm:p-6 lg:p-8 flex-1 overflow-hidden">
                {/* Left */}
                <div className="overflow-y-auto h-full pr-0 lg:pr-5 text-sm sm:text-base">
                  {" "}
                  <div className="whitespace-pre-line text-gray-700 leading-8">
                    {fullMessage}
                  </div>
                </div>

                {/* Right */}
                {/* Right */}
                <div className="h-[280px] sm:h-[380px] lg:h-full flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[500px] mx-auto">
                    <Image
                      src="/images/punjab.png"
                      alt="Punjab Charity Commission Certificate"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
