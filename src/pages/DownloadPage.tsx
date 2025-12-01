
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Download, Monitor, Smartphone, Tablet, Check } from 'lucide-react';
import { Button } from '../components/Button';

export const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-kitty-cream dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Get Purrfect
              <span className="block bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experience the cuteness on all your devices. Install Purrfect Tasks as a Progressive Web App (PWA) for a native-like experience.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="gap-2 shadow-lg shadow-kitty-pink/30">
                <Download size={20} />
                Install App
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                View Web Version
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Why install?</h3>
              {[
                'Works offline',
                'Native notifications',
                'Fast performance',
                'Home screen access'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-kitty-pink/10 flex items-center justify-center text-kitty-pink">
                    <Check size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kitty-pink/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl flex flex-col items-center text-center">
                  <Smartphone size={48} className="text-kitty-pink mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Mobile</h3>
                  <p className="text-sm text-gray-500">iOS & Android</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl flex flex-col items-center text-center">
                  <Tablet size={48} className="text-purple-500 mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Tablet</h3>
                  <p className="text-sm text-gray-500">iPad & Android Tablets</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl flex flex-col items-center text-center">
                  <Monitor size={48} className="text-blue-500 mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Desktop</h3>
                  <p className="text-sm text-gray-500">macOS, Windows, Linux</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
