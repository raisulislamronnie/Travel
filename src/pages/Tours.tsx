import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PACKAGES } from '../constants';
import { PackageCard, SectionTitle } from '../components/UI';
import { Search, Filter, SlidersHorizontal, ArrowRight, X, Clock, MapPin, DollarSign, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { Package } from '../types';

export default function Tours() {
  const [filter, setFilter] = useState<'all' | 'tour' | 'hajj' | 'umrah'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const filteredPackages = PACKAGES.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <SectionTitle 
            subtitle="Explorer's Library" 
            title="Curated Travel Packages" 
          />
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Where to next?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl w-full md:w-80 focus:outline-none focus:border-black/20 focus:bg-white transition-all font-medium"
                />
             </div>
             <div className="flex bg-neutral-100 p-1.5 rounded-2xl gap-1">
                {['all', 'tour', 'hajj', 'umrah'].map((f) => (
                   <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={cn(
                      'px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all capitalize',
                      filter === f ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                    )}
                   >
                     {f}
                   </button>
                ))}
             </div>
          </div>
        </div>

        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <PackageCard 
                  item={item} 
                  onClick={() => setSelectedPackage(item)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
             <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-300">
               <SlidersHorizontal size={40} />
             </div>
             <h3 className="text-2xl font-bold mb-2">No packages found</h3>
             <p className="text-neutral-500">Try adjusting your filters or search query.</p>
             <button 
              onClick={() => {setFilter('all'); setSearchQuery('');}}
              className="mt-6 text-black font-bold underline underline-offset-4"
             >
               Reset Filters
             </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/80 backdrop-blur-sm"
               onClick={() => setSelectedPackage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-5xl h-fit max-h-[90vh] rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 text-black rounded-full flex items-center justify-center backdrop-blur-md transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-auto shrink-0 relative overflow-hidden bg-neutral-100">
                <img 
                  src={selectedPackage.image} 
                  className="w-full h-full object-cover"
                  alt={selectedPackage.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                   <div className="text-white">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 block mb-2">{selectedPackage.category}</span>
                      <h3 className="text-3xl font-bold tracking-tighter leading-tight">{selectedPackage.title}</h3>
                   </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                 <div className="grid grid-cols-3 gap-4 mb-10 pb-8 border-b border-neutral-100">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <Clock size={16} /> 
                        <span className="text-[10px] font-bold uppercase tracking-widest leading-none pt-0.5">Duration</span>
                      </div>
                      <span className="font-bold text-sm tracking-tight">{selectedPackage.duration}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <DollarSign size={16} /> 
                        <span className="text-[10px] font-bold uppercase tracking-widest leading-none pt-0.5">Price</span>
                      </div>
                      <span className="font-bold text-sm tracking-tight">${selectedPackage.price} / pp</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <MapPin size={16} /> 
                        <span className="text-[10px] font-bold uppercase tracking-widest leading-none pt-0.5">Level</span>
                      </div>
                      <span className="font-bold text-sm tracking-tight">Luxury Elite</span>
                    </div>
                 </div>

                 <div className="space-y-8">
                   <div>
                    <h4 className="text-lg font-bold mb-4 tracking-tight uppercase text-xs tracking-[0.2em] text-neutral-400">Package Description</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {selectedPackage.description}
                      Through our curated signature experiences, we focus on local immersion combined with unparalleled luxury. 
                      Every detail of this itinerary has been vetted by our expert travel consultants.
                    </p>
                   </div>

                   <div>
                    <h4 className="text-lg font-bold mb-4 tracking-tight uppercase text-xs tracking-[0.2em] text-neutral-400">Key Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                       {selectedPackage.highlights.map((h, i) => (
                         <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                            <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                               <Check size={12} />
                            </span>
                            {h}
                         </li>
                       ))}
                    </ul>
                   </div>

                   <button className="w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-black/10">
                      Enquire for Full Itinerary <ArrowRight size={20} />
                   </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
