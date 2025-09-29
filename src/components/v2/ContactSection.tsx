import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Clock,
  ExternalLink,
  Send,
  MessageSquare,
  Users
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sarah.chen@university.edu",
    description: "Primary contact method",
    available: true
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    description: "Office hours only",
    available: true
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Science Building, Room 4C12",
    description: "University Campus",
    available: true
  },
  {
    icon: Calendar,
    label: "Office Hours",
    value: "Tuesdays & Thursdays",
    description: "2:00-4:00 PM EST",
    available: true
  }
];

const collaborationAreas = [
  "Machine Learning in Biology",
  "Drug Discovery Partnerships",
  "Genomic Data Analysis",
  "Single-Cell Research",
  "Precision Medicine",
  "Bioinformatics Methods"
];

const upcomingEvents = [
  {
    title: "ISMB 2024 Conference",
    date: "July 15-19, 2024",
    location: "Montreal, Canada",
    type: "Speaking"
  },
  {
    title: "NIH Study Section",
    date: "August 5-6, 2024",
    location: "Bethesda, MD",
    type: "Panel"
  },
  {
    title: "AI in Medicine Symposium",
    date: "September 20, 2024",
    location: "Boston, MA",
    type: "Keynote"
  }
];

export function ContactSection() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Contact Information */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <Card>
          <CardHeader className="p-4 lg:p-6">
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
              <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="flex items-start gap-3 lg:gap-4">
                  <div className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-slate-100 rounded-lg border shrink-0">
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium">{method.label}</h4>
                      {method.available && (
                        <Badge variant="secondary" className="text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm mb-1">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4 lg:p-6">
            <CardTitle className="text-base lg:text-lg">Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="p-4 lg:p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm">Subject</Label>
                <Input id="subject" placeholder="Research collaboration opportunity" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="I'm interested in discussing potential collaboration opportunities..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Collaboration Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Collaboration Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              I'm always interested in collaborating with researchers, industry partners, 
              and students who share interests in computational biology and precision medicine.
            </p>
            <div>
              <h4 className="mb-3 text-sm lg:text-base">Areas of Interest</h4>
              <div className="flex flex-wrap gap-1 lg:gap-2">
                {collaborationAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="text-xs">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h5 className="text-sm font-medium">For Researchers</h5>
                <ul className="text-xs lg:text-sm text-muted-foreground space-y-1">
                  <li>• Joint grant applications</li>
                  <li>• Data sharing partnerships</li>
                  <li>• Method development collaborations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="text-sm font-medium">For Students</h5>
                <ul className="text-xs lg:text-sm text-muted-foreground space-y-1">
                  <li>• PhD positions available</li>
                  <li>• Postdoc opportunities</li>
                  <li>• Summer research programs</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-3 lg:space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg border border-slate-200 shrink-0">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 mb-1">
                    <h4 className="text-sm font-medium">{event.title}</h4>
                    <Badge variant="outline" className="text-xs self-start lg:self-auto">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs lg:text-sm text-muted-foreground mb-1">{event.date}</p>
                  <p className="text-xs text-muted-foreground">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Button variant="outline" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Calendar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Social & Academic Links */}
      <Card>
        <CardHeader>
          <CardTitle>Academic & Social Profiles</CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <Button variant="outline" size="sm" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              Google Scholar
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              ORCID
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <ExternalLink className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}