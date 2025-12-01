import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { Award, Zap, CheckCircle2, Star } from 'lucide-react';

export const Profile = () => {
  const { user } = useAuth();

  const badges = [
    { name: 'Early Bird', icon: '🌅', earned: true },
    { name: 'Task Master', icon: '✅', earned: true },
    { name: 'Zen Cat', icon: '🧘', earned: false },
    { name: 'Social Butterfly', icon: '🦋', earned: false },
  ];

  const stats = [
    { label: 'Tasks Completed', value: 127, icon: CheckCircle2 },
    { label: 'Whisker Points', value: user?.whiskerPoints || 0, icon: Zap },
    { label: 'Streak Days', value: 14, icon: Star },
    { label: 'Badges Earned', value: 2, icon: Award },
  ];

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="text-center dark:bg-gray-800">
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-kitty-pink mb-4"
                >
                  <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
                </motion.div>
                <h1 className="text-3xl font-bold text-kitty-text dark:text-white mb-2">
                  {user?.name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{user?.email}</p>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-kitty-pink text-white rounded-full text-sm font-bold">
                    Level 5 Cat
                  </span>
                  <span className="px-4 py-2 bg-kitty-mint text-kitty-text rounded-full text-sm font-bold">
                    Pro Member
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Card className="text-center dark:bg-gray-800">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-kitty-pink" />
                  <div className="text-2xl font-bold text-kitty-text dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-6">
                Badges Collection
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map((badge, i) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl text-center transition-all ${
                      badge.earned
                        ? 'bg-gradient-to-br from-kitty-pink to-red-300 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <div className="text-sm font-bold">{badge.name}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Activity Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
          >
            <Card className="dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[
                  { action: 'Completed 5 tasks', time: '2 hours ago', icon: '✅' },
                  { action: 'Earned "Early Bird" badge', time: '1 day ago', icon: '🏆' },
                  { action: 'Reached 400 Whisker Points', time: '3 days ago', icon: '⚡' },
                ].map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-kitty-cream dark:bg-gray-700 rounded-xl"
                  >
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-kitty-text dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
