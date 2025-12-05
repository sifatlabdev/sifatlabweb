import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import {
  type TeamMember,
  labDirector,
  universityCollaborators,
  externalCollaborators,
  graduateResearchers,
  teamSectionData,
} from "../data/data";

interface TeamMemberCardProps extends TeamMember {
  category?: string;
}

function TeamMemberCard({
  name,
  title,
  image,
  specialty,
  url,
  category,
}: TeamMemberCardProps) {
  const categoryLabel = category ? `${category} Collaborator` : null;

  return (
    <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
      <div className='aspect-square relative overflow-hidden'>
        <ImageWithFallback
          src={image}
          alt={name}
          className='w-full h-full object-cover'
        />
      </div>

      <CardContent className='pt-4 pb-4'>
        {/* Category badge above the name */}
        {categoryLabel && (
          <div className='flex justify-center mb-2'>
            <Badge
              variant='outline'
              className='text-xs border-sage-green text-sage-green px-2'
            >
              {categoryLabel}
            </Badge>
          </div>
        )}

        <div className='flex items-center justify-center gap-2'>
          <a
            href={url || "#"}
            className='font-semibold text-foreground mb-1 inline-block hover:text-sage-green transition-colors cursor-pointer text-center'
            onClick={(e) => {
              if (!url) e.preventDefault();
            }}
          >
            {name}
          </a>
        </div>

        <p className='text-sm text-muted-foreground mb-2 text-center'>
          {title}
        </p>

        <div className='flex flex-wrap justify-center gap-2'>
          {(Array.isArray(specialty) ? specialty : [specialty]).map((s, i) => (
            <Badge
              key={i}
              variant='outline'
              className='text-xs border-sage-green text-sage-green'
            >
              {String(s).trim()}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Team() {
  // Combine collaborators into a single list, preserving category info
  const allCollaborators: Array<TeamMember & { category: string }> = [
    ...universityCollaborators.map((m) => ({ ...m, category: "University" })),
    ...externalCollaborators.map((m) => ({ ...m, category: "External" })),
    ...graduateResearchers.map((m) => ({ ...m, category: "Graduate" })),
  ];

  return (
    <section id='team' className='py-16 px-6 bg-secondary/30'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='mb-4 text-foreground'>{teamSectionData.title}</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {teamSectionData.description}
          </p>
        </div>

        {/* Lab Director */}
        <div className='mb-16'>
          <h3 className='mb-6 text-center text-primary'>Lab Director</h3>
          <div className='max-w-xs mx-auto'>
            <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-primary'>
              <div className='aspect-square relative overflow-hidden'>
                <ImageWithFallback
                  src={labDirector.image}
                  alt={labDirector.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <CardContent className='pt-4 pb-4 text-center'>
                <a
                  href={labDirector.url || "#"}
                  className='font-semibold text-foreground mb-1 inline-block hover:text-primary transition-colors cursor-pointer'
                  onClick={(e) => {
                    if (!labDirector.url) e.preventDefault();
                  }}
                >
                  {labDirector.name}
                </a>
                <p className='text-sm text-muted-foreground mb-2'>
                  {labDirector.title}
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  {(Array.isArray(labDirector.specialty)
                    ? labDirector.specialty
                    : [labDirector.specialty]
                  ).map((s, i) => (
                    <Badge
                      key={i}
                      variant='outline'
                      className='text-xs border-primary text-primary'
                    >
                      {String(s).trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Combined Collaborators */}
        <div className='mb-16'>
          <h3 className='mb-6 text-center text-sage-green'>Collaborators</h3>

          {/* Responsive grid: adjust columns at breakpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {allCollaborators.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
