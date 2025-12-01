import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-b from-kitty-cream to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-kitty-pink/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-kitty-blue/20 rounded-full blur-xl" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-kitty-pink/10 to-purple-500/10 border border-kitty-pink/30 text-kitty-pink font-bold text-sm mb-6 shadow-sm">
              <Sparkles size={16} className="animate-pulse" />
              The #1 App for Cat Lovers
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Unleash Your Inner
              </span>
              <br />
              <span className="bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent relative inline-block mt-2">
                Purr-tential
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-kitty-mint/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="10" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
              Join a community where productivity meets cuteness. Organize your life with the help of our adorable digital mascots.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group shadow-lg shadow-kitty-pink/30 hover:shadow-xl hover:shadow-kitty-pink/40 hover:scale-105 transition-all">
              Start for Free 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="secondary" size="lg" className="hover:scale-105 transition-all shadow-md">Watch Demo</Button>
          </motion.div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                </div>
              ))}
            </div>
            <p>Loved by 10,000+ humans</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="relative z-10 bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80" 
              alt="Cute Kitten" 
              className="rounded-[2.5rem] w-full object-cover h-[500px]"
            />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">✓</div>
              <div>
                <p className="text-xs text-gray-400 font-bold">Task Completed</p>
                <p className="text-sm font-bold text-kitty-text">Buy Catnip</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -right-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-kitty-pink p-2 rounded-full text-white">♥</div>
              <div>
                <p className="text-xs text-gray-400 font-bold">Mood</p>
                <p className="text-sm font-bold text-kitty-text">Purr-fect</p>
              </div>
            </motion.div>
          </div>
          
          {/* Blob background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-kitty-pink/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
