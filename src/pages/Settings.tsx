import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useSettings } from '../contexts/SettingsContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Sun, Volume2, Download, Upload, LogOut, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { showToast } from '../utils/toast';
import { useRef } from 'react';

export const Settings = () => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { themeColor, setThemeColor, soundEnabled, setSoundEnabled, language, setLanguage } = useSettings();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportData = () => {
    const data = {
      user: localStorage.getItem('kitty-user'),
      tasks: localStorage.getItem('kitty-tasks'),
      settings: {
        themeColor,
        soundEnabled,
        language
      }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kitty-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast.success('Data exported successfully! 📦');
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.user) localStorage.setItem('kitty-user', data.user);
        if (data.tasks) localStorage.setItem('kitty-tasks', data.tasks);
        
        // Reload to apply changes
        window.location.reload();
      } catch {
        showToast.error('Invalid backup file 😵');
      }
    };
    reader.readAsText(file);
  };

  const colors = [
    { name: 'pink', value: '#F472B6' },
    { name: 'blue', value: '#60A5FA' },
    { name: 'green', value: '#34D399' },
    { name: 'purple', value: '#A78BFA' },
    { name: 'orange', value: '#FB923C' },
  ];

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-kitty-text dark:text-white mb-8">Settings</h1>

          {/* Appearance */}
          <Card className="dark:bg-gray-800">
            <h2 className="text-xl font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
              <Sun size={24} className="text-kitty-pink" /> Appearance
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-kitty-text dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Easy on the eyes at night</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    theme === 'dark' ? 'bg-kitty-pink' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <motion.div
                    animate={{ x: theme === 'dark' ? 24 : 0 }}
                    className="w-6 h-6 bg-white rounded-full shadow-sm"
                  />
                </button>
              </div>

              <div>
                <p className="font-semibold text-kitty-text dark:text-white mb-3">Theme Color</p>
                <div className="flex gap-4">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setThemeColor(c.name as 'pink' | 'blue' | 'green' | 'purple' | 'orange')}
                      className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${
                        themeColor === c.name ? 'ring-4 ring-offset-2 ring-gray-200 dark:ring-gray-700 scale-110' : ''
                      }`}
                      style={{ backgroundColor: c.value }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Preferences */}
          <Card className="dark:bg-gray-800">
            <h2 className="text-xl font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
              <Volume2 size={24} className="text-blue-500" /> Preferences
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-kitty-text dark:text-white">Sound Effects</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Play sounds on interactions</p>
                </div>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    soundEnabled ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <motion.div
                    animate={{ x: soundEnabled ? 24 : 0 }}
                    className="w-6 h-6 bg-white rounded-full shadow-sm"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-kitty-text dark:text-white">Language</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred language</p>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr' | 'ja')}
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-kitty-text dark:text-white outline-none focus:border-kitty-pink"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Data Management */}
          <Card className="dark:bg-gray-800">
            <h2 className="text-xl font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
              <Shield size={24} className="text-green-500" /> Data Management
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleExportData} variant="outline" className="flex-1 gap-2">
                <Download size={18} /> Export Data
              </Button>
              <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="flex-1 gap-2">
                <Upload size={18} /> Import Data
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportData}
                className="hidden"
              />
            </div>
          </Card>

          {/* Account Actions */}
          <div className="flex justify-center pt-4">
            <button
              onClick={logout}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition-colors"
            >
              <LogOut size={20} /> Sign Out
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
