"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { joinTripData } from "@/constants/JoinTrip";

const JoinTrip: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="py-16 text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600">
      <h2 className="mb-6 text-3xl font-bold" data-aos="fade-down">
        {joinTripData.heading}
      </h2>
      <p className="max-w-2xl mx-auto mb-8" data-aos="fade-up">
        {joinTripData.description}
      </p>
      <a
        href={joinTripData.ctaLink}
        className="px-6 py-3 font-semibold text-blue-600 transition bg-white rounded-full shadow-md hover:bg-gray-100"
        data-aos="zoom-in"
      >
        {joinTripData.buttonText}
      </a>
    </section>
  );
};

export default JoinTrip;
