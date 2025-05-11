import Image from 'next/image';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Tag } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group animate-fadeIn">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={project.thumbnailUrl}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="building exterior"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{project.shortDescription || project.description}</p>
        <div className="flex items-center text-xs text-muted-foreground mb-1">
          <MapPin size={14} className="mr-1.5 text-primary" />
          {project.location}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Tag size={14} className="mr-1.5 text-primary" />
          {project.category} - <span className={`font-medium ${project.status === 'Completed' ? 'text-green-600 dark:text-green-400' : project.status === 'Ongoing' ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-600 dark:text-yellow-400'}`}>{project.status}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground" onClick={() => onViewDetails(project)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
