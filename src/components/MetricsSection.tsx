import React from "react";
import { useInView } from "react-intersection-observer";
import MetricsCards from "./MetricsCards";

const MetricsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 text-center" ref={ref}>
          <span className="text-xs opacity-60 mb-2 block">[MEASURED PERFORMANCE]</span>
          <h2 
            className={`text-3xl md:text-4xl font-medium mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Clear, Measurable Outcomes
          </h2>
          <p 
            className={`max-w-2xl mx-auto text-gray-600 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Every Enhanced Points implementation comes with transparent tracking and measurement.
            We help you quantify the impact on your business across multiple dimensions.
          </p>
        </div>
        
        <div 
          className={`transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <MetricsCards />
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 