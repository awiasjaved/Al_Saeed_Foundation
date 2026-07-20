'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const countryOptions = ['Pakistan', 'United Arab Emirates', 'United States'];

const provinceOptions = [
  'Select Province',
  'Punjab',
  'Sindh',
  'Khyber Pakhtunkhwa',
  'Balochistan',
  'Gilgit Baltistan',
  'Azad Kashmir',
  'Islamabad Capital Territory',
];

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !contact.trim()) {
      alert('Please fill in First Name, Last Name, Email, and Contact Number.');
      return;
    }

    if (province === 'Select Province') {
      alert('Please select province.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('https://al-saeed-backed.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,

          firstName: firstName,
          lastName: lastName,
          fullName: `${firstName} ${lastName}`,

          email: email,

          phone: contact,
          contact: contact,
          contactNumber: contact,

          address: address,
          country: country,
          province: province,
          postalCode: postalCode,
          city: city,

          formType: 'Donation Information',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Failed to submit form:', data);
        alert(data.message || 'Submission failed. Please try again.');
        return;
      }

      alert('Information submitted successfully.');

      setFirstName('');
      setLastName('');
      setEmail('');
      setContact('');
      setAddress('');
      setCountry(countryOptions[0]);
      setProvince(provinceOptions[0]);
      setPostalCode('');
      setCity('');
    } catch (error) {
      console.error('An error occurred while submitting:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100';

 return (
<section className="min-h-[calc(100vh-120px)] bg-[#f8eed8] px-4 pt-28 pb-16 md:pt-32 md:pb-20">
    <div className="mx-auto max-w-6xl">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_430px]">
        
        {/* Left Content */}
        <div className="mx-auto max-w-xl lg:mx-0">
          <span className="mb-5 inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-800">
            Donation Information
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Submit Your Details
          </h1>

          <p className="max-w-lg text-base font-medium leading-8 text-gray-700">
            Please fill out your basic information. Once submitted, your details
            will be sent to our team and we will contact you if further information
            is required.
          </p>

          <div className="mt-8 grid max-w-lg gap-4">
            <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-gray-900">
                Secure Submission
              </h3>
              <p className="text-sm font-medium leading-6 text-gray-600">
                Your information will be submitted directly to our backend system.
              </p>
            </div>

            <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-gray-900">
                No Payment Required
              </h3>
              <p className="text-sm font-medium leading-6 text-gray-600">
                This form only collects your information. It will not redirect you
                to any payment page.
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-6 w-full max-w-[460px] rounded-[26px] bg-white p-6 shadow-2xl shadow-black/10 md:mt-8 md:p-7">
          <div className="mb-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 transition hover:bg-gray-200"
              aria-label="Go back"
            >
              ←
            </button>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Enter your information
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Submit your details below
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />

            <input
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={inputClass}
              required
            />

            <textarea
              rows={3}
              placeholder="Address (optional)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`${inputClass} resize-none`}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={inputClass}
              >
                {countryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className={inputClass}
              >
                {provinceOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Zip/Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Submitting...' : 'Submit Information'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}