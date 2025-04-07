const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-mint-green bg-transparent">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Enhanced Points Logo" className="h-14" />
            </div>
          </div>
          
          <div className="text-sm text-viridian">
            &copy; {year} Enhanced Points. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-mint-green grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-medium mb-4 text-viridian">Contact</h4>
            <a href="mailto:inquire@enhancedpoints.com" className="text-cambridge-blue hover:text-viridian">inquire@enhancedpoints.com</a>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-viridian">Social</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/enhanced-points-ai/" className="text-sm text-cambridge-blue hover:text-viridian transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-viridian">Our Team Comes From</h4>
            <p className="text-sm text-cambridge-blue">Perplexity, S&P Global, Northwell Health, MSKCC, and more.</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-viridian">About Us</h4>
            <p className="text-sm text-cambridge-blue">We're more than just a tech company—we care about your results. Founded by experienced professionals who understand the challenges of running local to large enterprise businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
