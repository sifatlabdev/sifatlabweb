import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4 bg-sage-green/20 text-primary border-sage-green">
                Computational Biology Researcher
              </Badge>
              <h1 className="text-4xl md:text-5xl text-foreground">
                Nicole Alba, PhD
              </h1>
              <p className="text-xl text-muted-foreground">
                Assistant Professor of Bioinformatics
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
I design algorithms for interpreting biological data and uncovering 
patterns in cellular processes. My work centers on artificial intelligence 
applications in personalized healthcare and therapeutic development.

            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                Genomics
              </Badge>
              <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                Bioinformatics
              </Badge>
              <Badge variant="outline" className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white cursor-pointer">
                Drug Discovery
              </Badge>
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('research')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                View Research
              </Button>
              <Button 
                onClick={() => scrollToSection('publications')}
                className="bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer"
              >
                Publications
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sage-green/20 to-primary/20 rounded-full blur-xl"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-sage-green/10 to-primary/10 p-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHJlc2VhcmNoZXIlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg4NTc3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nicole Alba, PhD"
                  className="w-full h-full rounded-full object-cover border-2 border-sage-green/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}