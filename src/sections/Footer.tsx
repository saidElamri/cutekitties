import React from 'react';
import { Cat, Twitter, Instagram, Facebook, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kitty-cream pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-kitty-pink p-2 rounded-xl text-white">
                <Cat size={24} />
              </div>
              <span className="text-2xl font-bold text-kitty-text">Purrfect<span className="text-kitty-pink">App</span></span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Making the world a cuter place, one pixel at a time. Join us on our mission to spread joy and productivity.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-kitty-text hover:bg-kitty-pink hover:text-white transition-all shadow-sm hover:shadow-md">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-kitty-text mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Download</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-kitty-text mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-kitty-pink transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-kitty-pink/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 PurrfectApp. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> and <span className="font-bold text-kitty-pink">Purrs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
