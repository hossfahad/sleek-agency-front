
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-black/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="bg-black text-white text-xs rounded-3xl px-3 py-2 font-semibold">
              Bold <span className="text-[#aaa]">♦</span> Creatives
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            &copy; {year} Bold Creatives. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
