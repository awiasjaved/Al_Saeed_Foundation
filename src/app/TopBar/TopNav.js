"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/saeed.png"; // Replace with your own logo
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const TopNav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    {
      label: "About Us",
      link: "/about",
      subItems: [{ name: "Mission", link: "/about#mission" }],
    },
    {
      label: "Our Work",
      link: "/work",
      subItems: [{ name: "Education", link: "/work#education" }],
    },
    {
      label: "Get Involved",
      link: "/get-involved",
      subItems: [{ name: "Volunteer", link: "/get-involved#volunteer" }],
    },
    {
      label: "News & Stories",
      link: "/news",
    },
    {
      label: "Publications",
      link: "/publications",
      subItems: [{ name: "Annual Report", link: "/publications#report" }],
    },
    {
      label: "Careers",
      link: "/careers",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="w-full z-50 shadow">
      {/* Top Social + Donate Bar */}
      <div className="bg-gray-100 px-4 py-1 flex justify-between items-center text-sm">
        <div className="flex space-x-3 text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaEnvelope />
        </div>
        <div className="flex space-x-2">
          <Link
            href="/fundraise"
            className="bg-orange-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-orange-600"
          >
            Fundraise for TCF
          </Link>
          <Link
            href="/donate"
            className="bg-green-600 text-white px-3 py-1 rounded-sm text-sm hover:bg-green-700"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={160} height={60} priority />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-800 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setHoveredMenu(item.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link href={item.link} className="flex items-center gap-1 hover:text-green-700">
                {item.label}
                {item.subItems && <IoIosArrowDown className="text-xs" />}
              </Link>
              {item.subItems && hoveredMenu === item.label && (
                <ul className="absolute left-0 top-full mt-2 bg-white border shadow rounded w-40 z-10">
                  {item.subItems.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <CiSearch className="text-xl cursor-pointer hover:text-green-700" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
