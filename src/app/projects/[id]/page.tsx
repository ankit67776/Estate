
import { placeholderProjects } from '@/lib/placeholder-data';
import type { Project } from '@/types';
import ProjectModalCarousel from '@/components/project-modal-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Tag, CheckCircle, HardHat, FileText, ShieldCheck, Building } from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cn, slugify } from '@/lib/utils';


const StatusDisplay: React.FC<{ status: Project['status'] }> = ({ status }) => {
  let icon: React.ReactNode;
  let colorClass: string;
  let text = status;

  switch (status) {
    case 'SOLD':
      icon = <CheckCircle size={16} className="mr-1.5" />;
      colorClass = 'text-green-700 bg-green-100 border-green-300';
      break;
    case 'IN MARKET':
      icon = <Tag size={16} className="mr-1.5" />;
      colorClass = 'text-blue-700 bg-blue-100 border-blue-300';
      break;
    case 'UNDER CONSTRUCTION':
      icon = <HardHat size={16} className="mr-1.5" />;
      colorClass = 'text-orange-700 bg-orange-100 border-orange-300';
      break;
    case 'SOLD (Under Construction)':
      icon = <ShieldCheck size={16} className="mr-1.5" />;
      colorClass = 'text-teal-700 bg-teal-100 border-teal-300';
      text = 'Under Contract';
      break;
    case 'PLAN REVIEW':
      icon = <FileText size={16} className="mr-1.5" />;
      colorClass = 'text-purple-700 bg-purple-100 border-purple-300';
      break;
    default:
      icon = <Building size={16} className="mr-1.5" />;
      colorClass = 'text-gray-700 bg-gray-100 border-gray-300';
  }

  return (
    <Badge variant="outline" className={cn("inline-flex items-center px-3 py-1 text-sm font-semibold border", colorClass)}>
      {icon}
      {text}
    </Badge>
  );
};

interface ProjectPageParams {
  id: string; // This 'id' will now be the slugified address
}

export async function generateStaticParams() {
  return placeholderProjects.map((project) => ({
    id: slugify(project.address),
  }));
}

export default async function ProjectPage({ params }: { params: ProjectPageParams }) {
  const { id: projectSlug } = params; 
  const project = placeholderProjects.find(p => slugify(p.address) === projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-max section-padding pt-28 md:pt-32">
      <div className="mb-8">
        <Button variant="outline" asChild>
            <Link href="/#projects">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
        </Button>
      </div>

      <article className="bg-card p-6 md:p-8 rounded-xl shadow-xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3">{project.address}</h1>
          <div className="flex flex-wrap items-center gap-4">
            {project.category && (
              <div className="flex items-center text-muted-foreground">
                <Tag size={18} className="mr-2 text-primary" />
                <span>{project.category}</span>
              </div>
            )}
             <StatusDisplay status={project.status} />
          </div>
        </header>

        {project.images && project.images.length > 0 && (
          <section className="mb-8">
            <ProjectModalCarousel images={project.images} projectName={project.address} />
          </section>
        )}

        {project.description && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Property Details</h2>
            <div className="prose max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap">
              <p>{project.description}</p>
            </div>
          </section>
        )}
        
        <section className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Interested in this type of property?</h3>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">Contact Us</Link>
            </Button>
        </section>

      </article>
    </div>
  );
}
