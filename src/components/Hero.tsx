import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-7">
            <span 
              className={`inline-block py-2 px-4 bg-viridian/10 text-viridian rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              AI-Powered Business Transformation
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="animation-container"></div>
              </span>
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Rebuilding Ambitious Businesses
              </span>
              <span 
                className={`block text-viridian transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                for the AI Era
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl max-w-2xl leading-relaxed mt-8 mb-10 text-gray-600 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              We embed cutting-edge AI systems and automation into your organization to slash costs, unlock scale, and reimagine how your business runs.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-viridian text-white rounded-lg hover:bg-viridian/90 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="../measured-performance" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Simulate Savings
              </a>
            </div>
            
            {/* <div 
              className={`mt-12 flex items-center gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <p className="text-sm text-gray-500">Trusted by innovative companies:</p>
              <div className="flex gap-6">
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div> */}
          </div>
          
          <div className="md:col-span-5 h-full">
            <div 
              className={`animation-container h-[400px] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "800ms" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

