import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

const stats = [
  { label: "Publications", value: "47", icon: BookOpen, color: "text-slate-600" },
  { label: "Citations", value: "1,234", icon: TrendingUp, color: "text-slate-600" },
  { label: "Collaborators", value: "28", icon: Users, color: "text-slate-600" },
  { label: "Awards", value: "12", icon: Award, color: "text-slate-600" },
];

const recentNews = [
  {
    title: "New Nature Paper Published",
    description: "Our latest work on AI-driven drug discovery published in Nature Biotechnology",
    date: "2 days ago",
    type: "Publication"
  },
  {
    title: "NSF CAREER Award Received",
    description: "Honored to receive the NSF CAREER Award for computational biology research",
    date: "1 week ago",
    type: "Award"
  },
  {
    title: "Keynote at ISMB 2024",
    description: "Presenting keynote on machine learning in genomics at ISMB conference",
    date: "2 weeks ago",
    type: "Speaking"
  }
];

export function HomeSection() {
  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <Card className="overflow-hidden border-2">
        <div className="relative h-48 lg:h-64 bg-slate-50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU4ODA3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Research workspace"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-700/40" />
          <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white">
            <h1 className="text-2xl lg:text-3xl mb-2">Nicole Alba, PhD</h1>
            <p className="text-base lg:text-lg mb-3 lg:mb-4 max-w-lg">
              Computational Biology Research
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-white/90 text-slate-700 border-0 text-xs lg:text-sm">
                Computational Biology
              </Badge>
              <Badge variant="secondary" className="bg-white/90 text-slate-700 border-0 text-xs lg:text-sm">
                Machine Learning
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl lg:text-2xl mb-1">{stat.value}</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent News */}
      <Card>
        <CardContent className="p-4 lg:p-6">
          <h3 className="text-base lg:text-lg mb-4">Recent Updates</h3>
          <div className="space-y-3 lg:space-y-4">
            {recentNews.map((news, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg hover:bg-accent/30 transition-colors border-l-2 border-l-slate-300">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1 flex-col lg:flex-row lg:items-center">
                    <h4 className="text-sm font-medium">{news.title}</h4>
                    <Badge variant="outline" className="text-xs border-slate-300 self-start lg:self-auto">
                      {news.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{news.description}</p>
                  <p className="text-xs text-muted-foreground">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4 lg:p-6">
          <h3 className="text-base lg:text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col lg:flex-col justify-center">
              <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
              <span className="text-sm">View Publications</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col lg:flex-col justify-center">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
              <span className="text-sm">Collaboration</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}