import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const useCases = [
  {
    title: "AI Voice Agents for Appointment Scheduling",
    description: "How a healthcare provider automated 78% of appointment confirmations and reduced no-shows by 42% using our Conversational AI solution.",
    link: "/use-cases/voice-agents",
    stats: [
      { value: "42%", label: "Reduction in No-Shows" },
      { value: "78%", label: "Automation Rate" },
      { value: "30+", label: "Hours Saved Weekly" }
    ],
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  },
  {
    title: "Automated Document Processing for Legal Firms",
    description: "How a law firm reduced document processing time by 65% and improved accuracy using our Document Automation solution.",
    link: "/use-cases/document-processing",
    stats: [
      { value: "65%", label: "Processing Time Reduction" },
      { value: "93%", label: "Data Extraction Accuracy" },
      { value: "40+", label: "Hours Saved Weekly" }
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Rapid Prototype Development for Startups",
    description: "How a fintech startup validated their product concept in just 6 weeks using our Rapid Market Validation approach.",
    link: "/use-cases/rapid-prototype",
    stats: [
      { value: "6", label: "Weeks to Validation" },
      { value: "$1.2M", label: "Seed Funding Secured" },
      { value: "40%", label: "Dev Time Reduction" }
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  }
];

const UseCases = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [casesRef, casesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-transparent" ref={heroRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[SOLUTIONS]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                See AI in Action
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Explore real-world examples of how our AI solutions deliver measurable results across different industries and use cases.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={casesRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    casesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                      <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                        <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                        </svg>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-medium mb-6">{useCase.title}</h2>
                      <p className="text-lg text-gray-700 mb-8">{useCase.description}</p>
                      
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {useCase.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-viridian">{stat.value}</p>
                            <p className="text-sm mt-2">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={useCase.link} className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300">
                        View Full Case Study →
                      </Link>
                    </div>
                    
                    <div className="order-1 md:order-2 bg-white rounded-lg shadow-md p-8 md:p-12">
                      <div className="aspect-video w-full bg-gray-100 rounded flex items-center justify-center">
                        <p className="text-gray-500">Case Study Illustration</p>
                      </div>
                    </div>
                  </div>
                  
                  {index < useCases.length - 1 && (
                    <hr className="border-gray-200 mt-24" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Ready to see results like these?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Schedule a free consultation to discuss how our AI solutions can deliver measurable outcomes for your business.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Book Your Free Strategy Session →
              </a>
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

export default UseCases; 