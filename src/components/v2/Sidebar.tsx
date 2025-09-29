import { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { 
  Home, 
  User, 
  FileText, 
  Beaker, 
  Mail, 
  ExternalLink,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobile?: boolean;
}

export function Sidebar({ activeSection, onSectionChange, isMobile = false }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'research', label: 'Research', icon: Beaker },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className={`${isMobile ? 'h-full' : 'fixed left-0 top-0 h-screen'} w-80 bg-white border-r border-slate-200 flex flex-col shadow-sm`}>
      {/* Profile Section */}
      <div className="p-8 border-b border-slate-200">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHJlc2VhcmNoZXIlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg4NTc3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl mb-1">Nicole Alba, PhD</h2>
            <p className="text-muted-foreground text-sm mb-3">
              Computational Biology Researcher
            </p>
            <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
              Available for Collaboration
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-slate-200 text-slate-800 border border-slate-300'
                    : 'hover:bg-slate-50 hover:text-slate-700 text-slate-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Social Links */}
      <div className="p-6 border-t border-slate-200">
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Twitter className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}