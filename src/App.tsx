/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import GameDetails from './pages/GameDetails';
import { GameWithId } from './types';
import { useNavigate } from 'react-router-dom';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-odyssey-bg text-gray-900 pb-20">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} onPlay={(game) => navigate(`/game/${game.id}`)} />} />
          <Route path="/game/:gameId" element={<GameDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <footer className="mt-20 border-t border-gray-200/60 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-xl font-display font-black text-odyssey-accent tracking-[0.2em] uppercase">ODYSSEY GAMES</Link>
            <p className="text-sm text-gray-500 max-w-sm font-sans leading-relaxed">
              The ultimate destination for instant-play web games. Our mission is to provide high-quality, fun experiences without the need for downloads or installations.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">FAQ Support</Link></li>
              <li><a href="https://discord.gg/TFGkuNquG" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-odyssey-accent transition-colors">Discord Community</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono">
            © 2026 ODYSSEY ARCADE
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

