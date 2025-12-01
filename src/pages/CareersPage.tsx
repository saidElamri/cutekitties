
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const CareersPage = () => {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build delightful user experiences with React and TypeScript.'
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design the future of productivity tools with a focus on user delight.'
    },
    {
      title: 'Community Manager',
      location: 'Remote',
      type: 'Part-time',
      description: 'Build and nurture our growing community of cat-loving productivity enthusiasts.'
    }
  ];

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
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us make the world more productive and adorable. We're looking for passionate people who love cats and great design.
          </p>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{position.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-kitty-pink" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-kitty-pink" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button className="gap-2 whitespace-nowrap">
                  Apply Now
                  <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-kitty-pink/10 to-purple-500/10 dark:from-kitty-pink/5 dark:to-purple-500/5 p-12 rounded-3xl text-center"
        >
          <Briefcase className="w-16 h-16 mx-auto mb-6 text-kitty-pink" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Don't see your role?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and let us know how you'd like to contribute!
          </p>
          <Button variant="outline" className="gap-2">
            Send General Application
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
