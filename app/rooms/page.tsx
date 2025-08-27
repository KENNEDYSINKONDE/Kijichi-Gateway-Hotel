"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { roomsData } from "@/constants/Rooms";

const RoomsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src="/images/rooms/room1.jpeg"
          alt="Kijichi Rooms"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1
            className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-down"
          >
            Explore Our Rooms
          </h1>
        </div>
      </div>

      {/* Rooms List */}
      <div className="grid max-w-6xl gap-10 px-4 py-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {roomsData.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

interface RoomProps {
  room: {
    id: number;
    name: string;
    description: string;
    image: string;
    features: string[];
    price: { single: number; double: number };
  };
}

const RoomCard: React.FC<RoomProps> = ({ room }) => {
  const [showMore, setShowMore] = useState(false);

  const shortDesc =
    room.description.length > 100
      ? room.description.slice(0, 100) + "..."
      : room.description;

  return (
    <div className="overflow-hidden shadow-lg rounded-2xl" data-aos="zoom-in">
      {/* Room Image */}
      <div className="relative w-full h-64">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Room Content */}
      <div className="p-6 bg-white">
        <h2 className="text-xl font-bold">{room.name}</h2>

        {/* Description with Show More */}
        <p className="mt-2 text-gray-600">
          {showMore ? room.description : shortDesc}
        </p>
        {room.description.length > 100 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-sm font-medium text-blue-600 hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}

        {/* Features */}
        <ul className="mt-3 space-y-1 text-sm text-gray-500">
          {room.features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>

        {/* Prices */}
        <div className="mt-4">
          <p className="text-lg font-semibold text-yellow-500">
            Single: {room.price.single.toLocaleString()} TZS / night
          </p>
          <p className="text-lg font-semibold text-yellow-500">
            Double: {room.price.double.toLocaleString()} TZS / night
          </p>
        </div>

        <button className="w-full py-2 mt-4 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomsPage;
