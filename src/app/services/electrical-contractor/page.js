"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, PhoneCall, Wrench } from "lucide-react"; // Added Wrench for maintenance
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const ElectricalContractor = () => {
  return (
    <>
      <Head>
        <title>Electrical Contractor & Maintenance Cape Town | Utterlink</title>
        <meta
          name="description"
          content="Utterlink provides professional electrical contracting and maintenance services in Cape Town. From new installations to repairs and upgrades, we ensure safe and compliant electrical solutions for homes and businesses."
        />
        <meta
          name="keywords"
          content="electrical contractor Cape Town, electrical maintenance, electrical installations, home electrical repair, commercial electrical services, electrical upgrades, qualified electricians, electrical safety, COC"
        />
        <meta
          property="og:title"
          content="Electrical Contractor & Maintenance Cape Town | Utterlink"
        />
        <meta
          property="og:description"
          content="Expert electrical contractor and maintenance services in Cape Town. Utterlink ensures safe, reliable, and compliant electrical solutions for all your needs."
        />
        <meta
          property="og:url"
          content="https://utterlink.co.za/services/electrical-contractor"
        />
        <meta
          property="og:image"
          content="https://utterlink.co.za/electrical-contractor.webp" // **IMPORTANT: Update with your actual image path**
        />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://utterlink.co.za/services/electrical-contractor"
        />
      </Head>

      <div className="bg-[#F5F5DC] py-20 md:py-24 lg:py-18">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-16 lg:mb-20"
          >
            <div className="inline-block p-3 md:p-4 bg-green-400/10 rounded-full mb-4 md:mb-6">
              <Lightbulb className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              Electrical Contractor & Maintenance
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Reliable, safe, and compliant electrical solutions for your home
              and business.
            </p>
          </motion.div>

          {/* Main Content & Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 md:mb-12 lg:mb-16 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                  Comprehensive Electrical Solutions
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  At Utterlink, we offer a full spectrum of electrical
                  contracting and maintenance services designed to meet the
                  diverse needs of residential and commercial clients in Cape
                  Town. Our qualified electricians are committed to delivering
                  high-quality, safe, and efficient electrical work, adhering to
                  all industry standards and regulations.
                </p>
                <p className="text-[#333333]">
                  Whether you require new electrical installations, routine
                  maintenance, urgent repairs, or system upgrades, we provide
                  tailored solutions that ensure the reliability and safety of
                  your electrical infrastructure. We pride ourselves on our
                  attention to detail and our dedication to customer
                  satisfaction.
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
                  src="/electrical.webp"
                  alt="Electrical Contractor Services"
                  width={500}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Residential Electrical Services
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>New electrical installations & wiring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Fault finding and electrical repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>DB board upgrades and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Lighting installation and upgrades (LED)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Certificate of Compliance (COC)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Commercial & Industrial Electrical Services
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Commercial wiring & rewiring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Electrical system maintenance & inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Generator and UPS installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Energy efficiency solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Emergency electrical services</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Why Choose Utterlink for Your Electrical Needs?
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <Wrench className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Qualified & Experienced Electricians
                  </h3>
                  <p className="text-[#333333]">
                    Our team consists of highly skilled and certified
                    electricians with extensive experience in various electrical
                    projects, ensuring professional and reliable service every
                    time.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Safety & Compliance
                  </h3>
                  <p className="text-[#333333]">
                    We prioritize safety above all else. All our work complies
                    with the latest SANS 10142-1 wiring code and local
                    regulations, providing you with peace of mind and valid
                    Certificates of Compliance (COCs).
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Efficient & Timely Service
                  </h3>
                  <p className="text-[#333333]">
                    We understand the importance of minimal disruption. Our team
                    works efficiently to complete projects on time and within
                    budget, without compromising on quality.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Customized Solutions
                  </h3>
                  <p className="text-[#333333]">
                    Every electrical project is unique. We offer personalized
                    consultations and tailored solutions to meet your specific
                    requirements and budget.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <PhoneCall className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Excellent Customer Support
                  </h3>
                  <p className="text-[#333333]">
                    Our commitment to customer satisfaction extends beyond the
                    job. We provide ongoing support and are always available to
                    address your electrical concerns.
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
            className="bg-green-100 p-6 md:p-8 rounded-xl text-center max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-600">
              Need a reliable electrician in Cape Town?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact Utterlink today for a free consultation or to schedule an
              electrical service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PhoneCall className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Get a Free
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

export default ElectricalContractor;
