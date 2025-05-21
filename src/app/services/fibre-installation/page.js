"use client";

import React from "react";
import { motion } from "framer-motion";
import { Signal, CheckCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image"; // Import the Image component

const InfoCard = ({ title, children }) => (
  <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-md border border-green-100">
    <h3 className="text-xl font-semibold mb-4 text-green-500">{title}</h3>
    {children}
  </div>
);

const ProcessStepCard = ({ title, description, index }) => (
  <div className="bg-[#F5F5DC] rounded-xl p-6 shadow-md border border-green-100">
    <h3 className="text-xl font-semibold mb-3 text-green-500">{title}</h3>
    <p className="text-[#333333]">{description}</p>
  </div>
);

const FibreInstallation = () => {
  return (
    <>
      <Head>
        <title>
          Fiber Installation Services | Utterlink - Lightning-Fast Internet
        </title>
        <meta
          name="description"
          content="Get lightning-fast and reliable internet with Utterlink's professional fiber installation services for homes and businesses in Cape Town."
        />
        <meta
          name="keywords"
          content="fiber installation, fibre internet, high-speed internet, business fiber, residential fiber, network installation, Cape Town internet, fast internet"
        />
      </Head>
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-16 lg:mb-20" // Increased bottom margin
          >
            <div className="inline-block p-3 md:p-4 bg-green-400/10 rounded-full mb-4 md:mb-6">
              <Signal className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-500">
              Fiber Installation
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Get lightning-fast internet with our professional fiber
              installation services
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
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                  Experience the Speed of Fiber
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  **Fiber optic internet** is the gold standard of connectivity,
                  offering unparalleled speeds, reliability, and performance.
                  Whether you&quot;re streaming 4K content, gaming online, video
                  conferencing, or running a business that depends on constant
                  connectivity, fiber delivers the speed and stability you need.
                </p>
                <p className="text-[#333333]">
                  At **Utterlink**, we specialize in professional fiber
                  installations for both residential and commercial properties
                  in **Cape Town**. Our experienced technicians ensure a clean,
                  efficient installation that minimizes disruption while
                  maximizing your network performance.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-lg overflow-hidden shadow-md border border-green-100"
              >
                <Image
                  src="/fiber-optic.jpg" // **IMPORTANT: Replace with your actual image path**
                  alt="Fiber optic cables representing high-speed internet connection"
                  width={500} // Adjust width/height as needed for your image aspect ratio
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <InfoCard title="Residential Fiber">
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>High-speed internet for multiple devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Seamless streaming and gaming experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Clear video calls without interruptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Neat, professional installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Connection to your preferred service provider</span>
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Business Fiber">
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Enterprise-grade connectivity solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Symmetric upload and download speeds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Low latency for critical applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Scalable solutions for growing businesses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>24/7 monitoring and quick support</span>
                  </li>
                </ul>
              </InfoCard>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Our Fiber Installation Process
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <ProcessStepCard
                title="1. Assessment and Planning"
                description="Our technicians visit your property in Cape Town to assess the optimal installation route, identify potential challenges, and develop a detailed installation plan tailored to your needs."
              />
              <ProcessStepCard
                title="2. Professional Installation"
                description="Our skilled team installs the fiber cables with minimal disruption, ensuring neat cable management and adherence to industry best practices in Cape Town."
              />
              <ProcessStepCard
                title="3. Equipment Setup and Testing"
                description="We set up and configure all necessary equipment, including the ONT (Optical Network Terminal) and router, then thoroughly test the connection for optimal performance in your Cape Town location."
              />
              <ProcessStepCard
                title="4. Handover and Support"
                description="We walk you through the installed system, provide usage instructions, and ensure you're comfortable with your new fiber connection. Our support team in Cape Town remains available for any post-installation assistance."
              />
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
              Ready to experience lightning-fast internet in Cape Town?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact our team today to schedule a free consultation and quote
              for fiber installation in Cape Town.
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

export default FibreInstallation;
