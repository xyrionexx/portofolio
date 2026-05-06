"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isTechOpen, setIsTechOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 md:py-10"
    >
      <div className="flex gap-8 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-zinc-400">
        <a
          href="#about"
          className="hover:text-white transition-colors duration-300"
        >
          About
        </a>
        
        {/* Tech Dropdown Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsTechOpen(true)}
          onMouseLeave={() => setIsTechOpen(false)}
        >
          <button className="hover:text-white transition-colors duration-300 flex items-center gap-2 uppercase tracking-[0.3em]">
            Tech
            <span className={`text-[8px] transition-transform duration-300 ${isTechOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          <AnimatePresence>
            {isTechOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-4 w-48 bg-black border border-zinc-800 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-1 h-1 border-l border-t border-white" />
                <div className="absolute bottom-0 right-0 w-1 h-1 border-r border-b border-white" />
                
                <div className="flex flex-col gap-1">
                  <a
                    href="#tech"
                    className="px-4 py-3 text-[9px] tracking-[0.2em] text-zinc-500 hover:text-black hover:bg-white transition-all duration-200 uppercase flex justify-between items-center group"
                  >
                    [ TECH_OPS ]
                    <span className="opacity-0 group-hover:opacity-100">▶</span>
                  </a>
                  <a
                    href="#work"
                    className="px-4 py-3 text-[9px] tracking-[0.2em] text-zinc-500 hover:text-black hover:bg-white transition-all duration-200 uppercase flex justify-between items-center group"
                  >
                    [ WORK_ARCHIVE ]
                    <span className="opacity-0 group-hover:opacity-100">▶</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold text-white">
        <a href="/">XYRIONEXX</a>
      </div>

      <div className="flex gap-8 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-zinc-400">
        <a
          href="/socials"
          className="hover:text-white transition-colors duration-300"
        >
          Socials
        </a>
        <a
          href="#contact"
          className="hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
