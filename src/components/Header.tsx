import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="tracking-tight"><Link to='/'>Your Name</Link></h1>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/research"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Research
              </Link>
              <Link
                to="/publications"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Publications
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <Link
              to="/contact"
            >
              Get in Touch
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}