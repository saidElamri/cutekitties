
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Check, Zap, Shield, Smile, Calendar, BarChart } from 'lucide-react';

export const FeaturesPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed so you can manage tasks without missing a beat.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and safe. We prioritize your privacy.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Smile,
      title: 'Mood Tracking',
      description: 'Track your daily mood alongside your tasks to see patterns.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent suggestions for when to complete your tasks.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Visual insights into your productivity and habits.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: Check,
      title: 'Gamification',
      description: 'Earn rewards and badges as you complete tasks.',
      color: 'from-red-400 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to stay productive, organized, and happy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase Section */}
        <div className="mt-32 space-y-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Task Management <br />
                <span className="text-kitty-pink">Reimagined</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Say goodbye to boring to-do lists. Our intuitive drag-and-drop interface makes organizing your life feel like a game.
              </p>
              <ul className="space-y-4">
                {['Drag & Drop Organization', 'Custom Categories', 'Priority Levels'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                      <Check size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-kitty-pink/20 to-purple-500/20 rounded-3xl p-8 aspect-video flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-gray-50 dark:bg-gray-700 rounded-lg animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
