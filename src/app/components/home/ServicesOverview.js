"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  RadioTower,
  Wifi,
  Cctv,
  Cable,
  Zap,
  DoorOpen,
  Lightbulb, // Added Lightbulb icon for Electrical Contractor
} from "lucide-react";

const services = [
  {
    title: "Fibre Installation",
    description:
      "Get lightning-fast internet with our professional fiber installation services for homes and businesses.",
    icon: RadioTower,
    link: "/services/fibre-installation",
  },
  {
    title: "WiFi Signal Extension",
    description:
      "Eliminate dead zones and enjoy seamless connectivity throughout your property with our WiFi solutions.",
    icon: Wifi,
    link: "/services/wifi-extension",
  },
  {
    title: "CCTV Installation",
    description:
      "Protect what matters most with our advanced surveillance systems and security cameras.",
    icon: Cctv,
    link: "/services/cctv-installation",
  },
  {
    title: "Data Cabling",
    description:
      "Structured cabling solutions for reliable, high-performance network infrastructure.",
    icon: Cable,
    link: "/services/data-cabling",
  },
  {
    title: "Electric Fencing",
    description:
      "Enhance your property's security with our professional electric fence installation.",
    icon: Zap,
    link: "/services/electric-fencing",
  },
  {
    title: "Automatic Gates",
    description:
      "Convenience and security with our automated gate systems and access control solutions.",
    icon: DoorOpen,
    link: "/services/automatic-gates",
  },
  {
    title: "Electrical Contractor & Maintenance", // New Service Title
    description:
      "Expert electrical services, from new installations to routine maintenance and repairs, ensuring safety and compliance.", // New Service Description
    icon: Lightbulb, // New Service Icon
    link: "/services/electrical-contractor", // New Service Link
  },
];

// Single service card
const ServiceCard = ({ title, description, icon: Icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }} // Added viewport prop for the card animations
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-green-100 group"
    >
      <div className="text-4xl mb-4 text-green-700">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-green-700 hover:text-green-900 transition-colors font-medium"
      >
        Learn More{" "}
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

// Services overview section
const ServicesOverview = () => {
  return (
    <section className="py-20 px-4 bg-[#f5f5dc]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // Added viewport prop for the heading animation
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
          Our Expert Services
        </h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto">
          Comprehensive connectivity and security solutions tailored to your
          needs.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold text-lg"
        >
          View all services <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default ServicesOverview;
