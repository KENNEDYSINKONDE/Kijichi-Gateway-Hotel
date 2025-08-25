"use client";

import { Navlinks } from "@/constants/Navlinks";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// ✅ Define props type
interface MobileNavbarProps {
  onCloseMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onCloseMenu }) => {
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={onCloseMenu}
        className="fixed inset-0 z-[1000] h-screen w-full bg-black opacity-70 transition-all duration-500"
      />

      {/* Side Navigation */}
      <div
        data-aos="flip-left"
        className="fixed right-0 top-0 z-[1050] h-full w-[80%] sm:w-[60%] flex flex-col justify-center space-y-6 bg-amber-600 opacity-95 transition-all duration-500 delay-300"
      >
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={onCloseMenu}>
            <p className="ml-12 w-fit border-b-[1.5px] border-white pb-1 text-[20px] font-medium text-white transition-all duration-300 hover:text-yellow-500 sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <CgClose
          onClick={onCloseMenu}
          className="absolute top-8 right-8 z-[1100] h-8 w-8 cursor-pointer text-white sm:h-10 sm:w-10"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
