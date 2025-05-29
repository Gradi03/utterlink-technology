"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Head from "next/head";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; // Import for React content inside SweetAlert

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React content support

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show processing SweetAlert as a subtle toast-like notification
    MySwal.fire({
      title: (
        <div className="text-lg font-semibold text-gray-800">
          Sending your message...
        </div>
      ),
      html: <div className="text-sm text-gray-600">Please wait a moment.</div>,
      icon: "info", // Use an info icon for processing
      toast: true, // Make it a toast
      position: "top-end", // Position at the top right
      showConfirmButton: false, // No confirm button
      timer: 0, // No auto-close for processing, will be closed manually
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      customClass: {
        popup:
          "swal2-toast-popup-custom bg-white rounded-lg shadow-xl border border-blue-200", // Custom class for styling
      },
      showClass: {
        popup: "animate__animated animate__fadeInRight animate__faster", // Optional: entry animation
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight animate__faster", // Optional: exit animation
      },
    });

    const data = {
      ...formData,
      access_key: "4b00ec43-4a66-4ac8-a671-aa7f661d4eb3",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      MySwal.close(); // Close the processing toast

      if (result.success) {
        MySwal.fire({
          title: (
            <div className="text-lg font-semibold text-green-700">
              Message Sent!
            </div>
          ),
          html: (
            <div className="text-sm text-gray-600">
              We&apos;ve received your inquiry and will get back to you soon.
            </div>
          ),
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000, // Auto-close after 3 seconds
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
          customClass: {
            popup:
              "swal2-toast-popup-custom bg-white rounded-lg shadow-xl border border-green-200",
          },
          showClass: {
            popup: "animate__animated animate__fadeInRight animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight animate__faster",
          },
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Web3Forms error:", result);
        MySwal.fire({
          title: (
            <div className="text-lg font-semibold text-red-700">Oops...</div>
          ),
          html: (
            <div className="text-sm text-gray-600">
              {result.message || "Something went wrong! Please try again."}
            </div>
          ),
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000, // Longer timer for errors
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
          customClass: {
            popup:
              "swal2-toast-popup-custom bg-white rounded-lg shadow-xl border border-red-200",
          },
          showClass: {
            popup: "animate__animated animate__fadeInRight animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight animate__faster",
          },
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      MySwal.close(); // Close the processing toast
      MySwal.fire({
        title: (
          <div className="text-lg font-semibold text-red-700">
            Network Error
          </div>
        ),
        html: (
          <div className="text-sm text-gray-600">
            Could not connect to the server. Please check your internet
            connection and try again.
          </div>
        ),
        icon: "error",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        customClass: {
          popup:
            "swal2-toast-popup-custom bg-white rounded-lg shadow-xl border border-red-200",
        },
        showClass: {
          popup: "animate__animated animate__fadeInRight animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight animate__faster",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8252033622214!2d18.59976331521199!3d-33.91896898064972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5220c386629b%3A0xc4f54e6b5e024227!2s42%20Stellenberg%20Rd%2C%20Parow%20Industrial%2C%20Cape%20Town%2C%207493%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678280000000!5m2!1sen!2sus";

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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
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

          {/* Main Content Grid (Contact Info & Form - now side-by-side on large screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
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
                      <p className="text-[#555555]">
                        <a href="tel:+27769665155" className="hover:underline">
                          +27 76 966 5155
                        </a>
                      </p>
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
                      <p className="text-[#555555]">
                        <a
                          href="mailto:info@utterlink.co.za"
                          className="hover:underline"
                        >
                          info@utterlink.co.za
                        </a>
                      </p>
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
                        42 Stellenberg Road
                        <br />
                        Parow Industrial
                        <br />
                        Cape Town, 7493
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
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
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
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-70 disabled:cursor-not-allowed"
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
            </motion.div>
          </div>

          {/* Google Map Embed (now full width below the grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-7xl mx-auto mt-12 px-4 md:px-0"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">
              Our Location
            </h2>
            <p className="text-center text-[#555555] mb-4">
              Visit us at our office in Parow Industrial. We’re happy to assist
              you!
            </p>
            <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg border border-green-100">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Utterlink Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
