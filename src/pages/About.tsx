import { motion } from 'motion/react';
import { SectionTitle } from '../components/UI';
import { BLOG_POSTS } from '../constants';
import { Instagram, Send, Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GALLERY = [
  'https://images.unsplash.com/photo-1542810634-1628d08cb52b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800'
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <SectionTitle 
              subtitle="Our Narrative" 
              title="Redefining Modern Exploration Since 2012" 
            />
            <p className="text-xl text-neutral-500 leading-relaxed">
              At Luxury Travels, we don't just book trips. We curate legacies. 
              Our mission is to bridges cultures and spirits through meticulously designed experiences.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-10">
               <div>
                  <h4 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Our Vision</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">To become the world's most trusted concierge for cultural and spiritual exploration.</p>
               </div>
               <div>
                  <h4 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Our Mission</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">To provide seamless, dignified, and transformative travel with unwavering attention to detail.</p>
               </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-neutral-50 rounded-[3rem] -z-10 group-hover:-inset-6 transition-all duration-700" />
             <img 
               src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
               className="rounded-[2.5rem] shadow-2xl h-[500px] w-full object-cover" 
               alt="About Us" 
             />
             <div className="absolute top-10 -right-8 bg-black text-white p-6 rounded-3xl shadow-xl animate-bounce-slow">
                <Globe size={40} />
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
             center
             subtitle="Moments Captured" 
             title="The Fine Art of Traveling" 
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-square overflow-hidden rounded-[2rem] group"
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Gallery" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionTitle 
            subtitle="The Journal" 
            title="Insights & Inspirations" 
          />
          <button className="text-black font-bold flex items-center gap-2 group mb-4 underline-offset-8 underline">
            Explore All Posts <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, i) => (
             <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 group"
             >
                <div className="w-full md:w-48 h-48 rounded-[2rem] overflow-hidden shrink-0">
                   <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                </div>
                <div className="flex flex-col justify-center">
                   <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">{post.date}</span>
                   <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-neutral-600 transition-colors">{post.title}</h3>
                   <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                   <Link to="#" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article <ChevronRight size={16} />
                   </Link>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-neutral-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-10">
               <SectionTitle 
                 subtitle="Get in Touch" 
                 title="Let's Start Planning" 
               />
               <p className="text-neutral-500 font-medium">Ready to embark on your next world-class journey?</p>
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-50 text-black rounded-2xl flex items-center justify-center shrink-0">
                        <Mail size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 block">General Enquiries</span>
                        <p className="font-bold">hello@luxurytravels.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-50 text-black rounded-2xl flex items-center justify-center shrink-0">
                        <Phone size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 block">Phone Support</span>
                        <p className="font-bold">+1 (800) LUX-TRAVELS</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-50 text-black rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 block">Global HQ</span>
                        <p className="font-bold">5th Avenue, NYC, USA</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-2 bg-neutral-50 p-10 md:p-16 rounded-[2.5rem]">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Your Identity</label>
                     <input type="text" placeholder="Full Name" className="w-full bg-white px-6 py-4 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Electronic Address</label>
                     <input type="email" placeholder="Email" className="w-full bg-white px-6 py-4 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/10 transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Your Vision</label>
                     <textarea rows={5} placeholder="Tell us about the dream journey you have in mind..." className="w-full bg-white px-6 py-4 rounded-2xl border border-neutral-100 focus:outline-none focus:border-black/10 transition-all resize-none"></textarea>
                  </div>
                  <button className="md:col-span-2 py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                    Send My Request <Send size={20} />
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* Map Fake Integration */}
      <section className="h-[400px] w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 relative">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" className="w-full h-full object-cover" alt="Map placeholder" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white font-bold tracking-tighter text-2xl shadow-2xl">
                OUR PRESENCE IS GLOBAL
             </div>
          </div>
      </section>
    </div>
  );
}
