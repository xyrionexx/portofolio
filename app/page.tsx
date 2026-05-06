"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/animations/Preloader";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          {/* Section 1: Hero */}
          <section className="relative h-screen flex flex-col items-center justify-center px-6">
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
                  animate={{ y: "-10%", opacity: [0, 0.3, 0] }}
                  transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
                  className="absolute w-[2px] h-[2px] bg-zinc-600"
                  style={{ imageRendering: 'pixelated' }}
                />
              ))}
            </div>

            <motion.div 
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 1.5, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="relative w-full max-w-4xl aspect-video z-10"
            >
              <Image
                src="/hero.png"
                alt="Gothic Chrome Portfolio"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain filter grayscale"
                priority
              />
            </motion.div>

            <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-center z-10 font-mono">
              <div className="text-[10px] text-zinc-600 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-700 animate-pulse" />
                [SYSTEM_STATUS: ACTIVE]
              </div>
              <div className="text-[10px] text-zinc-600 tracking-widest uppercase">
                LOAD_STATE // ARCHIVE_01
              </div>
            </div>
          </section>

          {/* Section 2: About (Who is the Creative) */}
          <section id="about" className="relative min-h-screen bg-black py-20 px-6 md:px-12 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col justify-center">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} viewport={{ once: true }}>
                  <div className="flex items-start gap-2 mb-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mt-1" />
                    <div className="flex flex-col">
                      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none opacity-40 translate-y-[-35px]">THE —</h2>
                      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent translate-y-[-15px]">WHO IS</h2>
                    </div>
                  </div>
                  <div className="mt-12 space-y-4">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">PROG_DESIGNER // ARCHITECT</div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed max-w-[250px]">CREATING IMMERSIVE DIGITAL EXPERIENCES THROUGH THE LENS OF MODERN GAME DESIGN.</p>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-5 flex justify-center relative">
                <div className="absolute left-[-25%] bottom-[28%] z-10 pointer-events-none w-[150%]">
                  <h3 className="text-4xl md:text-6xl font-bold text-zinc-500/30 tracking-tighter uppercase leading-[0.85]">PROGRAMMER & <br /> DESIGNER <br /> <span>CREATIVE</span></h3>
                </div>
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} className="relative w-full aspect-4/5 bg-white p-1 overflow-hidden group">
                  <div className="relative w-full h-full bg-white flex items-end justify-center">
                    <Image src="/person.jpeg" alt="The Creative" width={500} height={600} style={{ height: "auto", width: "100%" }} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top filter grayscale contrast-125 brightness-110" />
                    <div className="absolute top-0 left-0 w-full h-full bg-white mix-blend-multiply opacity-20" />
                    <div className="absolute left-[-25%] bottom-[28%] z-30 pointer-events-none w-[150%]">
                      <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase leading-[0.85]">PROGRAMMER & <br /> DESIGNER <br /> <span>CREATIVE</span></h3>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-3 pl-0 md:pl-12">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} className="text-right space-y-12">
                  <div className="flex justify-end italic text-zinc-600 text-xs font-mono">
                    \\
                  </div>
                  <p className="text-[9px] text-zinc-500 leading-relaxed tracking-widest uppercase max-w-sm ml-auto mt-0 md:mt-72">
                    MERGING TECHNICAL PRECISION WITH ARTISTIC VISION TO BUILD
                    THE FUTURE OF THE WEB—CRAFTING SEAMLESS, INTELLIGENT, AND
                    VISUALLY COMPELLING DIGITAL EXPERIENCES THAT NOT ONLY
                    FUNCTION FLAWLESSLY BUT ALSO INSPIRE, ENGAGE, AND REDEFINE
                    HOW USERS INTERACT WITH TECHNOLOGY IN A RAPIDLY EVOLVING
                    DIGITAL WORLD.
                  </p>
                  
                  <button className="flex items-center gap-4 ml-auto group">
                    <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold group-hover:tracking-[0.5em] transition-all duration-300">
                      READ MORE
                    </span>
                    <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 3: Tech Ops */}
          <section id="tech" className="relative min-h-screen bg-zinc-950 overflow-hidden py-32 px-6 md:px-12">
            <div className="absolute inset-0 z-40 pointer-events-none flex">
              <motion.div whileInView={{ x: "-100%" }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }} className="w-1/2 h-full bg-black relative"><div className="absolute right-0 top-0 w-px h-full bg-zinc-800" /></motion.div>
              <motion.div whileInView={{ x: "100%" }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }} className="w-1/2 h-full bg-black relative"><div className="absolute left-0 top-0 w-px h-full bg-zinc-800" /></motion.div>
              <motion.div initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 0.5 }} className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-white z-50 origin-top" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none opacity-10 mb-24">TECH_OPS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
                <SkillCategory title="Interface & Mobile" skills={["Next.js", "Vue.js", "React", "React Native", "Native Android"]} index={0} />
                <SkillCategory title="Logic & Persistence" skills={["Laravel", "Elysia", "Postgres", "MySQL", "SQLite", "Redis"]} index={1} />
                <SkillCategory title="Architecture & Creative" skills={["Minio", "Manage Server", "UI/UX Design"]} index={2} />
              </div>
            </div>

            {/* BGM Controller */}
            <BGMPlayer />
          </section>
        </>
      )}
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

function SkillCategory({ title, skills, index }: { title: string, skills: string[], index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 + (index * 0.2) }} className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-1.5 bg-zinc-800" />
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">{title}</h4>
      </div>
      <ul className="space-y-4">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-end gap-3 group/item">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase group-hover/item:text-zinc-500 transition-colors duration-300">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
