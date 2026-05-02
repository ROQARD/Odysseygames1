import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Search, Gamepad2, ChevronDown, ExternalLink } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import linksData from '../data/links.json';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (url: string) => {
    setIsMenuOpen(false);
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value && location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <nav className="glass-panel sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
      <Link 
        to="/" 
        className="flex items-center gap-2 group"
        onClick={() => setSearchQuery('')}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 bg-odyssey-accent rounded-xl shadow-lg transition-transform group-hover:scale-110">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-display font-black tracking-tight text-gray-900 uppercase italic">
            ODYSSEY<span className="text-odyssey-accent">GAMES</span>
          </h1>
        </motion.div>
      </Link>

      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="What are we playing today?"
          className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-11 pr-4 text-sm text-gray-900 focus:ring-2 focus:ring-odyssey-accent transition-all placeholder:text-gray-400 shadow-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gray-100 text-gray-700 text-sm font-bold hover:bg-gray-200 transition-all shadow-sm"
          >
            Apps
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-56 bg-odyssey-card rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="py-2">
                  {linksData.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLinkClick(link.url)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-sky-50 hover:text-odyssey-accent transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-30" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a 
          href="https://discord.gg/TFGkuNquG" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gray-900 text-white text-sm font-bold hover:bg-odyssey-accent transition-all shadow-md"
        >
          <Gamepad2 className="w-4 h-4" />
          Discord
        </a>
      </div>
    </nav>
  );
}
