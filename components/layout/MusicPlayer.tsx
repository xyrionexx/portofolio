"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check for "hasLoaded" to start playing
    const checkStatus = () => {
      const hasLoaded = sessionStorage.getItem("hasLoaded");
      const audio = audioRef.current;
      
      if (hasLoaded === "true" && audio) {
        audio.volume = 0.1;
        audio.play()
          .then(() => setPlaying(true))
          .catch((e) => {
            // This might happen if they refresh on a page other than home
            // We just wait for another click
            console.warn("Autoplay blocked, waiting for interaction", e);
          });
      }
    };

    // Initial check
    checkStatus();

    // Listen for storage changes (in case they enter system on another tab, though unlikely)
    // and also poll for a bit because session storage change event doesn't trigger in same tab
    const interval = setInterval(checkStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch((e) => console.warn("Playback failed", e));
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4 group">
      <audio ref={audioRef} id="bgm-audio-persistent" loop src="/space.mp3" />
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
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
        )}
      </button>
      
      {/* Tooltip on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-16 whitespace-nowrap pointer-events-none">
        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest bg-black/80 px-2 py-1 border border-zinc-900">
          Audio_Feed: {playing ? "ACTIVE" : "OFFLINE"}
        </span>
      </div>
    </div>
  );
}
