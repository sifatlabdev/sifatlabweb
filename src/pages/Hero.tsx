import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Hero() {

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Computational Biology Researcher
              </Badge>
              <h1 className="text-4xl md:text-5xl">
                Your Name, PhD
              </h1>
              <p className="text-xl text-muted-foreground">
                Researcher at Jefferson University
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              [A brief summary of your research interests and expertise.]
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">Machine Learning</Badge>
              <Badge variant="outline">Algorithms</Badge>
              <Badge variant="outline">Biology</Badge>
              <Badge variant="outline">Discovery</Badge>
            </div>
            <div className="flex gap-4">
              <Button >
                View Research
              </Button>
              <Button 
                variant="outline" 
              >
                Publications
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHJlc2VhcmNoZXIlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg4NTc3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Your Name"
                className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}