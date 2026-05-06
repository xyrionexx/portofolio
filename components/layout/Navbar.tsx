"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12"
    >
      <div className="flex gap-8 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-zinc-400">
        <a
          href="#about"
          className="hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#tech"
          className="hover:text-white transition-colors duration-300"
        >
          Tech
        </a>
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
