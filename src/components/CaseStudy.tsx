import React from "react";
import { useInView } from "react-intersection-observer";

const CaseStudy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="case-study" className="py-24 md:py-32 px-6 md:px-10 bg-[#f9f9f9]" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how our solutions have helped businesses achieve their goals.
          </p>
        </div>
        
        {/* Placeholder for case study content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Case Study Coming Soon</h3>
            <p className="text-gray-600">Detailed case studies will be available soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy; 