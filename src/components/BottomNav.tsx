import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Settings, Home, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export const BottomNav = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = user ? [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ] : [];

  if (!user) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16 pb-safe">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive 
                  ? 'text-kitty-pink' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-kitty-text dark:hover:text-white'
              }`}
            >
              <link.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 dark:text-gray-400 hover:text-kitty-text dark:hover:text-white"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          <span className="text-[10px] font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};
