"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const socialIcons = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
];

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "m.makata@gatewayhotel.co.tz",
    url: "mailto:m.makata@gatewayhotel.co.tz",
  },
  {
    icon: <FaPhone />,
    label: "+255 299 040 463 / +255 765 057 028",
    url: "tel:+255299040463",
  },
  {
    icon: <FaMapMarkerAlt />,
    label:
      "Mihande Road, Mtoni Kijichi, Postal Code 15129, Temeke P.O. Box 1430, Dar es Salaam",
    url: "#",
  },
];

const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-colors duration-300 z-[1000] ${
        scrolled ? "bg-yellow-500 text-white" : "bg-transparent text-black"
      }`}
    >
      {/* Desktop TopBar */}
      <div className="items-center justify-between hidden h-12 px-6 md:flex lg:px-20">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`transition ${
                scrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-yellow-400"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6 text-sm">
          {contactInfo.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className={`flex items-center gap-2 break-words transition ${
                scrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-yellow-400"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile TopBar */}
      <div className="flex flex-col gap-3 px-4 py-3 md:hidden">
        {/* Social Icons */}
        <div className="flex gap-4">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`text-xl transition ${
                scrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-yellow-400"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          {contactInfo.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className={`flex items-start gap-2 transition ${
                scrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-black hover:text-yellow-400"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
