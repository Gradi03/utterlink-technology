"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Head from "next/head";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage({
        title: "Message sent!",
        description:
          "We've received your inquiry and will get back to you soon.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Clear toast message after a delay
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }, 1500);
  };

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.542297978188!2d18.4232209247889!3d-33.9248685734185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5168ed89a6db%3A0xa5ddf1ae58f1db91!2s123%20Main%20Rd%2C%20Cape%20Town%2C%208001!5e0!3m2!1sen!2sza!4v1737007947838!5m2!1sen!2sza";

  return (
    <>
      <Head>
        <title>Contact Us | Utterlink</title>
        <meta
          name="description"
          content="Get in touch with Utterlink for inquiries about our connectivity and security solutions, request quotes, or get technical support."
        />
        <meta
          name="keywords"
          content="contact Utterlink, connectivity services contact, security solutions quote, Cape Town tech support"
        />
      </Head>
      <div className="bg-[#F5F5DC] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700">
              Contact Us
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Get in touch with our team for inquiries, support, or to request a
              quote
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-green-600">
                  Reach Us
                </h2>
                <p className="text-[#555555] mb-8">
                  Have questions about our services or need technical support?
                  Our friendly team is here to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-200 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#333333]">
                        Phone
                      </h3>
                      <p className="text-[#555555]">+27 76 966 5155</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-200 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#333333]">
                        Email
                      </h3>
                      <p className="text-[#555555]">info@utterlink.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-200 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#333333]">
                        Location
                      </h3>
                      <p className="text-[#555555]">
                        123 Main Road
                        <br />
                        Cape Town, 8001
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-200 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#333333]">
                        Business Hours
                      </h3>
                      <p className="text-[#555555]">
                        Monday-Friday: 8AM - 5PM
                        <br />
                        Saturday: 9AM - 1PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg border border-green-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-green-600">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-[#333333]"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-green-50/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[#555555]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-[#333333]"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-green-50/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[#555555]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-[#333333]"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-green-50/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[#555555]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-[#333333]"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-green-50/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[#555555]"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-[#333333]"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-green-50/50 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-[#555555]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-md border border-green-100">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {toastMessage && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-black py-3 px-4 rounded-md shadow-lg">
              <h4 className="font-bold">{toastMessage.title}</h4>
              <p>{toastMessage.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
