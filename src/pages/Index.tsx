import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SolutionsCapabilities from "@/components/SolutionsCapabilities";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MetricsSection from "@/components/MetricsSection";
import Introduction from "@/components/Introduction";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Services />
        <MetricsSection />
        <SolutionsCapabilities />
        <Projects />
        <Pricing />
      </main>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
