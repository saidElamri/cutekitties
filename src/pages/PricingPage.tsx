
import { motion } from 'framer-motion';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Check, Star } from 'lucide-react';
import { Button } from '../components/Button';

export const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/forever',
      description: 'Perfect for getting started',
      features: [
        'Unlimited Tasks',
        'Basic Categories',
        'Mood Tracking',
        '7-day History',
        '1 Device'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$4.99',
      period: '/month',
      description: 'For power users who want more',
      features: [
        'Everything in Free',
        'Unlimited History',
        'Advanced Analytics',
        'Custom Themes',
        'Sync across devices',
        'Priority Support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$19.99',
      period: '/month',
      description: 'Collaborate with your pack',
      features: [
        'Everything in Pro',
        'Up to 5 Team Members',
        'Shared Lists',
        'Team Analytics',
        'Admin Controls',
        'API Access'
      ],
      cta: 'Contact Sales',
      popular: false
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
              Simple Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your productivity journey. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl ${plan.popular ? 'border-2 border-kitty-pink transform md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-kitty-pink to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 flex-shrink-0">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Trusted by over 10,000+ cat lovers worldwide</p>
          <div className="flex justify-center gap-8 opacity-50 grayscale">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
