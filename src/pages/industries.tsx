import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Medical & Healthcare",
    description: "Streamline patient interactions, follow-ups, and medical record management with AI assistants and automated workflows that maintain HIPAA compliance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    link: "/industries/healthcare"
  },
  {
    title: "Financial Services",
    description: "Support large-scale data servicing, client interactions, document processing, and regulatory compliance with intelligent automation systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: "/industries/financial-services"
  },
  {
    title: "eCommerce Markets",
    description: "Enhance customer engagement, automate inventory management, and deliver hyper-personalized shopping experiences that drive conversion and loyalty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "Recruitment & Staffing",
    description: "Streamline candidate screening, automate interview scheduling, and enhance talent matching with AI-powered workflows that save time and improve placements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "Estimators & Construction",
    description: "Detect, optimize, and label project spaces, improve internal communication, and analyze drawings with AI tools designed for the construction industry.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "#"
  },
  {
    title: "Fitness & Wellness",
    description: "Automate member check-ins, class scheduling, and create personalized programs that enhance client experience and operational efficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    link: "#"
  }
];

const Industries = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [industriesRef, industriesInView] = useInView({
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
              <span className="text-xs opacity-60 mb-6 block">[INDUSTRIES]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Industries We Transform
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                We support growth and efficiency across diverse sectors through targeted AI solutions 
                that address industry-specific challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]" ref={industriesRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {industry.link === "#" ? (
                    <div className="bg-white rounded-lg p-6 md:p-8 h-full border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="mb-4 md:mb-6">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{industry.title}</h3>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      <p className="text-sm text-gray-400 italic">Detailed page coming soon</p>
                    </div>
                  ) : (
                    <Link to={industry.link} className="block h-full">
                      <div className="bg-white rounded-lg p-6 md:p-8 h-full border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <div className="mb-4 md:mb-6">
                          {industry.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{industry.title}</h3>
                        <p className="text-gray-600 mb-4">{industry.description}</p>
                        <span className="text-viridian font-medium inline-flex items-center">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className={`mt-16 text-center transition-all duration-700 delay-300 ${
              industriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Request a Solution for Your Industry →
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

export default Industries; 