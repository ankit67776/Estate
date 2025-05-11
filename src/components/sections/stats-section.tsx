"use client";

import { Briefcase, CalendarDays, Home, ClipboardList } from 'lucide-react'; // Updated icons

const statsData = [
  {
    id: 1,
    icon: Briefcase, // Or CheckCircle if preferred
    value: "7",
    label: "Completed Projects",
    // description: "Successfully delivered diverse construction and real estate projects.", // Removed for cleaner look
  },
  {
    id: 2,
    icon: Home, // For Active Listing
    value: "1",
    label: "Active Listing",
    // description: "Prime properties currently available in the market.", // Removed
  },
  {
    id: 3,
    icon: ClipboardList, // For Project in Planning
    value: "1",
    label: "Project in Planning",
    // description: "Exciting new developments on the horizon.", // Removed
  },
  {
    id: 4,
    icon: CalendarDays,
    value: "20+", // Kept 20+ as per previous, prompt was generic "Years of Experience"
    label: "Years of Experience",
    // description: "Two decades of industry expertise and commitment to excellence.", // Removed
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          {/* Changed title to "Insights" or similar to reflect prompt */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Key Insights</h2> 
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our performance and experience by the numbers, showcasing our dedication and success.
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
              {/* Descriptions removed from stat.description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
