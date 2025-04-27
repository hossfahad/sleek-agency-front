import React from 'react';
import { Trans } from '@lingui/macro';
import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

const AIRPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className="min-h-screen bg-white flex flex-col"> 
      <Navbar />
      <main className="flex-grow">
        <Head
          title="AIR – AI Receptionist for SMBs | Enhanced Points"
          description="Meet AIR, the AI receptionist designed for small and midsize businesses. Save time, reduce costs, and never miss a lead with 24/7 voice automation."
        />
        <section className="py-24 md:py-32 px-6 md:px-10 bg-transparent">
          <div ref={heroRef} className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 text-center md:text-left transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-medium mb-6 glassmorphism text-viridian">
                AIR – Your AI Receptionist
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-800">
                <Trans>Meet <em>AIR</em>, Enhanced Points’ AI Receptionist. She’s not just a voice — she’s the front line of your business. Available 24/7, AIR answers calls, books appointments, handles FAQs, and delivers a professional first impression every single time.</Trans>
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-viridian text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-cambridge-blue transition-colors duration-300"
              >
                <Trans>Schedule a Demo</Trans>
              </a>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-64 h-64 bg-white/10 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl text-viridian font-bold">AIR</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-10 text-center text-viridian">
              <Trans>How Our AI Receptionist Works</Trans>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism flex flex-col items-center">
                <div className="text-2xl font-bold text-viridian mb-2">1</div>
                <div className="font-medium mb-2"><Trans>Caller rings your number</Trans></div>
                <div className="text-gray-700 text-sm"><Trans>Your business stays open 24/7.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism flex flex-col items-center">
                <div className="text-2xl font-bold text-viridian mb-2">2</div>
                <div className="font-medium mb-2"><Trans>AIR picks up with your business name</Trans></div>
                <div className="text-gray-700 text-sm"><Trans>Professional, branded greeting every time.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism flex flex-col items-center">
                <div className="text-2xl font-bold text-viridian mb-2">3</div>
                <div className="font-medium mb-2"><Trans>Converses naturally, answers questions, books appointments</Trans></div>
                <div className="text-gray-700 text-sm"><Trans>Real conversations, not scripts.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism flex flex-col items-center">
                <div className="text-2xl font-bold text-viridian mb-2">4</div>
                <div className="font-medium mb-2"><Trans>Forwards only the right calls to your real staff</Trans></div>
                <div className="text-gray-700 text-sm"><Trans>Your team handles only what matters.</Trans></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-10 text-center text-viridian">
              <Trans>Key Features</Trans>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism">
                <div className="font-bold text-lg mb-2 text-viridian"><Trans>Handles Inbound Calls</Trans></div>
                <div className="text-gray-700 mb-2"><Trans>Fluent, natural conversations — no awkward robots.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism">
                <div className="font-bold text-lg mb-2 text-viridian"><Trans>Schedules Appointments</Trans></div>
                <div className="text-gray-700 mb-2"><Trans>Syncs directly with your calendar system.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism">
                <div className="font-bold text-lg mb-2 text-viridian"><Trans>Speaks Multiple Languages</Trans></div>
                <div className="text-gray-700 mb-2"><Trans>Supports 50+ languages to serve diverse communities.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism">
                <div className="font-bold text-lg mb-2 text-viridian"><Trans>Secure & Compliant</Trans></div>
                <div className="text-gray-700 mb-2"><Trans>HIPAA-ready. Audit trails. Full control.</Trans></div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 shadow glassmorphism">
                <div className="font-bold text-lg mb-2 text-viridian"><Trans>Integrates Seamlessly</Trans></div>
                <div className="text-gray-700 mb-2"><Trans>Works with your existing business systems.</Trans></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-10 text-center text-viridian">
              <Trans>Ideal For</Trans>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
              <li className="bg-white/10 rounded-xl p-6 glassmorphism text-center text-gray-900"><Trans>Medical Clinics</Trans></li>
              <li className="bg-white/10 rounded-xl p-6 glassmorphism text-center text-gray-900"><Trans>Legal Offices</Trans></li>
              <li className="bg-white/10 rounded-xl p-6 glassmorphism text-center text-gray-900"><Trans>Transportation Services</Trans></li>
              <li className="bg-white/10 rounded-xl p-6 glassmorphism text-center text-gray-900"><Trans>Salons and Spas</Trans></li>
              <li className="bg-white/10 rounded-xl p-6 glassmorphism text-center text-gray-900"><Trans>Small Business Front Desks</Trans></li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-r from-viridian to-cambridge-blue text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg mb-6 text-gray-800">
              <Trans>Want to see AIR in action?</Trans>
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-viridian text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-cambridge-blue transition-colors duration-300"
            >
              <Trans>Schedule a demo today</Trans>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIRPage;
