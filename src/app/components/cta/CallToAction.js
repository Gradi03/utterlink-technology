"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-[#f5f5dc]"
    >
      <div className="relative rounded-2xl overflow-hidden max-w-7xl mx-auto">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/wifi-mesh-system.webp"
            alt="Fibre optic installation"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Connectivity?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Get started with Utterlink today for faster internet, better
            security, and expert solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/contact">
              <button className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition duration-300">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/services">
              <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition duration-300">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
