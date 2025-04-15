import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const HealthcareIndustry = () => {
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
        <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-red-50" ref={heroRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Healthcare</span>
            </div>
            
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[HEALTHCARE INDUSTRY]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Medical & Healthcare Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Streamline patient interactions, follow-ups, and medical record management with AI assistants 
                and automated workflows that maintain HIPAA compliance.
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
                    <li>Manual appointment scheduling and patient reminders</li>
                    <li>Repetitive insurance verification and eligibility checks</li>
                    <li>Time-consuming medical record entry and retrieval</li>
                    <li>Inefficient patient follow-up and communication</li>
                  </ul>
                </div>

                <div className={`mb-16 transition-all duration-700 delay-100 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Sample Automations</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Intelligent Patient Communication</h3>
                      <p>Automated appointment reminders, follow-ups, and healthcare instructions that adapt to patient responses while maintaining a personal touch.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Medical Records Processing</h3>
                      <p>AI-powered document processing that extracts, categorizes, and integrates medical information across systems while maintaining strict compliance with privacy regulations.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Streamlined Billing Workflows</h3>
                      <p>Automated insurance verification, coding assistance, and payment processing that reduces administrative costs while improving accuracy and accelerating reimbursement.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-700 delay-200 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h2 className="text-3xl font-medium mb-6">Outcomes We Deliver</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-red-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Reduced no-shows</span>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-red-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Staff productivity</span>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-red-500 block mb-2">↑</span>
                      <span className="text-sm text-gray-600">Patient satisfaction</span>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                      <span className="text-4xl font-bold text-red-500 block mb-2">↓</span>
                      <span className="text-sm text-gray-600">Administrative costs</span>
                    </div>
                  </div>
                  <p className="text-lg">
                    Our healthcare clients report significant improvements in operational efficiency, patient experience, and compliance, while freeing up staff to focus on what matters most: providing quality care.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className={`bg-gray-50 p-6 rounded-lg sticky top-24 transition-all duration-700 delay-300 ${
                  contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <h3 className="text-xl font-medium mb-4">Ready to transform your healthcare operations?</h3>
                  <p className="mb-6">Schedule a consultation to discuss how our HIPAA-compliant AI solutions can help your organization improve patient care while reducing administrative burden.</p>
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

export default HealthcareIndustry; 