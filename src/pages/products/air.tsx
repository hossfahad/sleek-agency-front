import React, { useState } from 'react';
import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import VoiceDemoCard from '@/components/VoiceDemoCard';

const featureSteps = [
  {
    key: 'answer',
    img: '/images/Answer-Every-Call.png',
    title: 'Answer Every Call',
    desc: 'Never miss a lead or upset a customer again. AIR answers instantly — day or night.'
  },
  {
    key: 'book',
    img: '/images/Book-Appointments.png', 
    title: 'Book Appointments',
    desc: 'AIR syncs with your calendar to book, reschedule, and cancel appointments in real time.'
  },
  {
    key: 'orders',
    img: '/images/Take Orders.png', 
    title: 'Take Orders (Restaurants & Clinics)',
    desc: 'Let AIR handle intake orders and reduce front-of-house chaos. Fully customizable.'
  },
  {
    key: 'personal',
    img: '/images/Personalized Interactions.png', 
    title: 'Personalized Interactions',
    desc: 'With memory and intent recognition, AIR makes every customer feel known and valued.'
  },
  {
    key: 'multi',
    img: '/images/Multilingual.png', 
    title: 'Multilingual Support',
    desc: 'Serve your customers in their preferred language. AIR speaks like a local.'
  },
  {
    key: 'secure',
    img: '/images/Security.png', 
    title: 'Compliant & Secure',
    desc: 'AIR is built with privacy and compliance in mind. All calls and data are protected.'
  }
];

const AIRPage = () => {
  const [hovered, setHovered] = useState('answer');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Head title="AIR Product – AI Receptionist | Enhanced Points" description="Meet AIR, your always-on AI receptionist. Handles calls, books appointments, takes orders, and delivers a professional customer experience for service businesses." />

        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-transparent">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 text-center md:text-left">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-medium mb-6 text-viridian">
                Your 24/7 Autonomous Receptionist
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-800">
                Introducing <strong>AI</strong>R, your hyper-personalized receptionist agent — picking up every call, booking appointments, and handling customers with a calm, human touch.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#demo" className="px-8 py-3 bg-viridian text-white rounded-lg font-thin text-lg shadow-lg hover:bg-cambridge-blue transition-colors duration-300">Try it</a>
                <a href="#Contact" className="px-8 py-3 bg-cambridge-blue text-white rounded-lg font-thin text-lg shadow-lg hover:bg-viridian transition-colors duration-300">Request Beta Access</a>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              {/* Visual Placeholder */}
              <div className="w-64 h-64 bg-white/10 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl text-viridian font-thin">AI:R</span>
                <span className="text-xl text-viridian font-thin">eceptionist</span>
              </div>
            </div>
          </div>
        </section>

        {/* What AIR Can Do */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-10 text-center text-viridian">What AIR Can Do</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Animated Image Panel */}
              <div className="flex-shrink-0 w-80 h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500 overflow-hidden">
                {featureSteps.find(s => s.key === hovered)?.img ? (
                  <img
                    src={featureSteps.find(s => s.key === hovered)?.img}
                    alt={featureSteps.find(s => s.key === hovered)?.title}
                    className={`w-full h-full object-contain animate-fade-in${hovered === 'personal' ? ' object-fill' : ''}`}
                    style={{ transition: 'transform 0.4s', transform: hovered ? 'scale(1.04)' : 'scale(1)', objectFit: hovered === 'personal' ? 'contain' : 'contain' }}
                  />
                ) : (
                  <span className="text-gray-300 text-3xl">[Image]</span>
                )}
              </div>
              {/* Steps Grid */}
              <div className="grid md:grid-cols-2 gap-8 w-full">
                {featureSteps.map(step => (
                  <div
                    key={step.key}
                    className={`flex flex-col gap-1 cursor-pointer transition-all duration-300 px-0 py-0`}
                    onMouseEnter={() => setHovered(step.key)}
                    onMouseLeave={() => setHovered(hovered)}
                  >
                    <h3 className="font-bold text-lg mb-1 text-viridian">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-12 px-6 md:px-10 bg-white font-thin">
          <VoiceDemoCard
            assistantId="68682619-14e2-4ec1-b4c1-b0b5e667b3a7"
            title="Try Our AI Receptionist Demo"
            description="Experience how AIR answers calls, books appointments, and handles customer requests—all by voice AI."
          />
        </section>

        {/* Why Businesses Choose AIR */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mb-10 text-center text-viridian">Why Businesses Choose AIR</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <ul className="flex-1 space-y-4 text-lg">
                <li>Save up to hours of staffing a month</li>
                <li>Reduce missed calls for good</li>
                <li>Boost CSAT & reviews with instant response</li>
                <li>No training, no hardware — just plug & play</li>
              </ul>
              <div className="flex-1 space-y-4">
                <blockquote className="bg-gray-50 rounded-xl p-6 shadow text-gray-800 italic border-l-4 border-viridian">
                  “I never thought AI could handle customer calls this well. We’re never going back.”
                  <div className="mt-2 font-semibold">— Avi, Bagel Owner,NYC </div>
                </blockquote>
                <blockquote className="bg-gray-50 rounded-xl p-6 shadow text-gray-800 italic border-l-4 border-viridian">
                  “AIR books almost all of our rides now — and integrates directly to our system.”
                  <div className="mt-2 font-semibold">— MD, Limo Executive</div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Specific Use Cases */}
        {/* <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-thin mb-10 text-left text-viridian">Industry-Specific Use Cases</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 mb-4 rounded-full flex items-center justify-center">[Image]</div>
                <h3 className="font-bold text-lg mb-2 text-viridian">Car Services</h3>
                <p className="text-gray-700 text-center">Book rides, manage dispatch, and answer late-night calls with zero stress.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 mb-4 rounded-full flex items-center justify-center">[Image]</div>
                <h3 className="font-bold text-lg mb-2 text-viridian">Restaurants</h3>
                <p className="text-gray-700 text-center">AIR takes orders, sends confirmation texts, and handles busy hours without burnout.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 mb-4 rounded-full flex items-center justify-center">[Image]</div>
                <h3 className="font-bold text-lg mb-2 text-viridian">Clinics</h3>
                <p className="text-gray-700 text-center">Handles appointment requests, prescription refills, and follow-ups, securely.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 mb-4 rounded-full flex items-center justify-center">[Image]</div>
                <h3 className="font-bold text-lg mb-2 text-viridian">Spas & Salons</h3>
                <p className="text-gray-700 text-center">AIR schedules treatments, confirms via SMS, and cuts down no-shows.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Security Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-thin mb-10 text-left text-viridian">Enterprise-Grade Security & Compliance</h2>
            <ul className="space-y-6 text-lg">
              <li><strong>End-to-End Encryption:</strong> All calls and data are protected in transit and at rest using industry best practices.</li>
              <li><strong>PCI Compliance:</strong> Safely handle credit card payments and sensitive information, with monthly log cleansing and audits.</li>
              <li><strong>GDPR & HIPAA Capable:</strong> AIR is built for compliance with global privacy and healthcare standards.</li>
              <li><strong>Audit Trails:</strong> Full visibility into call logs, access, and actions for security and compliance teams.</li>
              <li><strong>Transparency First</strong> View interactions, logs and business interactions through your dashboard. </li>
            </ul>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-r from-viridian to-cambridge-blue text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">Let AIR handle your calls — so you can focus on the business.</h2>

          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default AIRPage;
