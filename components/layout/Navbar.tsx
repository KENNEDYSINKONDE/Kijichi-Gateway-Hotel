"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Navlinks } from "@/constants/Navlinks";
// import TopBar from "@/components/layout/TopBar";
import ThemeToggle from "../ThemeToggle";

const Navbar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <header className="fixed top-0 w-full z-[1000]">
      {/* <TopBar /> */}
      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 flex justify-between items-center px-6 lg:px-20 h-[12vh] ${
          scrolled ? "bg-[#172554]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-12 h-12">
            <Image
              src={
                scrolled
                  ? "/images/logo/kijichilogo.jpg" // visible on dark bg
                  : "/images/logo/kijichiwhitelogo.jpg" // visible on white bg
              }
              alt="Kijichi Logo"
              width={48}
              height={48}
              className="transition-all duration-300 rounded-full bg-blue-950"
              priority
            />
          </div>
          <h1
            className={`text-2xl uppercase tracking-tight lg:hidden transition-colors duration-300 ${
              scrolled ? "text-yellow-400" : "text-yellow-400 font-bold"
            }`}
          >
            Kijichi Gateway Hotel
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-10 lg:flex">
          {Navlinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <span
                className={`relative text-base font-medium text-nowrap cursor-pointer after:block after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-white" : "text-maroon-500 font-bold"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <ThemeToggle />
          <button className="px-10 py-2 text-black transition bg-yellow-400 rounded-lg text-nowrap hover:bg-yellow-500">
            Book now
          </button>
        </div>

        {/* Mobile Burger Menu */}
        <HiBars3BottomRight
          onClick={onOpenMenu}
          className={`w-10 h-8 text-3xl cursor-pointer lg:hidden transition-colors duration-300 ${
            scrolled ? "text-white" : "text-yellow-400 font-bold text-lg"
          }`}
        />
      </nav>
    </header>
  );
};

export default Navbar;
