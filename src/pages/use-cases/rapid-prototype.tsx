import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const RapidPrototype = () => {
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
                From Concept to Validated Product in Weeks, Not Months
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                How AI-powered rapid prototyping helped a fintech startup validate their concept, refine their value proposition, and secure funding in just 6 weeks.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Explore Our Approach →
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
                  For startups, the path from initial concept to market-ready product is fraught with uncertainty, expense, and time pressure. Traditional development approaches require significant investment before receiving meaningful market feedback, increasing the risk of building something users don't want.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A fintech startup with an innovative payment solution concept was facing:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Limited runway to demonstrate product viability to investors</li>
                  <li>Uncertainty about which features would resonate most with target users</li>
                  <li>Technical complexity requiring specialized development expertise</li>
                  <li>Need to validate market fit before committing to full development</li>
                </ul>
              </div>

              <div className={`transition-all duration-700 delay-200 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">The Solution</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We implemented our Rapid Market Validation approach, leveraging AI-powered tools to accelerate the journey from concept to validated prototype:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">AI-Enhanced Market Research</h3>
                    <p>Comprehensive analysis of market trends, competitor offerings, and user needs to refine the initial concept.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Concept Visualization</h3>
                    <p>Rapid creation of visual mockups and user flows to align stakeholders and clarify the product vision.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Functional Prototype Development</h3>
                    <p>Using Cursor and Lovable AI tools to quickly build interactive prototypes demonstrating core functionality.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">User Testing & Feedback</h3>
                    <p>Structured testing sessions with target users to gather actionable feedback on usability and value proposition.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Iterative Refinement</h3>
                    <p>Rapid incorporation of user feedback through multiple prototype iterations, each improving market fit.</p>
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
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    week: "Week 1",
                    title: "Discovery Workshop",
                    description: "We conducted an intensive workshop to understand the business vision, target market, and initial concept, establishing clear validation objectives."
                  },
                  {
                    week: "Week 1-2",
                    title: "Market Analysis",
                    description: "Our AI research tools analyzed market trends, competitor offerings, and user needs, identifying key opportunities and potential challenges."
                  },
                  {
                    week: "Week 2",
                    title: "Concept Development",
                    description: "We developed multiple concept variations addressing identified market needs while aligning with business goals."
                  },
                  {
                    week: "Week 3",
                    title: "Rapid Prototyping",
                    description: "Using Cursor and Lovable, we created an interactive prototype demonstrating the core user experience and functionality."
                  },
                  {
                    week: "Week 4",
                    title: "User Testing",
                    description: "We conducted testing sessions with 15 target users, collecting structured feedback on usability, value proposition, and feature priorities."
                  },
                  {
                    week: "Week 5",
                    title: "Iteration & Refinement",
                    description: "Based on user feedback, we rapidly iterated on the prototype, refining the user experience and feature set."
                  },
                  {
                    week: "Week 6",
                    title: "Final Validation & Documentation",
                    description: "We delivered a comprehensive validation report with clear recommendations and a development roadmap."
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center transition-all duration-700 ${
                      processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:pl-12 md:pr-0'}`}>
                      <span className="text-sm text-viridian font-medium">{step.week}</span>
                      <h3 className="text-xl font-medium mt-1 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className={`mx-auto md:mx-0 mt-4 md:mt-0 flex items-center justify-center ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                      <div className="w-12 h-12 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium z-10">
                        {index + 1}
                      </div>
                    </div>
                    
                    {index % 2 === 1 && (
                      <div className="md:w-1/2 hidden md:block"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={resultsRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">The Results</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              The rapid prototyping process delivered significant value for the startup:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Validated Product Concept",
                  description: "Clear confirmation of market interest and willingness to pay for the solution."
                },
                {
                  title: "Refined Value Proposition",
                  description: "Identification of the most compelling benefits and messaging based on user feedback."
                },
                {
                  title: "Prioritized Feature Set",
                  description: "Data-driven decisions about which features to include in MVP vs. future releases."
                },
                {
                  title: "Successful Funding Round",
                  description: "The validated prototype and market evidence helped secure $1.2M in seed funding."
                },
                {
                  title: "Accelerated Development Timeline",
                  description: "The prototype provided a clear blueprint for development, reducing full implementation time by an estimated 40%."
                },
                {
                  title: "Reduced Development Risk",
                  description: "Early identification and resolution of potential usability and technical challenges."
                }
              ].map((result, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${
                    resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-viridian/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{result.title}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Book a Discovery Call →
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={featuresRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">Key Features of Our Approach</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              What makes our rapid prototyping methodology so effective:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "AI-Powered Development",
                  description: "Leverage advanced AI tools like Cursor and Lovable to accelerate prototype creation and iteration."
                },
                {
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                  title: "User-Centered Process",
                  description: "Focus on real user feedback rather than assumptions to drive product decisions."
                },
                {
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                  title: "Iterative Methodology",
                  description: "Multiple rapid improvement cycles rather than a single build-and-test approach."
                },
                {
                  icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                  title: "Full-Stack Capabilities",
                  description: "Create prototypes that demonstrate both frontend experience and backend functionality."
                },
                {
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  title: "Data-Driven Decisions",
                  description: "Base product and feature decisions on quantitative and qualitative user feedback."
                },
                {
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  title: "Risk Reduction",
                  description: "Early validation prevents investment in features or approaches that don't resonate with users."
                },
                {
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  title: "Investor Confidence",
                  description: "Tangible prototypes and user validation data significantly strengthen investor presentations."
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Development Continuity",
                  description: "Seamless transition from prototype to full development, leveraging code and assets created during validation."
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
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-medium mb-6">Is This Right for Your Business?</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                This approach is ideal for:
              </p>
              <ul className="max-w-2xl mx-auto text-left mb-12 grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Startups validating new product concepts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Established companies exploring new offerings or markets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Organizations with limited runway needing to prove concept viability</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-viridian flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Teams facing technical uncertainty or complex user experience challenges</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Book a Discovery Call →
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

export default RapidPrototype; 