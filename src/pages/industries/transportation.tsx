import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const TransportationIndustry = () => {
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
        <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-green-50" ref={heroRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Ground Transportation</span>
            </div>
            
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[TRANSPORTATION INDUSTRY]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Ground Transportation Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Drive more bookings with less admin. From limo companies to local shuttle operators, 
                we help transportation businesses reduce overhead, handle more bookings, and improve 
                dispatch reliability using AI-powered automations.
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
                    <li>Booking confirmations and reschedules done manually</li>
                    <li>Endless phone calls for pickup times, ETA, and trip changes</li>
                    <li>Manual dispatch communication between drivers and admins</li>
                    <li>Billing, receipts, and insurance verification delays</li>
                  </ul>
                </div>

                <div className={`mb-16 transition-all duration-700 delay-100 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Sample Automations</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">AI Booking Line</h3>
                      <p>A voice agent that books, reschedules, and confirms rides without staff involvement.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Driver Coordination Tools</h3>
                      <p>AI-driven alerts for pickup changes, traffic reroutes, and vehicle availability.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Auto-Invoicing and Receipt Agents</h3>
                      <p>Automatically generate and send payment confirmations and receipts based on trip completion.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-700 delay-200 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Outcomes We Deliver</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-green-500 block mb-2">40-70%</span>
                      <span className="text-sm text-gray-600">Drop in booking-related admin tasks</span>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-green-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Fewer missed pickups</span>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-green-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Faster invoice cycles</span>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-green-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Happier customers</span>
                    </div>
                  </div>
                  <p className="text-lg">
                    Our transportation clients report significant improvements in operational efficiency, customer satisfaction, and revenue collection while reducing the administrative burden on staff.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className={`bg-gray-50 p-6 rounded-lg sticky top-24 transition-all duration-700 delay-300 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h3 className="text-xl font-medium mb-4">Don't let phone calls slow down your fleet</h3>
                  <p className="mb-6">Our automations help you run smoother routes, respond faster to customers, and cut manual work across your operations.</p>
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

export default TransportationIndustry;
