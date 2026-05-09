"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-zinc-900 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        
        {/* Left: Player Stats Overlay */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="text-xl text-white font-bold">X</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">PLAYER: XYRIONEXX</h4>
              <div className="text-[8px] text-zinc-600 uppercase tracking-[0.3em]">LVL. 24 ARCHITECT</div>
            </div>
          </div>

          <div className="space-y-3 max-w-[200px]">
            {/* HP Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>HP [EXPERIENCE]</span>
                <span>100%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 border border-zinc-800 p-px">
                <div className="h-full w-full bg-white opacity-80 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </div>
            </div>
            {/* MP Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>MP [CREATIVITY]</span>
                <span>MAX</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 border border-zinc-800 p-px">
                <div className="h-full w-[85%] bg-zinc-500 shadow-[0_0_8px_rgba(113,113,122,0.3)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Mission Log (Navigation) */}
        <div className="md:col-span-4 flex flex-col md:items-start space-y-8">
          <div className="space-y-4">
            <h5 className="text-[10px] text-zinc-500 uppercase tracking-[0.5em] font-bold border-b border-zinc-900 pb-2">MISSION_LOG</h5>
            <div className="flex flex-col gap-3">
              {[
                { name: "ABOUT_ME", link: "#about" },
                { name: "TECH_OPS", link: "#tech" },
                { name: "WORK_ARCHIVE", link: "#work" },
                { name: "SOCIAL_MATRIX", link: "#socials" }
              ].map((item) => (
                <a key={item.name} href={item.link} className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1 h-1 bg-zinc-800 group-hover:bg-white transition-colors" />
                  <span className="tracking-widest">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Actions & Respawn */}
        <div className="md:col-span-4 flex flex-col md:items-end space-y-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group relative px-8 py-4 border border-zinc-800 bg-zinc-950 hover:border-white transition-all duration-300"
          >
            <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-zinc-500 group-hover:border-white" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-zinc-500 group-hover:border-white" />
            <span className="text-[10px] text-zinc-400 group-hover:text-white font-mono tracking-[0.4em] uppercase">
              [ RESPAWN_TO_TOP ]
            </span>
          </motion.button>

          <div className="flex gap-6">
            {[
              { label: "GH", link: "https://github.com/xyrionexx" },
              { label: "IG", link: "https://www.instagram.com/xyrionex/" },
              { label: "LI", link: "https://www.linkedin.com/in/adit-rahmat-15336b388/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn50cnZRbTYaVjuM8qcz%2FyQ%3D%3D" }
            ].map((social) => (
              <a 
                key={social.label} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-zinc-900 flex items-center justify-center text-[10px] text-zinc-600 hover:border-zinc-500 hover:text-white transition-all cursor-pointer font-mono"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom System Log */}
      <div className="mt-20 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
        <div className="text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase">
          SYSTEM_VERSION: 1.0.4 // KERNEL_RELEASE: MAY_2026
        </div>
        <div className="text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase">
          © 2026 XYRIONEXX // ALL_RIGHTS_RESERVED
        </div>
      </div>
    </footer>
  );
}
