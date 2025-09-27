import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="tracking-tight">Your Name</h1>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('research')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('publications')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
}