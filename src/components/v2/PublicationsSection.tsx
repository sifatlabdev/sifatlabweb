import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Download, 
  Star,
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";

const publications = [
  {
    title: "Machine Learning Approaches for Predicting Drug-Target Interactions in Cancer Therapy",
    authors: ["S. Chen", "M. Johnson", "R. Williams", "K. Lee"],
    journal: "Nature Biotechnology",
    year: 2024,
    citations: 127,
    impact: "High",
    type: "Journal Article",
    doi: "10.1038/s41587-024-00000-0",
    abstract: "We present a novel machine learning framework for predicting drug-target interactions...",
    tags: ["Machine Learning", "Drug Discovery", "Cancer"],
    featured: true
  },
  {
    title: "Genomic Biomarkers for Precision Medicine: A Multi-Ethnic Cohort Study",
    authors: ["S. Chen", "A. Patel", "L. Zhang", "J. Martinez"],
    journal: "Cell",
    year: 2023,
    citations: 89,
    impact: "High",
    type: "Journal Article",
    doi: "10.1016/j.cell.2023.00.000",
    abstract: "This study identifies key genomic biomarkers across diverse populations...",
    tags: ["Genomics", "Precision Medicine", "Biomarkers"],
    featured: true
  },
  {
    title: "Computational Framework for Single-Cell RNA Sequencing Data Integration",
    authors: ["S. Chen", "T. Brown", "H. Kim"],
    journal: "Bioinformatics",
    year: 2023,
    citations: 156,
    impact: "Medium",
    type: "Journal Article",
    doi: "10.1093/bioinformatics/btab000",
    abstract: "We develop a computational framework for integrating single-cell RNA-seq data...",
    tags: ["Single-Cell", "RNA-Seq", "Computational Biology"],
    featured: false
  },
  {
    title: "AI in Drug Discovery: Opportunities and Challenges",
    authors: ["S. Chen"],
    journal: "Nature Reviews Drug Discovery",
    year: 2024,
    citations: 45,
    impact: "High",
    type: "Review",
    doi: "10.1038/s41573-024-00000-0",
    abstract: "This review examines the current state and future prospects of AI in drug discovery...",
    tags: ["AI", "Drug Discovery", "Review"],
    featured: false
  },
  {
    title: "Machine Learning for Genomic Medicine",
    authors: ["S. Chen", "L. Davis"],
    journal: "Science",
    year: 2022,
    citations: 234,
    impact: "High",
    type: "Perspective",
    doi: "10.1126/science.abm0000",
    abstract: "We discuss the transformative potential of machine learning in genomic medicine...",
    tags: ["Machine Learning", "Genomics", "Medicine"],
    featured: true
  }
];

const stats = [
  { label: "Total Publications", value: "47", icon: TrendingUp },
  { label: "Total Citations", value: "1,234", icon: Star },
  { label: "H-Index", value: "23", icon: TrendingUp },
  { label: "First Author", value: "28", icon: Users }
];

export function PublicationsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || pub.type.toLowerCase().includes(selectedType);
    return matchesSearch && matchesType;
  });

  const featuredPublications = publications.filter(pub => pub.featured);

  return (
    <div className="space-y-8">
      {/* Publication Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-3 lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-base lg:text-lg">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Publications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Featured Publications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-4">
            {featuredPublications.slice(0, 4).map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm line-clamp-2 leading-tight">{pub.title}</h4>
                      <Badge 
                        variant={pub.impact === 'High' ? 'default' : 'secondary'}
                        className="text-xs shrink-0"
                      >
                        {pub.impact}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="mb-1 line-clamp-1">{pub.authors.join(", ")}</p>
                      <p><strong>{pub.journal}</strong> ({pub.year})</p>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Citations: {pub.citations}</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publications List */}
      <Card>
        <CardHeader>
          <CardTitle>All Publications</CardTitle>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-1 p-1 bg-muted rounded-lg overflow-x-auto">
              <button
                onClick={() => setSelectedType("all")}
                className={`px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-md transition-colors whitespace-nowrap ${
                  selectedType === "all" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("journal")}
                className={`px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-md transition-colors whitespace-nowrap ${
                  selectedType === "journal" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Articles
              </button>
              <button
                onClick={() => setSelectedType("review")}
                className={`px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-md transition-colors whitespace-nowrap ${
                  selectedType === "review" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setSelectedType("perspective")}
                className={`px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-md transition-colors whitespace-nowrap ${
                  selectedType === "perspective" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Perspectives
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-start justify-between gap-3 lg:gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="mb-2 line-clamp-2 text-sm lg:text-base leading-tight">{pub.title}</h4>
                        <p className="text-xs lg:text-sm text-muted-foreground mb-2 line-clamp-1">
                          {pub.authors.join(", ")}
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 text-xs lg:text-sm text-muted-foreground">
                          <span><strong>{pub.journal}</strong></span>
                          <span>{pub.year}</span>
                          <span>Citations: {pub.citations}</span>
                          <div className="flex gap-1 lg:gap-2">
                            <Badge variant="outline" className="text-xs">
                              {pub.type}
                            </Badge>
                            <Badge 
                              variant={pub.impact === 'High' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {pub.impact} Impact
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {pub.featured && (
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-xs lg:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {pub.abstract}
                    </p>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                      <div className="flex flex-wrap gap-1">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
                          <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                          PDF
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
                          <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                          DOI
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* External Links */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Profiles</CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="grid lg:grid-cols-3 gap-3 lg:gap-4">
            <Button variant="outline" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              Google Scholar
            </Button>
            <Button variant="outline" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              ORCID Profile
            </Button>
            <Button variant="outline" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              ResearchGate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}