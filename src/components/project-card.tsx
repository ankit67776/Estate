import Image from 'next/image';
import type { Project, ProjectStatus } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Tag, HardHat, FileText, ShieldCheck } from 'lucide-react'; // ShieldCheck for SOLD (Under Construction)
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const StatusDisplay: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  let icon: React.ReactNode;
  let colorClass: string;
  let text = status;

  switch (status) {
    case 'SOLD':
      icon = <CheckCircle size={16} className="mr-1.5" />;
      colorClass = 'text-green-600 bg-green-100';
      break;
    case 'IN MARKET':
      icon = <Tag size={16} className="mr-1.5" />;
      colorClass = 'text-blue-600 bg-blue-100';
      break;
    case 'UNDER CONSTRUCTION':
      icon = <HardHat size={16} className="mr-1.5" />;
      colorClass = 'text-orange-600 bg-orange-100';
      break;
    case 'SOLD (Under Construction)':
      icon = <ShieldCheck size={16} className="mr-1.5" />; // Using ShieldCheck as a composite status indicator
      colorClass = 'text-teal-600 bg-teal-100';
      text = 'SOLD (Constructing)'; // Shorter text for tag
      break;
    case 'PLAN REVIEW':
      icon = <FileText size={16} className="mr-1.5" />;
      colorClass = 'text-purple-600 bg-purple-100';
      break;
    default:
      icon = null;
      colorClass = 'text-muted-foreground bg-muted';
  }

  return (
    <div className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold",
      colorClass
    )}>
      {icon}
      {text}
    </div>
  );
};

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group animate-fadeIn bg-card">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={project.thumbnailUrl}
            alt={project.address} // Changed from project.name
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="house exterior" // Generic hint for property images
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.address}</CardTitle>
        <StatusDisplay status={project.status} />
        {/* Removed shortDescription, location, and category display */}
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto"> {/* Added mt-auto to push footer down */}
        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground" onClick={() => onViewDetails(project)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
