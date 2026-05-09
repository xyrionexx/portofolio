"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <Navbar />

      {/* Background Ambient Scanlines */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] bg-size-[100%_4px,3px_100%]" />

      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col z-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Back Button */}
          <Link href="/#about" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Return_To_Base
          </Link>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7 space-y-12"
            >
              <div className="mb-12 border-b border-zinc-900 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-white animate-pulse" />
                  <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">
                    CREATIVE_ARCHITECT // LEVEL 24
                  </h3>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-4">
                  ABOUT_ME
                </h1>
                <p className="text-sm md:text-lg text-zinc-500 uppercase tracking-widest max-w-xl font-mono mt-6 leading-relaxed">
                  I am a passionate Programmer and Designer dedicated to building immersive digital experiences that blur the line between technology and art.
                </p>
              </div>

              {/* Extended Details */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-[0.3em] mb-4 border-l-2 border-white pl-3">
                    Origin_Story
                  </h4>
                  <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                    Berawal dari ketertarikan mendalam pada dunia pemrograman dan desain visual, saya telah mendedikasikan diri untuk memahami bagaimana teknologi dapat digunakan untuk menciptakan solusi yang tidak hanya fungsional, tetapi juga memberikan pengalaman estetika yang luar biasa. Pendekatan saya selalu menggabungkan logika komputasional dengan kreativitas tanpa batas.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-[0.3em] mb-4 border-l-2 border-white pl-3">
                    Mission_Objective
                  </h4>
                  <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                    Tujuan saya adalah untuk terus mendorong batas inovasi di bidang pengembangan web dan perangkat lunak. Saya percaya bahwa antarmuka yang dirancang dengan baik dapat meningkatkan interaksi manusia dengan teknologi secara signifikan. Setiap baris kode dan setiap elemen visual yang saya buat ditujukan untuk membangun ekosistem digital yang kuat, aman, dan indah.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content / Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-5 flex flex-col justify-center"
            >
              <div className="relative aspect-[4/5] bg-zinc-900 border border-zinc-800 p-2 group">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r border-t border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l border-b border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-zinc-500 group-hover:border-white transition-colors" />
                
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/person.jpeg"
                    alt="Creative Portrait"
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-75 hover:brightness-100 transition-all duration-700"
                  />
                  {/* Scanning Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay opacity-50" />
                </div>
              </div>

              {/* Stats HUD */}
              <div className="mt-8 border border-zinc-900 p-6 grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Status</h5>
                  <p className="text-xs text-green-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    ONLINE
                  </p>
                </div>
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Class</h5>
                  <p className="text-xs text-white uppercase tracking-widest">Architect</p>
                </div>
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">XP Level</h5>
                  <p className="text-xs text-white uppercase tracking-widest">MAX</p>
                </div>
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Base</h5>
                  <p className="text-xs text-white uppercase tracking-widest">IDN</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
