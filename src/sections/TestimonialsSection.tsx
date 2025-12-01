import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mittens",
    role: "Chief Mouser",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80",
    quote: "I used to sleep 16 hours a day. Now I sleep 15 and use PurrfectApp for the other hour. Highly recommended!"
  },
  {
    name: "Sir Fluffington",
    role: "Nap Expert",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=200&q=80",
    quote: "The UI is so intuitive, even my human can use it. The 'Zoomies' feature is a game changer."
  },
  {
    name: "Luna",
    role: "Window Watcher",
    image: "https://images.unsplash.com/photo-1495360019602-e001c276375f?auto=format&fit=crop&w=200&q=80",
    quote: "Finally, an app that understands the importance of 3AM sprints. 5 stars!"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-kitty-text mb-4">What the Kitties Say</h2>
          <p className="text-gray-500">Don't just take our meow for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="text-center relative mt-12">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="pt-12">
                  <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                  <h4 className="font-bold text-kitty-text text-lg">{t.name}</h4>
                  <p className="text-kitty-pink text-sm font-medium">{t.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
