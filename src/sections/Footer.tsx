import React from 'react';
import { Cat, Twitter, Instagram, Facebook, Heart, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-kitty-cream to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-12 px-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-kitty-pink to-purple-500 p-3 rounded-2xl text-white shadow-lg">
                <Cat size={28} />
              </div>
              <span className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-kitty-pink to-purple-500 bg-clip-text text-transparent">Purrfect</span>
                <span className="text-gray-800 dark:text-white">App</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm mb-8 text-lg leading-relaxed">
              Making the world a cuter place, one pixel at a time. Join us on our mission to spread joy and productivity.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                { Icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                { Icon: Github, label: 'GitHub', url: 'https://github.com/saidElamri/cutekitties' },
                { Icon: Facebook, label: 'Facebook', url: 'https://facebook.com' }
              ].map(({ Icon, label, url }, i) => (
                <a 
                  key={i} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br hover:from-kitty-pink hover:to-purple-500 hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-3">
              {[
                { name: 'Features', url: '#features' },
                { name: 'Pricing', url: '#pricing' },
                { name: 'Download', url: '#auth-section' },
                { name: 'Changelog', url: '/changelog' }
              ].map((item) => (
                <li key={item.name}>
                  {item.url.startsWith('#') ? (
                    <a 
                      href={item.url}
                      className="text-gray-600 dark:text-gray-300 hover:text-kitty-pink dark:hover:text-kitty-pink transition-colors font-medium hover:translate-x-1 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.url)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a 
                      href={item.url}
                      className="text-gray-600 dark:text-gray-300 hover:text-kitty-pink dark:hover:text-kitty-pink transition-colors font-medium hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', url: '/about' },
                { name: 'Careers', url: '/careers' },
                { name: 'Blog', url: '/blog' },
                { name: 'Contact', url: '#auth-section' }
              ].map((item) => (
                <li key={item.name}>
                  {item.url.startsWith('#') ? (
                    <a 
                      href={item.url}
                      className="text-gray-600 dark:text-gray-300 hover:text-kitty-pink dark:hover:text-kitty-pink transition-colors font-medium hover:translate-x-1 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.url)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a 
                      href={item.url}
                      className="text-gray-600 dark:text-gray-300 hover:text-kitty-pink dark:hover:text-kitty-pink transition-colors font-medium hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            © 2024 PurrfectApp. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 font-medium">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> and <span className="font-bold bg-gradient-to-r from-kitty-pink to-purple-500 bg-clip-text text-transparent">Purrs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
