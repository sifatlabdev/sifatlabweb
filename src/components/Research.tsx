import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchProjects = [
  {
    title: "AI for Rare Disease Diagnosis",
    description: "Designing machine learning models to identify rare genetic disorders from medical imaging and genomic data.",
    image: "https://via.placeholder.com/600x400?text=AI+Rare+Disease",
    status: "Ongoing",
    tags: ["Machine Learning", "Genomics", "Medical Imaging"]
  },
  {
    title: "Single-Cell Transcriptomics Toolkit",
    description: "Developing computational pipelines to analyze and visualize single-cell RNA sequencing data.",
    image: "https://via.placeholder.com/600x400?text=Single-Cell+RNA",
    status: "Completed",
    tags: ["Transcriptomics", "Bioinformatics", "Data Visualization"]
  },
  {
    title: "Neural Network Models for Protein Folding",
    description: "Exploring deep learning methods to predict protein structures and folding pathways.",
    image: "https://via.placeholder.com/600x400?text=Protein+Folding+AI",
    status: "Ongoing",
    tags: ["Proteomics", "Neural Networks", "Structural Biology"]
  },
];


export function Research() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-sage-green text-white';
      case 'Completed':
        return 'bg-primary text-primary-foreground';
      case 'Planning':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="research" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            Current Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of computational biology, machine learning, and precision medicine 
            to advance our understanding of complex biological systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} shadow-lg`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}