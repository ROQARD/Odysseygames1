import { motion } from 'motion/react';
import { Category } from '../types';

interface CategoryBarProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const categories: Category[] = ['All', 'Puzzle', 'Arcade', 'IO Games', 'Classic', 'Platformer', 'Idle'];

export default function CategoryBar({ activeCategory, setActiveCategory }: CategoryBarProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide px-6">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category)}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category
              ? 'bg-odyssey-accent text-white shadow-[0_0_20px_rgba(245,158,11,0.5)]'
              : 'bg-odyssey-card text-gray-400 hover:text-white border border-white/5 hover:border-odyssey-accent/50'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
