import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { CheckCircle2, Heart, Zap, Plus, Trash2, Trophy, Flame } from 'lucide-react';
import { showToast } from '../utils/toast';
import { AddTaskModal } from '../components/AddTaskModal';
import { Button } from '../components/Button';
import { ProgressRing } from '../components/ProgressRing';
import { WeeklyChart } from '../components/WeeklyChart';
import { Skeleton } from '../components/Skeleton';
import { PageTransition } from '../components/PageTransition';
import confetti from 'canvas-confetti';
import { useSound } from '../hooks/useSound';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}

export const Dashboard = () => {
  const { user } = useAuth();
  const { playSound } = useSound();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const savedTasks = localStorage.getItem('kitty-tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        setTasks([
          { id: 1, title: 'Stretch like a cat 🧘‍♀️', completed: false, category: 'Health' },
          { id: 2, title: 'Drink water (milk?) 🥛', completed: true, category: 'Health' },
          { id: 3, title: 'Chase the laser pointer 🔴', completed: false, category: 'Fun' },
        ]);
      }
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('kitty-tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoading]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newCompleted = !task.completed;
        if (newCompleted) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F472B6', '#FBBF24', '#34D399']
          });
          showToast.success('Purrfect! Task completed! 🐾');
          playSound('success');
        } else {
          playSound('click');
        }
        return { ...task, completed: newCompleted };
      }
      return task;
    }));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    showToast.error('Task removed from litter box 🗑️');
    playSound('delete');
  };

  const addTask = (title: string, category: string) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      category
    };
    setTasks([newTask, ...tasks]);
    setIsModalOpen(false);
    showToast.success('New task added to the list! 📝');
    playSound('pop');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Work': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Personal': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
      case 'Fun': return 'bg-pink-100 text-kitty-pink dark:bg-pink-900/30 dark:text-pink-400';
      default: return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <PageTransition>
          <div className="max-w-7xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h1 className="text-4xl font-bold text-kitty-text dark:text-white mb-2">
                  Welcome back, {user?.name}! 🐱
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Ready to make today purr-fect?
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
                <Flame className="text-orange-500" size={20} />
                <span className="font-bold text-kitty-text dark:text-white">5 Day Streak!</span>
              </div>
            </div>

            {isLoading ? (
              // Loading Skeleton
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card className="bg-white dark:bg-gray-800 h-64 flex flex-col items-center justify-center">
                  <Skeleton variant="circular" width={160} height={160} />
                  <Skeleton width={200} height={20} className="mt-4" />
                </Card>
                <Card className="bg-white dark:bg-gray-800 h-64 md:col-span-2">
                  <div className="flex justify-between mb-6">
                    <Skeleton width={150} height={24} />
                    <Skeleton width={100} height={20} />
                  </div>
                  <Skeleton width="100%" height={180} />
                </Card>
              </div>
            ) : (
              // Actual Content
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Daily Progress */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="bg-white dark:bg-gray-800 h-full flex flex-col items-center justify-center py-8">
                    <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-6">Daily Progress</h3>
                    <ProgressRing progress={progressPercentage} size={160} />
                    <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium">
                      {completedCount} of {tasks.length} tasks completed
                    </p>
                  </Card>
                </motion.div>

                {/* Weekly Activity */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-2"
                >
                  <Card className="bg-white dark:bg-gray-800 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-kitty-text dark:text-white">Weekly Activity</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Trophy size={16} className="text-yellow-500" />
                        <span>Best day: Thursday</span>
                      </div>
                    </div>
                    <WeeklyChart />
                  </Card>
                </motion.div>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8">
              {/* Task List */}
              <div className="md:col-span-2">
                <Card className="dark:bg-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-kitty-text dark:text-white">Today's Tasks</h2>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      size="sm"
                      className="gap-2"
                    >
                      <Plus size={18} />
                      Add Task
                    </Button>
                  </div>

                  {isLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <Skeleton key={i} height={64} width="100%" />
                      ))}
                    </div>
                  ) : tasks.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-6xl mb-4">😺</p>
                      <p className="text-gray-500 dark:text-gray-400">No tasks yet! Add one to get started.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {tasks.map((task, i) => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          onClick={() => toggleTask(task.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-[1.02] group ${
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
                          <div className="flex-1">
                            <span className={`block ${
                              task.completed 
                                ? 'line-through text-gray-500 dark:text-gray-400' 
                                : 'text-kitty-text dark:text-white'
                            }`}>
                              {task.title}
                            </span>
                            <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(task.category)}`}>
                              {task.category}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteTask(task.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-all"
                          >
                            <Trash2 size={18} className="text-red-500" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-8">
                {/* Mood Tracker */}
                <Card className="dark:bg-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-kitty-pink" size={20} />
                    <h3 className="font-bold text-kitty-text dark:text-white">Mood Tracker</h3>
                  </div>
                  <div className="flex justify-between">
                    {['😺', '😸', '😻', '😼', '😽'].map((mood) => (
                      <button
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className={`text-2xl p-2 rounded-full transition-transform hover:scale-125 ${
                          selectedMood === mood ? 'bg-kitty-pink/20 scale-125' : ''
                        }`}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Whisker Points */}
                <Card className="bg-gradient-to-br from-kitty-blue to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 border-none">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-yellow-500" size={20} />
                    <h3 className="font-bold text-kitty-text dark:text-white">Whisker Points</h3>
                  </div>
                  <p className="text-3xl font-bold text-kitty-text dark:text-white mb-1">1,250</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">You're in the top 5% of kitties! 🏆</p>
                </Card>
              </div>
            </div>
          </div>
        </PageTransition>
      </main>
      <Footer />
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addTask}
      />
    </div>
  );
};
