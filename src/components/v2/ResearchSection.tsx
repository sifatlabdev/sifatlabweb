import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  Beaker, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  ExternalLink,
  GitBranch
} from "lucide-react";

const researchAreas = [
  {
    title: "AI-Driven Drug Discovery",
    description: "Developing machine learning models to predict drug-target interactions and identify novel therapeutic compounds.",
    image: "https://images.unsplash.com/photo-1612198273689-b437f53152ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXPhDGlvbiUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3NTg4MjYyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    funding: "$1.2M",
    duration: "2021-2025",
    collaborators: 8,
    publications: 12,
    status: "Active",
    progress: 75
  },
  {
    title: "Precision Medicine Genomics",
    description: "Identifying genetic biomarkers for personalized treatment approaches across diverse populations.",
    image: "https://images.unsplash.com/photo-1628587165071-8bc2b4938bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    funding: "$850K",
    duration: "2022-2026",
    collaborators: 12,
    publications: 8,
    status: "Active",
    progress: 60
  },
  {
    title: "Single-Cell Analysis Platform",
    description: "Building computational frameworks for analyzing cellular heterogeneity and disease mechanisms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    funding: "$450K",
    duration: "2020-2024",
    collaborators: 5,
    publications: 15,
    status: "Completed",
    progress: 100
  }
];

const metrics = [
  { label: "Active Projects", value: "3", icon: Beaker },
  { label: "Total Funding", value: "$2.5M", icon: DollarSign },
  { label: "Collaborators", value: "25", icon: Users },
  { label: "Publications", value: "35", icon: TrendingUp }
];

export function ResearchSection() {
  return (
    <div className="space-y-8">
      {/* Research Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label}>
              <CardContent className="p-3 lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-base lg:text-lg">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Research Projects */}
      <div className="space-y-4 lg:space-y-6">
        <h2 className="text-xl lg:text-2xl">Active Research Projects</h2>
        {researchAreas.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              <div className="relative h-40 lg:h-auto">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <Badge 
                    variant={project.status === 'Active' ? 'default' : 'secondary'}
                    className="bg-white/90 text-slate-700 border-0 text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <div className="lg:col-span-2 p-4 lg:p-6">
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <h3 className="text-lg lg:text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Funding: {project.funding}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Collaborators: {project.collaborators}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Publications: {project.publications}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-2">
                    <Button variant="outline" size="sm" className="justify-center lg:justify-start">
                      <GitBranch className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="justify-center lg:justify-start">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Publications
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Research Interests */}
      <Card>
        <CardHeader>
          <CardTitle>Research Interests & Future Directions</CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <h4 className="mb-3 text-sm lg:text-base">Current Focus Areas</h4>
              <div className="flex flex-wrap gap-1 lg:gap-2">
                <Badge variant="secondary" className="text-xs">Machine Learning in Biology</Badge>
                <Badge variant="secondary" className="text-xs">Drug Target Identification</Badge>
                <Badge variant="secondary" className="text-xs">Precision Medicine</Badge>
                <Badge variant="secondary" className="text-xs">Single-Cell Genomics</Badge>
                <Badge variant="secondary" className="text-xs">Network Biology</Badge>
                <Badge variant="secondary" className="text-xs">Pharmacogenomics</Badge>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-sm lg:text-base">Emerging Interests</h4>
              <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-muted-foreground">
                <li>• AI-powered protein structure prediction</li>
                <li>• Multi-omics data integration</li>
                <li>• Explainable AI in healthcare</li>
                <li>• Rare disease genomics</li>
                <li>• Digital health biomarkers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}