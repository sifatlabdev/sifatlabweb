import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-nav-background/95 backdrop-blur-sm border-b border-nav-muted/30 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight text-nav-foreground hover:text-sage-green transition-colors cursor-pointer" onClick={() => scrollToSection('hero')}>
                Nicole Alba, PhD
              </h1>
              <div className="ml-2 w-2 h-2 bg-sage-green rounded-full"></div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('research')}
                className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('publications')}
                className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Desktop Contact Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex bg-sage-green hover:bg-sage-green/90 text-nav-foreground"
          >
            Get in Touch
          </Button>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-nav-foreground hover:text-sage-green transition-colors rounded-md">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-nav-background border-nav-muted h-auto rounded-lg">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigate through different sections of the portfolio</SheetDescription>
              <nav className="flex flex-col space-y-6 mt-6 items-center pb-6">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('research')}
                  className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
                >
                  Research
                </button>
                <button 
                  onClick={() => scrollToSection('publications')}
                  className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
                >
                  Publications
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-sage-green hover:bg-sage-green/90 text-nav-foreground mt-6 w-3/4"
                >
                  Get in Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}