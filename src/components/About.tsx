import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Data Science and Systems Biology",
    institution: "Harvard University",
    year: "2019",
    description: "Dissertation: Deep Learning Models for Protein Structure Prediction"
  },
  {
    degree: "M.S. in Applied Mathematics",
    institution: "Carnegie Mellon University",
    year: "2015",
    description: "Focus: Optimization Algorithms and Computational Biology"
  },
  {
    degree: "B.S. in Biochemistry and Computer Science",
    institution: "University of Michigan, Ann Arbor",
    year: "2013",
    description: "Graduated with High Honors, Dean’s List"
  }
];

const experience = [
  {
    position: "Associate Professor",
    institution: "Johns Hopkins University",
    period: "2020 - Present",
    description: "Conducting interdisciplinary research in genomics, AI, and personalized medicine"
  },
  {
    position: "Postdoctoral Researcher",
    institution: "Cold Spring Harbor Laboratory",
    period: "2019 - 2020",
    description: "Built computational frameworks for single-cell RNA sequencing analysis"
  },
  {
    position: "Research Scientist Intern",
    institution: "Pfizer",
    period: "Summer 2016",
    description: "Developed predictive models for drug response in oncology trials"
  }
];

const awards = [
  {
    title: "NSF CAREER Award",
    year: "2024",
    organization: "National Science Foundation"
  },
  {
    title: "Excellence in Bioinformatics Award",
    year: "2021",
    organization: "American Society for Biochemistry and Molecular Biology"
  },
  {
    title: "Top 10 Innovators Under 35",
    year: "2020",
    organization: "MIT Technology Review"
  }
];


export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground text-3xl md:text-6xl font-bold">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A computational mathematician passionate about leveraging AI and machine learning to solve 
            complex mathematical problems and advance math.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-green">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-l-primary pl-4 py-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year} • {edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-l-sage-green pl-4 py-2">
                    <h4 className="font-semibold">{exp.position}</h4>
                    <p className="text-sage-green font-medium">{exp.institution}</p>
                    <p className="text-sm text-muted-foreground">{exp.period} • {exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-2 border-l-sage-green pl-4 py-2">
                    <h4 className="font-semibold">{award.title}</h4>
                    <p className="text-sage-green font-medium">{award.organization}</p>
                    <Badge variant="outline" className="mt-1 border-primary text-primary cursor-pointer">
                      {award.year}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sage-green">Leadership & Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am passionate about fostering the next generation of computational mathematicians through 
                  hands-on mentorship and collaborative research environments. I currently mentor 12 graduate 
                  students and 4 postdoctoral fellows, emphasizing both technical excellence and scientific integrity.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sage-green rounded-full"></span>
                    <span className="text-sm">12 Graduate Students Currently Mentored</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">4 Active Postdoctoral Fellows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sage-green rounded-full"></span>
                    <span className="text-sm">Editorial Board Member, 3 Journals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">Program Committee, Major Conferences</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                    Student Mentorship
                  </Badge>
                  <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                    Diversity & Inclusion
                  </Badge>
                  <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                    Scientific Leadership
                  </Badge>
                  <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                    Community Building
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}