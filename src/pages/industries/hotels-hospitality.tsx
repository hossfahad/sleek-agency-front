import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import VoiceDemoCard from "@/components/VoiceDemoCard";
import { PhoneIcon, CalendarIcon, ChatBubbleLeftRightIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const HotelsHospitalityIndustry = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-orange-50"
          ref={heroRef}
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-orange-600 transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-orange-600 font-medium">Hotels & Hospitality</span>
            </div>
            <div
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Experience a Real AI Hotel Receptionist
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                Hear how your guests are greeted 24/7 by our AI concierge.
              </p>
              <a
                href="#demo"
                className="inline-block px-8 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:bg-orange-700 transition-colors"
              >
                Experience the AI Concierge →
              </a>
              <div className="text-sm text-gray-500">
                Trusted by top independent hotels & boutique properties.
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-12 px-6 md:px-10 bg-white">
          <VoiceDemoCard
            assistantId="9f6a46f6-ef0f-4ddc-9d21-bd3ccddf52b6"
            title="Try Our AI Receptionist for Hotels"
            description="Experience how your guest calls are answered, bookings handled, and questions resolved — all by voice AI that integrates with Mews and Cloudbeds."
          />
        </section>

        {/* Problem Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-red-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-red-600">Problem: Front Desk Burnout</h2>
              <ul className="list-inside text-lg space-y-2">
                <li><span className="text-red-600 mr-2">🛑</span>Guests can't get through when reception is overwhelmed</li>
                <li><span className="text-red-600 mr-2">💤</span>Missed calls mean missed bookings and lost revenue</li>
                <li><span className="text-red-600 mr-2">💬</span>Staff spends hours on repetitive requests (late check-outs, directions, etc.)</li>
                <li><span className="text-red-600 mr-2">⌛</span>Night shift calls often go unanswered or delayed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-orange-700">Our Solution: Voice AI That Knows Your Property</h2>
              <ul className="list-inside text-lg space-y-2">
                <li><span className="text-orange-700 mr-2">✅</span>Answers guest calls 24/7 with a warm, humanlike voice</li>
                <li><span className="text-orange-700 mr-2">✅</span>Books rooms, cancels, or updates reservations</li>
                <li><span className="text-orange-700 mr-2">✅</span>Handles guest questions like check-in times, parking, and amenities</li>
                <li><span className="text-orange-700 mr-2">✅</span>Escalates complex or VIP calls to your front desk staff</li>
                <li><span className="text-orange-700 mr-2">✅</span>Integrates with Mews, Cloudbeds, or your custom PMS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { icon: <PhoneIcon className="h-6 w-6 text-orange-600" />, text: 'Guest calls in — AI answers with your branding' },
                  { icon: <CalendarIcon className="h-6 w-6 text-orange-600" />, text: 'Booking requests — book, modify, or cancel' },
                  { icon: <UserIcon className="h-6 w-6 text-orange-600" />, text: 'AI takes action — handles reservation or gathers info' },
                  { icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-orange-600" />, text: 'Human escalation (optional) — front desk notified' },
                  { icon: <EnvelopeIcon className="h-6 w-6 text-orange-600" />, text: 'SMS/Email follow-up — confirmation sent to guest' },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {step.icon}
                    <span className="text-lg">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guest Inquiries Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4">Guest Inquiries It Can Handle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['What time is check-in?', 'Do you have late check-out?', 'Can I get a king room instead of two queens?', 'How far are you from the airport?', 'Is the pool open?'].map((q, i) => (
                  <span key={i} className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full">{q}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <p className="text-lg text-gray-700">
              Pricing is based on your hotel’s call volume, always transparent, with premier support from our team at all times.
            </p>
          </div>
        </section>

        {/* Partners & CTA */}
        <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-white to-orange-50" ref={partnersRef}>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}">
            {/* Tech Partners */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Hotel Tech Partners
              </h2>
              <p className="text-lg mb-4">
                We're open to partnerships with PMS platforms, booking engines, and hotel groups.
              </p>
              <a
                href="mailto:partners@enhancedpoints.com"
                className="text-orange-600 font-semibold hover:underline"
              >
                Reach out to partner with Enhanced Points →
              </a>
            </div>
            {/* CTA */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Transform Your Front Desk Today
              </h2>
              <div className="space-y-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:bg-orange-700 transition-colors"
                >
                  Contact Us to Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 hidden md:block">
        <a href="#contact" className="px-5 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default HotelsHospitalityIndustry;
