import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Astrophysics",
    institution: "Harvard University",
    year: "2021",
    description: "Dissertation: Dark Matter Distribution in Spiral Galaxies"
  },
  {
    degree: "M.S. in Physics",
    institution: "University of Cambridge",
    year: "2016",
    description: "Focus: Quantum Field Theory and Cosmology"
  },
  {
    degree: "B.S. in Applied Mathematics",
    institution: "Princeton University",
    year: "2014",
    description: "Graduated with High Honors, Dean’s List all semesters"
  }
];


const awards = [
  "Breakthrough Prize in Life Sciences (2024)",
  "Outstanding Research Award - International Conference on AI in Medicine (2023)",
  "Excellence in Data Science Award - IEEE (2021)",
  "Rising Innovator Award - Forbes Science & Healthcare (2020)"
];

const expertise = [
  "Deep Learning for Healthcare",
  "Systems Biology",
  "Computational Neuroscience",
  "Structural Bioinformatics",
  "Evolutionary Genomics",
  "Data Visualization & Modeling",
  "High-Performance Computing",
  "Clinical Decision Support Systems"
];

export function About() {
  return (
    <section id="about" className="pt-24 pb-16 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            [Brief bio information about yourself/research can go here]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-muted pl-4 pb-4">
                  <h4 className="mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-1">
                    {edu.institution} • {edu.year}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Awards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Awards & Honors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm">{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Expertise */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Areas of Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teaching & Mentoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Teaching & Mentoring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-1">Graduate Students Supervised</h4>
                <p className="text-sm text-muted-foreground">10 Ph.D. students, 8 M.S. students</p>
              </div>
              <div>
                <h4 className="mb-1">Courses Taught</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Computational Biology Types</li>
                  <li>• Machine Learning for Beginners</li>
                  <li>• Universal Algorithms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}