"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { whyChooseUsData } from "@/constants/WhyChooseUs";

const WhyChooseUs: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="mb-10 text-3xl font-bold text-center" data-aos="fade-up">
        Why Choose Us
      </h2>
      <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-3">
        {whyChooseUsData.map((item, i) => (
          <div key={i} className="p-6 shadow-md bg-gray-50 rounded-xl" data-aos="fade-up">
            <h3 className="text-lg font-bold text-center">{item.title}</h3>
            <p className="mt-2 text-center text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
