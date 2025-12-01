import React from 'react';
import { Cat, Menu } from 'lucide-react';
import { Button } from '../components/Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-kitty-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-kitty-pink p-2 rounded-xl text-white">
              <Cat size={24} />
            </div>
            <span className="text-2xl font-bold text-kitty-text tracking-tight">Purrfect<span className="text-kitty-pink">App</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-kitty-text font-semibold hover:text-kitty-pink transition-colors">Features</a>
            <a href="#testimonials" className="text-kitty-text font-semibold hover:text-kitty-pink transition-colors">Stories</a>
            <a href="#about" className="text-kitty-text font-semibold hover:text-kitty-pink transition-colors">About</a>
            <Button size="sm">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="secondary" size="sm">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
