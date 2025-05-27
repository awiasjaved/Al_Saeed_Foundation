'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const countryOptions = ['Pakistan', 'United Arab Emirates', 'United States'];
const provinceOptions = ['Select Province', 'Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan'];

export default function DonateStep2() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState(countryOptions[0]);
  const [province, setProvince] = useState(provinceOptions[0]);
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure mandatory fields are filled
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !contact.trim()) {
      alert('Please fill in First Name, Last Name, Email, and Contact Number.');
      return;
    }

    try {
      const response = await fetch('https://al-saeed-backed.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          contact,
          address,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to submit form:', errorText);
        alert('Submission failed. Please try again.');
        return;
      }

      router.push('../payment_process');
    } catch (error) {
      console.error('An error occurred while submitting:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-60 p-6 bg-white rounded-2xl shadow">
      <div className="flex items-center mb-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="p-1 mr-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="flex-1 text-center text-gray-800 text-xl font-semibold">
          Enter your information
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
          required
        />
        <input
          type="tel"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
          required
        />
        <textarea
          rows={3}
          placeholder="Address (optional)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500 resize-none"
        />
        <div className="grid grid-cols-2 gap-2">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
          >
            {countryOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
          >
            {provinceOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Zip/Postal Code (optional)"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="City (optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
        >
          Proceed to Payment →
        </button>
      </form>
    </div>
  );
}
