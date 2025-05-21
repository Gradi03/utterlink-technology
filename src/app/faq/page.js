"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const FAQ = () => {
  const faqItems = [
    {
      question: "What areas in Cape Town do you service?",
      answer:
        "We provide our connectivity and security solutions throughout the greater Cape Town metropolitan area, including the Northern Suburbs, Southern Suburbs, Atlantic Seaboard, Cape Flats, and surrounding areas. For specific location inquiries, please contact our team.",
    },
    {
      question: "How long does a typical fiber installation take?",
      answer:
        "A standard residential fiber installation typically takes 4-6 hours, depending on the complexity of the setup and whether the infrastructure is already in place. Business installations may take longer depending on requirements. Our team will provide you with a more accurate timeframe after assessing your specific situation.",
    },
    {
      question: "Do you offer maintenance plans for installed systems?",
      answer:
        "Yes, we offer various maintenance plans for both our connectivity and security solutions. These plans include regular system checks, priority support, and discounted rates on repairs or upgrades. Contact our support team for details about our maintenance packages.",
    },
    {
      question: "What internet speeds can I expect with fiber?",
      answer:
        "The internet speeds you can expect depend on the package you choose from your internet service provider (ISP). Fiber connections can range from 25Mbps to 1Gbps or even higher for business solutions. Our team can help you select the right ISP and package based on your needs.",
    },
    {
      question: "Can you integrate security systems with my smartphone?",
      answer:
        "Absolutely! All our security systems, including CCTV and electric fencing, can be integrated with mobile apps that allow you to monitor and control your security setup remotely. You'll receive real-time alerts and can view live feeds from your security cameras directly on your smartphone.",
    },
    {
      question: "What is the warranty period for your installations?",
      answer:
        "We provide a standard 12-month warranty on all installations and equipment. Extended warranty options are available for purchase. Our warranty covers defects in workmanship and equipment failure under normal use conditions.",
    },
    {
      question: "Do I need to be home during the installation?",
      answer:
        "Yes, we require an adult (18 years or older) to be present during the installation process to make decisions about equipment placement and to provide access to all necessary areas of your property.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, EFT, and cash. For larger projects, we also offer payment plans. A deposit is typically required before beginning installation work.",
    },
  ];

  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Utterlink</title>
        <meta
          name="description"
          content="Find answers to commonly asked questions about Utterlink's connectivity and security services, installation processes, maintenance plans, and more."
        />
        <meta
          name="keywords"
          content="Utterlink FAQ, connectivity questions, security system questions, fiber installation FAQ"
        />
        {/* You can add other SEO meta tags as needed */}
      </Head>
      <div className="bg-[#F5F5DC] py-8 md:py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#555555] max-w-3xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <div className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="border border-green-100 rounded-lg overflow-hidden bg-[#F5F5DC] shadow-sm">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-6 py-4 hover:bg-green-100 font-medium text-[#333333] focus:outline-none"
                      aria-expanded={openItem === index ? "true" : "false"}
                      aria-controls={`faq-content-${index}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.question}</span>
                      <svg
                        className={`w-3 h-3 shrink-0 transition-transform ${
                          openItem === index ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                    <div
                      id={`faq-content-${index}`}
                      className={`bg-green-50/50 px-6 py-4 overflow-hidden transition-max-h duration-300 ${
                        openItem === index ? "max-h-[500px]" : "max-h-0" // Increased max-h and ensure overflow-hidden
                      }`}
                    >
                      <p className="text-[#555555]">{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto bg-green-50/50 p-8 rounded-xl"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
              Still have questions?
            </h2>
            <p className="mb-6 text-[#555555]">
              Our team is ready to help with any additional questions you might
              have about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-green-500 text-base font-medium rounded-md text-green-500 hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
