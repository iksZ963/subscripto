import Link from 'next/link';
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscripto</h3>
            <p className="text-sm">Simplifying subscription management for businesses of all sizes.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/features" className="hover:text-secondary transition-colors">Features</Link></li>
              <li><Link href="/roadmap" className="hover:text-secondary transition-colors">Roadmap</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook"><Facebook /></a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter"><Twitter /></a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent text-center">
          <p>&copy; {currentYear} Subscripto. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

