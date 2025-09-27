import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Integrative Multi-Omics Approaches for Early Detection of Alzheimer’s Disease",
    authors: "J. Rivera, S. Ahmed, L. Wong,",
    journal: "Nature Medicine",
    year: "2024",
    impact: "High Impact",
    citations: 142,
    doi: "10.1038/s41591-024-00001-1",
    pmid: "39234567"
  },
  {
    title: "Graph Neural Networks for Predicting Protein-Protein Interactions",
    authors: "M. Patel, T. Liu, K. Nakamura",
    journal: "Nature Communications",
    year: "2023",
    impact: "High Impact",
    citations: 95,
    doi: "10.1038/s41467-023-00001-2",
    pmid: "38245678"
  },
  {
    title: "Bayesian Models for Integrative Genomic and Epigenomic Data Analysis",
    authors: "A. Gupta, R. Thompson, S. Chen",
    journal: "PLoS Computational Biology",
    year: "2023",
    impact: "Medium Impact",
    citations: 67,
    doi: "10.1371/journal.pcbi.1000001",
    pmid: "37356789"
  },
  {
    title: "Transformer-Based Architectures for Single-Cell Transcriptomics",
    authors: "K. Lee, P. Johnson",
    journal: "Genome Research",
    year: "2022",
    impact: "High Impact",
    citations: 121,
    doi: "10.1101/gr.000000.122",
    pmid: "36467890"
  },
  {
    title: "Evolutionary Insights into Viral Genomes Through Comparative Network Analysis",
    authors: "D. Martinez, J. Kim",
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    year: "2022",
    impact: "High Impact",
    citations: 83,
    doi: "10.1073/pnas.220000001",
    pmid: "35578901"
  },
  {
    title: "AI-Driven Drug Repurposing Framework for Rare Genetic Disorders",
    authors: "N. Rossi, H. Wang",
    journal: "Nature Reviews Drug Discovery",
    year: "2021",
    impact: "High Impact",
    citations: 204,
    doi: "10.1038/s41573-021-00001-3",
    pmid: "34689012"
  }
];


export function Publications() {
  return (
    <section id="publications" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent peer-reviewed publications in computational biology, 
            bioinformatics, and precision medicine.
          </p>
        </div>

 <div className="grid gap-6 w-full max-w-6xl mx-auto px-4 grid-cols-1 lg:grid-cols-2`">
  {publications.map((pub, index) => (
    <Card key={index} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="line-clamp-2 mb-2">{pub.title}</CardTitle>
            <CardDescription className="mb-3">
              {pub.authors}
            </CardDescription>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span><strong>{pub.journal}</strong> ({pub.year})</span>
              <span>Citations: {pub.citations}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" className="text-xs">
            <FileText className="w-3 h-3 mr-1" />
            DOI: {pub.doi}
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <ExternalLink className="w-3 h-3 mr-1" />
            PMID: {pub.pmid}
          </Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>


        <div className="text-center mt-12">
          <Button variant="outline">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Publication List on Google Scholar
          </Button>
        </div>
      </div>
    </section>
  );
}