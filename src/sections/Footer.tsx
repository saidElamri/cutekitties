import React, { useState } from 'react';
import { Cat, Twitter, Instagram, Facebook, Heart, Github, ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const toggleProduct = () => setShowProduct(!showProduct);
  const toggleCompany = () => setShowCompany(!showCompany);

  const linkClass = 'text-gray-600 dark:text-gray-300 hover:text-kitty-pink dark:hover:text-kitty-pink transition-colors font-medium';

  return (
    <footer className="bg-gradient-to-b from-kitty-cream to-white dark:from-gray-900 dark:to-gray-800 pt-12 pb-8 px-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-kitty-pink to-purple-500 p-3 rounded-2xl text-white shadow-lg">
              <Cat size={28} />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-kitty-pink to-purple-500 bg-clip-text text-transparent">
              Purrfect
            </span>
            <span className="text-gray-800 dark:text-white">App</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-sm text-center md:text-left">
            Making the world a cuter place, one pixel at a time. Join us on our mission to spread joy and productivity.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer" onClick={toggleProduct}>
              Product
              {showProduct ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </h4>
            <ul className={`space-y-3 ${showProduct ? 'block' : 'hidden'} md:block`}>
              {['Features', 'Pricing', 'Download', 'Changelog'].map((name) => (
                <li key={name}>
                  <a href={`/${name.toLowerCase()}`} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between cursor-pointer" onClick={toggleCompany}>
              Company
              {showCompany ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </h4>
            <ul className={`space-y-3 ${showCompany ? 'block' : 'hidden'} md:block`}>
              {['About Us', 'Careers', 'Blog', 'Contact'].map((name) => (
                <li key={name}>
                  <a href={`/${name.toLowerCase().replace(' ', '-')}`} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Social</h4>
            <div className="flex gap-3">
              {[{ Icon: Twitter, url: 'https://twitter.com' }, { Icon: Instagram, url: 'https://instagram.com' }, { Icon: Github, url: 'https://github.com/saidElamri/cutekitties' }, { Icon: Facebook, url: 'https://facebook.com' }].map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" aria-label={url} className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br hover:from-kitty-pink hover:to-purple-500 hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">© 2025 PurrfectApp. All rights reserved.</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 font-medium">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> and <span className="font-bold bg-gradient-to-r from-kitty-pink to-purple-500 bg-clip-text text-transparent">Purrs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
