"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { meetingsData } from "@/constants/Meetings";


const MeetingsPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src={meetingsData.hero.image}
          alt="Meetings & Events"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center bg-black/40">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl" data-aos="fade-down">
            {meetingsData.hero.heading}
          </h1>
          <p className="mt-4 text-sm text-gray-200 sm:text-base md:text-lg" data-aos="fade-up">
            {meetingsData.hero.subheading}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl px-4 py-12 mx-auto space-y-16">
        {meetingsData.sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className="relative w-full h-64 overflow-hidden shadow-lg md:w-1/2 sm:h-80 md:h-96 rounded-xl" data-aos="zoom-in">
              <Image src={section.image} alt={section.title} fill className="object-cover" />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{section.title}</h2>
              <p className="text-sm text-gray-700 sm:text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MeetingsPage;
