import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface InfoPageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function InfoPage({ title, subtitle, children }: InfoPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-20"
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 tracking-tighter mb-4 italic">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-odyssey-accent font-display font-bold tracking-tight uppercase">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="prose prose-sky max-w-none text-gray-600 space-y-8">
        {children}
      </div>
    </motion.div>
  );
}
