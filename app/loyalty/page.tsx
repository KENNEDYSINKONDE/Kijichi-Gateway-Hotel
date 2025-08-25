"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { loyaltyData } from "@/constants/Loyalty";


const LoyaltyPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src={loyaltyData.hero.image}
          alt="Loyalty Program"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center bg-black/40">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl" data-aos="fade-down">
            {loyaltyData.hero.heading}
          </h1>
          <p className="mt-4 text-sm text-gray-200 sm:text-base md:text-lg" data-aos="fade-up">
            {loyaltyData.hero.subheading}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid max-w-5xl gap-8 px-4 py-12 mx-auto md:grid-cols-2">
        {loyaltyData.benefits.map((benefit, idx) => (
          <div key={idx} className="p-6 bg-white shadow-lg rounded-xl" data-aos="fade-up">
            <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
            <p className="text-sm text-gray-700 sm:text-base">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Join Section */}
      <div className="max-w-3xl px-4 py-12 mx-auto text-center" data-aos="zoom-in">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">{loyaltyData.join.title}</h2>
        <p className="mb-6 text-gray-700">{loyaltyData.join.description}</p>
        <button className="px-6 py-3 font-semibold text-white transition bg-yellow-400 rounded-full hover:bg-yellow-500">
          {loyaltyData.join.buttonText}
        </button>
      </div>

    </section>
  );
};

export default LoyaltyPage;
