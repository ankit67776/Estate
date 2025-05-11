import Image from 'next/image';
import type { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const fallbackInitials = testimonial.author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-fadeIn">
      <CardContent className="p-6 flex flex-col flex-grow">
        <Quote className="w-8 h-8 text-primary mb-4 transform scale-x-[-1]" />
        <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-auto">
          {testimonial.avatarUrl && (
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint="person portrait" />
              <AvatarFallback>{fallbackInitials}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            {testimonial.company && (
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
