import type { Project, Testimonial } from '@/types';

export const placeholderProjects: Project[] = [
  {
    id: '1',
    name: 'Modern Villa Heights',
    shortDescription: 'Luxurious villas with panoramic city views and modern amenities.',
    description: 'Modern Villa Heights offers an unparalleled living experience with spacious interiors, state-of-the-art facilities, and breathtaking panoramic views of the cityscape. Each villa is designed with meticulous attention to detail, ensuring both comfort and elegance.',
    thumbnailUrl: 'https://picsum.photos/seed/villa/600/400',
    images: [
      'https://picsum.photos/seed/villa_detail1/1200/800',
      'https://picsum.photos/seed/villa_detail2/1200/800',
      'https://picsum.photos/seed/villa_detail3/1200/800',
    ],
    location: 'Prestige City, West District',
    status: 'Completed',
    category: 'Residential',
  },
  {
    id: '2',
    name: 'Urban Office Complex',
    shortDescription: 'State-of-the-art commercial spaces in the heart of the business district.',
    description: 'The Urban Office Complex is a landmark development featuring Grade A office spaces, advanced security systems, and sustainable design. It is strategically located to provide businesses with a prestigious address and excellent connectivity.',
    thumbnailUrl: 'https://picsum.photos/seed/office/600/400',
    images: [
      'https://picsum.photos/seed/office_detail1/1200/800',
      'https://picsum.photos/seed/office_detail2/1200/800',
    ],
    location: 'Downtown Business Hub',
    status: 'Ongoing',
    category: 'Commercial',
  },
  {
    id: '3',
    name: 'Serene Lakeside Apartments',
    shortDescription: 'Contemporary apartments offering tranquil lakeside living.',
    description: 'Experience peace and tranquility at Serene Lakeside Apartments. These beautifully designed homes come with premium finishes, access to private lake amenities, and lush green surroundings, perfect for a relaxed lifestyle.',
    thumbnailUrl: 'https://picsum.photos/seed/apartments/600/400',
    images: [
      'https://picsum.photos/seed/apartments_detail1/1200/800',
      'https://picsum.photos/seed/apartments_detail2/1200/800',
      'https://picsum.photos/seed/apartments_detail3/1200/800',
      'https://picsum.photos/seed/apartments_detail4/1200/800',
    ],
    location: 'Willow Creek, North Suburb',
    status: 'Upcoming',
    category: 'Residential',
  },
  {
    id: '4',
    name: 'Eco-Friendly Retail Hub',
    shortDescription: 'A sustainable retail park designed for a greener shopping experience.',
    description: 'This innovative retail hub integrates eco-friendly technologies and green spaces, offering a unique shopping environment. It features a diverse mix of stores, cafes, and entertainment options, all built with sustainability in mind.',
    thumbnailUrl: 'https://picsum.photos/seed/retail/600/400',
    images: [
      'https://picsum.photos/seed/retail_detail1/1200/800',
      'https://picsum.photos/seed/retail_detail2/1200/800',
    ],
    location: 'Green Valley Commercial Zone',
    status: 'Completed',
    category: 'Retail',
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
  { id: 'hero1', src: 'https://picsum.photos/seed/hero1/1920/1080', alt: 'Luxurious modern architecture', title: 'Building the Future', subtitle: 'Exquisite Properties, Expertly Crafted' , dataAiHint: 'modern architecture' },
  { id: 'hero2', src: 'https://picsum.photos/seed/hero2/1920/1080', alt: 'Spacious interior design', title: 'Innovative Design', subtitle: 'Where Vision Meets Precision', dataAiHint: 'modern interior' },
  { id: 'hero3', src: 'https://picsum.photos/seed/hero3/1920/1080', alt: 'Sustainable construction site', title: 'Sustainable Solutions', subtitle: 'Constructing a Greener Tomorrow', dataAiHint: 'construction site' },
];
