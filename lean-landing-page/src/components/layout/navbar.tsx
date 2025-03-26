'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm border-b border-white/20">
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-indigo-400 text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shadow-md">LA</div>
            <div className="font-bold text-xl">Lean AI</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            <li>
              <Link href="#product" className="text-sm hover:text-primary transition-colors">
                Product
              </Link>
            </li>
            <li>
              <Link href="#customer-stories" className="text-sm hover:text-primary transition-colors">
                Customer Stories
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
          </ul>
          <Button variant="cta" className="bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90">Book a Demo</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="flex flex-col justify-center items-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md w-full border-b border-white/20">
          <ul className="flex flex-col py-4 px-6">
            <li className="py-2">
              <Link href="#product" className="block text-sm hover:text-primary transition-colors">
                Product
              </Link>
            </li>
            <li className="py-2">
              <Link href="#customer-stories" className="block text-sm hover:text-primary transition-colors">
                Customer Stories
              </Link>
            </li>
            <li className="py-2">
              <Link href="#about" className="block text-sm hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
          </ul>
          <div className="py-4 px-6">
            <Button className="w-full bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90" variant="cta">Book a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;