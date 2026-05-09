import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { PackageCard, SectionTitle } from '../components/UI';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Calendar, Heart } from 'lucide-react';

export default function HajjUmrah() {
  const hajjPackages = PACKAGES.filter(p => p.category === 'hajj');
  const umrahPackages = PACKAGES.filter(p => p.category === 'umrah');

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2070"
            alt="Makkah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 text-white"
          >
            <Sparkles size={32} />
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-4"
          >
            Sacred Journeys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-white/70 text-lg max-w-2xl mx-auto font-medium"
          >
            Experience the divine pilgrimage with unmatched comfort, safety, and spiritual guidance.
          </motion.p>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              subtitle="The Holy Pilgrimage" 
              title="Significance of Hajj & Umrah" 
            />
            <p className="text-neutral-600 mb-8 leading-loose text-lg">
              Hajj is one of the five pillars of Islam, a spiritual obligation for every able Muslim. 
              Umrah, the minor pilgrimage, offers a path for spiritual rejuvenation throughout the year. 
              At Luxury Travels, we believe your focus should remain entirely on your spiritual journey, 
              while we take care of every worldly detail.
            </p>
            <ul className="space-y-4">
              {[
                'Certified Religious Guides',
                'Closest 5-Star Accommodations',
                'Comprehensive Insurance Coverage',
                'Personalized Ziyarah Tours'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-black group">
                  <div className="text-green-600 bg-green-50 p-1 rounded group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1542810634-1628d08cb52b?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl h-64 w-full object-cover" alt="Makkah" />
              <img src="https://images.unsplash.com/photo-1591604021215-3884b1625c77?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl h-80 w-full object-cover" alt="Makkah" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1623869911802-5882650ee474?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl h-80 w-full object-cover" alt="Makkah" />
              <img src="https://images.unsplash.com/photo-1588167056840-13caf6e4562a?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl h-64 w-full object-cover" alt="Makkah" />
            </div>
          </div>
        </div>
      </section>

       {/* Visa Requirements */}
       <section className="py-24 px-6 bg-neutral-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionTitle 
              title="Visa & Documentation" 
              subtitle="The Logistics" 
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: ShieldCheck, title: 'Safe Processing', desc: 'Secure and authorized visa handling for all major nationalities.' },
                { icon: MapPin, title: 'Residence Support', desc: 'Assistance with all local residency and travel documents required.' },
                { icon: Calendar, title: 'Speedy Approval', desc: 'Fast-track processing to ensure your journey starts on schedule.' }
              ].map((req, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl"
                >
                  <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center mb-6">
                    <req.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{req.title}</h4>
                  <p className="text-white/60 leading-relaxed">{req.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Choose Your Sacred Path" 
            subtitle="Curated Packages" 
            center
          />
          
          <div className="mb-20">
             <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-0.5 bg-neutral-200" />
                <h3 className="text-2xl font-bold tracking-tight">Hajj Packages</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hajjPackages.map(p => <div key={p.id}><PackageCard item={p} /></div>)}
             </div>
          </div>

          <div>
             <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-0.5 bg-neutral-200" />
                <h3 className="text-2xl font-bold tracking-tight">Umrah Packages</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {umrahPackages.map(p => <div key={p.id}><PackageCard item={p} /></div>)}
             </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-32 px-6">
         <motion.div 
            whileHover={{ y: -5 }}
            className="max-w-7xl mx-auto bg-green-50 border border-green-100 rounded-[2.5rem] p-12 md:p-20 text-center flex flex-col items-center"
         >
            <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-8">
              <Heart size={40} fill="currentColor" className="opacity-50" />
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tighter">
              Ready for a Spiritual Consultation?
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto mb-10 text-lg">
              Our experts are ready to guide you through selecting the perfect package for your family and spiritual goals.
            </p>
            <Link to="/air-ticket" className="bg-black text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              Book Free Consultation <ArrowRight size={20} />
            </Link>
         </motion.div>
      </section>
    </div>
  );
}
