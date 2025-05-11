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
    <Card className="bg-background shadow-xl flex flex-col h-full animate-fadeIn"> {/* Changed to bg-background for contrast with bg-secondary section */}
      <CardContent className="p-6 md:p-8 flex flex-col flex-grow text-center">
        <Quote className="w-10 h-10 text-primary mx-auto mb-6 transform scale-x-[-1]" />
        <p className="text-lg text-foreground italic mb-8 flex-grow leading-relaxed">"{testimonial.quote}"</p>
        <div className="flex flex-col items-center mt-auto">
          {testimonial.avatarUrl && (
            <Avatar className="h-16 w-16 mb-4">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint="person portrait" />
              <AvatarFallback>{fallbackInitials}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="font-semibold text-xl text-primary">{testimonial.author}</p>
            {testimonial.company && (
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
