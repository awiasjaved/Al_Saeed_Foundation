// app/components/TopNav.jsx
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

const menuItems = [
  { label: "About Us", link: "/about" },
  {
    label: "Our Work",
    link: "#",
    subItems: [{ name: "Our School", link: "/our_school" }],
  },
  {
    label: "Get Involved",
    link: "#",
    subItems: [
      { name: "Become a Member", link: "/become_a_member" },
      { name: "Ways to Donate", link: "../easyway_to_give" },
    ],
  },
  { label: "News & Stories", link: "/news" },
  {
    label: "Publications",
    link: "/publications",
    subItems: [{ name: "Annual Report", link: "/publications#report" }],
  },
  { label: "Careers", link: "/careers" },
  { label: "Contact", link: "/contact" },
];

const TopNav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white shadow">
      {/* Top Bar */}
      <div className="bg-gray-100 px-4 py-1 flex justify-between items-center text-sm flex-wrap">
        <div className="hidden md:flex space-x-3 text-red-500">
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaEnvelope />
        </div>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <Link
            href="https://wa.me/923035726653"
            className="bg-[#303295] text-white px-3 py-1 rounded text-sm hover:bg-[#292947]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fundraise for ASF
          </Link>
          <Link
            href="/donate"
            className="bg-[#ff0000] text-white px-3 py-1 rounded text-sm hover:bg-[#ae0000]"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3 flex items-center justify-between relative">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" width={100} height={30} priority />
        </Link>
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
        >
          <FaBars />
        </button>

        <ul className="hidden lg:flex space-x-6 items-center font-medium text-base">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.label}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredMenu(idx)}
              onMouseLeave={() => setHoveredMenu(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.link} className="hover:text-[#ff0000]">
                {item.label}
              </Link>

              <AnimatePresence>
                {item.subItems && hoveredMenu === idx && (
                  <motion.ul
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {sub.name}
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

      {/* Mobile Menu with Backdrop */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 py-40">
          {/* Backdrop catches outside clicks */}
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Actual sliding menu panel */}
          <div className="relative px-4 py-4 bg-white shadow-md">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => {
                const hasChildren = Array.isArray(item.subItems);
                const isExpanded = expandedMobileIndex === idx;

                return (
                  <li key={item.label}>
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobileIndex(isExpanded ? null : idx)
                          }
                          className="w-full flex justify-between items-center py-2 text-left font-medium"
                        >
                          <span>{item.label}</span>
                          <span
                            className={`transform transition-transform ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.ul
                              key={`submenu-${idx}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {item.subItems.map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.link}
                                    onClick={() =>
                                      setIsMobileMenuOpen(false)
                                    }
                                    className="block py-1"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNav;
