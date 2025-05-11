"use client";

import { Award, Briefcase, CalendarDays, Users } from 'lucide-react';

const statsData = [
  {
    id: 1,
    icon: Briefcase,
    value: "150+",
    label: "Projects Completed",
    description: "Successfully delivered diverse construction and real estate projects.",
  },
  {
    id: 2,
    icon: CalendarDays,
    value: "20+",
    label: "Years of Experience",
    description: "Two decades of industry expertise and commitment to excellence.",
  },
  {
    id: 3,
    icon: Award, // Changed from Smile for a more professional feel
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently high ratings from our valued clients.",
  },
  {
    id: 4,
    icon: Users,
    value: "500+",
    label: "Happy Clients", // Added a specific number for "Happy Clients"
    description: "A growing family of satisfied homeowners and businesses.",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on a legacy of trust, quality, and outstanding results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className="bg-background p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
              <p className="text-4xl font-extrabold text-primary mb-2">{stat.value}</p>
              <h3 className="text-xl font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
