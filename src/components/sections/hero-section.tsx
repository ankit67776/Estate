import SimpleCarousel from '@/components/simple-carousel';
import { heroCarouselImages } from '@/lib/placeholder-data';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-20 md:pt-0"> {/* pt-20 for header height, md:pt-0 for larger screens where carousel is full height */}
      <SimpleCarousel images={heroCarouselImages} />
    </section>
  );
}
