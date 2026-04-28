import { Search, Gamepad2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 glass-panel px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div className="p-2 bg-odyssey-accent rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]">
          <Rocket className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl font-display font-bold tracking-tight text-white uppercase">
          ODYSSEY<span className="text-odyssey-accent">GAMES</span>
        </h1>
      </motion.div>

      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Explore your next adventure..."
          className="w-full bg-odyssey-card border border-odyssey-accent/20 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-odyssey-accent/40 focus:border-odyssey-accent transition-all"
        />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-odyssey-gold/30 text-odyssey-gold text-sm font-medium hover:bg-odyssey-gold/10 transition-colors">
          <Gamepad2 className="w-4 h-4" />
          Discord Community
        </button>
      </div>
    </nav>
  );
}
