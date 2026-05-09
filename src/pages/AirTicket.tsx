import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Send, CheckCircle, Users, Calendar, MapPin, Phone, User } from 'lucide-react';
import { SectionTitle } from '../components/UI';
import { cn } from '@/src/lib/utils';

export default function AirTicket() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    departure: '',
    return: '',
    passengers: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div className="space-y-12">
          <SectionTitle 
            subtitle="Flight Enquiry" 
            title="Luxury Skies Await You" 
          />
          <p className="text-neutral-500 text-lg leading-relaxed max-w-lg">
            Whether it's a first-class business trip or a luxury family vacation, 
            our advisors will find the most efficient routes and premium carriers for your journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Global Coverage', desc: 'Flights to over 200 countries with major airlines.' },
              { title: 'Priority Support', desc: '24/7 dedicated travel concierge for your flight needs.' },
              { title: 'Exclusive Deals', desc: 'Access to unpublished corporate and luxury fares.' },
              { title: 'Group Bookings', desc: 'Specialized arrangements for spiritual and corporate groups.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <h4 className="font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-video">
             <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Plane" />
             <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
             <div className="absolute bottom-8 left-8 text-white">
                <div className="flex gap-2 mb-2">
                   {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-8 bg-white opacity-40 rounded-full" />)}
                </div>
                <h3 className="text-2xl font-bold tracking-tighter">Premium Carriers Only</h3>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-neutral-100 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">Book an Enquiry</h3>
                    <p className="text-sm text-neutral-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                      placeholder="+1 (555) 000-0000"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                    <MapPin size={14} /> Destination
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                    placeholder="e.g. Zurich, Switzerland"
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <Calendar size={14} /> Departure Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 placeholder:text-neutral-300 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                      onChange={(e) => setFormData({...formData, departure: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <Calendar size={14} /> Return Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                      onChange={(e) => setFormData({...formData, return: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                    <Users size={14} /> Passengers
                  </label>
                  <select
                    className="w-full px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-100 appearance-none focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                    onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4+">4+ Passengers</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors group mt-4 shadow-lg shadow-black/10"
                >
                  Send My Enquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tighter">Enquiry Received!</h3>
                <p className="text-neutral-500 leading-relaxed mb-10 max-w-xs">
                  Thank you, <strong>{formData.name}</strong>. Our travel advisor will reach out to you at <strong>{formData.phone}</strong> shortly to finalize your flight details.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-10 py-4 border-2 border-black rounded-2xl font-bold hover:bg-black hover:text-white transition-all"
                >
                  Make Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
