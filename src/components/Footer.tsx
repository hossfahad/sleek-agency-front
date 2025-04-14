import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-gray-100 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo.png" 
                alt="Enhanced Points Logo" 
                className="h-12"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              We embed cutting-edge AI systems to slash costs, unlock scale, and reimagine how your business runs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/enhanced-points-ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-viridian hover:bg-viridian hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4 text-gray-900">Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-viridian transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-500 hover:text-viridian transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/measured-performance" className="text-gray-500 hover:text-viridian transition-colors">
                  Savings Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4 text-gray-900">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/healthcare" className="text-gray-500 hover:text-viridian transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/financial-services" className="text-gray-500 hover:text-viridian transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <span className="text-gray-400">
                  eCommerce
                  <span className="ml-2 text-xs text-gray-400">(Coming Soon)</span>
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Construction
                  <span className="ml-2 text-xs text-gray-400">(Coming Soon)</span>
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4 text-gray-900">Contact</h4>
            <a href="mailto:inquire@enhancedpoints.com" className="text-gray-500 hover:text-viridian transition-colors block mb-3">
              inquire@enhancedpoints.com
            </a>
            <p className="text-sm text-gray-500 mb-4">
              Enhanced Points is based in New York, serving clients globally.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm bg-viridian text-white rounded-lg hover:bg-viridian/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {year} Enhanced Points. All rights reserved.
          </div>
          
          <div className="text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-viridian transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link to="/terms" className="hover:text-viridian transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
