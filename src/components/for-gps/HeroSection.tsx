import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SpiralAnimation from "@/components/animations/SpiralAnimation";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize the wave animation
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      // Set canvas dimensions
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || 600;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Animation variables
      let time = 0;
      const waves = 3;
      const waveColors = [
        'rgba(10, 56, 44, 0.05)',
        'rgba(10, 56, 44, 0.03)',
        'rgba(10, 56, 44, 0.02)'
      ];
      
      // Animation function
      const animate = () => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw waves
        for (let i = 0; i < waves; i++) {
          const amplitude = 30 + i * 10;
          const period = 300 + i * 100;
          const phaseShift = time * (0.2 + i * 0.1);
          
          ctx.beginPath();
          ctx.moveTo(0, canvas.height * 0.6);
          
          for (let x = 0; x < canvas.width; x += 10) {
            const y = canvas.height * 0.6 + 
                     amplitude * Math.sin((x / period) * 2 * Math.PI + phaseShift);
            ctx.lineTo(x, y);
          }
          
          // Complete the wave shape by drawing to the bottom and back
          ctx.lineTo(canvas.width, canvas.height);
          ctx.lineTo(0, canvas.height);
          ctx.closePath();
          
          ctx.fillStyle = waveColors[i];
          ctx.fill();
        }
        
        // Draw particles
        const particleCount = 30;
        ctx.fillStyle = 'rgba(10, 56, 44, 0.1)';
        
        for (let i = 0; i < particleCount; i++) {
          const x = (Math.sin(time * 0.05 + i) + 1) * canvas.width / 2;
          const y = (Math.cos(time * 0.05 + i * 2) + 1) * canvas.height / 2;
          const size = 1.5 + Math.sin(time * 0.1 + i) * 0.5;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        time += 0.01;
        animationRef.current = requestAnimationFrame(animate);
      };
      
      // Start animation
      animate();
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="hero-section py-24 relative overflow-hidden bg-gradient-to-br from-[#F8FAF9] to-white">
      {/* Spiral Animation Background */}
      <SpiralAnimation />
      {/* Original wave animation kept as fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ display: 'block', position: 'absolute', top: 0, left: 0, opacity: 0.5 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="md:col-span-7">
            <span 
              className={`inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "100ms" }}
            >
              Multi-Agent Platform for Asset Managers
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#0A382C] mb-6 leading-tight">
              <span 
                className={`block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: "200ms" }}
              >
                The Agentic Outreach Layer for </span>
              <span 
                className={`block font-normal transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: "300ms" }}
              >
                Asset Managers.
              </span>
            </h1>
            
            <p 
              className={`text-xl text-gray-700 mb-8 font-light leading-relaxed max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "400ms" }}
            >
              Our sophisticated multi-agent architecture orchestrates complex workflows across your firm's 
              operations, delivering state-of-the-art outreach plans with the technical depth and precision to strengthen investor trust.
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "500ms" }}
            >
              <Button className="bg-[#0A382C] hover:bg-[#0A382C]/90 text-white px-6 py-6 rounded-lg flex items-center gap-2 text-base">
                Request Early Access <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div 
              className={`trust-indicators grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div>
                <div className="text-2xl font-light text-[#0A382C]">52 Week</div>
                <div className="text-sm text-gray-600">Sales Sequence Framework</div>
              </div>
              <div>
                <div className="text-2xl font-light text-[#0A382C]">10 Year</div>
                <div className="text-sm text-gray-600">Client Context Window</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Empty for balance */}
          <div className="md:col-span-5 h-full">
            <div 
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: "600ms" }}
            >
              {/* Content removed as requested */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Key Value Props */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center p-6 bg-white/40 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-[#0A382C] mb-2">Multi-Agent</div>
            <div className="text-sm text-gray-600 font-light">Orchestrated Intelligence</div>
          </div>
          <div className="text-center p-6 bg-white/40 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-[#0A382C] mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-light">Autonomously or Co-Pilot Operated</div>
          </div>
          <div className="text-center p-6 bg-white/40 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-light text-[#0A382C] mb-2">SOC 2</div>
            <div className="text-sm text-gray-600 font-light">Enterprise Security</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
