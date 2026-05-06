"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <Navbar />

      {/* Section 2: Who is the Creative (Moved from Home) */}
      <section className="relative min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title - Kept Higher */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-2 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mt-1" />
                <div className="flex flex-col">
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none opacity-40 translate-y-[-35px]">
                    THE —
                  </h2>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent translate-y-[-15px]">
                    WHO IS
                  </h2>
                </div>
              </div>
              <div className="mt-12 space-y-4">
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  PROG_DESIGNER // ARCHITECT
                </div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed max-w-[250px]">
                  CREATING IMMERSIVE DIGITAL EXPERIENCES THROUGH THE LENS OF
                  MODERN GAME DESIGN.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Middle Column: Photo with Dual-Layer Text Effect */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute left-[-25%] bottom-[28%] z-10 pointer-events-none w-[150%]">
              <h3 className="text-4xl md:text-6xl font-bold text-zinc-500/30 tracking-tighter uppercase leading-[0.85]">
                PROGRAMMER & <br /> DESIGNER <br /> <span>CREATIVE</span>
              </h3>
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="relative w-full aspect-4/5 bg-white p-1 overflow-hidden group"
            >
              <div className="relative w-full h-full bg-white flex items-end justify-center">
                <Image
                  src="/person.jpeg"
                  alt="The Creative"
                  width={500}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top filter grayscale contrast-125 brightness-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white mix-blend-multiply opacity-20" />

                <div className="absolute left-[-25%] bottom-[28%] z-30 pointer-events-none w-[150%]">
                  <h3 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase leading-[0.85]">
                    PROGRAMMER & <br /> DESIGNER <br /> <span>CREATIVE</span>
                  </h3>
                </div>

                <div className="absolute bottom-4 left-4 text-[8px] text-zinc-400 font-mono uppercase tracking-widest">
                  LEVEL // S-RANK
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Text */}
          <div className="md:col-span-3 pl-0 md:pl-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="text-right space-y-12"
            >
              <div className="flex justify-end italic text-zinc-600 text-xs font-mono">
                \\
              </div>
              <p className="text-[9px] text-zinc-500 leading-relaxed tracking-widest uppercase max-w-sm ml-auto mt-0 md:mt-72">
                MERGING TECHNICAL PRECISION WITH ARTISTIC VISION TO BUILD THE
                FUTURE OF THE WEB—CRAFTING SEAMLESS, INTELLIGENT, AND VISUALLY
                COMPELLING DIGITAL EXPERIENCES.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section (Moved from Home) */}
      <section className="relative min-h-screen bg-zinc-950 overflow-hidden py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none opacity-10 mb-4">
                TECH_OPS
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-zinc-700" />
                <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">
                  Capabilities // Fullstack // Design
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
            <SkillCategory
              title="Interface & Mobile"
              skills={[
                "Next.js",
                "Vue.js",
                "React",
                "React Native",
                "Native Android",
              ]}
              index={0}
            />
            <SkillCategory
              title="Logic & Persistence"
              skills={[
                "Laravel",
                "Elysia",
                "Postgres",
                "MySQL",
                "SQLite",
                "Redis",
              ]}
              index={1}
            />
            <SkillCategory
              title="Architecture & Creative"
              skills={["Minio", "Manage Server", "UI/UX Design"]}
              index={2}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCategory({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="bg-black p-12 hover:bg-zinc-950 transition-colors duration-500 group"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-1.5 bg-zinc-800" />
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
          {title}
        </h4>
      </div>
      <ul className="space-y-4">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-end gap-3 group/item">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase group-hover/item:text-zinc-500 transition-colors duration-300">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
