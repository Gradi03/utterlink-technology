"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutPreview = () => {
  return (
    <section className="py-20 px-4 bg-[#f5f5dc]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-800 leading-tight">
            Connecting Cape Town Since{" "}
            <span className="text-green-600">2018</span>
          </h2>
          <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
            At Utterlink, we pride ourselves on delivering reliable, affordable
            connectivity and security solutions for homes and businesses across
            Cape Town.
          </p>
          <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
            Our team of certified technicians brings expertise and precision to
            every project, whether it&rsquo;s installing fiber optic cables,
            extending WiFi coverage, or setting up comprehensive security
            systems.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
            <Link
              href="/about"
              className="bg-green-700 text-white px-5 py-3 rounded-md font-medium hover:bg-green-800 transition text-center"
            >
              Learn More About Us
            </Link>
            <Link
              href="/contact"
              className="border border-green-700 text-green-700 px-5 py-3 rounded-md font-medium hover:bg-green-700 hover:text-white transition text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-green-100">
            <Image
              src="/utterlink-technician.jpg"
              alt="Utterlink technician installing fiber cables"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
          </div>

          {/* Badge 1 */}
          <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-lg shadow-xl border border-green-100">
            <div className="flex gap-4 items-center">
              <div className="text-green-700 text-3xl sm:text-4xl font-bold">
                5+
              </div>
              <div>
                <p className="text-sm text-gray-700">Years of</p>
                <p className="font-medium text-green-900">Experience</p>
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="absolute -top-6 -right-4 sm:-right-6 bg-white p-4 rounded-lg shadow-xl border border-green-100">
            <div className="flex gap-4 items-center">
              <div className="text-green-700 text-3xl sm:text-4xl font-bold">
                500+
              </div>
              <div>
                <p className="text-sm text-gray-700">Satisfied</p>
                <p className="font-medium text-green-900">Customers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
