import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Paw {
  id: number;
  x: number;
  y: number;
}

export const FloatingPaws = () => {
  const [paws, setPaws] = useState<Paw[]>([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {


    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only create paws when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        const newPaw: Paw = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: currentScrollY + window.innerHeight / 2,
        };

        setPaws(prev => [...prev, newPaw]);

        // Remove paw after animation
        setTimeout(() => {
          setPaws(prev => prev.filter(p => p.id !== newPaw.id));
        }, 2000);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [lastScrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {paws.map(paw => (
          <motion.div
            key={paw.id}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: paw.x,
              y: paw.y,
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: paw.y - 100,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute text-2xl"
          >
            🐾
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
