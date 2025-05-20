"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/saeed.png";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TopNav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white shadow">
      {/* Top Bar */}
      <div className="bg-gray-100 px-4 py-1 flex justify-between items-center text-sm">
        <div className="flex space-x-3 text-gray-600">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaEnvelope />
        </div>
        <div className="flex space-x-2">
          <Link
            href="/fundraise"
            className="bg-[#ff0000] text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
          >
            Fundraise for TCF
          </Link>
          <Link
            href="/donate"
            className="bg-[#ff0000] text-white px-3 py-1 rounded text-sm hover:bg-[#ae0000]"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-4 py-3 md:px-6 md:py-2 flex items-center justify-between relative flex-wrap">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" width={100} height={30} priority />
        </Link>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden lg:flex items-center ml-auto mr-4"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Search
          </button>
        </form>

        {/* Hamburger - Mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center font-medium text-base">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.link} className="hover:text-orange-600">
                {item.label}
              </Link>

              {/* Submenu (Dropdown) */}
              <AnimatePresence>
                {item.subItems && hoveredMenu === index && (
                  <motion.ul
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-2 bg-white shadow-md space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Search
            </button>
          </form>

          {/* Mobile Menu Items */}
          <ul className="space-y-4 text-base">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.link} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default TopNav;
