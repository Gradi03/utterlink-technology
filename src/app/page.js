// src/app/page.js
import React from "react";
import HeroSection from "@/app/components/home/HeroSection"; // Corrected alias
import ServicesOverview from "@/app/components/home/ServicesOverview"; // Corrected alias
import AboutPreview from "./components/home/AboutPreview";
import Testimonials from "./components/home/Testimonials";
import CallToAction from "./components/cta/CallToAction";
// import BlogHighlights from "@/app/components/home/BlogHighlights";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <Testimonials />
      <CallToAction />
      {/* <BlogHighlights /> */}
    </main>
  );
}
