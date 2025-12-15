import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users, Presentation } from "lucide-react";
import { publicEngagementSectionData, publicEngagementData } from "../data/data";

function EngagementCard({ item }: { item: any }) {
  return (
    <Card className="hover:shadow-md transition-all duration-200 border-l-2 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="text-base mb-2">{item.title}</CardTitle>
            {item.type && (
              <Badge 
                className="bg-sage-green text-white border-0 text-xs mb-2"
              >
                {item.type}
              </Badge>
            )}
          </div>
        </div>
        <div className="text-sm text-sage-green">
          <Users className="w-3 h-3 inline mr-1" />
          {item.authors}
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Presentation className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
          <span className="flex-1">{item.venue}</span>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-sage-green" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-sage-green" />
            <span>{item.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PublicEngagement() {
  return (
    <section id="public-engagement" className="py-16 px-6 bg-beige/10 mt-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            {publicEngagementSectionData.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {publicEngagementSectionData.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src={publicEngagementSectionData.heroImage}
            alt="Public Engagement and Conference Presentations"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Engagement Items by Year */}
        <div className="space-y-12">
          {publicEngagementData.map((yearData) => (
            <div key={yearData.year}>
              <div className="mb-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-foreground">{yearData.year}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-sage-green/50 to-transparent"></div>
                  <Badge 
                    variant="outline" 
                    className="border-sage-green text-sage-green"
                  >
                    {yearData.items.length} {yearData.items.length === 1 ? 'Event' : 'Events'}
                  </Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.items.map((item) => (
                  <EngagementCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
