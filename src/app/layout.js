import Footer from "./components/layouts/Footer";
import "./globals.css";
import Navbar from "@/app/components/layouts/Navbar";

export const metadata = {
  title: "Utterlink - Seamless Connectivity & Security in Cape Town",
  description:
    "Utterlink provides seamless connectivity and robust security solutions in Cape Town. Explore our range of services for homes and businesses.",
  keywords:
    "internet Cape Town, connectivity solutions Cape Town, security solutions Cape Town, fibre installation Cape Town, WiFi extension Cape Town, network security Cape Town",
  openGraph: {
    title: "Utterlink - Seamless Connectivity & Security in Cape Town",
    description:
      "Utterlink provides seamless connectivity and robust security solutions in Cape Town. Explore our range of services for homes and businesses.",
    url: "https://yourwebsite.com", // Replace with your actual website URL
    siteName: "Utterlink",
    type: "website",
  },
  // You can add other SEO-related metadata here (e.g., robots, canonical URL)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5DC]">
        {" "}
        {/* Cream background */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
