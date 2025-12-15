import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import {
  education,
  experience,
  teachingExperience,
  heroData,
} from "../data/data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id='hero' className='pt-32 pb-16 px-6'>
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
              <Link to='/research'>
                <Button className='bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'>
                  View Research
                </Button>
              </Link>
              <Link to='/publications'>
                <Button className='bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer'>
                  Publications
                </Button>
              </Link>
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
              <h2 className='text-lg md:text-xl text-foreground'>
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
  return (
    <>
      <Hero />
      <section id='about' className='py-16 px-6 bg-secondary/30 mt-8'>
        <div className='container mx-auto max-w-6xl'>
          {/* Section Title */}
          <div className='text-center mb-12'>
            <h2 className='mb-4 text-foreground'>Education and Experience</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              A summary of my academic background and professional experience in
              health equity research.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Left Column - Education and Teaching Stacked */}
            <div className='flex flex-col gap-8'>
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

              {/* Teaching Experience Card */}
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

            {/* Experience Card - Right Column */}
            <Card className='border-l-4 border-l-primary'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-primary'>
                  <MapPin className='w-5 h-5' />
                  Work Experience
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
        </div>
      </section>
    </>
  );
}
