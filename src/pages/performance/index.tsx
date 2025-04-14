import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MetricsCards from "@/components/MetricsCards";

const Performance = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [metricsRef, metricsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 transition-opacity duration-1000 ease-in-out ${
            heroInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Measured Performance
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              We're transparent about tracking and measuring. Every campaign and solution we deliver is 
              built with clear metrics to ensure measurable business impact and ROI.
            </p>
          </div>
        </section>

        {/* Metrics Section */}
        <section 
          ref={metricsRef}
          className={`py-20 px-4 md:px-6 lg:px-8 bg-white transition-all duration-1000 ease-in-out ${
            metricsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Measurable Business Impact
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mb-12">
              Our AI solutions are designed to deliver tangible results that directly impact your bottom line.
              We track key performance indicators tailored to your specific business objectives.
            </p>
            
            <MetricsCards />
            
            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Calculator</h3>
              <p className="text-gray-700 mb-6">
                Estimate the potential return on investment for implementing our AI solutions.
              </p>
              {/* ROI Calculator will be implemented here */}
              <div className="p-6 bg-gray-100 rounded border border-gray-200 text-center">
                <p className="text-gray-500">ROI Calculator coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className={`py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white transition-all duration-1000 ease-in-out ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to measure your AI success?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a consultation to discuss how we can help you implement measurable AI solutions.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
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

export default Performance; 