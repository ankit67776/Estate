
"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavLinks = ({ onItemClick, isTransparent }: { onItemClick?: () => void; isTransparent?: boolean }) => (
  <>
    <Link 
      href="/" 
      className={cn(
        "transition-colors",
        isTransparent ? "text-white hover:text-gray-300" : "text-foreground hover:text-primary"
      )} 
      onClick={onItemClick}
    >
      Home
    </Link>
    <Link 
      href="/#projects" 
      className={cn(
        "transition-colors",
        isTransparent ? "text-white hover:text-gray-300" : "text-foreground hover:text-primary"
      )} 
      onClick={onItemClick}
    >
      Projects
    </Link>
    <Link 
      href="/#stats" 
      className={cn(
        "transition-colors",
        isTransparent ? "text-white hover:text-gray-300" : "text-foreground hover:text-primary"
      )} 
      onClick={onItemClick}
    >
      Our Stats
    </Link>
    <Link 
      href="/#testimonials" 
      className={cn(
        "transition-colors",
        isTransparent ? "text-white hover:text-gray-300" : "text-foreground hover:text-primary"
      )} 
      onClick={onItemClick}
    >
      Testimonials
    </Link>
    <Link 
      href="/#contact" 
      className={cn(
        "transition-colors",
        isTransparent ? "text-white hover:text-gray-300" : "text-foreground hover:text-primary"
      )} 
      onClick={onItemClick}
    >
      Contact
    </Link>
  </>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeaderTransparent = !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container-max h-20 flex items-center justify-between">
        <Logo isTransparent={isHeaderTransparent} />
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks isTransparent={isHeaderTransparent} />
        </nav>
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className={cn("h-6 w-6", isHeaderTransparent ? "text-white" : "text-foreground")} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6 bg-background">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* NavLinks in mobile menu will use default (non-transparent) styling */}
                  <NavLinks onItemClick={() => setMobileMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
