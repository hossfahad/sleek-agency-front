import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const HotelsHospitalityIndustry = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-blue-50" ref={heroRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Hotels & Hospitality</span>
            </div>
            
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[HOSPITALITY INDUSTRY]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Hotels & Hospitality Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Automate guest services and back-office operations. We help hotels cut costs, boost revenue, 
                and elevate guest satisfaction by automating routine tasks across voice, web, and back-office systems.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={contentRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-8">
                <div className={`mb-16 transition-all duration-700 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Common Time Sinks We Eliminate</h2>
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    <li>Manual reservation handling and availability inquiries</li>
                    <li>Repetitive front desk Q&A (check-in times, amenities, directions)</li>
                    <li>Back-office inventory or housekeeping coordination</li>
                    <li>Missed upsell opportunities for late checkouts, room upgrades, or spa services</li>
                  </ul>
                </div>

                <div className={`mb-16 transition-all duration-700 delay-100 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Sample Automations</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">AI Front Desk Assistant</h3>
                      <p>A voice or chat-based agent that handles common guest questions 24/7 and routes more complex ones to staff.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Upsell Bot for Direct Bookings</h3>
                      <p>Automatically offers add-ons and upgrades based on booking type or guest profile.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Back-Office Coordination Tools</h3>
                      <p>Agents that sync housekeeping updates, flag low-stock amenities, or notify maintenance — all without staff needing to check in manually.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-700 delay-200 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Outcomes We Deliver</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">60%</span>
                      <span className="text-sm text-gray-600">Reduction in call and desk volume</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Higher guest satisfaction scores</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Increased upsell revenue</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Lower staffing costs</span>
                    </div>
                  </div>
                  <p className="text-lg">
                    Our hospitality clients report significant improvements in operational efficiency, guest experience, and revenue generation, while maintaining the personal touch that defines exceptional hospitality.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className={`bg-gray-50 p-6 rounded-lg sticky top-24 transition-all duration-700 delay-300 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h3 className="text-xl font-medium mb-4">Want a front desk that never sleeps?</h3>
                  <p className="mb-6">Let's build a custom system that handles guest communication, room logistics, and more — without adding headcount.</p>
                  <a 
                    href="#contact" 
                    className="block w-full py-3 bg-viridian text-white rounded-lg text-center font-medium hover:bg-cambridge-blue transition-colors"
                  >
                    Schedule a Free Strategy Call
                  </a>
                </div>
              </div>
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

export default HotelsHospitalityIndustry;
