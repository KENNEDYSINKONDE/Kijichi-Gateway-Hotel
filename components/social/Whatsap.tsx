"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "255786037737"; // Tanzania format (+255)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center duration-300 bg-green-500 rounded-full shadow-lg tranition-all size={24} bottom-45 right-5 md:w-10 md:h-10 hover:bg-green-600"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl text-white md:text-4xl" />
    </a>
  );
}
