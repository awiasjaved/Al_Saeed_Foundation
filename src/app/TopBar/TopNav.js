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
      { name: "Ways to Donate", link: "/easyway_to_give" },
    ],
  },
  { label: "News & Stories", link: "/news" },
  {
    label: "Publications",
    link: "/publications",
    subItems: [{ name: "Annual Report", link: "/publications#report" }],
  },
  { label: "Careers", link: "/careers" },
  { label: "Contact", link: "/contactUs" },
];

const TopNav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 shadow-2xl border-b border-blue-400/20">
      
      {/* Top Bar */}
      {/* Top Bar */}
<div className="bg-white px-4 py-2 flex justify-between items-center text-sm shadow-md border-b">
  
  {/* Social Icons */}
  <div className="hidden md:flex space-x-4 ">
    <FaInstagram className="cursor-pointer text-red-300 hover:text-red-600 transition duration-300" />
    <FaTwitter className="cursor-pointer text-blue-400 hover:text-blue-600 transition duration-300" />
    <FaYoutube className="cursor-pointer text-red-400  hover:text-red-600 transition duration-300" />
    <FaEnvelope className="cursor-pointer text-gray-400 hover:text-red-600 transition duration-300" />
  </div>

  {/* Buttons */}
  <div className="flex gap-2 ml-auto">
    <Link
      href="https://wa.me/923035726653"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-[#303295]
        text-white
        px-4
        py-2
        rounded-lg
        text-xs
        sm:text-sm
        font-semibold
        shadow-md
        hover:bg-[#24246e]
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Fundraise for ASF
    </Link>

    <Link
      href="/donate_now"
      className="
        bg-red-600
        text-white
        px-4
        py-2
        rounded-lg
        text-xs
        sm:text-sm
        font-semibold
        shadow-md
        hover:bg-red-700
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Donate Now
    </Link>
  </div>
</div>

      {/* Main Navbar */}
      <nav className="h-[75px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center bg-white rounded-full  shadow-lg"
        >
          <Image
            src={Logo}
            alt="Logo"
            priority
            width={150}
            height={60}
            className="h-[50px] w-auto object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredMenu(idx)}
              onMouseLeave={() => setHoveredMenu(null)}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.link}
                className="
                  text-white
                  hover:text-yellow-300
                  transition-all
                  duration-300
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-yellow-300
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item.label}
              </Link>

              <AnimatePresence>
                {item.subItems && hoveredMenu === idx && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="
                      absolute
                      left-0
                      top-full
                      mt-3
                      bg-white
                      shadow-2xl
                      rounded-xl
                      py-3
                      w-56
                      z-50
                      border
                      border-blue-100
                    "
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.link}
                          className="
                            block
                            px-4
                            py-3
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-blue-700
                            transition-all
                          "
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-[120px] left-0 w-full bg-white z-50 shadow-2xl rounded-b-2xl lg:hidden"
            >
              <ul className="p-4">
                {menuItems.map((item, idx) => {
                  const hasChildren = item.subItems;
                  const isExpanded = expandedMobileIndex === idx;

                  return (
                    <li key={item.label} className="border-b">
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() =>
                              setExpandedMobileIndex(
                                isExpanded ? null : idx
                              )
                            }
                            className="w-full flex justify-between items-center py-3 font-medium text-gray-700"
                          >
                            {item.label}
                            <span>{isExpanded ? "−" : "+"}</span>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4"
                              >
                                {item.subItems.map((sub) => (
                                  <li key={sub.name}>
                                    <Link
                                      href={sub.link}
                                      className="block py-2 text-gray-600 hover:text-blue-700"
                                      onClick={() =>
                                        setIsMobileMenuOpen(false)
                                      }
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
                          className="block py-3 font-medium text-gray-700 hover:text-blue-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNav;