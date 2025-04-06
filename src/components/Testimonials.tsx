
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-10 bg-[#f9f9f9]" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="text-xs opacity-60 mb-6 block">[04]</span>
          <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            Bold Roast
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div 
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-8">
              "Bold Creatives took our brand from forgettable to unforgettable in less than three months. The ROI on our rebrand has been absolutely incredible."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-600">CEO, Elevate Studios</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-8">
              "Our website traffic increased by 300% within the first month after launching our new site designed by Bold Creatives. Their attention to detail is unmatched."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-gray-600">Founder, Lumina Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
