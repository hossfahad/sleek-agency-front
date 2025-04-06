
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="overview" className="min-h-screen flex items-center pt-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid md:grid-cols-8 gap-8 md:gap-16 items-center">
          <div className="md:col-span-2">
            <div 
              className={`border border-black/20 rounded-lg overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <img
                src="/public/lovable-uploads/d2b5a9a2-8cfa-4bf6-a30f-dc36268d5d5c.png"
                alt="Project showcase"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="p-3 bg-white/95 text-[10px] md:text-xs">
                <p className="font-medium">Bold living line</p>
                <p className="opacity-70">A cottage studio interior designed for a cottage studio.</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.1] mb-4">
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                shaping the best
              </span>
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                brands and websites of
              </span>
              <span 
                className={`block text-gray-300 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                tomorrow's greatest players.
              </span>
            </h1>
          </div>
        </div>
        
        <div className="mt-24 md:mt-48 lg:mt-64">
          <div className="max-w-2xl">
            <p 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 transition-all duration-700 delay-500"
              className={`text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Bold Creatives is here for the ones who don't just follow trends, they set them. Our services go beyond design, we're talking premium, high-impact branding and web experiences that make your brand unforgettable.
            </p>
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 border border-black/70 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200">
                Work with us
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 text-right">
          <p 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            (Scroll ↓)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
