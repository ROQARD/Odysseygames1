import { motion, AnimatePresence } from 'motion/react';
import { X, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import updateData from '../data/update.json';

interface UpdateModalProps {
  onClose: () => void;
}

export default function UpdateModal({ onClose }: UpdateModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!updateData.enabled) return;

    const seenUpdateId = localStorage.getItem('odyssey_last_update_id');
    if (seenUpdateId !== updateData.id) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('odyssey_last_update_id', updateData.id);
    setTimeout(onClose, 300); // Allow animation to finish
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="w-14 h-14 bg-odyssey-accent/10 rounded-2xl flex items-center justify-center">
                <Bell className="w-7 h-7 text-odyssey-accent" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-black tracking-tight text-gray-900">
                  {updateData.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {updateData.description}
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {updateData.buttonText || 'OK'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
