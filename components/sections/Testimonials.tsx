"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { testimonialsData } from "@/constants/Testimonials";

const Testimonials: React.FC = () => {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="mb-10 text-3xl font-bold text-center" data-aos="fade-up">
        Testimonials
      </h2>
      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {testimonialsData.map((testimonial, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-xl" data-aos="fade-up">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={60}
              height={60}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-center text-gray-600">{testimonial.feedback}</p>
            <h4 className="mt-4 font-bold text-center">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
