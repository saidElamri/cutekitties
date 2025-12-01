
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Sparkles, Bug, Zap, Plus } from 'lucide-react';

export const ChangelogPage = () => {
  const changes = [
    {
      version: '2.0.0',
      date: 'December 1, 2024',
      type: 'major',
      items: [
        { icon: Plus, type: 'New', text: 'Supabase backend integration for real-time data sync' },
        { icon: Plus, type: 'New', text: 'Google and GitHub OAuth authentication' },
        { icon: Plus, type: 'New', text: 'PWA support - install as native app' },
        { icon: Sparkles, type: 'Improved', text: 'Complete design overhaul with gradient effects' },
        { icon: Sparkles, type: 'Improved', text: 'Enhanced navbar with better spacing and shadows' }
      ]
    },
    {
      version: '1.5.0',
      date: 'November 15, 2024',
      type: 'minor',
      items: [
        { icon: Plus, type: 'New', text: 'Dark mode support' },
        { icon: Plus, type: 'New', text: 'Sound effects for task completion' },
        { icon: Sparkles, type: 'Improved', text: 'Faster task loading times' },
        { icon: Bug, type: 'Fixed', text: 'Profile avatar not updating correctly' }
      ]
    },
    {
      version: '1.0.0',
      date: 'October 1, 2024',
      type: 'major',
      items: [
        { icon: Zap, type: 'Launch', text: 'Initial release of Purrfect Tasks!' },
        { icon: Plus, type: 'New', text: 'Task management with categories' },
        { icon: Plus, type: 'New', text: 'Mood tracking' },
        { icon: Plus, type: 'New', text: 'Progress visualization' }
      ]
    }
  ];

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case 'major':
        return 'bg-gradient-to-r from-kitty-pink to-purple-500';
      case 'minor':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getItemColor = (type: string) => {
    switch (type) {
      case 'New':
        return 'text-green-500';
      case 'Improved':
        return 'text-blue-500';
      case 'Fixed':
        return 'text-orange-500';
      case 'Launch':
        return 'text-kitty-pink';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Changelog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track all the purr-fect improvements we've made to your favorite task manager.
          </p>
        </motion.div>

        <div className="space-y-8">
          {changes.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={`${getVersionBadgeColor(release.type)} text-white px-4 py-2 rounded-full font-bold text-lg`}>
                  v{release.version}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{release.date}</span>
              </div>

              <ul className="space-y-4">
                {release.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className={`${getItemColor(item.type)} mt-1`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className={`${getItemColor(item.type)} font-bold mr-2`}>
                        {item.type}:
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-kitty-pink/10 to-purple-500/10 dark:from-kitty-pink/5 dark:to-purple-500/5 p-8 rounded-2xl text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Have a feature request? Let us know on our{' '}
            <a href="https://github.com/saidElamri/cutekitties" target="_blank" rel="noopener noreferrer" className="text-kitty-pink hover:underline font-bold">
              GitHub
            </a>
            !
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
