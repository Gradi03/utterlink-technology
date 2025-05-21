"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Camps Bay",
    content:
      "Utterlink transformed our home connectivity experience. Their fiber installation was quick and professional, and we now enjoy seamless internet throughout our property!",
  },
  {
    name: "Michael Ndlovu",
    role: "Business Owner, Sea Point",
    content:
      "As a small business owner, reliable internet and security are essential. Utterlink provided us with a complete solution including CCTV and high-speed fiber at a competitive price.",
  },
  {
    name: "Emma van der Merwe",
    role: "Property Manager, Green Point",
    content:
      "Managing multiple properties requires dependable security systems. Utterlink's electric fencing and CCTV installations have been flawless across all our locations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-[#f5f5dc]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2d6a4f]">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Don&rsquo;t just take our word for it – hear from our satisfied
          customers across Cape Town.
        </p>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-[#b5e7a0] shadow-lg h-full flex flex-col"
            >
              <div className="mb-4">
                {/* Quote Icon */}
                <svg
                  className="h-8 w-8 text-[#66bb6a] opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v6a6 6 0 1 1-6 6V8h6zm12 0v6a6 6 0 1 1-6 6V8h6z" />
                </svg>
              </div>

              <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base md:text-lg">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <p className="font-semibold text-[#2d6a4f]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#1b5e20]">{testimonial.role}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
