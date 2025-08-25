"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const socialIcons = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
];

const topLinks = [
  { label: "Contact", url: "/contact" },
  {
    label: "Sports & Games",
    children: [
      { label: "Football", url: "/sports/football" },
      { label: "Basketball", url: "/sports/basketball" },
      { label: "Swimming", url: "/sports/swimming" },
    ],
  },
  {
    label: "Aerobic",
    children: [
      { label: "Morning Class", url: "/aerobic/morning" },
      { label: "Evening Class", url: "/aerobic/evening" },
    ],
  },
  { label: "FAQ", url: "/faq" },
];

const TopBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) =>
    setOpenDropdown(openDropdown === label ? null : label);

  return (
    <div className="w-full text-white bg-gray-900">
      <div className="items-center justify-between hidden h-10 px-6 md:flex lg:px-20">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialIcons.map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="transition hover:text-yellow-400">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Top Links */}
        <div className="flex items-center gap-6">
          {topLinks.map((link, idx) => (
            <div key={idx} className="relative">
              {link.children ? (
                <>
                  <span
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="transition cursor-pointer hover:text-yellow-400"
                  >
                    {link.label}
                  </span>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 w-48 p-4 bg-white text-black rounded-md shadow-lg transition-all duration-300 ${
                      openDropdown === link.label ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    {link.children.map((child, i) => (
                      <Link key={i} href={child.url} className="block p-2 transition rounded-md hover:bg-gray-200">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.url} className="transition hover:text-yellow-400">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile TopBar */}
      <div className="relative flex md:hidden">
        {/* Social Icons Vertical */}
        <div className="fixed top-[12vh] left-0 flex flex-col gap-4 bg-gray-900 p-2 rounded-tr-lg z-[1000]">
          {socialIcons.map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="text-xl transition hover:text-yellow-400">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Scrollable Links */}
        <div className="flex w-full gap-6 px-4 py-2 overflow-x-auto bg-gray-900 whitespace-nowrap">
          {topLinks.map((link, idx) => (
            <div key={idx} className="relative inline-block">
              {link.children ? (
                <>
                  <span
                    onClick={() => toggleDropdown(link.label)}
                    className="transition cursor-pointer hover:text-yellow-400"
                  >
                    {link.label}
                  </span>
                  {/* Mobile Dropdown */}
                  {openDropdown === link.label && (
                    <div className="absolute left-0 w-48 p-4 mt-2 text-black bg-white rounded-md shadow-lg top-full animate-slide-down">
                      {link.children.map((child, i) => (
                        <Link key={i} href={child.url} className="block p-2 transition rounded-md hover:bg-gray-200">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.url} className="transition hover:text-yellow-400">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
