// app/page.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FooterEnd from "../Footer/FooterEnd";
import Subscribe from "../Subscribe/page";
import bgImageDesktop from "../assets/images/stab.jpg";
import bgImageMobile from "../assets/images/stab.jpg";

const schoolStats = [
  { label: "District", value: "Sahiwal" },
  { label: "Region", value: "central" },
  { label: "Student Strength", value: "140" },
  { label: "Date Of Start", value: "2023" },
  { label: "No. Of Unit(S)", value: "1" },
  { label: "Category", value: "Secondary" },
  { label: "Shift", value: "Morning" },
];

const Page = () => {
  const [animateBg, setAnimateBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBg(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  // choose mobile vs desktop bg
  const bgUrl =
    typeof window !== "undefined" && window.innerWidth > 768
      ? bgImageDesktop.src
      : bgImageMobile.src;

  return (
    <>
      <div className="h-30 md:h-40" />
      {/* ==== School Stats ==== */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Al Saeed Foundation{" "}
            <span className="text-green-600 font-normal">(Punjab)</span>
          </h2>

          <motion.table
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full border-collapse"
          >
            <tbody>
              {schoolStats.map((row, idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="py-3 font-medium text-gray-700">{row.label}</td>
                  <td className="py-3 text-gray-900">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </section>

      {/* ==== Subscribe & Footer ==== */}
      <Subscribe />
      <FooterEnd />
    </>
  );
};

export default Page;
