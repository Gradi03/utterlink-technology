"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThreeDBackground from "./ThreeDBackground"; // Assuming this component is also responsive

export default function Hero() {
  return (
    <section className="relative bg-[#f5f5dc] text-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cape Town&rsquo;s Premier{" "}
          <span className="text-green-700">Connectivity Solutions</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Corrected 'yz' to 'y'
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From fiber installation to security systems, we keep your home and
          business connected, protected, and future-ready.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold">
              Get Connected Today
            </button>
          </Link>
          <Link href="/services">
            <button className="border border-green-700 text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
