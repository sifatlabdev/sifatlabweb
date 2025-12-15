import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-nav-background/95 backdrop-blur-sm border-b border-nav-muted/30 z-50 flex-shrink-0'>
      <div className='container mx-auto px-6 py-4'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <div className='flex items-center'>
              <Link to='/'>
                {" "}
                <h1 className='text-2xl font-bold tracking-tight text-nav-foreground hover:text-sage-green transition-colors cursor-pointer'>
                  SIFAT Lab
                </h1>
              </Link>

              <div className='ml-2 w-2 h-2 bg-sage-green rounded-full'></div>
            </div>
            <div className='hidden md:flex items-center space-x-6'>
              <Link to='/about'>
                <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                  About Me
                </button>
              </Link>
              <Link to='/research'>
                <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                  Research
                </button>
              </Link>
                              <Link to='/publicengagement'>
                  <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                    Public Engagement
                  </button>
                </Link>
              <Link to='/publications'>
                <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                  Publications
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <Link to='/contact'>
            <Button className='hidden md:inline-flex bg-sage-green hover:bg-sage-green/90 text-nav-foreground cursor-pointer hover:cursor-pointer'>
              Get in Touch
            </Button>
          </Link>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className='md:hidden p-2 text-nav-foreground hover:text-sage-green transition-colors rounded-md'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-[300px] bg-nav-background border-nav-muted h-auto rounded-lg'
            >
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
              <SheetDescription className='sr-only'>
                Navigate through different sections of the portfolio
              </SheetDescription>
              <nav className='flex flex-col space-y-6 mt-6 items-center pb-6'>
                <Link to='/about'>
                  <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                    About Me
                  </button>
                </Link>
                <Link to='/research'>
                  <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                    Research
                  </button>
                </Link>
                                <Link to='/publicengagement'>
                  <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                    Public Engagement
                  </button>
                </Link>
                <Link to='/publications'>
                  <button className='text-nav-muted hover:text-nav-foreground transition-colors cursor-pointer'>
                    Publications
                  </button>
                </Link>


                <Link to='/contact' className='w-full flex justify-center'>
                  <Button className='bg-sage-green hover:bg-sage-green/90 text-nav-foreground mt-6 w-3/4'>
                    Get in Touch
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
