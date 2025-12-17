import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  type Publication,
  type JeffersonProject,
  socialImpactProjects,
} from "../data/data";

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="hover:shadow-md transition-all duration-200 border-l-2 border-l-sage-green">
      <CardHeader className="pb-4">
        <CardTitle className="text-base cursor-pointer hover:text-primary transition-colors">
          {publication.title}
        </CardTitle>
        <CardDescription className="text-sm mt-2">
          <span className="text-sage-green">{publication.authors}</span>
        </CardDescription>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2">
          <span className="text-primary">{publication.journal}</span>
          <span>({publication.year})</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="hover:text-sage-green cursor-pointer transition-colors">
            DOI: {publication.doi}
          </span>
          <span>•</span>
          <span className="hover:text-sage-green cursor-pointer transition-colors">
            PMID: {publication.pmid}
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer text-xs"
          >
            <FileText className="w-3 h-3 mr-1" />
            PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer text-xs"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            DOI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}

function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: JeffersonProject;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 max-h-[80vh] overflow-y-auto">
        {" "}
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground pr-8">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            <Badge className={`${getStatusColor(project.status)} mt-2`}>
              {project.status}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {/* Detailed Description */}
          <div>
            <h4 className="text-sm text-primary mb-3">Project Overview</h4>
            <div
              className="text-foreground leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: project.detailedDescription.replace(
                  /https?:\/\/[^\s]+/g,
                  (url) =>
                    `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${url}</a>`
                ),
              }}
            />
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm text-primary mb-3">Research Areas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-sage-green text-sage-green"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h4 className="text-sm text-primary mb-3">
              Related Publications ({project.publications.length})
            </h4>
            <div className="space-y-4">
              {project.publications.map((pub, idx) => (
                <PublicationCard key={idx} publication={pub} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "Ongoing":
      return "bg-sage-green text-white";
    case "Planning":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function Social() {
  const [selectedProject, setSelectedProject] =
    useState<JeffersonProject | null>(null);

  return (
    <>
      <section id="chen-lab" className="py-16 px-6 bg-background mt-8">
        <div className="container mx-auto">
          {/* Jefferson Projects */}
          <div>
            <h2 className="mb-6 text-center text-foreground">
              Social Impact Projects
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our social impact projects advancing health equity and
              addressing critical health disparities in underserved communities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {socialImpactProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="line-clamp-2 flex-1">
                        {project.title}
                      </CardTitle>
                      <Badge
                        className={`${getStatusColor(project.status)} shrink-0`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Project Dialog */}
        {selectedProject && (
          <ProjectDialog
            project={selectedProject}
            open={!!selectedProject}
            onOpenChange={(open) => !open && setSelectedProject(null)}
          />
        )}
      </section>
    </>
  );
}
