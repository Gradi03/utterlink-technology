"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Utterlink</title>
        <meta
          name="description"
          content="Read Utterlink's Terms of Service agreement outlining the conditions for using our website and services."
        />
        <meta
          name="keywords"
          content="terms of service, user agreement, legal terms, service conditions, Utterlink terms"
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
              Terms of Service
            </h1>
            <p className="text-lg text-[#555555]">Last Updated: May 1, 2025</p>
          </motion.div>

          <div className="max-w-4xl mx-auto prose prose-headings:text-green-500 text-[#333333]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Utterlink website and services, you
                accept and agree to be bound by the terms and provisions of this
                agreement. If you do not agree to these terms, please do not use
                our website or services.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                Utterlink provides connectivity and security solutions,
                including but not limited to fiber installation, WiFi signal
                extension, CCTV installation, data cabling, electric fencing,
                and automatic gates. The specific services to be provided will
                be detailed in a separate agreement or quote provided to the
                client.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information when using our
                  services
                </li>
                <li>
                  Maintain the security of any passwords or account credentials
                </li>
                <li>
                  Promptly notify us of any unauthorized access or use of your
                  account
                </li>
                <li>
                  Use our website and services in compliance with all applicable
                  laws and regulations
                </li>
                <li>
                  Not interfere with or disrupt the integrity or performance of
                  our website and services
                </li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>
                Payment for our services is due according to the terms specified
                in your quote or agreement. We accept various payment methods as
                indicated on our website or in your agreement.
              </p>
              <p>
                For installation services, a deposit may be required before work
                begins. The balance is payable upon completion of the
                installation, unless otherwise specified.
              </p>
              <p>
                For recurring services, payment is due according to the billing
                cycle specified in your agreement.
              </p>

              <h2>5. Installation and Access</h2>
              <p>
                You agree to provide our technicians with safe and reasonable
                access to your property to perform the agreed-upon services. You
                confirm that you have the authority to grant such access and
                authorize the installation of equipment.
              </p>
              <p>
                Any specific requirements or restrictions regarding access must
                be communicated to us in writing before the scheduled
                installation date.
              </p>

              <h2>6. Equipment and Warranties</h2>
              <p>
                Any equipment supplied by Utterlink comes with a 12-month
                warranty against defects in materials and workmanship under
                normal use, unless otherwise specified. This warranty does not
                cover damage resulting from misuse, accidents, unauthorized
                modifications, or natural disasters.
              </p>
              <p>
                Some equipment may be covered by manufacturer warranties that
                differ from our warranty terms. Details of such warranties will
                be provided with the equipment.
              </p>

              <h2>7. Service Limitations</h2>
              <p>
                While we strive to provide reliable services, we cannot
                guarantee uninterrupted service, as external factors beyond our
                control may affect performance. This includes but is not limited
                to power outages, internet service provider issues, and extreme
                weather conditions.
              </p>
              <p>
                For security systems, we cannot guarantee that such systems will
                prevent all intrusions or security incidents.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Utterlink shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>
                  Statements or conduct of any third party regarding our
                  services
                </li>
                <li>Any other matter relating to our services</li>
              </ul>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Utterlink and
                its officers, directors, employees, agents, licensors, and
                suppliers from and against all losses, expenses, damages, and
                costs, including reasonable attorneys&quot; fees, resulting from
                any violation of these Terms or any activity related to your
                account.
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice or liability, for any reason,
                including but not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account or service agreement,
                please contact us according to the method specified in your
                service agreement. Termination fees may apply as detailed in
                your agreement.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any
                time. Material changes will be notified to you by email or by
                placing a prominent notice on our website. Your continued use of
                our services after such changes constitutes your acceptance of
                the new Terms.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of South Africa, without regard to its conflict of
                law provisions.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at:
              </p>
              <p>
                Email: legal@utterlink.co.za
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

export default TermsOfService;
