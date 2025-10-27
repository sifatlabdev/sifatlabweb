import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { aboutData, education, experience, heroData } from "../data/data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4 bg-sage-green/20 text-primary border-sage-green">
                {heroData.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl text-foreground">
                {heroData.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {heroData.title}
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {heroData.bio}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {heroData.expertiseTags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('research')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                View Research
              </Button>
              <Button 
                onClick={() => scrollToSection('publications')}
                className="bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer"
              >
                Publications
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sage-green/20 to-primary/20 rounded-full blur-xl"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-sage-green/10 to-primary/10 p-1">
                <ImageWithFallback
                  src={heroData.image}
                  alt={heroData.name}
                  className="w-full h-full rounded-full object-cover border-2 border-sage-green/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function About() {
  return (
    <>
    <Hero />
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
    </>
  );
}