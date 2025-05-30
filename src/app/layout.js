import "./globals.css";
import Navbar from "@/app/components/layouts/Navbar";
import Footer from "@/app/components/layouts/Footer";
import Head from "next/head";

export const metadata = {
  title: "Utterlink - Seamless Connectivity & Security in Cape Town",
  description:
    "Utterlink provides seamless connectivity and robust security solutions in Cape Town. Explore our range of services for homes and businesses.",
  keywords:
    "internet Cape Town, connectivity solutions Cape Town, security solutions Cape Town, fibre installation Cape Town, WiFi extension Cape Town, CCTV installation Cape Town, data cabling Cape Town, electric fencing Cape Town, automatic gates Cape Town",
  openGraph: {
    title: "Utterlink - Seamless Connectivity & Security in Cape Town",
    description:
      "Utterlink provides seamless connectivity and robust security solutions in Cape Town. Explore our range of services for homes and businesses.",
    url: "https://utterlink.co.za",
    siteName: "Utterlink",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://utterlink.co.za/fibre.webp", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Utterlink - Connectivity and Security",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://utterlink.co.za",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Utterlink" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Utterlink - Seamless Connectivity & Security in Cape Town"
        />
        <meta
          name="twitter:description"
          content="Explore professional fibre, CCTV, WiFi and security services in Cape Town with Utterlink."
        />
        <meta
          name="twitter:image"
          content="https://utterlink.co.za/fibre.webp"
        />

        {/* Organization Schema (Global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Utterlink",
              url: "https://utterlink.co.za",
              logo: "https://utterlink.co.za/logo.png",
              image: "https://utterlink.co.za/fibre.webp",
              description:
                "Utterlink offers professional connectivity and security services in Cape Town, including fibre installation, WiFi extension, CCTV surveillance, data cabling, electric fencing, and automatic gates.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "42 Stellenberg Road, Parow Industrial",
                addressLocality: "Cape Town",
                addressRegion: "Western Cape",
                postalCode: "7493",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.93880037196515,
                longitude: 18.606868275167724,
              },
              hasMap:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8252033622214!2d18.59976331521199!3d-33.91896898064972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5220c386629b%3A0xc4f54e6b5e024227!2s42%20Stellenberg%20Rd%2C%20Parow%20Industrial%2C%20Cape%20Town%2C%207493%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678280000000!5m2!1sen!2sus",
              telephone: "+27 76 966 5155",
              email: "info@utterlink.co.za", // Add your official email
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              sameAs: ["https://www.facebook.com/Utterlink"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27 76 966 5155",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </Head>
      <body className="bg-[#F5F5DC]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
