import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { calculateSavings } from "../lib/utils";
import { Card, CardContent } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import { Input } from "../components/ui/input";

const MeasuredPerformance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [calculatorRef, calculatorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Update document title and meta description
  useEffect(() => {
    document.title = "Savings Calculator | Sleek Agency";
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate the potential ROI and savings from implementing our AI solutions for your business.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Calculate the potential ROI and savings from implementing our AI solutions for your business.';
      document.head.appendChild(meta);
    }
  }, []);

  const [employees, setEmployees] = useState(35);
  const [hourlyWage, setHourlyWage] = useState(30);
  const [tasksPerDay, setTasksPerDay] = useState(8);
  const [totalTimePerDay, setTotalTimePerDay] = useState(60);

  // Updated calculation using shared utility (with employees factored in)
  const { hoursSaved, monthlySavings, workdaysSaved } = calculateSavings(employees, tasksPerDay, totalTimePerDay, hourlyWage);

  // --- INPUT HANDLERS THAT ENFORCE INTEGER, NO LEADING ZEROS ---
  const handleEmployeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^0+/, ''); // Remove ALL leading zeros
    if (val === "") val = "0";
    setEmployees(parseInt(val.replace(/\D/g, ""), 10) || 0);
  };
  const handleHourlyWageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^0+/, '');
    if (val === "") val = "0";
    setHourlyWage(parseInt(val.replace(/\D/g, ""), 10) || 0);
  };
  const handleTasksPerDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/^0+/, '');
    if (val === "") val = "0";
    setTasksPerDay(parseInt(val.replace(/\D/g, ""), 10) || 0);
  };
  const handleTotalTimePerDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove leading zeros and handle empty input
    const rawValue = e.target.value.replace(/^0+/, '');
    const finalValue = rawValue === '' ? '0' : rawValue;
    
    // Update both state and input value
    e.target.value = finalValue;
    setTotalTimePerDay(parseInt(finalValue, 10) || 0);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50" ref={ref}>
        <div className="max-w-[1600px] mx-auto">
          <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>        
            <span className="text-xs opacity-60 mb-6 block">[SAVINGS CALCULATOR]</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Calculate Your Business Savings
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Our AI solutions deliver measurable outcomes and quantifiable ROI. See how much your business can save with Enhanced Points.
            </p>
          </div>
        </div>
      </section>
      {/* Calculator Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white" ref={calculatorRef}>
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12 transition-all duration-700">
            <span className="text-xs opacity-60 mb-2 block">[SAVINGS CALCULATOR]</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              See How Much You Can Save
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Estimate the potential impact of our solutions on your business with our interactive ROI calculator.
            </p>
          </div>

          {/* Calculator Bento Grid */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Enhanced Points Title */}
            <div className="text-center md:text-left mb-8">
              <h3 className="text-3xl md:text-4xl font-medium mb-6 text-[#0F3D3E]">Potential Savings Calculator</h3>
            </div>

            {/* Bento Grid Container */}
            <div className="bg-[#0F3D3E] rounded-2xl p-6 md:p-10 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Input Cards */}
                <div className="flex flex-col gap-6 order-1">
                  {/* Employees Slider Card */}
                  <div className="bg-[#0F3D3E]/80 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/10 transform transition-all duration-500 hover:shadow-xl animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="flex flex-col gap-4">
                      <label className="text-xl font-medium text-white">
                        How many employees?
                      </label>
                      <p className="text-sm text-gray-300 -mt-2 mb-2">
                        This is the number of people, be it in the team or business unit, who are responsible for the task.
                      </p>
                      <div className="relative pt-6 pb-2">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white/90 text-[#0F3D3E] font-bold rounded-lg px-3 py-1 text-lg min-w-[3rem] text-center">
                          {employees}
                        </div>
                        <Slider
                          min={1}
                          max={500}
                          step={1}
                          value={[employees]}
                          onValueChange={([val]) => setEmployees(val)}
                          className="mt-4"
                        />
                        <div className="flex justify-between w-full text-xs text-gray-300 mt-2">
                          <span>1</span>
                          <span>500</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">Just a guess is fine.</p>
                    </div>
                  </div>

                  {/* Task Inputs Card */}
                  <div className="bg-[#0F3D3E]/80 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/10 transform transition-all duration-500 hover:shadow-xl animate-fadeIn" style={{animationDelay: '0.2s'}}>
                    <div className="flex flex-col gap-5">
                      <div>
                        <label className="text-xl font-medium text-white mb-3 block">
                          How many repetitive tasks per day?
                        </label>
                        <p className="text-sm text-gray-300 -mt-2 mb-3">
                          Count the routine tasks your team does every day - like email engagements, extracting forms and entering data, or answering questions.
                        </p>
                        <Input 
                          type="number" 
                          inputMode="numeric" 
                          pattern="[0-9]*" 
                          min={0} 
                          step={1} 
                          value={tasksPerDay} 
                          onChange={handleTasksPerDayChange} 
                          className="text-black font-sans bg-white/90 rounded-lg border-0 shadow-inner transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:bg-white" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-xl font-medium text-white mb-3 block">
                          Minutes per employee per day
                        </label>
                        <p className="text-sm text-gray-300 -mt-2 mb-3">
                          Average time each employee spends on tasks that could be automated (per day)
                        </p>
                        <Input 
                          type="number" 
                          inputMode="numeric" 
                          pattern="[0-9]*" 
                          min={0} 
                          step={1} 
                          value={totalTimePerDay} 
                          onChange={handleTotalTimePerDayChange} 
                          className="text-black font-sans bg-white/90 rounded-lg border-0 shadow-inner transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:bg-white" 
                        />
                      </div>
                      
                      <div>
                        <label className="text-xl font-medium text-white mb-3 block">
                          Average hourly wage? 
                        </label>
                        <p className="text-sm text-gray-300 -mt-2 mb-3">
                          Estimate the average hourly cost of employees performing these tasks.
                        </p>
                        <Input 
                          type="number" 
                          inputMode="numeric" 
                          pattern="[0-9]*" 
                          min={0} 
                          step={1} 
                          value={hourlyWage} 
                          onChange={handleHourlyWageChange} 
                          placeholder="30"
                          className="text-black font-sans bg-white/90 rounded-lg border-0 shadow-inner transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:bg-white" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Output Cards */}
                <div className="flex flex-col gap-6 order-2 lg:order-2">
                  {/* Results with Enhanced Points Card */}
                  <div className="bg-gradient-to-br from-green-600 to-teal-700 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/10 transform transition-all duration-500 hover:shadow-xl animate-fadeIn" style={{animationDelay: '0.3s'}}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-medium text-white">With Enhanced Points</h3>
                      <div className="text-4xl font-bold text-white mt-2">
                        ${monthlySavings.toLocaleString(undefined, {maximumFractionDigits: 0})} <span className="text-2xl text-white/70">saved monthly</span>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-white/80">Hours saved each month:</p>
                        <p className="text-3xl font-bold text-green-200">{hoursSaved.toLocaleString(undefined, {maximumFractionDigits: 0})} hours</p>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-white/80">Equivalent to:</p>
                        <p className="text-3xl font-bold text-green-200">{workdaysSaved.toLocaleString(undefined, {maximumFractionDigits: 1})} workdays</p>
                      </div>
                      
                      <div className="mt-2 bg-white/10 p-3 rounded-lg">
                        <p className="text-white/90 text-sm">
                          That's {(workdaysSaved / employees).toFixed(1)} days per employee that can be redirected to higher-value work
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results without Enhanced Points Card */}
                  <div className="bg-gradient-to-br from-red-700 to-red-900 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/10 transform transition-all duration-500 hover:shadow-xl animate-fadeIn" style={{animationDelay: '0.4s'}}>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-medium text-white">Without Enhanced Points</h3>
                      <div className="text-4xl font-bold text-white/80 mt-2">
                        $0 <span className="text-2xl text-white/60">saved</span>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-white/80">Time wasted each month:</p>
                        <p className="text-3xl font-bold text-red-200">{hoursSaved.toLocaleString(undefined, {maximumFractionDigits: 0})} hours</p>
                      </div>
                      
                      <div className="mt-2 bg-white/10 p-3 rounded-lg">
                        <p className="text-white/90 text-sm">
                          Each employee is spending {(hoursSaved / employees).toFixed(1)} hours/month on tasks that could be automated
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Strong CTA at the bottom */}
              <div className="mt-10 flex justify-center">
                <a 
                  href="#contact"
                  className="bg-white text-[#0F3D3E] rounded-full px-8 py-3 shadow-md font-bold text-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 hover:shadow-lg transform inline-block" 
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  Schedule a Free Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
            opacity: 0;
          }
          /* Glass box styles */
          .glass-box {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            padding: 1.5rem;
            position: relative;
            z-index: 1;
          }
          /* Modern slider styles */
          .modern-slider [data-orientation=horizontal] {
            height: 8px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
          }
          .modern-slider [role=slider] {
            width: 22px;
            height: 22px;
            background: linear-gradient(135deg, #FFFFFF, #B7F4C2);
            border: none;
            box-shadow: 0 0 10px rgba(183, 244, 194, 0.5);
            transition: all 0.2s ease;
          }
          .modern-slider [role=slider]:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(183, 244, 194, 0.7);
          }
          .modern-slider [data-orientation=horizontal] > div {
            background: rgba(183, 244, 194, 0.3);
            height: 100%;
          }
          /* Modern input styles */
          .modern-input {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            transition: all 0.2s ease;
          }
          .modern-input:focus {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(183, 244, 194, 0.5);
            box-shadow: 0 0 15px rgba(183, 244, 194, 0.3);
            outline: none;
          }
          .modern-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        `
      }} />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default MeasuredPerformance;