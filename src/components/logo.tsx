
import Link from 'next/link';
import { Building2 } from 'lucide-react'; // Using Building2 as a placeholder icon
import { cn } from '@/lib/utils';

interface LogoProps {
  isTransparent?: boolean;
}

export default function Logo({ isTransparent }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <Building2 className={cn(
        "h-8 w-8 transition-colors duration-300",
        isTransparent
          ? "text-primary md:text-white group-hover:text-accent md:group-hover:text-gray-300" // Mobile: primary, Desktop: white
          : "text-primary group-hover:text-accent" // Scrolled: primary
      )} />
      <span className={cn(
        "text-2xl font-bold transition-colors duration-300",
        isTransparent
          ? "text-foreground md:text-white group-hover:text-accent md:group-hover:text-gray-300" // Mobile: foreground, Desktop: white
          : "text-foreground group-hover:text-accent" // Scrolled: foreground
      )}>
        SquareGroup
      </span>
    </Link>
  );
}
