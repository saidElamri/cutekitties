import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, rotate: 1 } : {}}
      className={`
        bg-white rounded-3xl p-6 shadow-xl border border-kitty-cream
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
