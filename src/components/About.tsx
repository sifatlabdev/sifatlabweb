import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GraduationCap, MapPin, Users, BookOpen } from "lucide-react";
import {
  aboutData,
  education,
  experience,
  teachingExperience,
  leadershipData,
  heroData,
} from "../data/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='hero' className='pt-24 pb-16 px-6'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Personal Statement */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <Badge
                variant='secondary'
                className='bg-sage-green/20 text-primary border-sage-green'
              >
                {heroData.badge}
              </Badge>
              <h1 className='text-3xl md:text-4xl text-foreground h1fix'>
                My Work
              </h1>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {heroData.bio}
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mb-6'>
              {heroData.expertiseTags.map((tag) => (
                <Badge
                  key={tag}
                  variant='outline'
                  className='border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer'
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className='flex gap-4'>
              <Button
                onClick={() => scrollToSection("research")}
                className='bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'
              >
                View Research
              </Button>
              <Button
                onClick={() => scrollToSection("publications")}
                className='bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer'
              >
                Publications
              </Button>
            </div>
          </div>

          {/* Right Side - Image with Name and Title Below */}
          <div className='flex flex-col items-center gap-6'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-sage-green/20 to-primary/20 rounded-full blur-xl'></div>
              <div className='relative w-80 h-80 rounded-full bg-gradient-to-br from-sage-green/10 to-primary/10 p-1'>
                <ImageWithFallback
                  src={heroData.image}
                  alt={heroData.name}
                  className='w-full h-full rounded-full object-cover border-2 border-sage-green/30 shadow-2xl'
                />
              </div>
            </div>
            <div className='text-center space-y-2'>
              <h2 className='text-2xl md:text-3xl text-foreground'>
                {heroData.name}
              </h2>
              <p className='text-lg text-muted-foreground'>{heroData.title}</p>
              <a
                href={heroData.facultyPageUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 text-sm text-sage-green hover:text-primary transition-colors cursor-pointer'
              >
                View Faculty Page
                <ExternalLink className='w-3 h-3' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <section id='about' className='py-16 px-6 bg-secondary/30'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='mb-4 text-foreground'>About {aboutData.name}</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              {aboutData.description}
            </p>
          </div>

          <Tabs
            defaultValue='education-experience'
            className='max-w-6xl mx-auto'
          >
            <TabsList className='grid w-full grid-cols-2 mb-8 h-12 bg-secondary/50 p-1'>
              <TabsTrigger
                value='education-experience'
                className='cursor-pointer data-[state=active]:bg-sage-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200'
              >
                Education & Experience
              </TabsTrigger>
              <TabsTrigger
                value='mentorship-teaching'
                className='cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200'
              >
                Mentorship & Teaching
              </TabsTrigger>
            </TabsList>

            {/* Education & Experience Tab */}
            <TabsContent value='education-experience'>
              <div className='grid lg:grid-cols-2 gap-8'>
                {/* Education Card */}
                <Card className='border-l-4 border-l-sage-green'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-sage-green'>
                      <GraduationCap className='w-5 h-5' />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-l-primary pl-4 py-2'
                      >
                        <h4 className='text-lg'>{edu.degree}</h4>
                        <p className='text-primary'>{edu.institution}</p>
                        <div className='flex items-center gap-2 mt-1'>
                          <Badge
                            variant='outline'
                            className='border-sage-green text-sage-green'
                          >
                            {edu.year}
                          </Badge>
                        </div>
                        <p className='text-sm text-muted-foreground mt-2'>
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Experience Card */}
                <Card className='border-l-4 border-l-primary'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-primary'>
                      <MapPin className='w-5 h-5' />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-l-sage-green pl-4 py-2'
                      >
                        <h4 className='text-lg'>{exp.position}</h4>
                        <p className='text-sage-green'>{exp.institution}</p>
                        <div className='flex items-center gap-2 mt-1'>
                          <Badge
                            variant='outline'
                            className='border-primary text-primary'
                          >
                            {exp.period}
                          </Badge>
                        </div>
                        <p className='text-sm text-muted-foreground mt-2'>
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mentorship & Teaching Tab */}
            <TabsContent value='mentorship-teaching'>
              <div className='grid lg:grid-cols-2 gap-8'>
                {/* Mentorship Card */}
                <Card className='border-l-4 border-l-sage-green'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-sage-green'>
                      <Users className='w-5 h-5' />
                      Leadership & Mentorship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground leading-relaxed mb-6'>
                      {leadershipData.description}
                    </p>

                    <div className='mb-6'>
                      <h4 className='text-sm mb-4 text-primary'>
                        Key Achievements
                      </h4>
                      <div className='space-y-3'>
                        {leadershipData.stats.map((stat, index) => (
                          <div key={index} className='flex items-start gap-2'>
                            <span
                              className={`w-2 h-2 ${
                                index % 2 === 0 ? "bg-sage-green" : "bg-primary"
                              } rounded-full mt-2 shrink-0`}
                            ></span>
                            <span className='text-sm text-muted-foreground'>
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='mb-6'>
                      <Button
                        onClick={() => scrollToSection("team")}
                        className='w-full bg-sage-green hover:bg-sage-green/90 text-white'
                      >
                        Meet My Team
                      </Button>
                    </div>

                    <div>
                      <h4 className='text-sm mb-3 text-primary'>Focus Areas</h4>
                      <div className='flex flex-wrap gap-2'>
                        {leadershipData.badges.map((badge) => (
                          <Badge
                            key={badge}
                            variant='outline'
                            className='border-sage-green text-sage-green'
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Teaching Card */}
                <Card className='border-l-4 border-l-primary'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2 text-primary'>
                      <BookOpen className='w-5 h-5' />
                      Teaching Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    {teachingExperience.map((course, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-l-sage-green pl-4 py-2'
                      >
                        <h4 className='text-lg'>{course.course}</h4>
                        <div className='flex items-center gap-2 mt-1'>
                          <Badge className='bg-sage-green text-white'>
                            {course.level}
                          </Badge>
                          <span className='text-sm text-muted-foreground'>
                            {course.period}
                          </span>
                        </div>
                        <p className='text-sm text-muted-foreground mt-2'>
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
