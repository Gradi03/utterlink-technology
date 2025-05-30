"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image"; // Import the Image component

const ElectricFencing = () => {
  return (
    <>
      <Head>
        <title>
          Electric Fencing Cape Town | Installation & Repairs | Utterlink
        </title>
        <meta
          name="description"
          content="Secure your property with expert electric fencing installation and repairs in Cape Town. Utterlink delivers reliable, affordable perimeter protection for homes and businesses."
        />
        <meta
          name="keywords"
          content="electric fencing Cape Town, electric fence installation, perimeter security, electric fencing repairs, security fencing services, home and business protection"
        />
        <meta
          property="og:title"
          content="Electric Fencing Cape Town | Installation & Repairs | Utterlink"
        />
        <meta
          property="og:description"
          content="Expert electric fencing installation and maintenance for homes and businesses in Cape Town. Reliable protection from Utterlink."
        />
        <meta
          property="og:url"
          content="https://utterlink.co.za/services/electric-fencing"
        />
        <meta
          property="og:image"
          content="https://utterlink.co.za/images/services/electric-fence.jpg"
        />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://utterlink.co.za/services/electric-fencing"
        />
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
              <Zap className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              Electric Fencing
            </h1>
            <p className="text-lg md:text-xl text-[#555555]">
              Enhance your property&quot;s security with our professional
              electric fence installation
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
                  Effective Perimeter Security
                </h2>
                <p className="mb-4 md:mb-6 text-[#333333]">
                  Electric fencing provides an effective first line of defense
                  for your property, deterring potential intruders and alerting
                  you to any breach attempts. Modern electric fence systems are
                  safe, reliable, and can be integrated with your broader
                  security infrastructure.
                </p>
                <p className="text-[#333333]">
                  At Utterlink, we design and install electric fencing solutions
                  that are tailored to your property&quot;s specific
                  requirements. Our certified technicians ensure that all
                  installations comply with safety regulations while providing
                  maximum security effectiveness.
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
                  src="/electric-fence.jpg" // **IMPORTANT: Replace with your actual image path**
                  alt="Modern electric fence securing a residential property"
                  width={500} // Adjust width/height as needed for your image aspect ratio
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Residential Electric Fencing
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Property perimeter protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Wall-top electric fencing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Alarm system integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Battery backup systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Remote monitoring options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md">
                <h3 className="text-lg font-semibold mb-3 md:mb-4 text-green-500">
                  Commercial & Industrial Fencing
                </h3>
                <ul className="space-y-2 md:space-y-3 text-[#333333]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>High-security perimeter protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Multi-zone security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Integration with security operations center</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>Advanced tamper detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2 md:mr-3 mt-0.5" />
                    <span>24/7 monitoring solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
              Benefits of Electric Fencing
            </h2>
            <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-10 lg:mb-12">
              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Powerful Deterrent
                  </h3>
                  <p className="text-[#333333]">
                    The visible presence of electric fencing serves as a strong
                    psychological deterrent to potential intruders, often
                    preventing security breaches before they occur.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Immediate Notification
                  </h3>
                  <p className="text-[#333333]">
                    When the fence is tampered with, the system immediately
                    triggers an alarm, alerting you or your security company to
                    the breach attempt.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Energy Efficient
                  </h3>
                  <p className="text-[#333333]">
                    Modern electric fence energizers are highly
                    energy-efficient, with minimal impact on your electricity
                    bill. Battery backup ensures protection during power
                    outages.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Safety Compliant
                  </h3>
                  <p className="text-[#333333]">
                    Our systems comply with all safety regulations, delivering
                    effective security while ensuring the safety of residents,
                    pets, and wildlife.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-green-700">
                    Integration Capabilities
                  </h3>
                  <p className="text-[#333333]">
                    Our electric fencing systems can be integrated with your
                    existing security infrastructure, including alarms, CCTV,
                    and automated gate systems.
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
              Ready to enhance your property&quot;s security?
            </h2>
            <p className="mb-6 text-[#333333]">
              Contact our security experts today for a free assessment and
              electric fencing quote.
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

export default ElectricFencing;
