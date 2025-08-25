"use client";
import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[1000] p-3 rounded-full bg-yellow-400 text-white shadow-lg hover:bg-yellow-500 transition-all duration-300 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
