"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { footerLinksData } from "@/constants/Footer";

const Footer: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="grid max-w-6xl gap-8 px-6 mx-auto md:grid-cols-3">
        {footerLinksData.map((section, i) => (
          <div key={i} data-aos="fade-up">
            <h4 className="mb-4 font-bold">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Kijichi Gateway Hotel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
