import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, MapPin } from "lucide-react";
import { aboutData, education, experience } from "../data/data";

export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {aboutData.description}
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
          </div>

          <div className="space-y-8">
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
        </div>
      </div>
    </section>
  );
}