"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Socials() {
  const [stage, setStage] = useState<"init" | "loading" | "revealed">("init");

  const startSequence = () => {
    setStage("loading");
    setTimeout(() => {
      setStage("revealed");
    }, 1500); // Sequence duration
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Ambient Scanlines */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] bg-size-[100%_4px,3px_100%]" />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {stage === "init" && (
            <motion.button
              key="init-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              onClick={startSequence}
              className="group relative px-12 py-6 border border-zinc-800 bg-black hover:border-white transition-all duration-300"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-zinc-500 group-hover:border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-zinc-500 group-hover:border-white" />

              <span className="text-sm font-mono text-zinc-500 group-hover:text-white tracking-[0.5em] uppercase">
                [ ACCESS_CONNECTION ]
              </span>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest animate-pulse">
                  System_Ready // Press_to_Sync
                </span>
              </div>
            </motion.button>
          )}

          {stage === "loading" && (
            <motion.div
              key="loading-seq"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-64 h-1 bg-zinc-900 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white"
                />
              </div>
              <div className="flex flex-col items-center font-mono text-[10px] text-zinc-500 gap-1">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.1 }}
                >
                  DOWNLOADING_METADATA...
                </motion.span>
                <span className="text-white">
                  ENCRYPTING_SOCIAL_MATRIX [OK]
                </span>
              </div>
            </motion.div>
          )}

          {stage === "revealed" && (
            <motion.div
              key="revealed-menu"
              initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ type: "spring", duration: 1, bounce: 0.3 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 p-1 md:p-2 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            >
              {/* HUD Decorative Corners */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-white" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-white" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-white" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-white" />

              <div className="bg-black border border-zinc-900 p-8 md:p-12">
                <div className="flex justify-between items-center mb-12 border-b border-zinc-900 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white animate-pulse" />
                    <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">
                      Connection_Established
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      name: "Github",
                      link: "https://github.com/xyrionexx",
                      label: "Source_Repository",
                    },
                    {
                      name: "Instagram",
                      link: "https://www.instagram.com/xyrionex/",
                      label: "Visual_Log",
                    },
                    {
                      name: "LinkedIn",
                      link: "https://www.linkedin.com/in/adit-rahmat-15336b388/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn50cnZRbTYaVjuM8qcz%2FyQ%3D%3D",
                      label: "Professional_Network",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
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
                      <div className="text-[10px] font-mono text-zinc-500 group-hover:text-black uppercase tracking-widest">
                        [ Visit_Node ]
                      </div>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <BGMPlayer />
      <Footer />
    </main>
  );
}

function BGMPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bgm-audio") as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.1;
      audio.play()
        .then(() => setPlaying(true))
        .catch((e) => console.warn("Autoplay prevented by browser:", e));
    }
  }, []);
  const toggleAudio = () => {
    const audio = document.getElementById("bgm-audio") as HTMLAudioElement;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => console.warn("Audio missing"));
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4 group">
      <audio id="bgm-audio" loop src="/space.mp3" />
      <button
        onClick={toggleAudio}
        className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-black hover:border-white transition-all duration-300 relative overflow-hidden"
      >
        {playing ? (
          <div className="flex gap-1 items-end h-3">
            <motion.div
              animate={{ height: [4, 12, 6] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="w-1 bg-white"
            />
            <motion.div
              animate={{ height: [10, 4, 12] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              className="w-1 bg-white"
            />
            <motion.div
              animate={{ height: [6, 10, 4] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="w-1 bg-white"
            />
          </div>
        ) : (
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white border-b-[6px] border-b-transparent ml-1" />
        )}
      </button>
    </div>
  );
}
