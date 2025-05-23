"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, CheckCircle, PhoneCall, Server, Cable } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image"; // Import the Image component

const DataCabling = () => {
  return (
    <>
      <Head>
        <title>Professional Data Cabling Services | Utterlink Cape Town</title>
        <meta
          name="description"
          content="Reliable and efficient data cabling solutions in Cape Town for seamless network connectivity. Structured cabling for businesses and homes."
        />
        <meta
          name="keywords"
          content="data cabling, network cabling, structured cabling, ethernet cabling, fiber optic cabling, data network installation, Cape Town data cabling services"
        />
        {/* You can add other SEO meta tags as needed */}
      </Head>
      <div className="bg-[#F5F5DC] py-22 md:py-20 lg:py-20">
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
              <Cable className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              Data Cabling Solutions
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Ensuring a{" "}
              <strong>robust and reliable network infrastructure</strong> for
              your connectivity needs in Cape Town.
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
                  Reliable Network Infrastructure
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  In today&apos;s digital age, a{" "}
                  <strong>
                    solid and well-planned data cabling infrastructure
                  </strong>{" "}
                  is the backbone of all communication and operations. Whether
                  for a small home network or a large corporate environment, the
                  right cabling ensures{" "}
                  <strong>speed, reliability, and future scalability</strong>.
                  Poorly installed or outdated cabling can lead to network
                  downtime, slow speeds, and increased maintenance costs.
                </p>
                <p className="text-[#333333]">
                  Utterlink provides{" "}
                  <strong>expert data cabling services in Cape Town</strong>,
                  tailored to meet the specific needs of your residential or
                  commercial property. Our certified technicians use{" "}
                  <strong>
                    high-quality materials and industry best practices
                  </strong>{" "}
                  to design and install robust network infrastructures that
                  support your current and future technological demands. We
                  understand the importance of a seamless and efficient network,
                  and our solutions are designed to{" "}
                  <strong>maximize performance and minimize disruptions</strong>
                  .
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
                  src="/data-cabling.webp" // **IMPORTANT: Replace with your actual image path**
                  alt="Professional data cabling installation with organized cables"
                  width={500} // Adjust width/height as needed for your image aspect ratio
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Residential Data Cabling
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Reliable wired connections</strong> for smart
                      homes and entertainment systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>High-speed internet access points</strong>{" "}
                      throughout your home
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Structured cabling for home offices</strong> and
                      remote work setups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      Preparation for{" "}
                      <strong>future technology and bandwidth demands</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Neat and organized cabling</strong> for aesthetics
                      and functionality
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Commercial Data Cabling
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Comprehensive structured cabling</strong> for
                      offices and businesses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>High-performance Cat5e, Cat6, and Cat6a</strong>{" "}
                      cabling solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Fiber optic cabling</strong> for high-speed data
                      transfer and long distances
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>Server room and data center cabling</strong> and
                      organization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>
                      <strong>
                        Integration with VoIP systems, security systems
                      </strong>
                      , and other network devices
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Our Data Cabling Services Include
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Site Assessment and Design
                  </h3>
                  <p className="text-[#333333]">
                    Our experienced technicians will conduct a{" "}
                    <strong>thorough assessment</strong> of your property to
                    understand your specific needs and design a data cabling
                    solution that{" "}
                    <strong>optimizes performance and efficiency</strong>. We
                    take into account factors such as building layout, number of
                    users, bandwidth requirements, and future growth.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Professional Cable Installation
                  </h3>
                  <p className="text-[#333333]">
                    We handle the <strong>complete installation process</strong>
                    , from running cables and installing outlets to termination
                    and labeling. Our team ensures that all cables are installed{" "}
                    <strong>neatly and according to industry standards</strong>,
                    minimizing clutter and making future maintenance easier.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Cable Testing and Certification
                  </h3>
                  <p className="text-[#333333]">
                    After installation, we perform{" "}
                    <strong>comprehensive testing</strong> to ensure that all
                    cable runs meet the required performance standards. We
                    provide <strong>certification reports</strong> for your
                    peace of mind, verifying the integrity and reliability of
                    your network infrastructure.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Fiber Optic Cabling
                  </h3>
                  <p className="text-[#333333]">
                    For environments requiring{" "}
                    <strong>
                      high bandwidth and long-distance data transmission
                    </strong>
                    , we offer professional fiber optic cabling solutions,
                    including installation, termination, and testing of
                    single-mode and multi-mode fiber.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Network Rack and Patch Panel Installation
                  </h3>
                  <p className="text-[#333333]">
                    We can design and install{" "}
                    <strong>organized network racks and patch panels</strong>,
                    which are crucial for managing and maintaining your network
                    infrastructure efficiently. Proper organization reduces
                    downtime and simplifies troubleshooting.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Maintenance and Support
                  </h3>
                  <p className="text-[#333333]">
                    Utterlink offers{" "}
                    <strong>ongoing maintenance and support services</strong> to
                    ensure your data cabling infrastructure continues to perform
                    optimally. We can assist with troubleshooting, repairs, and
                    upgrades as your needs evolve.
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
              Need a reliable data cabling solution in Cape Town?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact our data cabling experts today for a{" "}
              <strong>free consultation</strong> and a tailored solution to meet
              your connectivity requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PhoneCall className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Request a
                Data Cabling Quote
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

export default DataCabling;
