"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { packagesData } from "@/constants/Packages";


const PackagesPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/images/hero/packages.jpg"
          alt="Kijichi Packages & Offers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl" data-aos="fade-down">
            Packages & Offers
          </h1>
        </div>
      </div>

      {/* Package Cards */}
      <div className="grid max-w-6xl gap-10 px-4 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {packagesData.map((pack) => (
          <div key={pack.id} className="overflow-hidden bg-white shadow-lg rounded-2xl" data-aos="zoom-in">
            <div className="relative w-full h-64">
              <Image src={pack.image} alt={pack.title} fill className="object-cover transition-transform duration-500 hover:scale-105"/>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{pack.title}</h2>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {pack.features.map((feature, idx) => <li key={idx}>• {feature}</li>)}
              </ul>
              <p className="mt-4 text-lg font-semibold text-yellow-400">${pack.price}/night</p>
              <button className="w-full py-2 mt-4 text-white transition bg-green-600 rounded-lg hover:bg-green-700">Book Now</button>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default PackagesPage;
