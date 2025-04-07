import { useInView } from "react-intersection-observer";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-10 bg-transparent" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-8 gap-8 md:gap-16 items-start">
          <div className="md:col-span-3 sticky top-24">
            <span className="text-xs text-viridian opacity-80 mb-6 block">[05]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-8 transition-all duration-700 text-gray-950 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Flexible & Transparent Commitment
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 text-emerald-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <strong className="text-emerald-900">Enhanced Points</strong> provides clear, predictable, and SMB-friendly commitments designed to fit your business needs.
            </p>

            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-200 text-emerald-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              We operate on a simple, flat-rate basis over agreed-upon timeframes. Our model includes continuous management and optimization of AI solutions as a hassle-free service (SaaS), without unexpected fees or hidden charges.
            </p>
            
            <div 
              className={`transition-all duration-700 delay-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-viridian text-white rounded-md text-base font-medium hover:bg-cambridge-blue transition-colors duration-200"
              >
                Request Your Personalized Proposal →
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="space-y-12">
              <div 
                className={`transition-all duration-700 delay-400 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <h3 className="text-2xl font-medium mb-6 text-emerald-800">What you can expect:</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 mt-1">
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 rounded-full bg-mint-green flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2 text-emerald-800">Customized Terms</h4>
                      <p className="text-cambridge-blue">We understand you're here to improve your business. Our plans are tailored specifically around your unique business objectives and timelines.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 rounded-full bg-mint-green flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2 text-emerald-800">Continuous Optimization</h4>
                      <p className="text-cambridge-blue">We can support ongoing efforts to maintain or keep updates across your business.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-700 delay-500 bg-gradient-to-br from-emerald-500 to-emerald-900 rounded-lg p-8 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-mint-green flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-viridian" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-white">Measurable Outcomes, Guaranteed</h3>
                </div>
                <p className="text-lg ml-14 mb-4 text-white">
                  We stand by our solutions. If you don't see measurable business improvements as promised, we offer a <strong className="text-green-100">money-back guarantee</strong>—no questions asked.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-700 delay-600 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <h3 className="text-2xl font-medium mb-4 text-viridian">Inquire for free.</h3>
                <p className="text-lg mb-6 text-cambridge-blue">
                  Let's discuss your needs and provide a tailored proposal built specifically around your business' objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 