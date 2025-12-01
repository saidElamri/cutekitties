import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { CheckCircle2, Heart, Zap } from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Morning stretch', completed: true },
    { id: 2, title: 'Drink water', completed: true },
    { id: 3, title: 'Take a nap', completed: false },
    { id: 4, title: 'Play with yarn', completed: false },
  ]);
  const [selectedMood, setSelectedMood] = useState('😸');

  const moods = ['😺', '😸', '😻', '😼', '😽'];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-kitty-text dark:text-white mb-2">
              Welcome back, {user?.name}! 🐱
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Ready to make today purr-fect?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Whisker Points */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-kitty-pink to-red-300 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Zap size={32} />
                  <span className="text-3xl font-bold">{user?.whiskerPoints}</span>
                </div>
                <h3 className="text-lg font-bold">Whisker Points</h3>
                <p className="text-sm opacity-90">Keep up the great work!</p>
              </Card>
            </motion.div>

            {/* Tasks Completed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-kitty-mint to-green-300 text-kitty-text">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle2 size={32} />
                  <span className="text-3xl font-bold">
                    {tasks.filter(t => t.completed).length}/{tasks.length}
                  </span>
                </div>
                <h3 className="text-lg font-bold">Tasks Today</h3>
                <p className="text-sm opacity-75">You're doing great!</p>
              </Card>
            </motion.div>

            {/* Mood Tracker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-kitty-blue to-purple-300 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Heart size={32} />
                  <span className="text-3xl">😸</span>
                </div>
                <h3 className="text-lg font-bold">Today's Mood</h3>
                <p className="text-sm opacity-90">Feeling purr-fect!</p>
              </Card>
            </motion.div>
          </div>

          {/* Task List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-6">
                Today's Tasks
              </h2>
              <div className="space-y-3">
                {tasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-[1.02] ${
                      task.completed
                        ? 'border-green-300 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700/50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      task.completed ? 'border-green-500 bg-green-500' : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {task.completed && <CheckCircle2 size={16} className="text-white" />}
                    </div>
                    <span className={`flex-1 ${
                      task.completed 
                        ? 'line-through text-gray-500 dark:text-gray-400' 
                        : 'text-kitty-text dark:text-white'
                    }`}>
                      {task.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Mood Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Card className="dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-kitty-text dark:text-white mb-6">
                How are you feeling?
              </h2>
              <div className="flex gap-4 justify-center">
                {moods.map((mood, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedMood(mood)}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-5xl p-4 rounded-2xl hover:bg-kitty-cream dark:hover:bg-gray-700 transition-colors ${
                      selectedMood === mood ? 'bg-kitty-pink/20 dark:bg-kitty-pink/30 ring-2 ring-kitty-pink' : ''
                    }`}
                  >
                    {mood}
                  </motion.button>
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
