import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Building dreams, crafting realities. Your trusted partner in construction and real estate.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
            </div>
            <p className="text-sm text-muted-foreground">123 Construction Ave, Buildtown, BT 45678</p>
            <p className="text-sm text-muted-foreground">Email: info@estateview.com</p>
            <p className="text-sm text-muted-foreground">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} EstateView. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
