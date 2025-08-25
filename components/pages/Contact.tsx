"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { contactData } from "@/constants/Contact";

const ContactPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px]">
        <Image
          src={contactData.image}
          alt="Contact Kijichi Gateway Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-3xl font-bold text-center text-white md:text-5xl lg:text-6xl" data-aos="fade-down">
            {contactData.heading}
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="grid max-w-6xl gap-12 px-6 py-16 mx-auto md:grid-cols-2">
        <div data-aos="fade-right">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl">{contactData.subheading}</h2>
          <p className="mb-4 text-gray-700">{contactData.description}</p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Email:</strong> {contactData.email}</li>
            <li><strong>Phone:</strong> {contactData.phone}</li>
            <li><strong>Address:</strong> {contactData.address}</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left">
          <form className="flex flex-col gap-4 p-8 bg-white shadow-md rounded-xl">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <input type="email" placeholder="Your Email" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <textarea placeholder="Your Message" className="h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            <button type="submit" className="py-3 font-semibold text-white transition bg-yellow-400 rounded-md hover:bg-yellow-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
