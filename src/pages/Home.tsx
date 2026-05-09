import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Play, Star, Quote, ChevronRight } from 'lucide-react';
import { PACKAGES, TESTIMONIALS } from '../constants';
import { PackageCard, SectionTitle } from '../components/UI';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021',
    title: 'Experience Premium Global Exploration',
    subtitle: 'LUXURY REDEFINED'
  },
  {
    image: 'https://images.unsplash.com/photo-1542810634-1628d08cb52b?auto=format&fit=crop&q=80&w=2070',
    title: 'Spiritual Journeys Crafted with Devotion',
    subtitle: 'HAJJ & UMRAH'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073',
    title: 'Discover the Worlds Most Iconic Shores',
    subtitle: 'ELITE DESTINATIONS'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps'
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {HERO_SLIDES.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 z-0"
              >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="relative z-20 container mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block text-white/80 font-bold tracking-[0.3em] text-sm mb-6 uppercase"
            >
              {HERO_SLIDES[currentSlide].subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/tours" className="px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                Explore Packages <ArrowRight size={20} />
              </Link>
              <Link to="/air-ticket" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center">
                Book My Flights
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                'h-1 transition-all duration-500 rounded-full',
                currentSlide === i ? 'w-12 bg-white' : 'w-4 bg-white/30'
              )}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Destinations', value: '120+' },
              { label: 'Happy Guests', value: '15k+' },
              { label: 'Tour Packages', value: '80+' },
              { label: 'Success Rate', value: '99%' }
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
              >
                <div className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionTitle 
              title="Our Signature Experiences" 
              subtitle="Featured Packages" 
            />
            <Link to="/tours" className="flex items-center gap-2 font-bold text-black group mb-4">
              View All Tours
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ChevronRight size={18} />
              </div>
            </Link>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {PACKAGES.slice(0, 4).map((item) => (
                <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <PackageCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-32 px-6 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative aspect-video">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            alt="Scenic view"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-center items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-full flex items-center justify-center group/btn"
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            >
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl">
                <Play fill="currentColor" size={24} />
              </div>
            </motion.button>
          </div>
          <div className="absolute bottom-12 left-12 text-white max-w-xl">
            <h3 className="text-4xl font-bold mb-4">The World Awaits You</h3>
            <p className="text-white/80 leading-relaxed font-medium">
              Dive into our cinematic tour showcases and experience the magic before you even pack your bags.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Voices of Our Travelers" 
            subtitle="Testimonials" 
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-start"
              >
                <div className="p-3 bg-neutral-50 rounded-xl mb-6 text-black">
                  <Quote size={32} />
                </div>
                <p className="text-xl font-medium text-neutral-700 mb-8 leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} className="w-14 h-14 rounded-full object-cover" alt={t.name} />
                  <div>
                    <h5 className="font-bold text-black">{t.name}</h5>
                    <p className="text-sm text-neutral-400">{t.role}</p>
                    <div className="flex text-yellow-500 mt-1">
                       {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-black rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Background" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Start Your Next Chapter <br /> With Luxury Travels
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/air-ticket" className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={20} />
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
