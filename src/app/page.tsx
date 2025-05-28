import HeroSection from '@/components/sections/hero-section';
import StatsSection from '@/components/sections/stats-section';
import ProjectsSection from '@/components/sections/projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
