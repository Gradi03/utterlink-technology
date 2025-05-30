"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, CheckCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image"; // Import the Image component

const AutomaticGates = () => {
  return (
    <>
      <Head>
        <title>Automatic Gates & Access Control | Utterlink</title>
        <meta
          name="description"
          content="Enhance convenience and security with Utterlink's professional automatic gate installation and access control solutions in Cape Town."
        />
        <meta
          name="keywords"
          content="automatic gates, electric gates, gate automation, access control, security gates, driveway gates, Cape Town security services"
        />
        <link
          rel="canonical"
          href="https://utterlink.co.za/services/automatic-gate.webp"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://utterlink.co.za/services/automatic-gates"
        />
        <meta
          property="og:title"
          content="Automatic Gates & Access Control | Utterlink"
        />
        <meta
          property="og:description"
          content="Enhance convenience and security with Utterlink's professional automatic gate installation and access control solutions in Cape Town."
        />
        <meta
          property="og:image"
          content="https://utterlink.co.za/automatic-gate.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://utterlink.co.za/services/automatic-gates"
        />
        <meta
          name="twitter:title"
          content="Automatic Gates & Access Control | Utterlink"
        />
        <meta
          name="twitter:description"
          content="Enhance convenience and security with Utterlink's professional automatic gate installation and access control solutions in Cape Town."
        />
        <meta
          name="twitter:image"
          content="https://utterlink.co.za/automatic-gate.webp"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="bg-[#F5F5DC] py-20 md:py-24 lg:py-18">
        {/* Changed max-w-4xl to max-w-6xl for wider content on large screens */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-16 lg:mb-20" // Increased bottom margin
          >
            <div className="inline-block p-3 md:p-4 bg-green-400/10 rounded-full mb-4 md:mb-6">
              <Lock className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              Automatic Gates
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Convenience and security with our automated gate systems and
              access control solutions
            </p>
          </motion.div>

          {/* Main Content & Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 md:mb-12 lg:mb-16 max-w-5xl mx-auto" // Added max-w-5xl and mx-auto
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
              {" "}
              {/* Increased bottom margin */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                  Seamless Access Control
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  Automatic gates provide the perfect balance of convenience and
                  security for your property. They allow easy access for
                  authorized individuals while keeping unwanted visitors out,
                  all without the need to manually open and close heavy gates.
                </p>
                <p className="text-[#333333]">
                  Utterlink specializes in designing, installing, and
                  maintaining automatic gate systems for residential and
                  commercial properties. Our solutions range from simple
                  driveway gates to comprehensive access control systems with
                  multiple authentication methods.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // Trigger animation when 40% of the element is visible
                className="rounded-lg overflow-hidden shadow-md border border-green-100"
              >
                <Image
                  src="/automatic-gate.webp"
                  alt="Automated gate providing secure access to a property"
                  width={500}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Residential Gate Systems
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Swing and sliding gate options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Remote control operation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Intercom and video entry systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Smartphone app control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Battery backup systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Commercial Access Control
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Heavy-duty gate mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Keypad and card reader systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Biometric access options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Vehicle recognition technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Visitor management systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Our Automatic Gate Services
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Custom Design
                  </h3>
                  <p className="text-[#333333]">
                    We work with you to design a gate system that complements
                    your property&quot;s aesthetics while meeting your security
                    requirements and budget.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Professional Installation
                  </h3>
                  <p className="text-[#333333]">
                    Our experienced technicians ensure proper installation of
                    all components, from the gate mechanism to access control
                    devices and safety features.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    System Integration
                  </h3>
                  <p className="text-[#333333]">
                    We can integrate your automatic gate with other security
                    systems such as CCTV cameras, electric fencing, and alarm
                    systems for comprehensive protection.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Maintenance and Repair
                  </h3>
                  <p className="text-[#333333]">
                    We offer routine maintenance services to keep your gate
                    operating smoothly, as well as rapid response for repairs
                    when issues arise.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    System Upgrades
                  </h3>
                  <p className="text-[#333333]">
                    As technology evolves, we can update your existing gate
                    system with new features and improved security measures to
                    keep your property protected.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-green-100 p-6 md:p-8 rounded-xl text-center max-w-4xl mx-auto" // Adjusted max-width for CTA
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-600">
              Ready to enhance your property access?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact our team today for a consultation and custom automatic
              gate solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PhoneCall className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Request a
                Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-green-500 text-base font-medium rounded-md text-green-500 hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AutomaticGates;
