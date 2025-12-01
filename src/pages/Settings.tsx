import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Moon, Sun, Bell, User, Shield, LogOut } from 'lucide-react';

export const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-kitty-text dark:text-white mb-8"
          >
            Settings
          </motion.h1>

          {/* Appearance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-4 flex items-center gap-2">
                {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                Appearance
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-kitty-text dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Toggle between light and dark themes
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className={`relative w-16 h-8 rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-kitty-pink' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    animate={{ x: theme === 'dark' ? 32 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  />
                </motion.button>
              </div>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-4 flex items-center gap-2">
                <Bell size={24} />
                Notifications
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Task Reminders', desc: 'Get notified about upcoming tasks' },
                  { label: 'Achievement Alerts', desc: 'Celebrate your wins!' },
                  { label: 'Daily Digest', desc: 'Summary of your daily progress' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-kitty-text dark:text-white">{item.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 rounded accent-kitty-pink"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-4 flex items-center gap-2">
                <User size={24} />
                Account
              </h2>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  <Shield size={20} />
                  Change Password
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <User size={20} />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={logout}
                >
                  <LogOut size={20} />
                  Sign Out
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="dark:bg-gray-800 text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-2">PurrfectApp v1.0.0</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Made with ❤️ and Purrs
              </p>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
