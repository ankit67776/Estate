export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  thumbnailUrl: string;
  images: string[];
  location: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}
