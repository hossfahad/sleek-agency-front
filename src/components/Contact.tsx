import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast({
        title: "Discovery call requested!",
        description: "Our team will contact you shortly to schedule your free discovery call.",
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-mint-cream to-azure-web" ref={ref}>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <span className="text-xs text-viridian opacity-80 mb-6 block">[Contact]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-8 transition-all duration-700 text-viridian ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Transform Your Business Today
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 text-cambridge-blue ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Schedule your free discovery call to discuss how our AI-driven solutions can deliver clear business outcomes for your SMB.
            </p>
            
            <div className={`mb-8 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h3 className="font-medium mb-4 text-viridian">Our Engagement Model</h3>
              <ol className="space-y-4 ml-6 list-decimal">
                <li className="pl-2">
                  <span className="font-medium text-viridian">Discovery Call:</span>
                  <span className="block text-cambridge-blue text-sm">Clarify your key business outcomes.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium text-viridian">Tailored AI Solutions:</span>
                  <span className="block text-cambridge-blue text-sm">Choose targeted AI solutions that directly align with your growth or efficiency objectives.</span>
                </li>
                <li className="pl-2">
                  <span className="font-medium text-viridian">Continuous Optimization:</span>
                  <span className="block text-cambridge-blue text-sm">Deploy and continually refine your AI capabilities to ensure sustained performance and measurable success.</span>
                </li>
              </ol>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h3 className="font-medium mb-2 text-viridian">Contact Us</h3>
              <div className="flex flex-col space-y-2">
                <a href="mailto:hello@enhancedpoints.ai" className="text-cambridge-blue hover:text-viridian">inquire@enhancedpoints.com</a>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-sm text-cambridge-blue hover:text-viridian transition-colors">LinkedIn</a>
                  <a href="#" className="text-sm text-cambridge-blue hover:text-viridian transition-colors">Instagram</a>
                  <a href="#" className="text-sm text-cambridge-blue hover:text-viridian transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-mint-green">
              <h3 className="text-xl font-medium mb-6 text-viridian">Start Your Discovery Call Now</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-cambridge-blue">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-mint-green rounded-md focus:outline-none focus:ring-2 focus:ring-cambridge-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-cambridge-blue">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-mint-green rounded-md focus:outline-none focus:ring-2 focus:ring-cambridge-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-cambridge-blue">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-mint-green rounded-md focus:outline-none focus:ring-2 focus:ring-cambridge-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-cambridge-blue">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-mint-green rounded-md focus:outline-none focus:ring-2 focus:ring-cambridge-blue"
                    placeholder="Tell us about your business needs..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-viridian text-white rounded-md hover:bg-cambridge-blue transition-colors w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>Contact Enhanced Points →</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
