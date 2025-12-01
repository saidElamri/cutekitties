import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { Trophy, Star, Target, Calendar, Edit2, Download, PieChart as PieIcon, Activity, CheckCircle2, Zap, Flame } from 'lucide-react';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import { Badge } from '../components/Badge';
import { EditProfileModal } from '../components/EditProfileModal';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AnalyticsChart } from '../components/AnalyticsChart';

export const Profile = () => {
  const { user } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const stats = [
    { label: 'Tasks Completed', value: user?.tasksCompleted || 0, icon: <CheckCircle2 size={24} />, color: 'text-green-500' },
    { label: 'Whisker Points', value: user?.whiskerPoints || 0, icon: <Zap size={24} />, color: 'text-yellow-500' },
    { label: 'Current Streak', value: `${user?.streak || 0} Days`, icon: <Flame size={24} />, color: 'text-orange-500' },
  ];

  const badges = [
    { icon: <Star size={24} />, title: 'Early Bird', description: 'Complete 5 tasks before 9AM', isLocked: false },
    { icon: <Target size={24} />, title: 'Task Master', description: 'Complete 100 tasks total', isLocked: false },
    { icon: <Trophy size={24} />, title: 'Streak Keeper', description: 'Maintain a 7-day streak', isLocked: true },
    { icon: <Calendar size={24} />, title: 'Planner', description: 'Schedule tasks for next week', isLocked: true },
  ];

  const pieData = [
    { name: 'Work', value: 12, color: '#60A5FA' },
    { name: 'Personal', value: 18, color: '#34D399' },
    { name: 'Fun', value: 8, color: '#F472B6' },
  ];



  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <PageTransition>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Header */}
            <Card className="dark:bg-gray-800">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-32 h-32 rounded-full bg-kitty-pink/20 flex items-center justify-center text-6xl border-4 border-kitty-pink overflow-hidden"
                >
                  {user?.avatar.startsWith('http') ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user?.avatar
                  )}
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-kitty-text dark:text-white mb-2">{user?.name}</h1>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{user?.email}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Button onClick={() => setIsEditModalOpen(true)} size="sm" variant="outline" className="gap-2">
                      <Edit2 size={16} /> Edit Profile
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Download size={16} /> Export Data
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="dark:bg-gray-800 flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="text-xl font-bold text-kitty-text dark:text-white">{stat.value}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="dark:bg-gray-800">
                <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
                  <PieIcon size={20} className="text-kitty-pink" /> Task Distribution
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {pieData.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                      {entry.name}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="dark:bg-gray-800">
                <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
                  <Activity size={20} className="text-blue-500" /> Activity Trend
                </h3>
                <AnalyticsChart />
              </Card>
            </div>

            {/* Badges Section */}
            <Card className="dark:bg-gray-800">
              <h3 className="text-xl font-bold text-kitty-text dark:text-white mb-6 flex items-center gap-2">
                <Trophy size={24} className="text-yellow-500" /> Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map((badge, i) => (
                  <Badge key={i} {...badge} />
                ))}
              </div>
            </Card>
          </div>
        </PageTransition>
      </main>

      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      <Footer />
    </div>
  );
};
