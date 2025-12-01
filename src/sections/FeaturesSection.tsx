import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { MousePointer2, Bell, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: <MousePointer2 size={32} />,
    title: "Laser Pointer Focus",
    description: "Stay on track with our distraction-free mode. Chase your goals like a kitty chases a laser dot.",
    color: "bg-red-100 text-red-500"
  },
  {
    icon: <Bell size={32} />,
    title: "Mealtime Reminders",
    description: "Never miss a deadline (or a meal) again. Gentle purrs and meows keep you notified.",
    color: "bg-yellow-100 text-yellow-500"
  },
  {
    icon: <Heart size={32} />,
    title: "Cuddle Compatibility",
    description: "Find your perfect productivity partner. Match with others based on your working style.",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: <Zap size={32} />,
    title: "Zoomies Mode",
    description: "Need a burst of energy? Activate Zoomies Mode for high-intensity sprint sessions.",
    color: "bg-purple-100 text-purple-500"
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 bg-kitty-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-kitty-pink font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-kitty-text mt-2 mb-4">Paws-itively Amazing Features</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We've packed our platform with everything you need to stay productive and happy. No hairballs, guaranteed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-kitty-text mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
