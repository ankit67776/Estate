export type ProjectStatus =
  | 'SOLD'
  | 'IN MARKET'
  | 'UNDER CONSTRUCTION'
  | 'SOLD (Under Construction)'
  | 'PLAN REVIEW';

export interface Project {
  id: string;
  address: string; // Changed from name
  status: ProjectStatus;
  thumbnailUrl: string;
  description?: string; // Optional, for modal
  images?: string[]; // Optional, for modal
  category?: string; // Optional, for modal, not on card
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}
