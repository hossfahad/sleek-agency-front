import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="overview" className="min-h-screen flex items-center pt-20 px-6 md:px-10 overflow-hidden bg-transparent">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-7">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "200ms" }}
              >
              </span>
              <span 
                className={`block transition-all duration-700 mt-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Rebuilding Ambitious Businesses
              </span>
              <span 
                className={`block text-cambridge-blue transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                for the AI Era
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl max-w-2xl leading-relaxed mt-8 mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              We embed bleeding-edge AI systems and automation into your organization. Slash costs. Unlock scale. Reimagine how your business runs. Every improvement is measurable and tracked.
            </p>
            
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-viridian text-white rounded-md text-base font-medium hover:bg-cambridge-blue transition-colors duration-200"
              >
                Book a Free Strategy Session →
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 h-full">
            <div 
              className={`animation-container transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "700ms" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
