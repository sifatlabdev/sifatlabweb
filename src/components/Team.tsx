import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import {
  type TeamMember,
  labDirector,
  universityCollaborators,
  externalCollaborators,
  graduateResearchers,
  undergraduateResearchers,
  teamSectionData,
  joinUsData
} from "../data/data";

interface TeamMemberCardProps extends TeamMember {}

function TeamMemberCard({ name, title, image, specialty, url }: TeamMemberCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4 pb-4">
        <a 
          href={url || "#"} 
          className="font-semibold text-foreground mb-1 block hover:text-sage-green transition-colors cursor-pointer"
          onClick={(e) => {
            if (!url) e.preventDefault();
          }}
        >
          {name}
        </a>
        <p className="text-sm text-muted-foreground mb-2">{title}</p>
        <Badge variant="outline" className="text-xs border-sage-green text-sage-green">
          {specialty}
        </Badge>
      </CardContent>
    </Card>
  );
}

export function Team() {
  return (
    <section id="team" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            {teamSectionData.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {teamSectionData.description}
          </p>
        </div>

        {/* Lab Director */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-primary">Lab Director</h3>
          <div className="max-w-xs mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-primary">
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={labDirector.image}
                  alt={labDirector.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-4 pb-4 text-center">
                <a 
                  href={labDirector.url || "#"} 
                  className="font-semibold text-foreground mb-1 inline-block hover:text-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (!labDirector.url) e.preventDefault();
                  }}
                >
                  {labDirector.name}
                </a>
                <p className="text-sm text-muted-foreground mb-2">{labDirector.title}</p>
                <Badge variant="outline" className="text-xs border-primary text-primary">
                  {labDirector.specialty}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* University Collaborators */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-sage-green">University Collaborators</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {universityCollaborators.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* External Collaborators */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-sage-green">External Collaborators</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {externalCollaborators.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Graduate Researchers */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-primary">Graduate Researchers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {graduateResearchers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Undergraduate Researchers */}
        <div>
          <h3 className="mb-6 text-center text-primary">Undergraduate Researchers</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {undergraduateResearchers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
              {/* Join Us Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-beige/20 to-sage-green/10 rounded-lg p-8 border border-sage-green/20">
            <h3 className="mb-4 text-center text-foreground">{joinUsData.title}</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              {joinUsData.description}
            </p>

            {/* Open Positions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {joinUsData.openPositions.map((position, index) => (
                <Card key={index} className="border-sage-green/30 hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-base text-sage-green">{position.position}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Qualifications */}
            <div className="mb-6">
              <h4 className="text-center mb-4 text-primary">We're Looking For</h4>
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {joinUsData.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sage-green rounded-full mt-2 shrink-0"></span>
                    <span className="text-sm text-muted-foreground">{qual}</span>
                  </div>
                ))}
              </div>
                          <div className="bg-background rounded-lg p-6 max-w-3xl mx-auto">
              <h4 className="text-center mb-3 text-primary">How to Apply</h4>
              <p className="text-sm text-muted-foreground text-center">{joinUsData.howToApply}</p>
            </div>
            </div>
            </div>
            </div>
    </section>
  );
}