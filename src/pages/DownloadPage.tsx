
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 w-full max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-center lg:text-left">
              Get Purrfect
              <span className="block bg-gradient-to-r from-kitty-pink via-purple-500 to-pink-600 bg-clip-text text-transparent mt-2">
                Everywhere
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
              Experience the cuteness on all your devices. Install Purrfect Tasks as a Progressive Web App (PWA) for a native-like experience.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Button 
                size="lg" 
                className="gap-2 shadow-lg shadow-kitty-pink/30 w-full sm:w-auto"
                onClick={() => {
                  // @ts-ignore
                  const promptEvent = window.deferredPrompt;
                  if (promptEvent) {
                    promptEvent.prompt();
                    promptEvent.userChoice.then((choiceResult: any) => {
                      if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                      }
                      // @ts-ignore
                      window.deferredPrompt = null;
                    });
                  } else {
                    alert('App is already installed or not supported in this browser!');
                  }
                }}
              >
                <Download size={20} />
                Install App
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                View Web Version
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 col-span-full text-center lg:text-left">Why install?</h3>
              {[
                'Works offline',
                'Native notifications',
                'Fast performance',
                'Home screen access'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-kitty-pink/10 flex items-center justify-center text-kitty-pink flex-shrink-0">
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
            className="flex-1 w-full relative mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kitty-pink/20 to-purple-500/20 rounded-full blur-3xl transform scale-90" />
            <div className="relative grid grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto">
              <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  <Smartphone size={40} className="text-kitty-pink mb-3 md:mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Mobile</h3>
                  <p className="text-xs md:text-sm text-gray-500">iOS & Android</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  <Tablet size={40} className="text-purple-500 mb-3 md:mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Tablet</h3>
                  <p className="text-xs md:text-sm text-gray-500">iPad & Android</p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  <Monitor size={40} className="text-blue-500 mb-3 md:mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Desktop</h3>
                  <p className="text-xs md:text-sm text-gray-500">macOS, Windows</p>
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
