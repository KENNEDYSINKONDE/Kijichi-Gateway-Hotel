"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gatewayFeaturesData } from "@/constants/GatewayFeatures";
import Image from "next/image";

const GatewayFeatures: React.FC = () => {
    useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

    return (
        <section className="py-16 bg-gray-50">
            <h2 className="mb-10 text-3xl font-bold text-center" data-aos="fade-up">
                Our Features
            </h2>
            <div className="grid gap-8 px-6 md:grid-cols-3">
                {gatewayFeaturesData.map((feature, i) => (
                    <div key={i} className="p-6 bg-white shadow-md rounded-xl" data-aos="zoom-in">
                        <Image
                        width={300}
                        height={300}
                            src={feature.icon}
                             alt={feature.title}
                              className="mb-4 rounde-lg" />
                        <h3 className="text-lg font-bold text-center">{feature.title}</h3>
                        <p className="mt-2 text-center text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GatewayFeatures;
