"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Us | Utterlink - Connectivity & Security Experts in Cape Town
        </title>
        <meta
          name="description"
          content="Discover Utterlink's mission, values, and expert team. Since 2018, we’ve delivered fibre, WiFi, CCTV, electric fencing, and smart security systems across Cape Town."
        />
        <meta
          name="keywords"
          content="Utterlink, about Utterlink, Cape Town tech company, connectivity experts Cape Town, security solutions Cape Town, WiFi installers, fibre installation, CCTV, electric fencing, smart home security"
        />
        <meta name="author" content="Utterlink" />
        <meta
          property="og:title"
          content="About Us | Utterlink - Connectivity & Security Experts in Cape Town"
        />
        <meta
          property="og:description"
          content="Since 2018, Utterlink has been providing fibre, WiFi, CCTV, electric fencing, and more. Learn about our journey and commitment to Cape Town."
        />
        <meta property="og:url" content="https://www.utterlink.co.za/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utterlink" />
        <meta
          property="og:image"
          content="https://www.utterlink.co.za/cctv-surveillance.webp"
        />
        <meta property="og:locale" content="en_ZA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Utterlink" />
        <meta
          name="twitter:description"
          content="Learn about Utterlink’s journey and why we’re Cape Town’s trusted name for fibre, WiFi, CCTV, and smart security."
        />
        <meta
          name="twitter:image"
          content="https://www.utterlink.co.za/cctv-surveillance.webp"
        />
        <link rel="canonical" href="https://www.utterlink.co.za/about" />
      </Head>
      <div className="bg-[#F5F5DC] py-18 md:py-16 lg:py-18">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-700">
              About Utterlink
            </h1>
            <p className="text-lg md:text-xl text-[#555555] max-w-3xl mx-auto">
              Connecting Cape Town with premium technology solutions since 2018
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                Our Story
              </h2>
              <p className="mb-4 text-[#333333]">
                Founded in 2018, Utterlink began with a simple mission: to
                provide Cape Town residents and businesses with connectivity
                solutions that actually work. What started as a small team of
                tech enthusiasts has grown into a trusted provider of
                comprehensive connectivity and security solutions.
              </p>
              <p className="mb-8 md:mb-10 lg:mb-12 text-[#333333]">
                Over the years, we&rsquo;ve expanded our services to meet the
                growing demands of our clients, always staying at the forefront
                of technological advancements. Our commitment to quality,
                reliability, and exceptional customer service has earned us a
                reputation as one of Cape Town&rsquo;s most trusted technology
                partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-12 lg:mb-16 items-center"
            >
              <div className="order-last md:order-first">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                  Our Cape Town Roots
                </h2>
                <p className="text-[#333333]">
                  Being based in the vibrant city of Cape Town is core to our
                  identity. We understand the unique needs and challenges of
                  this region and are committed to providing solutions that
                  empower our local community. From the bustling city center to
                  the serene coastal suburbs, we&rsquo;re proud to serve Cape
                  Town.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/cape-town.webp"
                  alt="Cape Town View"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                Our Mission
              </h2>
              <p className="mb-8 md:mb-10 lg:mb-12 text-[#333333]">
                At Utterlink, we believe that connectivity is not just about
                technology—it&rsquo;s about connecting people, businesses, and
                communities. Our mission is to bridge the digital divide by
                providing reliable, high-quality connectivity and security
                solutions that empower our clients to thrive in an increasingly
                digital world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-12">
                <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 text-center shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-400/10 rounded-full">
                      <Award className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">
                    Quality
                  </h3>
                  <p className="text-[#555555]">
                    We use only premium products and follow industry best
                    practices to ensure reliable performance.
                  </p>
                </div>

                <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 text-center shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-400/10 rounded-full">
                      <Users className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">
                    Service
                  </h3>
                  <p className="text-[#555555]">
                    Our dedicated team provides personalized service and ongoing
                    support to every client.
                  </p>
                </div>

                <div className="bg-[#F5F5DC] p-4 md:p-6 rounded-lg border border-green-100 text-center shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-400/10 rounded-full">
                      <Clock className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">
                    Reliability
                  </h3>
                  <p className="text-[#555555]">
                    We stand behind our work with quick response times and
                    proactive maintenance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-500">
                Our Team
              </h2>
              <p className="mb-8 md:mb-10 lg:mb-12 text-[#333333]">
                Our team consists of skilled technicians, engineers, and
                customer support specialists who are passionate about technology
                and dedicated to delivering exceptional service. With extensive
                training and experience in the industry, our team members are
                equipped to handle projects of any size and complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
