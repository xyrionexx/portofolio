"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function Socials() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <Navbar />
      
      {/* Background Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 p-1 md:p-2"
        >
          {/* HUD Decorative Corners */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-white" />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-white" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-white" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-white" />

          {/* Pop-up Inner Content */}
          <div className="bg-black border border-zinc-900 p-8 md:p-12">
            <div className="flex justify-between items-center mb-12 border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white animate-pulse" />
                <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">
                  Social_Connection // Interface
                </h2>
              </div>
              <div className="text-[10px] font-mono text-zinc-600">
                ID: 0X77_REXX
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Github", link: "#", label: "Source_Repository" },
                { name: "Instagram", link: "#", label: "Visual_Log" },
                { name: "LinkedIn", link: "#", label: "Professional_Network" },
                { name: "Discord", link: "#", label: "Comms_Channel" }
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="group relative flex justify-between items-center p-6 border border-zinc-900 hover:border-white hover:bg-white transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black text-white group-hover:text-black uppercase tracking-tighter transition-colors">
                      {social.name}
                    </span>
                    <span className="text-[8px] font-mono text-zinc-600 group-hover:text-zinc-400 uppercase tracking-widest mt-1">
                      {social.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-zinc-800 group-hover:bg-black transition-colors" />
                    <div className="text-[10px] font-mono text-zinc-500 group-hover:text-black uppercase">
                      [Visit]
                    </div>
                  </div>

                  {/* Selector Arrow (Appears on Hover) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute -left-6 text-white text-xl hidden md:block"
                  >
                    ▶
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center opacity-30">
              <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                System: Ready // No_Error
              </div>
              <div className="flex gap-2">
                <div className="w-1 h-1 bg-white" />
                <div className="w-1 h-1 bg-white" />
                <div className="w-1 h-1 bg-white opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* HUD Scanline Effect on Pop-up */}
        <div className="fixed inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
      </section>

      {/* BGM Player */}
      <BGMPlayer />
    </main>
  );
}

function BGMPlayer() {
  const [playing, setPlaying] = useState(false);
  const toggleAudio = () => {
    const audio = document.getElementById('bgm-audio') as HTMLAudioElement;
    if (!audio) return;
    playing ? audio.pause() : audio.play();
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4 group">
      <audio id="bgm-audio" loop src="/zelda.mp3" />
      <button onClick={toggleAudio} className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-black hover:border-white transition-all duration-300 relative overflow-hidden">
        {playing ? (
          <div className="flex gap-1 items-end h-3">
            <motion.div animate={{ height: [4, 12, 6] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-white" />
            <motion.div animate={{ height: [10, 4, 12] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-1 bg-white" />
            <motion.div animate={{ height: [6, 10, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-white" />
          </div>
        ) : (
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
        )}
      </button>
    </div>
  );
}
