"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Utterlink</title>
        <meta
          name="description"
          content="Learn about how Utterlink collects, uses, and protects your personal information in compliance with data protection laws."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, Utterlink privacy"
        />
        {/* You can add other SEO meta tags as needed */}
      </Head>
      <div className="bg-[#F5F5DC] py-8 md:py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-green-700">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#555555]">Last Updated: May 1, 2025</p>
          </motion.div>

          <div className="max-w-4xl mx-auto prose prose-headings:text-green-500 text-[#333333]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>1. Introduction</h2>
              <p>
                Utterlink ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul>
                <li>Register on our website</li>
                <li>Submit a contact form</li>
                <li>Request a quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact our customer support team</li>
              </ul>
              <p>
                This information may include your name, email address, telephone
                number, postal address, payment information, and other details
                that help us provide our services to you.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to comments, questions, and requests</li>
                <li>
                  Send you technical notices, updates, and support messages
                </li>
                <li>
                  Communicate with you about products, services, offers, and
                  events
                </li>
                <li>
                  Provide news and information we think will be of interest to
                  you
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Protect against harmful or unlawful activities</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li>
                  With service providers who perform services on our behalf
                </li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
                <li>
                  In connection with a business transfer (e.g., merger or
                  acquisition)
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational
                measures to protect the security of your personal information.
                However, please note that no method of transmission over the
                Internet or electronic storage is 100% secure.
              </p>

              <h2>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with a small amount of data that may include an
                anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                service.
              </p>

              <h2>7. Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, such as:
              </p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to erasure of your personal information</li>
                <li>
                  The right to restrict processing of your personal information
                </li>
                <li>The right to data portability</li>
                <li>
                  The right to object to processing of your personal information
                </li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please contact us
                using the details provided below.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children under 18. If you become aware that a child has provided
                us with personal information, please contact us.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                Email: info@utterlink.co.za
                <br />
                Phone: +27 76 966 5155
                <br />
                Address: 123 Main Road, Cape Town, 8001, South Africa
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
