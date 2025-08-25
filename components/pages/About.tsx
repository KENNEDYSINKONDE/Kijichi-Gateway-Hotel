"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { aboutData } from "@/constants/About";

const AboutPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px]">
        <Image
          src={aboutData.image}
          alt="About Kijichi Gateway Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-3xl font-bold text-center text-white md:text-5xl lg:text-6xl" data-aos="fade-down">
            {aboutData.heading}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900 md:text-3xl lg:text-4xl" data-aos="fade-up">
          {aboutData.subheading}
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-700 md:text-xl" data-aos="fade-up" data-aos-delay="200">
          {aboutData.description}
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
