import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <section id="results" className="py-24 md:py-32 px-6 md:px-10 bg-azure-web" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="text-xs text-gray-950 opacity-80 mb-6 block">[04]</span>
          <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] transition-all duration-700 text-gray-950 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            Real Results from Real Businesses
          </h2>
          <p className={`max-w-lg text-lg mt-6 transition-all duration-700 delay-100 text-emerald-800 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            Success stories from businesses like yours
          </p>
        </div>
        
        <div className="flex justify-center">
          <div 
            className={`transition-all duration-700 delay-100 bg-white p-8 rounded-lg shadow-sm border border-mint-green max-w-3xl ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex mb-6">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-tight mb-8 text-viridian">
              "The automated appointment calls reduced manual follow-ups from our staff by 3 hours everyday. The efficiency is well worth the cost."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-mint-green flex items-center justify-center mr-4">
                <span className="text-viridian font-medium">ZH</span>
              </div>
              <div>
                <p className="font-medium text-viridian">Zarin</p>
                <p className="text-sm text-emerald-800">Management, Rideline</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-mint-green">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-mint-green flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-viridian">3 hours saved</span> <span className="text-cambridge-blue">daily on client follow-ups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
