import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const DocumentProcessing = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [resultsRef, resultsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
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
              <span className="text-xs opacity-60 mb-6 block">[USE CASE]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                From Document Overload to Digital Workflow
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                How AI-powered document automation is transforming legal document processing, reducing manual effort by 65% while improving accuracy and compliance.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                See It in Action →
              </a>
            </div>
          </div>
        </section>

        {/* Challenge and Solution Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={contentRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className={`transition-all duration-700 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">The Challenge</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Legal firms deal with massive volumes of complex documents that require careful review, data extraction, and processing. Traditional manual methods are time-consuming, error-prone, and difficult to scale during busy periods.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A mid-sized law firm specializing in corporate law was struggling with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>20+ hours per week spent on manual document review and data entry</li>
                  <li>Inconsistent information extraction across different team members</li>
                  <li>Delays in client onboarding and case preparation</li>
                  <li>Risk of human error in critical document processing</li>
                </ul>
              </div>

              <div className={`transition-all duration-700 delay-200 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">The Solution</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We implemented a comprehensive document automation solution that transforms their paper-heavy processes into streamlined digital workflows:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Intelligent Document Intake</h3>
                    <p>AI-powered scanning and classification that automatically identifies document types and routes them appropriately.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Automated Data Extraction</h3>
                    <p>Advanced OCR and natural language processing to extract key information from various document formats, including scanned PDFs and legacy files.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Validation & Verification</h3>
                    <p>Automated cross-checking of extracted data against existing records and predefined rules to ensure accuracy.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">System Integration</h3>
                    <p>Seamless connection with the firm's case management system, CRM, and compliance tools for end-to-end process automation.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Secure Digital Storage</h3>
                    <p>Organized, searchable digital repository with appropriate access controls and audit trails.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={processRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Implementation Process</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  number: 1,
                  title: "Document Analysis",
                  description: "We analyzed the firm's document types, information requirements, and existing workflows to identify automation opportunities."
                },
                {
                  number: 2,
                  title: "Extraction Model Development",
                  description: "We developed and trained custom extraction models for each document type, focusing on accuracy for critical information."
                },
                {
                  number: 3,
                  title: "Workflow Design",
                  description: "We designed intelligent workflows that incorporate validation rules, exception handling, and approval processes."
                },
                {
                  number: 4,
                  title: "System Integration",
                  description: "We connected the document automation system with the firm's existing software ecosystem, ensuring seamless data flow."
                },
                {
                  number: 5,
                  title: "Testing & Validation",
                  description: "We rigorously tested the system with historical documents, measuring accuracy and handling of edge cases."
                },
                {
                  number: 6,
                  title: "Phased Deployment",
                  description: "We implemented the solution in phases, starting with highest-volume document types and expanding to cover all processes."
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-700 ${
                    processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={resultsRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">The Results</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              After full implementation, the law firm experienced:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "100ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">65%</h3>
                <p className="text-xl font-medium mb-4">Reduction in Processing Time</p>
                <p className="text-gray-600">Document processing that previously took hours now completes in minutes, with minimal human intervention.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "200ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">93%</h3>
                <p className="text-xl font-medium mb-4">Data Extraction Accuracy</p>
                <p className="text-gray-600">The AI-powered system achieves higher accuracy than manual processing, with continuous improvement over time.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "300ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">40+</h3>
                <p className="text-xl font-medium mb-4">Hours Saved Weekly</p>
                <p className="text-gray-600">Legal staff time previously spent on document processing is now redirected to higher-value client work.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "400ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">48%</h3>
                <p className="text-xl font-medium mb-4">Faster Client Onboarding</p>
                <p className="text-gray-600">The streamlined document intake process significantly accelerates client setup and case initiation.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "500ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">100%</h3>
                <p className="text-xl font-medium mb-4">Enhanced Compliance</p>
                <p className="text-gray-600">Consistent processing and comprehensive audit trails improve regulatory compliance and reduce risk.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md flex items-center justify-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "600ms" }}>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
                >
                  Explore Similar Solutions →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={featuresRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                  title: "Multi-Format Support",
                  description: "Process documents in any format, including scanned papers, PDFs, Word documents, and emails."
                },
                {
                  icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                  title: "Intelligent Classification",
                  description: "Automatically identify document types and apply appropriate extraction and processing rules."
                },
                {
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                  title: "Advanced Data Extraction",
                  description: "Extract structured data from unstructured documents using AI-powered recognition."
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Validation Rules Engine",
                  description: "Apply custom business rules to validate extracted information and flag exceptions."
                },
                {
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  title: "Workflow Automation",
                  description: "Route documents and data through approval processes and system integrations."
                },
                {
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  title: "Secure Audit Trail",
                  description: "Maintain comprehensive records of all document processing activities for compliance and governance."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-full">
                    <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-medium mb-6">Is This Right for Your Business?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                This solution is ideal for organizations that:
              </p>
              <ul className="max-w-2xl mx-auto text-left mb-12 grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Process high volumes of structured or semi-structured documents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Have staff spending significant time on document review and data entry</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Need consistent information extraction and processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Face compliance requirements for document handling</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Request a Consultation →
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

export default DocumentProcessing; 