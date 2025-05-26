"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

const schools = [
  {
    name: "AL Saeed Foundation",
    location: "Lahore, Punjab",
    href: "/schools/meghani-family-campus-primary-morning",
  },
  {
    name: "AL Saeed Foundations",
    location: "Sahhiwal, Punjab",
    href: "/schools/umeed-ka-chiragh-campus",
  },
  // …you can add more here
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = schools.filter((s) =>
    (
      s.name.toLowerCase() +
      " " +
      s.location.toLowerCase()
    ).includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="title">Our Schools</h1>
      <input
        type="text"
        placeholder="Search schools…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filtered.map(({ name, location, href }) => (
          <div key={href} className="card">
            <h2 className="schoolName">{name}</h2>
            <p className="location">
              <FiMapPin className="icon" />
              {location}
            </p>
            <Link href={href} className="viewButton">
              View
            </Link>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="noResults">No schools match “{searchTerm}”.</p>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .title {
          font-size: 2rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        .search {
          width: 100%;
          padding: 0.5rem 0.75rem;
          margin-bottom: 2rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 0.75rem;
          padding: 2rem;
          background: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .schoolName {
          font-size: 1.25rem;
          color: #2f855a;
          margin-bottom: 0.75rem;
        }
        .location {
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 1.5rem;
        }
        .icon {
          margin-right: 0.5rem;
          color: #888;
        }
        .viewButton {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #38a169 0%, #48bb78 100%);
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .viewButton:hover {
          background: linear-gradient(135deg, #2f855a 0%, #38a169 100%);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        .noResults {
          grid-column: 1 / -1;
          text-align: center;
          color: #999;
          font-style: italic;
        }
      `}</style>
    </main>
  );
}
