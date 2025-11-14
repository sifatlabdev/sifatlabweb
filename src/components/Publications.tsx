import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, FileText, ChevronDown, ChevronUp } from "lucide-react";
import {
  type Publication,
  type ContributionToScience,
  researchSectionData,
  contributions,
  otherPublications,
} from "../data/data";
import { Link } from "react-router-dom";

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className='hover:shadow-md transition-all duration-200 border-l-2 border-l-sage-green'>
      <CardHeader className='pb-4'>
        <CardTitle className='text-base cursor-pointer hover:text-primary transition-colors'>
          {publication.doi && publication.doi !== "N/A" ? (
            <Link
              to={publication.doi}
              target='_blank'
              rel='noopener noreferrer'
            >
              {publication.title}
            </Link>
          ) : (
            <span>{publication.title}</span>
          )}
        </CardTitle>
        <CardDescription className='text-sm mt-2'>
          <span className='text-sage-green'>{publication.authors}</span>
        </CardDescription>
        <div className='flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2'>
          <span className='text-primary'>{publication.journal}</span>
          <span>({publication.year})</span>
          <Badge
            variant='outline'
            className='border-primary text-primary text-xs'
          >
            {publication.citations} citations
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
          <span className='hover:text-sage-green cursor-pointer transition-colors'>
            DOI: {publication.doi}
          </span>
          <span>•</span>
          <span className='hover:text-sage-green cursor-pointer transition-colors'>
            PMID: {publication.pmid}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function ContributionSection({
  contribution,
}: {
  contribution: ContributionToScience;
}) {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const displayedPublications = showAll
    ? contribution.publications
    : contribution.publications.slice(0, initialCount);
  const hasMore = contribution.publications.length > initialCount;

  return (
    <div>
      {/* Research Area Description - Styled Differently */}
      <div className='mb-6 p-6 bg-gradient-to-br from-primary/5 to-sage-green/5 rounded-lg border-2 border-primary/20'>
        <p className='text-foreground mb-4 leading-relaxed'>
          {contribution.description}
        </p>
        <div>
          <h4 className='text-sm text-primary mb-3'>Key Achievements:</h4>
          <ul className='space-y-2'>
            {contribution.keyAchievements.map((achievement, idx) => (
              <li
                key={idx}
                className='text-sm text-muted-foreground flex items-start'
              >
                <span className='text-sage-green mr-2 mt-1'>•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Publications List */}
      <div className='space-y-4'>
        <h4 className='text-sm text-muted-foreground mb-3'>
          Selected Publications ({contribution.publications.length} total)
        </h4>
        {displayedPublications.map((pub, idx) => (
          <PublicationCard key={idx} publication={pub} />
        ))}

        {/* Show More/Less Button */}
        {hasMore && (
          <div className='text-center pt-4'>
            <Button
              variant='outline'
              onClick={() => setShowAll(!showAll)}
              className='border-sage-green text-sage-green hover:bg-sage-green cursor-pointer'
            >
              {showAll ? (
                <>
                  <ChevronUp className='w-4 h-4 mr-2' />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className='w-4 h-4 mr-2' />
                  Show {contribution.publications.length - initialCount} More
                  Publications
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Publications() {
  return (
    <section id='research' className='py-16 px-6 bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <div className='text-center mb-12'>
          <h2 className='mb-4 text-foreground'>{researchSectionData.title}</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {researchSectionData.description}
          </p>
        </div>

        <Accordion type='single' collapsible className='space-y-4'>
          {contributions.map((contribution) => (
            <AccordionItem
              key={contribution.id}
              value={contribution.id}
              className='border-2 border-border rounded-lg bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow'
            >
              <AccordionTrigger className='px-6 py-4 hover:no-underline hover:bg-secondary/30 transition-colors cursor-pointer'>
                <div className='flex items-start text-left w-full'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-foreground pr-4'>
                      {contribution.title}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className='px-6 pb-6'>
                <ContributionSection contribution={contribution} />
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Other Publications Section */}
          <AccordionItem
            value='other-publications'
            className='border-2 border-border rounded-lg bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow'
          >
            <AccordionTrigger className='px-6 py-4 hover:no-underline hover:bg-secondary/30 transition-colors cursor-pointer'>
              <div className='flex items-start text-left w-full'>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-foreground pr-4'>Other Publications</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-6'>
              <div className='space-y-4'>
                <p className='text-foreground mb-4 leading-relaxed'>
                  Additional peer-reviewed publications covering diverse topics
                  in computational biology, bioinformatics methodology, ethical
                  considerations in AI-driven healthcare, and open science
                  practices.
                </p>
                <h4 className='text-sm text-muted-foreground mb-3'>
                  Selected Publications ({otherPublications.length} total)
                </h4>
                {otherPublications.map((pub, idx) => (
                  <PublicationCard key={idx} publication={pub} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className='text-center mt-12'>
          <Link
            to='https://scholar.google.com/citations?user=Yxpb0w8AAAAJ&hl=en&inst=9752039510217644241&oi=ao'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              variant='outline'
              size='lg'
              className='border-primary text-primary hover:text-sage-green cursor-pointer'
            >
              <ExternalLink className='w-4 h-4 mr-2' />
              View Complete Publication List on Google Scholar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
