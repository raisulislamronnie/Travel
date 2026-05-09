export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'tour' | 'hajj' | 'umrah';
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}
