import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, CheckCircle2, Circle, Calendar, Sparkles, Share2 } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AddTaskModal } from '../components/AddTaskModal';
import { useAuth } from '../contexts/AuthContext';
import { useSound } from '../hooks/useSound';
import { supabase } from '../lib/supabase';
import { showToast } from '../utils/toast';
import confetti from 'canvas-confetti';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  category: string;
  created_at?: string;
}

export const Dashboard = () => {
  const { user } = useAuth();
  const { playSound } = useSound();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState('😸');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, [user]); // fetchTasks is stable or we will wrap it in useCallback next

  const fetchTasks = async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string, category: string) => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ title, category, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;

      setTasks([data, ...tasks]);
      playSound('pop');
      showToast.success('Task added! 📝');
      setIsAddModalOpen(false);
    } catch {
      showToast.error('Failed to add task');
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    try {
      const { error } = await supabase
        .from('tasks')
        .update({ completed: !task.completed })
        .eq('id', id);

      if (error) throw error;

      setTasks(tasks.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
      ));

      if (!task.completed) {
        playSound('success');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F472B6', '#60A5FA', '#34D399']
        });
      }
    } catch {
      showToast.error('Failed to update task');
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setTasks(tasks.filter(t => t.id !== id));
      playSound('delete');
      showToast.success('Task deleted! 🗑️');
    } catch {
      showToast.error('Failed to delete task');
    }
  };

  const moods = ['😸', '😿', '😻', '😼', '😽'];

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Welcome & Stats */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-kitty-text dark:text-white mb-2">
                Good Meow-ning, {user?.name}! ☀️
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                You have {tasks.filter(t => !t.completed).length} pending tasks today. Let's crush them!
              </p>
            </motion.div>

            {/* Mood Tracker */}
            <Card className="p-6 dark:bg-gray-800">
              <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-yellow-400" />
                How are you feline today?
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`text-4xl p-2 rounded-2xl transition-all hover:scale-110 flex-shrink-0 ${
                      selectedMood === mood ? 'bg-kitty-pink/20 ring-2 ring-kitty-pink' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </Card>

            {/* Tasks List */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-kitty-text dark:text-white">My Tasks</h2>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button 
                    onClick={() => {
                      const pendingTasks = tasks.filter(t => !t.completed);
                      if (pendingTasks.length > 0) {
                        const randomTask = pendingTasks[Math.floor(Math.random() * pendingTasks.length)];
                        showToast.success(`✨ Magic Suggestion: ${randomTask.title}`);
                        playSound('pop');
                      } else {
                        showToast.success('All caught up! 🎉');
                      }
                    }}
                    size="sm" 
                    variant="secondary"
                    className="gap-2 flex-1 sm:flex-none"
                  >
                    <Sparkles size={18} /> <span className="truncate">Magic Suggest</span>
                  </Button>
                  <Button onClick={() => setIsAddModalOpen(true)} size="sm" className="gap-2 flex-1 sm:flex-none">
                    <Plus size={18} /> <span className="whitespace-nowrap">Add Task</span>
                  </Button>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-10 text-gray-500">Loading tasks... 🐱</div>
              ) : tasks.length === 0 ? (
                <Card className="p-8 text-center dark:bg-gray-800">
                  <div className="text-6xl mb-4">💤</div>
                  <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-2">No tasks yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Time for a cat nap, or add a new task!</p>
                  <Button onClick={() => setIsAddModalOpen(true)} variant="outline">Create Task</Button>
                </Card>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {tasks.map((task) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        layout
                      >
                        <Card className={`p-4 flex items-center gap-4 group transition-colors ${
                          task.completed ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'
                        }`}>
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`p-2 rounded-full transition-colors ${
                              task.completed ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-300 hover:text-kitty-pink'
                            }`}
                          >
                            {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                          </button>
                          
                          <div className="flex-1">
                            <h3 className={`font-medium transition-all ${
                              task.completed ? 'text-gray-400 line-through' : 'text-kitty-text dark:text-white'
                            }`}>
                              {task.title}
                            </h3>
                            <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full mt-1 inline-block">
                              {task.category}
                            </span>
                          </div>

                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Trash2 size={18} />
                          </button>

                          <button
                            onClick={() => {
                              if (navigator.share) {
                                navigator.share({
                                  title: 'Purrfect Task',
                                  text: `Check out this task: ${task.title}`,
                                  url: window.location.href,
                                });
                              } else {
                                navigator.clipboard.writeText(`Task: ${task.title}`);
                                showToast.success('Task copied to clipboard! 📋');
                              }
                            }}
                            className="p-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Share2 size={18} />
                          </button>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Calendar & Progress */}
          <div className="space-y-8">
            <Card className="p-6 dark:bg-gray-800">
              <h3 className="text-lg font-bold text-kitty-text dark:text-white mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-kitty-pink" />
                Today's Progress
              </h3>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-gray-100 dark:text-gray-700"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={351.86}
                      strokeDashoffset={351.86 - (351.86 * (tasks.length > 0 ? tasks.filter(t => t.completed).length / tasks.length : 0))}
                      className="text-kitty-pink transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-kitty-text dark:text-white">
                      {tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0}%
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addTask}
      />
      <Footer />
    </div>
  );
};
