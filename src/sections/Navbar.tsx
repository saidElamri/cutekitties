import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, User, Settings, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { InstallPwa } from '../components/InstallPwa';

export const Navbar = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = user ? [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ] : [];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3 group">
          <span className="text-3xl group-hover:scale-110 transition-transform">🐱</span>
          <span className="font-bold text-2xl bg-gradient-to-r from-kitty-pink to-purple-500 bg-clip-text text-transparent">Purrfect</span>
        </Link>

        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg transition-colors ${
                      isActive ? 'text-kitty-pink' : 'text-gray-500 dark:text-gray-400 hover:text-kitty-text dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white dark:bg-gray-600 rounded-lg shadow-sm"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                      <link.icon size={18} />
                      <span className="hidden md:block">{link.label}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4">
            <InstallPwa />
            <button
              onClick={toggleTheme}
              className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-110 text-gray-500 dark:text-gray-400 hover:text-kitty-pink dark:hover:text-kitty-pink"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {user && (
              <Link to="/profile">
                <div className="w-8 h-8 rounded-full bg-kitty-pink/20 flex items-center justify-center text-lg border-2 border-transparent hover:border-kitty-pink transition-colors overflow-hidden">
                  {user.avatar.startsWith('http') ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.avatar
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
