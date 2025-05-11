import Link from 'next/link';
import { Building2 } from 'lucide-react'; // Using Building2 as a placeholder icon

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <Building2 className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
      <span className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
        EstateView
      </span>
    </Link>
  );
}
