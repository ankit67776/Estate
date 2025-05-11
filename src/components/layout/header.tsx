"use client";

import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
  <>
    <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={onItemClick}>
      Home
    </Link>
    <Link href="/#projects" className="text-foreground hover:text-primary transition-colors" onClick={onItemClick}>
      Projects
    </Link>
    <Link href="/#stats" className="text-foreground hover:text-primary transition-colors" onClick={onItemClick}>
      Our Stats
    </Link>
    <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors" onClick={onItemClick}>
      Testimonials
    </Link>
    <Link href="/#contact" className="text-foreground hover:text-primary transition-colors" onClick={onItemClick}>
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container-max h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>
        <div className="flex items-center">
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6 bg-background">
                <div className="flex flex-col space-y-6 mt-8">
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
