export function Footer() {
  return (
    <footer className="py-8 px-6 border-t bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Your Name PhD. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Academic CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}