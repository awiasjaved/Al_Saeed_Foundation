"use client";

import { useState } from "react";
import Image from "next/image";
export default function DonationCards() {
  const [showBanks, setShowBanks] = useState(false);
  const [showCenters, setShowCenters] = useState(false);
  const [showOnline, setShowOnline] = useState(false);
  const cards = [
    {
      title: "Bank Transfer",
      description:
        "Deposit your donations directly via an online funds transfer or through any bank in Pakistan",
      button: "SEARCH BANK LIST",
      icon: "🏦",
    },
    {
  title: "Donate Online",
  description:
    "Click below to make donations through JazzCash and EasyPaisa.",
  button: "DONATE NOW",
  icon: "📱",
},
    {
      title: "Collection Centers",
      description:
        "Visit our collection centers in Lahore, Sahiwal & Pakpattan. Find the nearest center now.",
      button: "VIEW CENTERS",
      icon: "🏛️",
    },
  
    // 
  ];

  const banks = [
    {
      name: "Habib Bank Limited ",
      accountTitle: "AL-SAEED SCHOOL",
      accountNumber: "0059127000031403",
      iban: "PK14HABB0059127000031403",
    },
    {
      name: "Meezan Bank",
      accountTitle: "AL-SAEED SCHOOL SYSTEM",
      accountNumber: "11510113563810",
      iban: "PK75MEZN001151011356381",
    },

    {
      name: "Bank Alfalah",
      accountTitle: " AL-SAEED SCHOOL SYSTEM",
      accountNumber: " 83061010239407",
      iban: "PK14ALFH8306001010239407",
    },
  ];
  const centers = [
    {
      city: "Lahore",
      address: "Head office: Al Kausar Campus Baba Makhan Gujjar Street Nawaz Mor Green Town,Lahore",
      phone: "+92 301 4005270  +92 303 5726653",
    },
    {
      city: "Sahiwal",
      address: "Al Majeed Campus House # 107 Street#1 Imamiya colony Jahaz Ground Sahiwa",
      phone: "+92 301 4005270  +92 303 5726653 ",
    },
    {
      city: "Pakpattan",
      address: "Hajan Ghafooran Campus Ghanj Shakar Colony Street No:1 Rakh Pull Pakpattan Shreef",
      phone: "+92 301 4005270 +92 303 5726653",
    },
  ];
const onlinePayments = [
  {
    title: "JazzCash",
    accountTitle: "Hafiz M Amir Saeed",
    number: "03014005270",
  },
  {
    title: "EasyPaisa",
    accountTitle: "Hafiz M Amir Saeed",
    number: "03014005270",
  },
];
  return (
    <>
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[24px]
                  border
                  border-gray-200
                  shadow-lg
                  text-center
                  p-8
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="text-6xl mb-6">{card.icon}</div>

                <h3 className="text-red-600 font-bold text-3xl mb-5">
                  {card.title}
                </h3>

                <p className="text-gray-700 leading-8 text-lg mb-8">
                  {card.description}
                </p>

                {card.title === "Bank Transfer" ? (
                  <button
                    onClick={() => setShowBanks(true)}
                    className="
      bg-[#002f86]
      hover:bg-[#001d56]
      text-white
      px-8
      py-4
      rounded-lg
      font-semibold
    "
                  >
                    {card.button}
                  </button>
                ) : card.title === "Collection Centers" ? (
                  <button
                    onClick={() => setShowCenters(true)}
                    className="
      bg-[#002f86]
      hover:bg-[#001d56]
      text-white
      px-8
      py-4
      rounded-lg
      font-semibold
    "
                  >
                    {card.button}
                  </button>
                ) : card.title === "Donate Online" ? (
  <button
    onClick={() => setShowOnline(true)}
    className="
      bg-[#002f86]
      hover:bg-[#001d56]
      text-white
      px-8
      py-4
      rounded-lg
      font-semibold
    "
  >
    {card.button}
  </button>
) : (
  <button
    className="
      bg-[#002f86]
      hover:bg-[#001d56]
      text-white
      px-8
      py-4
      rounded-lg
      font-semibold
    "
  >
    {card.button}
  </button>
)}
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANK MODAL */}
      {showBanks && (
        <div
          className="
    fixed
    inset-0
    z-[9999]
    bg-black/60
    flex
    items-center
    justify-center
    overflow-y-auto
    p-4
  "
          onClick={() => setShowBanks(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
    relative
    w-full
    max-w-6xl
    bg-white
    rounded-3xl
    shadow-2xl
    p-8
    mx-auto
    animate-in
    zoom-in-95
    duration-300
  "
          >
            <button
              onClick={() => setShowBanks(false)}
              className="
                absolute
                top-4
                right-5
                text-4xl
                font-bold
                text-gray-500
                hover:text-red-600
              "
            >
              ×
            </button>

            <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
              Bank Account Details
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {banks.map((bank, index) => (
                <div
                  key={index}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-6
                    shadow-md
                    hover:shadow-xl
                    transition
                  "
                >
                  <h3 className="text-2xl font-bold text-[#002f86] mb-4">
                    {bank.name}
                  </h3>

                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-semibold">Account Title:</span>{" "}
                      {bank.accountTitle}
                    </p>

                    <p>
                      <span className="font-semibold">Account Number:</span>{" "}
                      {bank.accountNumber}
                    </p>

                    <p className="break-all">
                      <span className="font-semibold">IBAN:</span> {bank.iban}
                    </p>
                  </div>

                  <button
                    className="
                      mt-6
                      w-full
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      py-3
                      rounded-lg
                      font-semibold
                    "
                  >
                    Donate Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showCenters && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/60
      flex
      items-center
      justify-center
      overflow-y-auto
      p-4
    "
    onClick={() => setShowCenters(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-5xl
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
      "
    >
      <button
        onClick={() => setShowCenters(false)}
        className="
          absolute
          top-4
          right-5
          text-4xl
          font-bold
          text-gray-500
          hover:text-red-600
        "
      >
        ×
      </button>

      <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
        Collection Centers
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers.map((center, index) => (
          <div
            key={index}
            className="
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-md
              hover:shadow-xl
              transition
            "
          >
            <h3 className="text-2xl font-bold text-[#002f86] mb-4">
              {center.city}
            </h3>

            <p className="mb-3">
              <span className="font-semibold">Address:</span>
              <br />
              {center.address}
            </p>

            <p>
              <span className="font-semibold">Phone:</span>
              <br />
              {center.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
{showOnline && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/60
      flex
      items-center
      justify-center
      overflow-y-auto
      p-4
    "
    onClick={() => setShowOnline(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-4xl
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
      "
    >
      <button
        onClick={() => setShowOnline(false)}
        className="
          absolute
          top-4
          right-5
          text-4xl
          font-bold
          text-gray-500
          hover:text-red-600
        "
      >
        ×
      </button>

      <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
        Online Donation Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {onlinePayments.map((item, index) => (
          <div
            key={index}
            className="
              border
              border-gray-200
              rounded-2xl
              p-6
              shadow-md
              hover:shadow-xl
              transition
            "
          >
        <div className="flex justify-center mb-4">
  <Image
    src={
      item.title === "JazzCash"
        ? "/images/jazz.png"
        : "/images/easypaisa.png"
    }
    alt={item.title}
    width={120}
    height={80}
    className="h-20 w-auto object-contain"
  />
</div>

            <h3 className="text-2xl font-bold text-[#002f86] mb-4 text-center">
              {item.title}
            </h3>

            <p className="mb-3">
              <span className="font-semibold">
                Account Title:
              </span>
              <br />
              {item.accountTitle}
            </p>

            <p>
              <span className="font-semibold">
                Mobile Number:
              </span>
              <br />
              {item.number}
            </p>

            <button
              className="
                mt-6
                w-full
                bg-red-600
                hover:bg-red-700
                text-white
                py-3
                rounded-lg
                font-semibold
              "
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </>
  );
}
