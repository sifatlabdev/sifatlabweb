import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Users, Microscope, Lightbulb, ExternalLink, FileText } from "lucide-react";
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
  chenLabData,
  jeffersonProjects
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
          <Badge variant="outline" className="border-primary text-primary text-xs">
            {publication.citations} citations
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="hover:text-sage-green cursor-pointer transition-colors">DOI: {publication.doi}</span>
          <span>•</span>
          <span className="hover:text-sage-green cursor-pointer transition-colors">PMID: {publication.pmid}</span>
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

function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={className}>{children}</p>;
}

function ProjectDialog({ project, open, onOpenChange }: { project: JeffersonProject; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground pr-8">{project.title}</DialogTitle>
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
            <p className="text-foreground leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm text-primary mb-3">Research Areas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-sage-green text-sage-green">
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
    case 'Ongoing':
      return 'bg-sage-green text-white';
    case 'Planning':
      return 'bg-secondary text-secondary-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function ChenLab() {
  const [selectedProject, setSelectedProject] = useState<JeffersonProject | null>(null);

  return (
    <section id="chen-lab" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            {chenLabData.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {chenLabData.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src={chenLabData.heroImage}
            alt="Alba Lab Research Team"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        

        {/* Four Key Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Who We Are */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sage-green">
                <Users className="w-5 h-5" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {chenLabData.whoWeAre.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {chenLabData.whoWeAre.stats.map((stat) => (
                  <Badge key={stat} variant="outline" className="border-sage-green text-sage-green">
                    {stat}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Mission */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Target className="w-5 h-5" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {chenLabData.mission}
              </p>
            </CardContent>
          </Card>



          {/* Main Focus */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Microscope className="w-5 h-5" />
                Main Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {chenLabData.mainFocus.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className={`w-2 h-2 ${index % 2 === 0 ? 'bg-primary' : 'bg-sage-green'} rounded-full mt-2 shrink-0`}></span>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sage-green">
                <Lightbulb className="w-5 h-5" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {chenLabData.whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className={`w-2 h-2 ${index % 2 === 0 ? 'bg-sage-green' : 'bg-primary'} rounded-full mt-2 shrink-0`}></span>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jefferson Projects */}
        <div>
          <h3 className="mb-6 text-center text-foreground">Current Projects</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Research initiatives launched since establishing the Alba Lab. Click on any project to learn more.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {jeffersonProjects.map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="line-clamp-2 flex-1">{project.title}</CardTitle>
                    <Badge className={`${getStatusColor(project.status)} shrink-0`}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-sage-green text-sage-green hover:bg-sage-green hover:text-white">
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
  );
}
