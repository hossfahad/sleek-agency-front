import React from "react";
import { useInView } from "react-intersection-observer";

const Introduction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="introduction" className="py-16 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Left Column - Main Content */}
          <div>
            <span className="text-xs opacity-60 mb-6 block">[INTRODUCTION]</span>
            <h2 
              className={`text-3xl md:text-4xl font-medium mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Strategic AI Implementation for Real Business Results
            </h2>
            
            <div 
              className={`space-y-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <p className="text-lg leading-relaxed">
              Enhanced Points powers ambitious businesses with targeted AI solutions that accelerate growth and streamline operations.</p>
              
              <p className="text-lg leading-relaxed">
              From market validation to workflow automation, we build tailored AI strategies designed for measurable impact.</p>

              <p className="text-lg leading-relaxed">
              Maximize opportunities, minimize risks, and stay ahead—partner with Enhanced Points for results-driven innovation.          </p>
              </div>
          </div>
          
          {/* Right Column - Glass Card */}
          <div 
            className={`glass-card p-8 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-xl font-medium mb-6 text-gray-800">Our Expertise</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-viridian/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-5 w-5 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Rapid Prototyping</h4>
                  <p className="text-gray-600 text-sm">Quickly build and test solutions to validate ideas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-viridian/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-5 w-5 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Voice AI Integration</h4>
                  <p className="text-gray-600 text-sm">Human-like conversational AI to interact wtih your customers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Multi Agent Integrations</h4>
                  <p className="text-gray-600 text-sm">Analysis of your business workflows to embed end to end automation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.5c-2.968 0-5.701 1.086-7.787 2.881m15.01 0A11.955 11.955 0 0120.5 12c0 1.289-.213 2.536-.618 3.686m-9.05 7.814c2.242 0 4.328-.725 6.019-1.95m-9.05 0c-1.535 0-2.957-.464-4.118-1.256" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Marketing Automation</h4>
                  <p className="text-gray-600 text-sm">Campaign automation strategy, from inception to go-to-market. </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-viridian/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-5 w-5 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Custom AI Development</h4>
                  <p className="text-gray-600 text-sm">Bespoke solutions tailored to your unique challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 