import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const researchProjects = [
  {
    title: "AI-Driven Drug Target Identification",
    description: "Developing machine learning models to predict novel drug targets for cancer therapy using multi-omics data integration.",
    image: "https://images.unsplash.com/photo-1628587165071-8bc2b4938bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["Machine Learning", "Drug Discovery", "Cancer Research"],
    status: "Ongoing",
    funding: "NIH R01"
  },
  {
    title: "Genomic Biomarkers for Precision Medicine",
    description: "Identifying genetic variants associated with drug response variability in diverse populations for personalized treatment approaches.",
    image: "https://images.unsplash.com/photo-1628587165071-8bc2b4938bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["Genomics", "Precision Medicine", "Pharmacogenomics"],
    status: "Published",
    funding: "NSF CAREER"
  },
  {
    title: "Single-Cell RNA Sequencing Analysis Pipeline",
    description: "Building computational frameworks for analyzing single-cell transcriptomic data to understand cellular heterogeneity in disease.",
    image: "https://images.unsplash.com/photo-1628587165071-8bc2b4938bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["Single-Cell", "RNA-Seq", "Computational Biology"],
    status: "Ongoing",
    funding: "University Grant"
  }
];

export function Research() {
  return (
    <section id="research" className="pt-24 pb-16 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Research Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My current research focuses on computational approaches to understand 
            biological systems and develop solutions for precision medicine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === 'Ongoing' ? 'default' : 'secondary'}
                    className="shrink-0 ml-2"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Funding:</strong> {project.funding}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}