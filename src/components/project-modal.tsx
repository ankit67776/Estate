import type { Project, ProjectStatus } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProjectModalCarousel from './project-modal-carousel';
import { MapPin, Tag, CheckCircle, HardHat, FileText, ShieldCheck, Building } from 'lucide-react'; // Added ShieldCheck and Building

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getStatusIcon = (status: ProjectStatus) => {
  switch (status) {
    case 'SOLD':
      return <CheckCircle className="text-green-500" />;
    case 'IN MARKET':
      return <Tag className="text-blue-500" />;
    case 'UNDER CONSTRUCTION':
      return <HardHat className="text-orange-500" />;
    case 'SOLD (Under Construction)':
      return <ShieldCheck className="text-teal-500" />;
    case 'PLAN REVIEW':
      return <FileText className="text-purple-500" />;
    default:
      return <Building className="text-gray-500" />; // Default icon
  }
};


export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const statusIcon = getStatusIcon(project.status);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-primary">{project.address}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="px-6 space-y-6">
            <ProjectModalCarousel images={project.images || []} projectName={project.address} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">{project.address}</p>
                </div>
              </div>
              {project.category && (
                <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                  <Tag size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Category</h4>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                <span className="mt-0.5 shrink-0">{statusIcon}</span>
                <div>
                  <h4 className="font-semibold">Status</h4>
                  <p className="text-muted-foreground">{project.status}</p>
                </div>
              </div>
            </div>

            {project.description && (
              <DialogDescription className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
                {project.description}
              </DialogDescription>
            )}
          </div>
        </ScrollArea>
        <DialogFooter className="p-6 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
