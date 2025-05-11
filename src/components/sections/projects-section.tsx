"use client";

import { useState } from 'react';
import ProjectCard from '@/components/project-card';
import ProjectModal from '@/components/project-modal';
import { placeholderProjects } from '@/lib/placeholder-data';
import type { Project } from '@/types';
// Removed Button as Load More is removed

// const PROJECTS_PER_PAGE = 6; // Removed

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE); // Removed

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  // const loadMoreProjects = () => { // Removed
  //   setVisibleProjects(prev => prev + PROJECTS_PER_PAGE);
  // };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a portfolio of our finest construction and real estate developments, showcasing quality craftsmanship and innovative design.
          </p>
        </div>
        
        {placeholderProjects.length === 0 ? (
          <p className="text-center text-muted-foreground">No projects to display at the moment. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Changed to map all projects directly */}
            {placeholderProjects.map((project) => ( 
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Removed Load More Button */}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
