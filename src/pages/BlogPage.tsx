
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const BlogPage = () => {
  const posts = [
    {
      title: '10 Ways to Boost Your Productivity with Cute Cats',
      excerpt: 'Discover how our feline friends can help you stay focused and motivated throughout your workday.',
      author: 'Sarah Johnson',
      date: 'Dec 1, 2024',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=400&fit=crop',
      category: 'Productivity'
    },
    {
      title: 'The Science Behind Gamification in Task Management',
      excerpt: 'Learn why adding game elements to your to-do list makes you more likely to complete tasks.',
      author: 'Mike Chen',
      date: 'Nov 28, 2024',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
      category: 'Research'
    },
    {
      title: 'Building Better Habits: A Guide for Cat Lovers',
      excerpt: 'How to use Purrfect Tasks to create lasting positive habits that stick.',
      author: 'Emma Davis',
      date: 'Nov 25, 2024',
      image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=400&fit=crop',
      category: 'Tips & Tricks'
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
              Our Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tips, tricks, and insights to help you be more productive while having fun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-kitty-pink text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-kitty-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-kitty-pink group-hover:text-white group-hover:border-kitty-pink transition-colors">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
