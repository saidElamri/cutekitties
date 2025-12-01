
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Heart, Users, Target, Zap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent">
              About Purrfect
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make productivity adorable, one task at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-kitty-pink to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Purrfect was born from a simple idea: productivity doesn't have to be boring. We combined the cuteness of cats with powerful task management to create an app that makes you smile while getting things done.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-kitty-pink to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To create the world's most delightful productivity tool that brings joy to your daily routine. We believe that when work feels fun, you accomplish more and feel better doing it.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-kitty-pink/10 to-purple-500/10 dark:from-kitty-pink/5 dark:to-purple-500/5 p-12 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: Heart, title: 'User Love', desc: 'We put users first in everything we do' },
              { icon: Zap, title: 'Innovation', desc: 'Always improving, always evolving' },
              { icon: Users, title: 'Community', desc: 'Building together, growing together' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-kitty-pink to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
