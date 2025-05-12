
import type { Project, Testimonial, ProjectStatus } from '@/types';

export const placeholderProjects: Project[] = [
  {
    id: '1',
    address: '55 Hillside Ave',
    status: 'SOLD',
    thumbnailUrl: 'https://picsum.photos/seed/hillside/600/400',
    description: 'Beautiful property at 55 Hillside Ave, now sold. This property featured modern designs and spacious living areas.',
    images: [
      'https://picsum.photos/seed/hillside_detail1/1200/800',
      'https://picsum.photos/seed/hillside_detail2/1200/800',
    ],
    category: 'Residential',
  },
  {
    id: '2',
    address: '280 W Mt Pleasant Ave',
    status: 'SOLD',
    thumbnailUrl: 'https://picsum.photos/seed/pleasant/600/400',
    description: 'Charming residence at 280 W Mt Pleasant Ave. Sold to a happy new owner, this home offers comfort and style.',
    images: ['https://picsum.photos/seed/pleasant_detail1/1200/800'],
    category: 'Residential',
  },
  {
    id: '3',
    address: '25 Sterling Drive',
    status: 'SOLD',
    thumbnailUrl: 'https://picsum.photos/seed/sterling/600/400',
    description: 'Located at 25 Sterling Drive, this exquisite house found its new owners. It boasts premium finishes and a prime location.',
    images: [
      'https://picsum.photos/seed/sterling_detail1/1200/800',
      'https://picsum.photos/seed/sterling_detail2/1200/800',
    ],
    category: 'Residential',
  },
  {
    id: '4',
    address: '11 Country Club Road',
    status: 'IN MARKET',
    thumbnailUrl: 'https://picsum.photos/seed/countryclub/600/400',
    description: 'An exceptional opportunity at 11 Country Club Road. Currently in the market, this property is perfect for discerning buyers seeking luxury and exclusivity.',
    images: [
      'https://picsum.photos/seed/countryclub_detail1/1200/800',
      'https://picsum.photos/seed/countryclub_detail2/1200/800',
      'https://picsum.photos/seed/countryclub_detail3/1200/800',
    ],
    category: 'Residential',
  },
  {
    id: '5',
    address: '27 Mounthaven Dr',
    status: 'UNDER CONSTRUCTION',
    thumbnailUrl: 'https://picsum.photos/seed/mounthaven/600/400',
    description: 'Exciting new development at 27 Mounthaven Dr. Currently under construction, this future home will feature contemporary architecture and smart home technology.',
    images: ['https://picsum.photos/seed/mounthaven_detail1/1200/800'],
    category: 'Residential',
  },
  {
    id: '6',
    address: '54 Melrose Dr',
    status: 'SOLD (Under Construction)',
    thumbnailUrl: 'https://picsum.photos/seed/melrose/600/400',
    description: '54 Melrose Dr is sold and currently under construction. The new owners are eagerly awaiting their custom-built dream home.',
    images: [
      'https://picsum.photos/seed/melrose_detail1/1200/800',
      'https://picsum.photos/seed/melrose_detail2/1200/800',
    ],
    category: 'Residential',
  },
  {
    id: '7',
    address: '73 W Cedar St',
    status: 'SOLD (Under Construction)',
    thumbnailUrl: 'https://picsum.photos/seed/cedar/600/400',
    description: 'Another successful sale at 73 W Cedar St, with construction underway. This property promises to be a stunning addition to the neighborhood.',
    images: ['https://picsum.photos/seed/cedar_detail1/1200/800'],
    category: 'Residential',
  },
  {
    id: '8',
    address: '11 Elmwood CT',
    status: 'PLAN REVIEW',
    thumbnailUrl: 'https://picsum.photos/seed/elmwood/600/400',
    description: 'Upcoming project at 11 Elmwood CT, currently in plan review. We are excited about the innovative design and features planned for this property.',
    images: ['https://picsum.photos/seed/elmwood_detail1/1200/800'],
    category: 'Residential',
  },
];

export const placeholderTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: "EstateView transformed our vision into a reality. Their attention to detail and commitment to quality is outstanding. We couldn't be happier with our new headquarters.",
    author: 'Sarah Chen',
    company: 'CEO, Innovatech Solutions',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: '2',
    quote: 'Working with EstateView was a seamless experience. Their professionalism and expertise made the entire construction process smooth and efficient. Our dream home is perfect!',
    author: 'John & Emily Carter',
    company: 'Homeowners',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: '3',
    quote: "The team at EstateView is exceptional. They delivered our project on time and within budget, exceeding all our expectations. Highly recommended for any large-scale development.",
    author: 'David Lee',
    company: 'Director, Urban Developers Inc.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

export const heroCarouselImages = [
  { id: 'hero1', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', alt: 'Luxurious modern home exterior', title: 'Building the Future', subtitle: 'Exquisite Properties, Expertly Crafted' , dataAiHint: 'modern luxury home' },
  { id: 'hero2', src: 'https://unsplash.com/photos/white-and-blue-swimming-pool-Id7u0EkTjBE', alt: 'Elegant modern house facade', title: 'Innovative Design', subtitle: 'Where Vision Meets Precision', dataAiHint: 'modern luxury home' },
  { id: 'hero3', src: 'https://unsplash.com/photos/man-in-white-long-sleeve-shirt-and-blue-denim-jeans-standing-on-white-metal-ladder-sNVkn3507Oo', alt: 'Ongoing construction site with cranes', title: 'Sustainable Solutions', subtitle: 'Constructing a Greener Tomorrow', dataAiHint: 'construction site' },
  { id: 'hero4', src: 'https://unsplash.com/photos/a-group-of-people-in-orange-vests-standing-in-a-warehouse-dfPwxpuj48M', alt: 'Construction workers at a building site', title: 'Dream Homes Delivered', subtitle: 'Quality Craftsmanship, Lasting Value', dataAiHint: 'construction site' },
  { id: 'hero5', src: 'https://unsplash.com/photos/a-white-couch-sitting-in-a-living-room-next-to-a-window-F2FDhn7W4aA', alt: 'Team of builders and engineers at a project site', title: 'Architectural Excellence', subtitle: 'Shaping Skylines, Inspiring Lives', dataAiHint: 'builder team' },
  { id: 'hero6', src: 'https://unsplash.com/photos/a-house-under-construction-with-a-man-on-top-of-it-dcUg77vnBeQ', alt: 'Beautifully finished modern interior room', title: 'Premium Developments', subtitle: 'Your Vision, Our Expertise', dataAiHint: 'interior design' },
];

