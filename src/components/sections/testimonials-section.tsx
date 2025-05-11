import TestimonialCard from '@/components/testimonial-card';
import { placeholderTestimonials } from '@/lib/placeholder-data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with EstateView.
          </p>
        </div>
        {placeholderTestimonials.length === 0 ? (
           <p className="text-center text-muted-foreground">No testimonials to display yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
