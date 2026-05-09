import { Package, Testimonial, BlogPost } from './types';

export const PACKAGES: Package[] = [
  {
    id: '1',
    title: 'Swiss Alps Expedition',
    description: 'Experience the breathtaking beauty of the Swiss Alps with our curated trekking and luxury stay package.',
    price: 2499,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070',
    category: 'tour',
    highlights: ['Zermatt Trekking', 'Luxury Chalet Stay', 'Panoramic Train Journey']
  },
  {
    id: '2',
    title: 'Santorini Sunset Escape',
    description: 'A romantic getaway to the island of Santorini, featuring private villa stays and sunset cruises.',
    price: 1899,
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=2042',
    category: 'tour',
    highlights: ['Oia Sunset Dinner', 'Private Pool Villa', 'Caldera Cruise']
  },
  {
    id: 'h-1',
    title: 'Premium Hajj Gold Package',
    description: 'Our most sought-after Hajj package featuring 5-star hotel stays in Makkah and Madinah.',
    price: 8500,
    duration: '21 Days',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2070',
    category: 'hajj',
    highlights: ['Clock Tower Stay', 'Executive Services', 'Guided Rituals']
  },
  {
    id: 'u-1',
    title: 'Standard Umrah Experience',
    description: 'A balanced Umrah package designed for comfort and spiritual focus.',
    price: 1200,
    duration: '14 Days',
    image: 'https://images.unsplash.com/photo-1542810634-1628d08cb52b?auto=format&fit=crop&q=80&w=2070',
    category: 'umrah',
    highlights: ['Walking Distance Hotels', 'Visa Assistance', 'Ziyarah Tours']
  },
  {
    id: '3',
    title: 'Kyoto Cultural Trail',
    description: 'Immerse yourself in the ancient traditions and serene temples of Kyoto, Japan.',
    price: 2100,
    duration: '6 Days',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2070',
    category: 'tour',
    highlights: ['Tea Ceremony', 'Bamboo Grove Walk', 'Gion District Tour']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    content: 'The Swiss Alps trip was transformational. Every detail was handled with such care. Truly a luxury experience!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974'
  },
  {
    id: '2',
    name: 'Ahmed Al-Fayed',
    role: 'Hajj Pilgrim',
    content: 'My Hajj journey with LuxuryTravels was seamless. The proximity to the Haram made everything so much easier.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Hidden Gems in Switzerland',
    excerpt: 'Beyond the popular spots, discover the tucked-away villages and lakes...',
    date: 'Oct 24, 2023',
    image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=2070',
    author: 'Elena Vance'
  },
  {
    id: '2',
    title: 'Spiritual Preparation for Umrah',
    excerpt: 'How to mentally and spiritually prepare for your upcoming journey...',
    date: 'Nov 12, 2023',
    image: 'https://images.unsplash.com/photo-1591604021215-3884b1625c77?auto=format&fit=crop&q=80&w=2070',
    author: 'Ibrahim Khalil'
  }
];
