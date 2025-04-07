import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="how-we-help" className="py-24 md:py-32 px-6 md:px-10 bg-[#f9f9f9]" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-8 gap-8 md:gap-16 items-start">
          <div className="md:col-span-3 md:sticky top-24 static">
            <span className="text-xs opacity-60 mb-6 block">[02]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Our Outcomes-First Approach.
              <span className="block mt-4 text-sm font-normal opacity-60">• Clear value proposition</span>
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Enhanced Points delivers AI-native business systems designed for clear outcomes.
              We help businesses grow faster, operate leaner, and stay protected — by building intelligent automation that works across your entire business.
            </p>
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              We combine an Offense & Defense philosophy:
            </p>
            
            <a 
              href="#contact" 
              className={`inline-block underline font-medium hover:opacity-70 transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Start a discovery call →
            </a>
          </div>
          
          <div className="md:col-span-5">
            <div className="grid md:grid-cols-1 gap-8 md:gap-12">
              {/* Offense Section */}
              <div 
                className={`transition-all duration-700 border-t border-black/10 pt-8 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium">Offense: Driving Growth</h3>
                </div>
                <p className="text-gray-700 mb-6 pl-14">Enhanced Points proactively helps you:</p>
                
                <div className="grid md:grid-cols-3 gap-6 pl-14">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-medium text-lg mb-2">Win New Clients</h4>
                    <p className="text-sm text-gray-600">Capture and convert leads efficiently through hyper-personalized interactions.</p>
                  </div>
                  
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-medium text-lg mb-2">Scale Revenue</h4>
                    <p className="text-sm text-gray-600">Grow systematically with automated client servicing, intelligent outreach, and continuous engagement.</p>
                  </div>
                  
                  <div className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-medium text-lg mb-2">Surpass Others</h4>
                    <p className="text-sm text-gray-600">Lead your market with insightful, innovative market intelligence that aligns with your vision.</p>
                  </div>
                </div>
              </div>
              
              {/* Defense Section */}
              <div 
                className={`transition-all duration-700 border-t border-black/10 pt-8 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium">Defense: Optimizing Operations</h3>
                </div>
                <p className="text-gray-700 mb-6 pl-14">Enhanced Points effectively secures your operational foundation by:</p>
                
                <div className="grid md:grid-cols-2 gap-6 pl-14">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-lg mb-2">Saving Valuable Time</h4>
                    <p className="text-sm text-gray-600">Reduce manual intervention, follow-ups, and data entry, freeing your staff to focus on only the core operations.</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-lg mb-2">Reducing Operational Risk</h4>
                    <p className="text-sm text-gray-600">Minimizing costly errors and compliance risks through intelligent monitoring, consistent and predictable workflows, all within your regulatory guardrails.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
