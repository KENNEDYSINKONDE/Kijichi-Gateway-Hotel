"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { momentsData } from "@/constants/ExcitingMoments";

const ExcitingMoments: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="mb-10 text-3xl font-bold text-center" data-aos="fade-up">
        Exciting Moments
      </h2>
      <div className="grid gap-8 px-6 md:grid-cols-3">
        {momentsData.map((moment, i) => (
          <div key={i} className="overflow-hidden shadow-lg rounded-2xl" data-aos="zoom-in">
            <div className="relative w-full h-64">
              <Image src={moment.image} alt={moment.title} fill className="object-cover transition-transform duration-500 hover:scale-110"/>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{moment.title}</h3>
              <p className="text-sm text-gray-600">{moment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExcitingMoments;
