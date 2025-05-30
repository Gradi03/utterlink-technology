"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          content="Find answers to the most common questions about Utterlink’s connectivity and security services in Cape Town, including installation, pricing, and support."
        />
        <meta
          name="keywords"
          content="Utterlink FAQ, connectivity support, fiber installation questions, security service answers, Cape Town internet help"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media Tags */}
        <meta
          property="og:title"
          content="Frequently Asked Questions | Utterlink"
        />
        <meta
          property="og:description"
          content="Need help? Browse our FAQ to learn more about Utterlink’s connectivity and security solutions in Cape Town."
        />
        <meta property="og:url" content="https://utterlink.co.za/faq" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://utterlink.co.za/faq" />
      </Head>

      <div className="bg-[#F5F5DC] pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-green-700 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#555555]">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>

          <div className="space-y-4 mb-16">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-green-100 rounded-lg shadow-sm bg-[#F5F5DC]"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-6 py-4 hover:bg-green-100 text-left font-medium text-[#333333]"
                  aria-expanded={openItem === index}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <motion.svg
                    className={`w-3 h-3 transform transition-transform ${
                      openItem === index ? "rotate-180" : ""
                    }`}
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
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {openItem === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 overflow-hidden bg-green-50/50"
                    >
                      <p className="py-4 text-[#555555]">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto bg-green-50/50 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Still have questions?
            </h2>
            <p className="mb-6 text-[#555555]">
              Our team is ready to help with any additional questions you might
              have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-base font-medium rounded-md text-green-500 hover:bg-green-500 hover:text-black"
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
