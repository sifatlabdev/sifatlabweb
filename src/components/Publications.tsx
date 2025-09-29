import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Graph Neural Networks for Protein-Protein Interaction Prediction",
    authors: "A. Nguyen, R. Patel, M. Torres, J. Lee",
    journal: "Nature Communications",
    year: "2024",
    citations: 92,
    doi: "10.1038/s41467-024-10001-0",
    pmid: "39123456",
    category: "Machine Learning"
  },
  {
    title: "Integrative Analysis of Multi-Omics Data in Alzheimer’s Disease",
    authors: "A. Nguyen, S. Chen, K. Brown, D. Garcia",
    journal: "Nature Genetics",
    year: "2023",
    citations: 134,
    doi: "10.1038/s41588-023-20000-0",
    pmid: "38234567",
    category: "Genomics"
  },
  {
    title: "Scalable Algorithms for Single-Cell Multi-Modal Data Integration",
    authors: "A. Nguyen, Y. Kim, H. Li",
    journal: "Genome Biology",
    year: "2023",
    citations: 61,
    doi: "10.1186/s13059-023-010000-0",
    pmid: "37345678",
    category: "Bioinformatics"
  },
  {
    title: "Metabolic Network Models Reveal Novel Cancer Vulnerabilities",
    authors: "A. Nguyen, J. Thompson, M. Rivera",
    journal: "Cancer Cell",
    year: "2022",
    citations: 178,
    doi: "10.1016/j.ccell.2022.00.000",
    pmid: "36456789",
    category: "Cancer Research"
  },
  {
    title: "AI-Driven Early Detection of Malaria Using Genomic and Clinical Data",
    authors: "A. Nguyen, P. Singh, C. Martinez, T. Zhang",
    journal: "The Lancet Global Health",
    year: "2022",
    citations: 209,
    doi: "10.1016/S2214-109X(22)00000-0",
    pmid: "35567890",
    category: "Global Health"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            Recent Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research contributions in computational biology, bioinformatics, 
            and precision medicine with a focus on translational applications.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green pb-6">
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                        {pub.category}
                      </Badge>
                      <Badge variant="outline" className="border-primary text-primary cursor-pointer">
                        {pub.citations} citations
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl line-clamp-2 mb-2 cursor-pointer hover:text-primary transition-colors">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-2">
                      <span className="text-sage-green font-medium">{pub.authors}</span>
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{pub.journal}</span>
                      <span>({pub.year})</span>
                      <span className="hover:text-sage-green cursor-pointer transition-colors">DOI: {pub.doi}</span>
                      <span className="hover:text-sage-green cursor-pointer transition-colors">PMID: {pub.pmid}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DOI
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Publications on Google Scholar
          </Button>
        </div>
      </div>
    </section>
  );
}