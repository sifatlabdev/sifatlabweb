import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Users, BookOpen } from "lucide-react";
import { teachingExperience, leadershipData } from "../data/data";

export function Teaching() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="teaching" className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            Teaching & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to fostering the next generation of computational biologists through 
            innovative teaching and collaborative mentorship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Leadership & Mentorship */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sage-green">
                <Users className="w-5 h-5" />
                Leadership & Mentorship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {leadershipData.description}
              </p>
              <div className="space-y-3 mb-4">
                {leadershipData.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className={`w-2 h-2 ${index % 2 === 0 ? 'bg-sage-green' : 'bg-primary'} rounded-full`}></span>
                    <span className="text-sm">{stat}</span>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <Button 
                  onClick={() => scrollToSection('team')}
                  variant="outline" 
                  className="w-full border-sage-green text-sage-green hover:bg-sage-green cursor-pointer"
                >
                  Meet My Team
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {leadershipData.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teaching Experience */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BookOpen className="w-5 h-5" />
                Teaching Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teachingExperience.map((course, index) => (
                <div key={index} className="border-l-2 border-l-sage-green pl-4 py-2">
                  <h4 className="font-semibold">{course.course}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs border-primary text-primary">
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}