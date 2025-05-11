import type { Project } from '@/types';
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
import { MapPin, Tag, Building, CheckCircle, Clock } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const statusIcon = project.status === 'Completed' ? <CheckCircle className="text-green-500" /> : 
                     project.status === 'Ongoing' ? <Clock className="text-blue-500" /> : 
                     <Building className="text-yellow-500" />;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-primary">{project.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="px-6 space-y-6">
            <ProjectModalCarousel images={project.images} projectName={project.name} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                <Tag size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold">Category</h4>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 p-3 bg-secondary/50 rounded-lg">
                <span className="mt-0.5 shrink-0">{statusIcon}</span>
                <div>
                  <h4 className="font-semibold">Status</h4>
                  <p className="text-muted-foreground">{project.status}</p>
                </div>
              </div>
            </div>

            <DialogDescription className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
              {project.description}
            </DialogDescription>
          </div>
        </ScrollArea>
        <DialogFooter className="p-6 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
