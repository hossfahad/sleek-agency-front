import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import MetricsCards from "@/components/MetricsCards";

const MeasuredPerformance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [calculatorRef, calculatorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Update document title and meta description
  useEffect(() => {
    document.title = "Savings Calculator | Sleek Agency";
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate the potential ROI and savings from implementing our AI solutions for your business.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Calculate the potential ROI and savings from implementing our AI solutions for your business.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50" ref={ref}>
          <div className="max-w-[1600px] mx-auto">
            <div className={`max-w-3xl transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-6 block">[SAVINGS CALCULATOR]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Calculate Your Business Savings
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Our AI solutions deliver measurable outcomes and quantifiable ROI.
                See how much your business can save with Enhanced Points.
              </p>
            </div>

            <div 
              className={`mt-12 transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <MetricsCards />
            </div>
          </div>
        </section>

        {/* Calculator Section (Placeholder for future implementation) */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={calculatorRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${
              calculatorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="text-xs opacity-60 mb-2 block">[COMING SOON]</span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                ROI Calculator
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Estimate the potential impact of our solutions on your business with our interactive
                ROI calculator. Coming soon.
              </p>
            </div>
            
            <div className={`bg-gray-100 rounded-xl p-12 flex items-center justify-center h-[400px] transition-all duration-700 delay-100 ${
              calculatorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="text-center">
                <p className="text-2xl font-medium text-viridian mb-4">Calculator Coming Soon</p>
                <p className="text-gray-600 max-w-md mx-auto">
                  Our team is developing an interactive calculator to help you estimate the ROI of implementing our AI solutions.
                </p>
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

export default MeasuredPerformance; 