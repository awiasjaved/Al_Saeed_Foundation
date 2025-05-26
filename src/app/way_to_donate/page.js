// components/EasyWaysToGive.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

const methods = [
  {
    id: "easypaisa",
    label: "EasyPaisa",
    img: "/icons/easypaisa.svg",
    alt: "EasyPaisa Logo",
    description: (
      <>
        You can send your donation instantly via EasyPaisa to <strong>Account # 1234-567890</strong>.  
        Just open your EasyPaisa app, choose “Send Money,” enter the account, and confirm.
      </>
    ),
  },
  {
    id: "jazzcash",
    label: "JazzCash",
    img: "/icons/jazzcash.svg",
    alt: "JazzCash Logo",
    description: (
      <>
        Donate via JazzCash by sending to <strong>Mobile Account 0300-1234567</strong>.  
        Use the JazzCash app’s “Send” feature and enter the number above.
      </>
    ),
  },
  {
    id: "bank",
    label: "Bank Transfer",
    img: "/icons/bank-transfer.svg",
    alt: "Bank Transfer Icon",
    description: (
      <>
        Make a direct bank transfer to:  
        <br />
        <strong>The Citizens Foundation</strong>  
        <br />
        Account # 0123456789 @ Sample Bank, Karachi.  
        <br />
        SWIFT: SAMPLEPKK
      </>
    ),
  },
];

export default function EasyWaysToGive() {
  const [active, setActive] = useState(methods[0].id);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-8">Easy Ways To Give!</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {methods.map((m) => (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            className={`px-6 py-2 font-medium rounded ${
              active === m.id
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto flex items-start space-x-8">
        <div className="flex-shrink-0">
          <Image
            src={methods.find((m) => m.id === active).img}
            alt={methods.find((m) => m.id === active).alt}
            width={100}
            height={100}
          />
        </div>
        <div className="prose prose-lg">
          {methods.find((m) => m.id === active).description}
        </div>
      </div>
    </section>
  );
}
