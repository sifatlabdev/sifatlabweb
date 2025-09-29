import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "NSF CAREER Award",
    description: "Received prestigious early career award for computational biology research",
    type: "award"
  },
  {
    year: "2020",
    title: "Assistant Professor",
    description: "Joined University as Assistant Professor of Bioinformatics",
    type: "position"
  },
  {
    year: "2018-2020",
    title: "Postdoctoral Fellow",
    description: "Computational Biology, Harvard Medical School",
    type: "position"
  },
  {
    year: "2018",
    title: "Ph.D. Computational Biology",
    description: "Stanford University - Machine Learning for Genomic Analysis",
    type: "education"
  }
];

const skills = [
  { name: "Machine Learning", level: 95 },
  { name: "Bioinformatics", level: 90 },
  { name: "Python/R", level: 88 },
  { name: "Genomics", level: 85 },
  { name: "Drug Discovery", level: 80 },
  { name: "Statistics", level: 92 }
];

export function AboutSection() {
  return (
    <div className="space-y-8">
      {/* Bio Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                I am a computational biologist passionate about developing innovative machine learning 
                approaches to solve complex biological problems. My research focuses on the intersection 
                of artificial intelligence and genomics, with applications in precision medicine and 
                drug discovery.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                With a background spanning computer science and biology, I bridge the gap between 
                computational methods and biological insights. My work has been published in top-tier 
                journals and has contributed to advancing our understanding of genetic mechanisms 
                underlying human diseases.
              </p>
              <div className="flex flex-wrap gap-1 lg:gap-2">
                <Badge variant="secondary" className="text-xs">PhD Computational Biology</Badge>
                <Badge variant="secondary" className="text-xs">Stanford University</Badge>
                <Badge variant="secondary" className="text-xs">Harvard Medical School</Badge>
              </div>
            </div>
            <div className="space-y-4 order-first lg:order-last">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzU4ODU3ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lab research"
                className="w-full h-40 lg:h-48 object-cover rounded-lg"
              />
              <div className="space-y-2 text-xs lg:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Available for collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>Assistant Professor</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Career Timeline</CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-4 lg:space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-3 lg:gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    item.type === 'award' ? 'bg-amber-600 border-amber-600' :
                    item.type === 'position' ? 'bg-slate-600 border-slate-600' :
                    'bg-emerald-700 border-emerald-700'
                  }`} />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-12 lg:h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6 lg:pb-8 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 mb-1">
                    <span className="text-xs lg:text-sm px-2 py-1 bg-muted rounded self-start">{item.year}</span>
                    <Badge variant="outline" className="text-xs self-start lg:self-auto">
                      {item.type}
                    </Badge>
                  </div>
                  <h4 className="mb-1 text-sm lg:text-base">{item.title}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}