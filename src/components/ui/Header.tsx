"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        <Link href="/" className="text-2xl md:text-3xl font-bold hover:text-secondary transition-colors">
          Subscripto
        </Link>
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-primary md:bg-transparent z-50 ${menuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="block text-lg hover:text-secondary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="default" className="bg-cta text-primary hover:bg-secondary transition-colors">
            Get Started
          </Button>
          <button
            className="block md:hidden text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

