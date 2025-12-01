import { motion } from 'framer-motion';

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLocked?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ icon, title, description, isLocked = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all ${
        isLocked 
          ? 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60 grayscale' 
          : 'bg-white dark:bg-gray-800 border-kitty-pink/30 shadow-lg shadow-kitty-pink/10'
      }`}
    >
      <div className={`p-3 rounded-full ${isLocked ? 'bg-gray-200 dark:bg-gray-700' : 'bg-kitty-pink/10 text-kitty-pink'}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-kitty-text dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
      </div>
      {isLocked && (
        <div className="absolute top-2 right-2 text-xs font-bold text-gray-400">🔒</div>
      )}
    </motion.div>
  );
};
