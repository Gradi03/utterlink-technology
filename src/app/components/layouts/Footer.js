"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react"; // Import MessageCircle
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+27769665155";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // State to control visibility of the text
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the message after 4 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 4000); // 4000 milliseconds = 4 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-4">Utterlink</h2>
            <p className="text-gray-300 mb-4">
              Premium connectivity and security solutions for homes and
              businesses in Cape Town since 2018.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-green-400"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-green-400"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/fibre-installation"
                  className="text-gray-300 hover:text-green-400"
                >
                  Fibre Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wifi-extension"
                  className="text-gray-300 hover:text-green-400"
                >
                  WiFi Signal Extension
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cctv-installation"
                  className="text-gray-300 hover:text-green-400"
                >
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-cabling"
                  className="text-gray-300 hover:text-green-400"
                >
                  Data Cabling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-400 hover:underline"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-green-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-green-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-green-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-green-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-green-400" /> +27 76 966
                5155
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                info@utterlink.co.za
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-green-400" /> Mon-Fri: 8AM -
                5PM
                <br />
                Sat: 9AM - 1PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Utterlink. All rights reserved. |
          <Link href="/privacy-policy" className="hover:text-green-400 ml-1">
            Privacy Policy
          </Link>
          |
          <Link href="/terms-of-service" className="hover:text-green-400 ml-1">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* Animated WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={
          `fixed bottom-4 right-4 z-50 flex items-center
          bg-green-500 hover:bg-green-600 text-white rounded-full
          shadow-lg p-2 transition-all duration-500 ease-in-out
          ${showMessage ? "pl-4 pr-6" : "p-2"}` // Adjust padding based on message visibility
        }
      >
        <span
          className={`whitespace-nowrap overflow-hidden
            ${showMessage ? "w-auto opacity-100 mr-2" : "w-0 opacity-0"}
            transition-all duration-500 ease-in-out text-base font-semibold`}
        >
          Get a quote now
        </span>
        {/* Lucide MessageCircle icon */}
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </footer>
  );
};

export default Footer;
