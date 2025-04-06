
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Brand Strategy",
    description: "We craft a unique brand narrative that sets your business apart in a crowded marketplace."
  },
  {
    title: "Visual Identity",
    description: "We create distinct visual identities that communicate your brand's essence at a glance."
  },
  {
    title: "Web Development",
    description: "We build premium web experiences with clean code and cutting-edge technologies."
  },
  {
    title: "Digital Experience",
    description: "We design intuitive digital experiences that engage and convert your audience."
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-[#f9f9f9]" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-8 gap-8 md:gap-16 items-start">
          <div className="md:col-span-3 sticky top-24">
            <span className="text-xs opacity-60 mb-6 block">[02]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              What we do.
              <span className="block mt-2 text-sm font-normal opacity-60">• Erase the average, embrace the bold.</span>
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              From concept to execution, we deliver end-to-end solutions that transform businesses into brands people can't stop talking about.
            </p>
            
            <a 
              href="#contact" 
              className={`inline-block underline font-medium hover:opacity-70 transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              See our process →
            </a>
          </div>
          
          <div className="md:col-span-5">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 border-t border-black/10 pt-6 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <h3 className="text-xl md:text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
