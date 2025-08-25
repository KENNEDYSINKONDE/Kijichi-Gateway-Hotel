"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { contactData } from "@/constants/Contact";


const ContactPage: React.FC = () => {
  useEffect(() => { 
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative w-full   h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src={contactData.image}
          alt="Contact Kijichi Gateway Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/40">
          <h1 className="text-2xl font-bold text-center text-white sm:text-3xl md:text-5xl lg:text-6xl" data-aos="fade-down">
            {contactData.heading}
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="grid items-start max-w-6xl gap-12 px-4 py-12 mx-auto md:py-16 md:grid-cols-2">
        {/* Info Section */}
        <div data-aos="fade-right">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl md:text-3xl">
            {contactData.subheading}
          </h2>
          <p className="mb-4 text-gray-700">{contactData.description}</p>
          <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
            <li><strong>Email:</strong> {contactData.email}</li>
            <li><strong>Phone:</strong> {contactData.phone}</li>
            <li><strong>Address:</strong> {contactData.address}</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left">
          <form className="flex flex-col gap-4 p-6 bg-white shadow-lg sm:p-8 rounded-xl">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border rounded-md h-28 sm:h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 font-semibold text-white transition bg-yellow-400 rounded-md hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl px-4 mx-auto mb-16" data-aos="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl">
          Find Us Here
        </h2>
        <div className="w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44813.611446911986!2d39.28161224513527!3d-6.890474031091214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c357365c0ae25%3A0x298fdb425929441d!2sKijichi%20Gateway%20Hotel!5e0!3m2!1sen!2stz!4v1756077672514!5m2!1sen!2stz"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

   
    </section>
  );
};

export default ContactPage;
