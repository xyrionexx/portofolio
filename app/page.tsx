'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '@/components/animations/Preloader';
import Navbar from '@/components/layout/Navbar';

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
          
          {/* Hero Section with Ethereal Angel Theme */}
          <section className="relative h-screen flex flex-col items-center justify-center px-6">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="relative w-full max-w-4xl aspect-video z-10"
            >
              <Image
                src="/hero-logo.png"
                alt="Ethereal Angel Portfolio"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Subtle Gaming HUD */}
            <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-center z-10 font-mono">
                <div className="text-[10px] text-zinc-600 tracking-widest uppercase">
                    [System_Status: Stable]
                </div>
                <div className="text-[10px] text-zinc-600 tracking-widest uppercase">
                    2024 // Archive
                </div>
            </div>
          </section>

          {/* Section 2: Precise Layout from Reference Image */}
          <section className="relative min-h-[80vh] bg-black py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Title */}
              <div className="md:col-span-3">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">
                      WHO IS <br /> THE —
                    </h2>
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-8 font-medium">
                    BOBBY WARDEL <br /> SANDIMANIE III
                  </div>
                </motion.div>
              </div>

              {/* Middle Column: Photo with White Box */}
              <div className="md:col-span-5 flex justify-center">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                  className="relative w-full aspect-[4/5] bg-white p-1" // The white box
                >
                    <div className="relative w-full h-full bg-white flex items-end justify-center overflow-hidden">
                         <Image
                            src="/person.jpeg"
                            alt="The Creative"
                            width={500}
                            height={600}
                            className="object-cover object-top filter grayscale contrast-125"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-white mix-blend-multiply opacity-20" />
                        
                        {/* Overlapping Text in Box */}
                        <div className="absolute left-[-20%] top-[40%] z-20 pointer-events-none">
                             <h3 className="text-5xl md:text-7xl font-bold text-black tracking-tighter uppercase leading-[0.8] opacity-90">
                                DESTROY <br /> LONELY?
                             </h3>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 text-[8px] text-zinc-400 font-mono uppercase">
                            25 \\ 05 \\ 2023
                        </div>
                    </div>
                </motion.div>
              </div>

              {/* Right Column: Bio Text */}
              <div className="md:col-span-4 pl-0 md:pl-12">
                <motion.div
                   whileInView={{ opacity: 1, x: 0 }}
                   initial={{ opacity: 0, x: 30 }}
                   viewport={{ once: true }}
                   className="text-right space-y-12"
                >
                  <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed tracking-widest uppercase max-w-sm ml-auto">
                    ATLANTA RAPPER DESTROY LONELY TYPICALLY DELIVERS ERRATIC, SPEEDY RHYMES OVER ATMOSPHERIC TRAP BEATS.
                  </p>
                  
                  <div className="flex justify-end italic text-zinc-600 text-xs font-mono">
                    \\
                  </div>

                  <p className="text-[9px] md:text-[10px] text-zinc-500 leading-relaxed tracking-widest uppercase max-w-sm ml-auto">
                    HE'S RELEASED NUMEROUS MIXTAPES AND EPS SINCE THE LATE 2010S, AND HIS 2019 SINGLE "BANE" BECAME A VIRAL HIT TWO YEARS AFTER IT FIRST APPEARED. AFTER SIGNING WITH PLAYBOI CARTI'S OPIUM IMPRINT...
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

            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 p-8 opacity-20 pointer-events-none">
                 <div className="w-4 h-4 border-l border-t border-white" />
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                 <div className="w-4 h-4 border-r border-t border-white" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 opacity-20 pointer-events-none">
                 <div className="w-4 h-4 border-l border-b border-white" />
            </div>
            <div className="absolute bottom-0 right-0 p-8 opacity-20 pointer-events-none">
                 <div className="w-4 h-4 border-r border-b border-white" />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
