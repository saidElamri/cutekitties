import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cat, Menu, Moon, Sun } from 'lucide-react';
import { Button } from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-kitty-cream dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-kitty-pink p-2 rounded-xl text-white">
              <Cat size={24} />
            </div>
            <span className="text-2xl font-bold text-kitty-text dark:text-white tracking-tight">
              Purrfect<span className="text-kitty-pink">App</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`font-semibold transition-colors ${
                    isActive('/dashboard') 
                      ? 'text-kitty-pink' 
                      : 'text-kitty-text dark:text-gray-300 hover:text-kitty-pink'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className={`font-semibold transition-colors ${
                    isActive('/profile') 
                      ? 'text-kitty-pink' 
                      : 'text-kitty-text dark:text-gray-300 hover:text-kitty-pink'
                  }`}
                >
                  Profile
                </Link>
                <Link 
                  to="/settings" 
                  className={`font-semibold transition-colors ${
                    isActive('/settings') 
                      ? 'text-kitty-pink' 
                      : 'text-kitty-text dark:text-gray-300 hover:text-kitty-pink'
                  }`}
                >
                  Settings
                </Link>
                <Link to="/profile" className="flex items-center gap-2">
                  <img 
                    src={user?.avatar} 
                    alt={user?.name} 
                    className="w-10 h-10 rounded-full border-2 border-kitty-pink"
                  />
                </Link>
              </>
            ) : (
              <>
                <a href="#features" className="text-kitty-text dark:text-gray-300 font-semibold hover:text-kitty-pink transition-colors">Features</a>
                <a href="#testimonials" className="text-kitty-text dark:text-gray-300 font-semibold hover:text-kitty-pink transition-colors">Stories</a>
                <a href="#about" className="text-kitty-text dark:text-gray-300 font-semibold hover:text-kitty-pink transition-colors">About</a>
              </>
            )}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-kitty-cream dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            
            {!isAuthenticated && <Button size="sm">Get Started</Button>}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-kitty-cream dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            <Button variant="secondary" size="sm">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
