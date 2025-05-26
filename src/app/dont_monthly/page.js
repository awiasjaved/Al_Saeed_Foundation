// components/OneTimeDonation.jsx
"use client";
import Link from "next/link";

export default function OneTimeDonation() {
  return (
    <section className="bg-white py-16 text-center">
      <h3 className="text-xl font-medium text-gray-800 mb-4">
        Don&apos;t want to give monthly?
      </h3>
      <p className="text-gray-600 mb-8">
        Make a one-time donation to provide quality education.
      </p>
      <Link
        href="/donate"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition"
      >
        DONATE NOW
      </Link>
    </section>
  );
}
