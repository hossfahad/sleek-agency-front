import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const FinancialServicesIndustry = () => {
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
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className={`transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <img src="/images/financial-services-hero.jpg" alt="Financial Services" className="w-full md:w-3/5 rounded-lg shadow-lg mx-auto" />
            </div>
            <div className={`max-w-3xl transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex items-center gap-4 mb-6">
                <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                  Industries
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-viridian font-medium">Financial Services</span>
              </div>
              <span className="text-xs opacity-60 mb-4 block">[FINANCIAL SERVICES]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Financial Services Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Support large-scale data servicing, client interactions, document processing, and 
                regulatory compliance with intelligent automation systems.
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
                    <li>Manual document review and data extraction</li>
                    <li>Repetitive client onboarding and KYC processes</li>
                    <li>Time-consuming regulatory compliance reporting</li>
                    <li>Inefficient customer service and inquiry handling</li>
                  </ul>
                </div>

                <div className={`mb-16 transition-all duration-700 delay-100 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Sample Automations</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Intelligent Document Processing</h3>
                      <p>Automated extraction, classification, and validation of financial documents including applications, statements, and compliance documentation.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Customer Service Automation</h3>
                      <p>AI-powered client interactions that handle routine inquiries, updates, and transactions while seamlessly escalating complex issues to human representatives.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Regulatory Compliance Assurance</h3>
                      <p>Intelligent monitoring and verification systems that ensure adherence to regulatory requirements while automatically flagging potential compliance issues.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-700 delay-200 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Outcomes We Deliver</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Processing speed</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Compliance costs</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Client satisfaction</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Operational errors</span>
                    </div>
                  </div>
                  <p className="text-lg">
                    Our financial services clients achieve significant operational efficiencies, reduced compliance risk, and improved customer satisfaction while maintaining the highest standards for security and data protection.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className={`bg-gray-50 p-6 rounded-lg sticky top-24 transition-all duration-700 delay-300 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h3 className="text-xl font-medium mb-4">Ready to transform your financial operations?</h3>
                  <p className="mb-6">Schedule a consultation to discuss how our secure AI solutions can help your institution improve efficiency, compliance, and customer experience.</p>
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

export default FinancialServicesIndustry; 