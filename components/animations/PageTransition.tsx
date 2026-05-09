"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
        >
          {/* Scanning Line */}
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
          />

          {/* Random Bits Layout */}
          <div className="relative font-mono text-[10px] text-zinc-800 grid grid-cols-4 md:grid-cols-8 gap-4 opacity-40">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 0.2, 
                  repeat: 5, 
                  delay: Math.random() * 0.5 
                }}
              >
                {Math.random() > 0.5 ? "0" : "1"}
                {Math.random().toString(36).substring(2, 4).toUpperCase()}
              </motion.div>
            ))}
          </div>

          <div className="absolute flex flex-col items-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-48 h-px bg-white"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 0.8 }}
              className="text-[10px] text-white font-mono uppercase font-bold"
            >
              INITIALIZING_NODE
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-48 h-px bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
