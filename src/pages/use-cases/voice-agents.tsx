import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const VoiceAgents = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contentRef, contentInView] = useInView({
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
                Never Miss Another Appointment
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                How AI voice agents are transforming appointment management with automated scheduling, confirmations, and reminders that sound remarkably human.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Hear a Sample Call →
              </a>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={contentRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className={`transition-all duration-700 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">The Challenge</h2>
                <p className="text-lg leading-relaxed mb-6">
                  For service businesses that rely on scheduled appointments, no-shows and last-minute cancellations represent significant revenue loss and operational inefficiency. Manual confirmation calls are time-consuming for staff, often inconsistent, and impossible to scale during busy periods.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A mid-sized healthcare provider was struggling with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>22% appointment no-show rate</li>
                  <li>15+ hours of staff time weekly spent on confirmation calls</li>
                  <li>Inability to reach all patients due to time constraints</li>
                  <li>Inconsistent messaging and follow-up processes</li>
                </ul>
              </div>

              <div className={`transition-all duration-700 delay-200 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">The Solution</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We implemented a comprehensive AI voice agent solution using Elevenlabs and Retell AI technologies to automate the entire appointment management process:
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Automated Confirmation Calls</h3>
                    <p>AI voice agents call patients 48 hours before appointments with natural, conversational confirmations that sound remarkably human.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Smart Rescheduling</h3>
                    <p>When patients need to reschedule, the AI handles the entire process, checking availability and confirming new times without human intervention.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Intelligent Reminders</h3>
                    <p>The system sends voice or text reminders based on patient preferences, with escalation protocols for high-priority appointments.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-xl mb-2">Seamless Integration</h3>
                    <p>The solution integrates directly with the practice management system, automatically updating appointment status and notes in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Implementation Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="relative pb-12 md:pb-0">
                <div className="md:border-t-2 md:border-gray-300 absolute md:top-8 md:left-1/2 md:right-0 h-full md:h-0"></div>
                <div className="flex flex-col md:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium">1</div>
                  <h3 className="text-xl font-medium mt-4 md:text-center">Conversation Design</h3>
                  <p className="text-gray-600 mt-2 md:text-center">We designed natural conversation flows for confirmations, cancellations, and rescheduling scenarios.</p>
                </div>
              </div>
              
              <div className="relative pb-12 md:pb-0">
                <div className="md:border-t-2 md:border-gray-300 absolute md:top-8 md:left-0 md:right-0 h-full md:h-0"></div>
                <div className="flex flex-col md:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium">2</div>
                  <h3 className="text-xl font-medium mt-4 md:text-center">Voice Customization</h3>
                  <p className="text-gray-600 mt-2 md:text-center">We selected and customized a voice that aligned with the practice's brand.</p>
                </div>
              </div>
              
              <div className="relative pb-12 md:pb-0">
                <div className="md:border-t-2 md:border-gray-300 absolute md:top-8 md:left-0 md:right-0 h-full md:h-0"></div>
                <div className="flex flex-col md:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium">3</div>
                  <h3 className="text-xl font-medium mt-4 md:text-center">System Integration</h3>
                  <p className="text-gray-600 mt-2 md:text-center">We connected the voice agent system with the practice's scheduling software.</p>
                </div>
              </div>
              
              <div className="relative pb-12 md:pb-0">
                <div className="md:border-t-2 md:border-gray-300 absolute md:top-8 md:left-0 md:right-0 h-full md:h-0"></div>
                <div className="flex flex-col md:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium">4</div>
                  <h3 className="text-xl font-medium mt-4 md:text-center">Testing & Refinement</h3>
                  <p className="text-gray-600 mt-2 md:text-center">We conducted extensive testing, refining conversation flows and handling of edge cases.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:border-t-2 md:border-gray-300 absolute md:top-8 md:left-0 md:right-1/2 h-full md:h-0"></div>
                <div className="flex flex-col md:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-viridian text-white flex items-center justify-center text-xl font-medium">5</div>
                  <h3 className="text-xl font-medium mt-4 md:text-center">Full Deployment</h3>
                  <p className="text-gray-600 mt-2 md:text-center">We rolled out the system across all appointment types with monitoring and improvement processes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={resultsRef}>
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">The Results</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              After three months of implementation, the healthcare provider experienced:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "100ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">42%</h3>
                <p className="text-xl font-medium mb-4">Reduction in No-Shows</p>
                <p className="text-gray-600">The consistent, timely confirmation process dramatically reduced missed appointments.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "200ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">78%</h3>
                <p className="text-xl font-medium mb-4">Automation Rate</p>
                <p className="text-gray-600">78% of all appointment confirmations were successfully handled by AI voice agents without human intervention.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "300ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">30+</h3>
                <p className="text-xl font-medium mb-4">Hours Saved Weekly</p>
                <p className="text-gray-600">Staff time previously spent on manual calls was redirected to higher-value patient care activities.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "400ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">96%</h3>
                <p className="text-xl font-medium mb-4">Patient Satisfaction</p>
                <p className="text-gray-600">Patient surveys indicated high satisfaction with the clear, convenient confirmation process.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "500ms" }}>
                <h3 className="text-4xl font-bold text-viridian mb-2">$127K</h3>
                <p className="text-xl font-medium mb-4">Annual Revenue Impact</p>
                <p className="text-gray-600">The combination of reduced no-shows and staff efficiency created significant financial benefits.</p>
              </div>
              
              <div className={`bg-white p-8 rounded-lg shadow-md flex items-center justify-center transition-all duration-700 ${
                resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "600ms" }}>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
                >
                  Get Similar Results →
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
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "100ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Natural Conversation Flow</h3>
                  <p className="text-gray-600">Multi-turn conversations that understand context and handle patient questions naturally.</p>
                </div>
              </div>
              
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "200ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Appointment Management Integration</h3>
                  <p className="text-gray-600">Direct connection to scheduling systems for real-time availability and updates.</p>
                </div>
              </div>
              
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "300ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Personalization</h3>
                  <p className="text-gray-600">Customized interactions based on appointment type, patient history, and communication preferences.</p>
                </div>
              </div>
              
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "400ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Escalation Protocols</h3>
                  <p className="text-gray-600">Intelligent handoff to staff for complex situations or when requested by patients.</p>
                </div>
              </div>
              
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "500ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Multilingual Support</h3>
                  <p className="text-gray-600">Ability to conduct conversations in the patient's preferred language.</p>
                </div>
              </div>
              
              <div className={`transition-all duration-700 ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} style={{ transitionDelay: "600ms" }}>
                <div className="h-full">
                  <div className="bg-viridian/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Comprehensive Analytics</h3>
                  <p className="text-gray-600">Detailed reporting on confirmation rates, common reschedule reasons, and conversation patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Schedule a Demo →
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

export default VoiceAgents; 