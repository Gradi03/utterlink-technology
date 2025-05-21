"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image"; // Import the Image component

const CCTVInstallation = () => {
  return (
    <>
      <Head>
        <title>CCTV Installation Services | Utterlink</title>
        <meta
          name="description"
          content="Protect what matters most with Utterlink's advanced surveillance systems and security camera installation services in Cape Town."
        />
        <meta
          name="keywords"
          content="CCTV installation, security cameras, surveillance systems, home security, business security, Cape Town security services"
        />
        {/* You can add other SEO meta tags as needed */}
      </Head>
      <div className="bg-[#F5F5DC] py-8 md:py-12 lg:py-16">
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
              <Shield className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              CCTV Installation
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Protect what matters most with our advanced surveillance systems
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
                  Advanced Security Solutions
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  In today's world, security is not a luxury but a necessity.
                  CCTV systems provide an effective deterrent against crime,
                  valuable evidence in case of incidents, and peace of mind
                  knowing your property is under constant surveillance.
                </p>
                <p className="text-[#333333]">
                  Utterlink specializes in designing and installing cutting-edge
                  CCTV solutions for residential and commercial properties. Our
                  security experts will assess your specific needs and recommend
                  the optimal surveillance setup to ensure comprehensive
                  coverage of your property.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }} // Trigger animation when 40% of the element is visible
                className="rounded-lg overflow-hidden shadow-md border border-green-100"
              >
                <Image
                  src="/cctv-surveillance.jpg" // **IMPORTANT: Replace with your actual image path**
                  alt="Modern CCTV surveillance camera protecting a property"
                  width={500} // Adjust width/height as needed for your image aspect ratio
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Residential CCTV
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>HD and 4K camera options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Indoor and outdoor coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Night vision capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Mobile app monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Motion detection with alerts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Business CCTV
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Scalable multi-camera systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Remote monitoring capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      Advanced analytics (people counting, heat mapping)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Integration with access control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Professional monitoring services</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Our CCTV Systems Include
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    High-Definition Cameras
                  </h3>
                  <p className="text-[#333333]">
                    Crystal clear images with wide viewing angles and zoom
                    capabilities to capture all the necessary details.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Digital Video Recorders (DVR/NVR)
                  </h3>
                  <p className="text-[#333333]">
                    Secure storage for your footage with various capacity
                    options to meet your specific retention needs.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Smart Motion Detection
                  </h3>
                  <p className="text-[#333333]">
                    Advanced algorithms that reduce false alarms while ensuring
                    all important events are captured.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Remote Viewing
                  </h3>
                  <p className="text-[#333333]">
                    Access your cameras from anywhere using your smartphone,
                    tablet, or computer with user-friendly apps.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Weatherproof Options
                  </h3>
                  <p className="text-[#333333]">
                    Durable outdoor cameras designed to withstand Cape Town's
                    diverse weather conditions.
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
              Ready to enhance your property's security?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact our security experts today for a free consultation and
              customized CCTV solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PhoneCall className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Request a
                Security Assessment
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

export default CCTVInstallation;
