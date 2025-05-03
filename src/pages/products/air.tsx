import React from 'react';
import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { useInView } from 'react-intersection-observer';
import { useVoiceDemo } from '@/hooks/useVoiceDemo';

const featureSteps = [
  {
    key: 'answer',
    title: 'Answers Instantly',
    desc: 'AIR never misses a call, responding in real time with natural language.'
  },
  {
    key: 'book',
    title: 'Books Appointments',
    desc: 'Seamlessly schedules, reschedules, and manages your calendar.'
  },
  {
    key: 'orders',
    title: 'Takes Orders',
    desc: 'Handles intake for restaurants, clinics, and more—no wait times.'
  },
  {
    key: 'personal',
    title: 'Personalized Interactions',
    desc: 'Remembers callers, understands context, and adapts for every customer.'
  },
  {
    key: 'multi',
    title: 'Multilingual',
    desc: 'Speaks in your customer’s preferred language, instantly.'
  },
  {
    key: 'secure',
    title: 'Compliant & Secure',
    desc: 'Built for privacy, compliance, and peace of mind.'
  }
];

const SectionFadeIn: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  );
};

const AIRPage = () => {
  const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY as string;
  const { start } = useVoiceDemo(publicKey, 'dbb5dc71-8c84-4f52-aae6-6ffe31792344');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f9f7] via-[#f0fbf7] to-[#b7e5e1] flex flex-col" style={{ fontFamily: "'Inter', 'Open Sans', sans-serif" }}>
      <Navbar />
      <Head title="AIR Agent – AI Receptionist | Enhanced Points" description="Meet AIR, your always-on AI receptionist agent. Handles calls, books appointments, takes orders, and delivers a professional customer experience for service businesses." />
      <main className="flex-grow">
        {/* HERO SECTION */}
        <SectionFadeIn>
          <div className="relative overflow-hidden pt-32 pb-24 px-6 md:px-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-gradient-to-br from-viridian/40 to-cambridge-blue/10 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-cambridge-blue/30 to-viridian/0 rounded-full blur-2xl opacity-60 animate-float" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 text-center md:text-left">
              {/* Hero Video - left side */}
              <div className="flex-shrink-0 w-full md:w-[480px] lg:w-[540px] xl:w-[600px]">
                <video
                  src="/videos/hero%20AIR.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[300px] md:h-[360px] lg:h-[420px] object-cover rounded-3xl"
                  style={{ background: '#e6f4f1' }}
                />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start mt-10 md:mt-0">
                <h1 className="text-[2.8rem] md:text-[5rem] leading-[1.05] tracking-tight font-thin text-viridian drop-shadow animate-fade-in-up">
                  Meet <span className="bg-gradient-to-r from-viridian via-cambridge-blue to-viridian bg-clip-text text-transparent">AI:R</span>
                </h1>
                <p className="mt-6 text-2xl md:text-3xl text-gray-700 font-thin max-w-3xl animate-fade-in-up delay-100">
                  Your autonomous, always-on AI receptionist. Every call, every time—handled with calm, clarity, and a human touch.
                </p>
                <div className="flex items-center mt-8 animate-fade-in-up delay-200 space-x-4">
                  <a
                    href="#contact"
                    className="px-6 py-2 rounded-2xl bg-gradient-to-r from-viridian to-cambridge-blue text-white text-lg font-thin shadow-xl hover:scale-105 transition-transform duration-300"
                  >
                    Schedule a Call
                  </a>
                  <button
                    onClick={start}
                    className="px-6 py-2 rounded-2xl bg-white/80 text-lg text-viridian font-thin shadow hover:scale-105 transition-transform duration-300"
                  >
                    Try out AIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionFadeIn>

        {/* WHAT AIR CAN DO SECTION */}
        <SectionFadeIn>
          <section className="relative py-20 px-6 md:px-10">
            <h2 className="text-[2.5rem] md:text-[4rem] font-thin text-center text-viridian mb-14 tracking-tight animate-fade-in-up">
              What AIR Can Do
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
              {/* Bento grid with open, asymmetric spaces */}
              <div className="md:col-span-3 bg-white/60 rounded-3xl p-10 shadow-xl flex flex-col gap-4 animate-fade-in-up hover:scale-[1.02] transition-transform duration-500" style={{ gridRow: 'span 2 / span 2' }}>
                <span className="text-4xl md:text-5xl text-viridian font-thin">{featureSteps[0].title}</span>
                <span className="text-xl md:text-2xl text-gray-700 font-thin">{featureSteps[0].desc}</span>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-cambridge-blue/30 to-mint-cream/80 rounded-3xl p-8 flex flex-col gap-3 animate-fade-in-up delay-100 hover:scale-[1.03] transition-transform duration-500">
                <span className="text-3xl md:text-4xl text-viridian font-thin">{featureSteps[1].title}</span>
                <span className="text-lg md:text-xl text-gray-700 font-thin">{featureSteps[1].desc}</span>
              </div>
              <div className="md:col-span-1 bg-white/70 rounded-3xl p-6 flex flex-col gap-2 animate-fade-in-up delay-200 hover:scale-[1.04] transition-transform duration-500">
                <span className="text-2xl md:text-3xl text-viridian font-thin">{featureSteps[2].title}</span>
                <span className="text-base md:text-lg text-gray-700 font-thin">{featureSteps[2].desc}</span>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-viridian/30 to-cambridge-blue/20 rounded-3xl p-8 mt-10 flex flex-col gap-3 animate-fade-in-up delay-300 hover:scale-[1.03] transition-transform duration-500">
                <span className="text-3xl md:text-4xl text-viridian font-thin">{featureSteps[3].title}</span>
                <span className="text-lg md:text-xl text-gray-700 font-thin">{featureSteps[3].desc}</span>
              </div>
              <div className="md:col-span-2 bg-white/60 rounded-3xl p-8 mt-20 flex flex-col gap-3 animate-fade-in-up delay-400 hover:scale-[1.02] transition-transform duration-500">
                <span className="text-3xl md:text-4xl text-viridian font-thin">{featureSteps[4].title}</span>
                <span className="text-lg md:text-xl text-gray-700 font-thin">{featureSteps[4].desc}</span>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-cambridge-blue/30 to-mint-cream/80 rounded-3xl p-8 flex flex-col gap-3 animate-fade-in-up delay-500 hover:scale-[1.03] transition-transform duration-500">
                <span className="text-3xl md:text-4xl text-viridian font-thin">{featureSteps[5].title}</span>
                <span className="text-lg md:text-xl text-gray-700 font-thin">{featureSteps[5].desc}</span>
              </div>
            </div>
          </section>
        </SectionFadeIn>

        {/* Animated Offset Divider - matches homepage hero animation */}
        <div className="relative flex justify-end">
          <div 
            className={`animation-container h-[400px] transition-all duration-700 opacity-100 translate-y-0`} 
            style={{ transitionDelay: "800ms", width: '100%', maxWidth: 600 }}
            aria-hidden="true"
          ></div>
        </div>

        {/* SECURITY SECTION */}
        <SectionFadeIn>
          <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-mint-cream via-white to-cambridge-blue/30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Security Content */}
              <div>
                <h2 className="text-[2.5rem] md:text-[4rem] font-thin text-viridian mb-10 tracking-tight animate-fade-in-up">Enterprise-Grade Security & Compliance</h2>
                <ul className="space-y-6 text-lg">
                  <li><span className="text-viridian">End-to-End Encryption:</span> All calls and data are protected in transit and at rest using industry best practices.</li>
                  <li><span className="text-viridian">PCI Compliance:</span> Safely handle credit card payments and sensitive information, with monthly log cleansing and audits.</li>
                  <li><span className="text-viridian">GDPR & HIPAA Capable:</span> AIR is built for compliance with global privacy and healthcare standards.</li>
                  <li><span className="text-viridian">Audit Trails:</span> Full visibility into call logs, access, and actions for security and compliance teams.</li>
                  <li><span className="text-viridian">Transparency First:</span> View interactions, logs and business interactions through your dashboard. </li>
                </ul>
              </div>
              {/* Under the Hood Card - right aligned, creative style */}
              <div className="relative flex flex-col items-end">
                <div className="group bg-gradient-to-br from-viridian/90 to-cambridge-blue/80 rounded-3xl p-8 md:p-10 w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cambridge-blue/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#B7E5E1"/><path d="M12 26v-2c0-2.21 3.582-4 8-4s8 1.79 8 4v2" stroke="#228B8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="17" r="4" stroke="#228B8C" strokeWidth="2"/></svg>
                    <span className="text-2xl md:text-3xl font-thin text-white tracking-tight" style={{ fontFamily: 'Inter, Open Sans, sans-serif' }}>Under the Hood</span>
                  </div>
                  <p className="text-lg md:text-xl text-white/90 font-thin mb-6">Curious about how AIR works behind the scenes? Dive into our technical deep-dive for a look at the architecture, AI, and security powering AIR.</p>
                  <a
                    href="https://medium.com/@fahad-hossain/calls-conversions-philosophy-behind-air-an-autonomous-front-desk-agent-df299e6ed5aa?sk=f4de04bc04f0c0c3ea241cbbf6c41fd2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl text-white font-medium shadow hover:scale-105 transition-transform duration-300"
                  >
                    Read the full breakdown on Medium
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SectionFadeIn>

        {/* FINAL CTA SECTION */}
        <SectionFadeIn>
          <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-viridian to-cambridge-blue text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-[2.5rem] md:text-[4rem] font-thin mb-8 tracking-tight animate-fade-in-up">Let AIR handle your calls — so you can focus on the business.</h2>
            </div>
          </section>
        </SectionFadeIn>

        {/* CONTACT SECTION */}
        <SectionFadeIn>
          <Contact />
        </SectionFadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default AIRPage;
