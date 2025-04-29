import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { useVoiceDemo } from '@/hooks/useVoiceDemo';

const TransportationIndustry = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { start, stop, active } = useVoiceDemo(
    '4a0b1278-fa3a-41af-a9d2-e87151de2da4',
    '68682619-14e2-4ec1-b4c1-b0b5e667b3a7'
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-green-50" ref={heroRef}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Link to="/industries" className="text-gray-500 hover:text-viridian transition-colors">
                Industries
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-viridian font-medium">Ground Transportation</span>
            </div>
            <div className={`flex flex-col md:flex-row items-center transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>  
              <div className="w-full md:w-1/2">
                <span className="text-xs opacity-60 mb-6 block">[GROUND TRANSPORTATION]</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  AI Receptionist & Dispatcher for Ground Transportation
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  <strong>Answer every call. Dispatch every ride. Without lifting a finger.</strong> <br />
                  Enhanced Points builds custom AI voice receptionists that answer calls, take trip details, send dispatch messages, and integrate directly with your system—like LimoAnywhere or RideBits.
                </p>
                <button
                  onClick={() => (active ? stop() : start())}
                  className="inline-block px-8 py-3 bg-viridian text-white font-medium rounded-lg shadow-lg hover:bg-cambridge-blue transition-colors mt-6"
                >
                  {active ? 'Stop Demo' : 'Try a Live Voice Demo'}
                </button>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <img src="/images/car-service-receptionist.jpg" alt="Car Service Receptionist" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Side-by-Side */}
        <section className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-red-50 p-8 rounded-xl shadow-md transition-all duration-700">
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-red-600">
                Problem: You're losing time & money when…
              </h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li><span className="text-red-600 font-semibold">Missed calls</span> from customers ready to book</li>
                <li><span className="text-red-600 font-semibold">Overwhelmed dispatchers</span> multitasking</li>
                <li><span className="text-red-600 font-semibold">Manual data entry</span> into LimoAnywhere or RideBits</li>
                <li><span className="text-red-600 font-semibold">Uncertain customers</span> wondering “Is my car confirmed?”</li>
              </ul>
            </div>
            {/* Solution */}
            <div className="bg-green-50 p-8 rounded-xl shadow-md transition-all duration-700">
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-green-700">
                Our Solution: A Voice AI Built <em>Just</em> for You
              </h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li><span className="text-green-700 font-semibold">24/7 call answering</span> in a natural, human voice</li>
                <li><span className="text-green-700 font-semibold">Automated ride details</span> (name, time, pickup, dropoff, passengers)</li>
                <li><span className="text-green-700 font-semibold">Dispatcher notifications</span> for approval or handoff</li>
                <li><span className="text-green-700 font-semibold">Seamless integration</span> with your limo software (LimoAnywhere or RideBits)</li>
                <li><span className="text-green-700 font-semibold">Instant confirmations</span> via SMS or email</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-700 delay-150">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                How It Works (Step-by-Step)
              </h2>
              <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-decimal list-inside text-lg">
                <li>Customer Calls — AI answers with a warm, professional greeting</li>
                <li>Gathers Ride Info — Pickup/dropoff, date/time, name, etc.</li>
                <li>Human Approval — AI sends summary to dispatcher before confirming</li>
                <li>Dispatch Action — Once approved, AI logs into LimoAnywhere/RideBits or sends dispatch message</li>
                <li>Driver Gets Notified — Via SMS or email</li>
                <li>Customer Confirmation — AI sends ride confirmation with full details</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-white to-green-50 border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-700 delay-200">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Integrated With
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-lg">
                <li><strong>LimoAnywhere</strong> – real-time dispatch & customer records</li>
                <li><strong>RideBits</strong> – modern fleet management with webhook-friendly support</li>
                <li>Optional: connect with <strong>Twilio, Mailgun, or Slack</strong> for alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance & Privacy Section */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-700 delay-250">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Compliance & Privacy
              </h2>
              <div className="mb-2 text-lg">
                <em>We do not store call recordings or sensitive PII.</em> <br />
                Your AI receptionist operates under strict security guidelines and optional HIPAA-grade handling (upon request).
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-[900px] mx-auto text-center transition-all duration-700 delay-350">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Ready to Answer Every Call?</h2>
            <p className="mb-8 text-lg">Schedule a free strategy call to see how Enhanced Points can automate your bookings and dispatch—no obligation, just insights.</p>
            <a href="#contact" className="inline-block px-8 py-3 bg-viridian text-white font-medium rounded-lg shadow-lg hover:bg-cambridge-blue transition-colors">Book My Free Strategy Call</a>
          </div>
        </section>

      </main>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default TransportationIndustry;
