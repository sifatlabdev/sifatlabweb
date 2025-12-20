import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  publicEngagementSectionData,
  publicEngagementData,
} from "../data/data";

function EngagementListItem({ item }: { item: any }) {
  return (
    <div className="py-4 border-b border-sage-green/20 last:border-b-0 hover:bg-sage-green/5 transition-colors px-4 -mx-4 rounded">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h4 className="text-base text-foreground flex-1">{item.title}</h4>
        {item.type && (
          <Badge className="bg-sage-green text-white border-0 text-xs">
            {item.type}
          </Badge>
        )}
      </div>

      <div className="text-sm text-sage-green mb-2">
        <Users className="w-3 h-3 inline mr-1" />
        {item.authors}
      </div>

      <div className="text-sm text-muted-foreground mb-2">{item.venue}</div>

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
    </div>
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

        {/* Two-Column Layout: Images on Left, List on Right (Images first on mobile) */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Engagement List by Year */}
          <div className="space-y-8 order-last lg:order-first">
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
                      {yearData.items.length}{" "}
                      {yearData.items.length === 1 ? "Event" : "Events"}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-0">
                  {yearData.items.map((item) => (
                    <EngagementListItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Hero Images Stacked */}
          <div className="space-y-6 lg:sticky lg:top-24 order-first lg:order-last">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={publicEngagementSectionData.pubImage}
                alt="Academic Conference Presentations"
                className="w-full h-64 md:h-[400px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={publicEngagementSectionData.pubImage2}
                alt="Research Workshops and Collaboration"
                className="w-full h-64 md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
