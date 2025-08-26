"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { roomsData } from "@/constants/Rooms";


const RoomsPage: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/images/hero/rooms.jpg"
          alt="Kijichi Rooms"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl" data-aos="fade-down">
            Explore Our Rooms
          </h1>
        </div>
      </div>

      {/* Rooms List */}
      <div className="grid max-w-6xl gap-10 px-4 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {roomsData.map((room) => (
          <div key={room.id} className="overflow-hidden shadow-lg rounded-2xl" data-aos="zoom-in">
            <div className="relative w-full h-64">
              <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 hover:scale-105"/>
            </div>
            
            <div className="p-6 bg-white">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <p className="mt-2 text-gray-600">{room.description}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {room.features.map((feature, idx) => <li key={idx}>• {feature}</li>)}
              </ul>
              <p className="mt-4 text-lg font-semibold text-yellow-400">${room.price}/night</p>
              <button className="w-full py-2 mt-4 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">Book Now</button>
            </div>
          </div>
        ))}
      </div>

   
    </section>
  );
};

export default RoomsPage;
