import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { useVoiceDemo } from '@/hooks/useVoiceDemo';

const HotelsIndustry = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { start, stop, active } = useVoiceDemo(
    '4a0b1278-ef0f-4ddc-9d21-bd3ccddf52b6',
    '9f6a46f6-ef0f-4ddc-9d21-bd3ccddf52b6'
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-green-50"
          ref={heroRef}
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Hotels & Hospitality</span>
            </div>
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Hear It In Action
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Let your future guests hear how your property can sound — calm, helpful, always available.
              </p>
              <a
                href="#demo"
                className="inline-block px-8 py-3 bg-viridian text-white font-medium rounded-lg shadow-lg hover:bg-cambridge-blue transition-colors"
              >
                Try the AI Concierge Now →
              </a>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <button
              onClick={() => (active ? stop() : start())}
              className="w-full max-w-xs py-3 px-6 rounded-full bg-viridian text-white font-medium shadow hover:bg-cambridge-blue transition-colors"
            >
              {active ? 'Stop Demo' : 'Try the AI Concierge Now →'}
            </button>
          </div>
        </section>

        {/* Partners & CTA */}
        <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-white to-green-50" ref={partnersRef}>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}">
            {/* Tech Partners */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Hotel Tech Partners
              </h2>
              <p className="text-lg mb-4">
                We're open to partnerships with PMS platforms, booking engines, and hotel groups.
              </p>
              <a
                href="mailto:partners@enhancedpoints.com"
                className="text-viridian font-semibold hover:underline"
              >
                Reach out to partner with Enhanced Points →
              </a>
            </div>
            {/* CTA */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Ready to Modernize Your Front Desk?
              </h2>
              <div className="space-y-4">
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-viridian text-white font-medium rounded-lg shadow hover:bg-cambridge-blue transition-colors"
                >
                  Start Your Free Trial
                </a>
                <a href="#contact" className="inline-block text-viridian font-medium hover:underline">
                  Book a Strategy Call with Us
                </a>
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

export default HotelsIndustry;
