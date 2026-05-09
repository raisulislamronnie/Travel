import { motion } from 'motion/react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Package } from '../types';
import { cn } from '../lib/utils';

interface PackageCardProps {
  item: Package;
  className?: string;
  onClick?: () => void;
}

export function PackageCard({ item, className, onClick }: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        'group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full',
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black border border-white/50">
          ${item.price}
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
           <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold text-white">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-black/70 transition-colors line-clamp-1">
          {item.title}
        </h3>
        <p className="text-neutral-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-medium text-neutral-400">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {item.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              Global Access
            </div>
          </div>

          <button className="w-full py-3 bg-neutral-50 group-hover:bg-black group-hover:text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300">
            Explore Details
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}: { 
  title: string; 
  subtitle: string; 
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl mb-12', center && 'mx-auto text-center')}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          'text-xs font-bold uppercase tracking-[0.2em] mb-4 block',
          light ? 'text-white/60' : 'text-neutral-400'
        )}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          'text-3xl md:text-5xl font-bold tracking-tight',
          light ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
