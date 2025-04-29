import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Our Approach Section */}
        <Services />
        
        {/* Main Feature Grid */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">How We Help</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Industries Feature */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-40 bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Industries We Transform</h3>
                  <p className="text-gray-600 mb-6">See how our solutions address specific challenges across diverse industry sectors.</p>
                  <Link 
                    to="/industries" 
                    className="inline-flex items-center text-blue-500 font-medium"
                  >
                    Explore Industries
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Solutions Feature */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-40 bg-gradient-to-r from-viridian/20 to-cambridge-blue/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">AI-Powered Solutions</h3>
                  <p className="text-gray-600 mb-6">Discover how our AI-powered solutions address common business challenges and create measurable impact.</p>
                  <Link 
                    to="/use-cases" 
                    className="inline-flex items-center text-viridian font-medium"
                  >
                    View Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Performance Feature */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-40 bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Savings Calculator</h3>
                  <p className="text-gray-600 mb-6">Explore how our solutions deliver measurable outcomes and quantifiable ROI for your business.</p>
                  <Link 
                    to="/measured-performance" 
                    className="inline-flex items-center text-purple-500 font-medium"
                  >
                    Calculate Your Savings
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Contact Banner */}
        <section className="py-16 px-6 md:px-10 bg-gradient-to-r from-viridian to-cambridge-blue text-white">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h2 className="text-3xl font-medium mb-3">Ready to transform your business?</h2>
              <p className="text-white/80 max-w-xl">
                Discuss your unique challenges with our experts and discover how our AI solutions can drive innovation and efficiency.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
