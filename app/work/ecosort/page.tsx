"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";

export default function EcoSortProject() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <PageTransition />
      <Navbar />

      {/* Background Ambient Scanlines */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] bg-size-[100%_4px,3px_100%]" />

      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col z-10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Back Button */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Return_To_Archive
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 border-b border-zinc-900 pb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.3em]">
                PROJECT_ID: 02 // DECLASSIFIED
              </h3>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-4">
              ECOSORT
            </h1>
            <p className="text-sm md:text-xl text-zinc-500 uppercase tracking-widest max-w-2xl font-mono mt-6">
              Ekosistem aplikasi cerdas berbasis Flutter dan Kecerdasan Buatan (AI) untuk mengelola sampah dan memupuk gaya hidup ramah lingkungan.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-8 space-y-12"
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-zinc-900 border border-zinc-800 p-2 group">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r border-t border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l border-b border-zinc-500 group-hover:border-white transition-colors" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-zinc-500 group-hover:border-white transition-colors" />

                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/ecosort_icon.png"
                    alt="EcoSort App Interface"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-[0.3em] mb-4 border-l-2 border-white pl-3">
                    Mission_Briefing
                  </h4>
                  <p className="text-zinc-400 leading-relaxed font-mono text-sm">
                    EcoSort adalah ekosistem aplikasi cerdas berbasis Flutter dan Kecerdasan Buatan (AI) yang dirancang untuk membantu masyarakat mengelola sampah dengan mudah, serta memupuk gaya hidup ramah lingkungan (eco-friendly) melalui pendekatan gamifikasi. Aplikasi ini menggunakan model Computer Vision untuk memindai jenis sampah secara otomatis dan Natural Language Processing sebagai asisten lingkungan virtual.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-white uppercase tracking-[0.3em] mb-4 border-l-2 border-white pl-3">
                    Core_Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400 font-mono text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-white">▸</span> AI Waste Scanner
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">▸</span> EcoSort Mentor (Chatbot)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">▸</span> Eco-Habit Tracker & Heatmap
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">▸</span> Global Leaderboard
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar (Download & Meta) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-4 flex flex-col gap-8"
            >
              {/* Download Widget */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />

                <div className="flex flex-col items-center text-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-full border border-green-500/50 flex items-center justify-center mb-2 bg-green-500/10">
                    <span className="text-xl text-green-500 animate-pulse">
                      ↓
                    </span>
                  </div>

                  <div>
                    <h4 className="text-green-500 font-bold tracking-widest uppercase mb-2">
                      READY_TO_DEPLOY
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-mono uppercase">
                      The application build is complete and ready for installation. Download the APK file below.
                    </p>
                  </div>

                  <a href="/EcoSort.apk" download className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center hover:bg-zinc-200 transition-colors cursor-pointer group/dl">
                    <span>DOWNLOAD_APK</span>
                    <span className="ml-2 group-hover/dl:translate-y-1 transition-transform">↓</span>
                  </a>

                  <a href="https://github.com/xyrionexx/LKS_ecoscan" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer group/gh">
                    <span>VIEW_ON_GITHUB</span>
                    <span className="ml-2 group-hover/gh:translate-x-1 transition-transform">↗</span>
                  </a>

                  <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                    SYSTEM_STATUS // BUILD_COMPLETE
                  </div>
                </div>
              </div>

              {/* Meta Data */}
              <div className="border border-zinc-900 p-6 space-y-6">
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                    Target
                  </h5>
                  <p className="text-xs text-white uppercase tracking-widest">
                    Environment & Society
                  </p>
                </div>
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                    Platform
                  </h5>
                  <p className="text-xs text-white uppercase tracking-widest">
                    Android (APK)
                  </p>
                </div>
                <div>
                  <h5 className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">
                    Status
                  </h5>
                  <p className="text-xs text-green-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    ONLINE & ACTIVE
                  </p>
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
