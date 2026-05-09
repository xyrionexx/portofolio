"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-10 bg-black/50 backdrop-blur-md border-b border-white/5 lg:border-transparent lg:bg-transparent lg:backdrop-blur-none"
      >
        {/* Desktop Left (Visible on md and up) */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-zinc-400 flex-1">
          <Link
            href="/#about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          
          {/* Tech Dropdown Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsTechOpen(true)}
            onMouseLeave={() => setIsTechOpen(false)}
          >
            <button className="hover:text-white transition-colors duration-300 flex items-center gap-2 uppercase tracking-[0.3em]">
              Work
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
                    <Link
                      href="/#tech"
                      className="px-4 py-3 text-[9px] tracking-[0.2em] text-zinc-500 hover:text-black hover:bg-white transition-all duration-200 uppercase flex justify-between items-center group"
                    >
                      [ TECH_OPS ]
                      <span className="opacity-0 group-hover:opacity-100">▶</span>
                    </Link>
                    <Link
                      href="/#work"
                      className="px-4 py-3 text-[9px] tracking-[0.2em] text-zinc-500 hover:text-black hover:bg-white transition-all duration-200 uppercase flex justify-between items-center group"
                    >
                      [ WORK_ARCHIVE ]
                      <span className="opacity-0 group-hover:opacity-100">▶</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Logo */}
        <div className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold text-white flex-none text-left md:text-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>XYRIONEXX</Link>
        </div>

        {/* Desktop Right (Visible on md and up) */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-zinc-400 flex-1 justify-end">
          <Link
            href="/#socials"
            className="hover:text-white transition-colors duration-300"
          >
            Socials
          </Link>
          <Link
            href="/#contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle (Visible on screens smaller than md) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-3 py-2 border border-zinc-700 text-[10px] tracking-[0.3em] font-mono uppercase text-white hover:bg-white hover:text-black transition-colors"
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Menu Overlay (For Mobile/Tablet) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 md:hidden"
          >
            {/* Ambient Grid for Menu */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="flex flex-col gap-8 text-center relative z-10 w-full max-w-sm px-6">
              {[
                { label: "About", href: "/#about" },
                { label: "Tech Ops", href: "/#tech" },
                { label: "Work Archive", href: "/#work" },
                { label: "Socials", href: "/#socials" },
                { label: "Contact", href: "/#contact" }
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm tracking-[0.5em] uppercase font-medium text-zinc-400 hover:text-white border border-transparent hover:border-zinc-800 bg-transparent hover:bg-zinc-950 py-4 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-zinc-900"
              >
                <div className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  SYSTEM_STATUS: ACTIVE
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
