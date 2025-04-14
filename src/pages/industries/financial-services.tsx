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
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Financial Services</span>
            </div>
            
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[FINANCIAL SERVICES]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Financial Services Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
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
                  <h2 className="text-3xl font-medium mb-6">The Financial Services Challenge</h2>
                  <p className="text-lg mb-4">
                    Financial institutions face increasing pressure to streamline operations, improve customer experience, and maintain rigorous compliance with evolving regulations. Manual processes and legacy systems create bottlenecks, increase risk, and limit growth potential.
                  </p>
                  <p className="text-lg">
                    Meanwhile, customer expectations for real-time service, personalized recommendations, and frictionless experiences continue to rise, while competition from fintech disruptors intensifies.
                  </p>
                </div>

                <div className={`mb-16 transition-all duration-700 delay-100 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Our Financial AI Solutions</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Intelligent Document Processing</h3>
                      <p>Automated extraction, classification, and validation of financial documents including applications, statements, and compliance documentation with 99%+ accuracy.</p>
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
                  <h2 className="text-3xl font-medium mb-6">Measured Results</h2>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">60%</span>
                      <span className="text-sm text-gray-600">Faster document processing</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">40%</span>
                      <span className="text-sm text-gray-600">Reduction in compliance costs</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-blue-500 block mb-2">35%</span>
                      <span className="text-sm text-gray-600">Improvement in client satisfaction</span>
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
                    Book a Financial Services Strategy Session
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