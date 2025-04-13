import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SolutionsCapabilities from "@/components/SolutionsCapabilities";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/CaseStudy";
import MetricsSection from "@/components/MetricsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <MetricsSection />
      <SolutionsCapabilities />
      <Projects />
      <Pricing />
      {/* Case Study section is hidden until ready for release */}
      <div className="hidden">
        <CaseStudy />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
