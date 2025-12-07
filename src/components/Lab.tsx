import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Target,
  Users,
  Microscope,
  Lightbulb,
  ExternalLink,
  FileText,
} from "lucide-react";

import { chenLabData, joinUsData } from "../data/data";

import { Team } from "./Team";
import { Research } from "./Research";

export function Lab() {
  return (
    <>
      <section id='chen-lab' className='py-16 px-6 bg-background'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='mb-4 text-foreground'>{chenLabData.title}</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              {chenLabData.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className='mb-12 rounded-lg overflow-hidden shadow-lg'>
            <ImageWithFallback
              src={chenLabData.heroImage}
              alt='Alba Lab Research Team'
              className='w-full h-64 md:h-96 object-cover'
            />
          </div>

          {/* Four Key Sections */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Who We Are */}
            <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-sage-green'>
                  <Users className='w-5 h-5' />
                  Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  {chenLabData.whoWeAre.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {chenLabData.whoWeAre.stats.map((stat) => (
                    <Badge
                      key={stat}
                      variant='outline'
                      className='border-sage-green text-sage-green'
                    >
                      {stat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Mission */}
            <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-primary'>
                  <Target className='w-5 h-5' />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground leading-relaxed'>
                  {chenLabData.mission}
                </p>
              </CardContent>
            </Card>

            {/* Main Focus */}
            <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary cursor-pointer'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-primary'>
                  <Microscope className='w-5 h-5' />
                  Main Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground leading-relaxed'>
                  {chenLabData.mainFocus.join(". ")}.
                </p>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-sage-green cursor-pointer'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-sage-green'>
                  <Lightbulb className='w-5 h-5' />
                  What We Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {chenLabData.whatWeDo.map((item, index) => (
                    <div key={index} className='flex items-start gap-2'>
                      <span
                        className={`w-2 h-2 ${
                          index % 2 === 0 ? "bg-sage-green" : "bg-primary"
                        } rounded-full mt-2 shrink-0`}
                      ></span>
                      <span className='text-sm text-muted-foreground'>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jefferson Projects */}
          <Research />
        </div>

        <Team />

        {/* Join Us Section */}
        <div className='mt-12 px-6 py-12 container mx-auto'>
          <div className='bg-foreground rounded-lg p-6 md:p-12 border border-sage-green/20'>
            <h3 className='mb-4 text-center text-foreground'>
              {joinUsData.title}
            </h3>
            <p className='text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-sm md:text-base leading-relaxed px-4'>
              {joinUsData.description}
            </p>

            {/* How to Apply */}
            <div className='bg-background rounded-lg p-4 md:p-6 max-w-3xl mx-auto'>
              <h4 className='text-center mb-3 text-primary text-sm md:text-base'>
                How to Apply
              </h4>
              <p className='text-sm text-muted-foreground text-center px-2'>
                {joinUsData.howToApply}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
