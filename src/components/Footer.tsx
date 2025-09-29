export function Footer() {
  return (
    <footer className="py-8 px-6 bg-nav-background border-t border-nav-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-nav-muted">
              © 2024 Nicole Alba, PhD. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-nav-muted">
            <a href="#" className="hover:text-nav-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-nav-foreground transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-nav-foreground transition-colors">
              Academic CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}