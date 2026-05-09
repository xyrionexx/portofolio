"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Preloader from "@/components/animations/Preloader";
import HeroCenter from "@/components/animations/HeroCenter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if already loaded in this session after mounting
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  // Handle hash scrolling when navigating back from other pages
  useEffect(() => {
    if (!loading && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          {/* Section 1: Hero */}
          <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24">
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: "110%",
                    opacity: 0,
                  }}
                  animate={{ y: "-10%", opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: Math.random() * 8 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear",
                  }}
                  className="absolute w-[2px] h-[2px] bg-zinc-600"
                  style={{ imageRendering: "pixelated" }}
                />
              ))}
            </div>

            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-full max-w-4xl z-10 flex justify-center my-12 md:my-0"
            >
              <HeroCenter />

              {/* Neutral Glitch Animation */}
              <motion.div
                animate={{
                  opacity: [0, 0.1, 0],
                  x: [0, 1, -1, 0],
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 7 }}
                className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"
              />
            </motion.div>

            <HeroShip />
            <HackerRain />

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
          <section
            id="about"
            className="relative min-h-screen bg-black py-20 px-6 md:px-12 border-t border-zinc-900"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col justify-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-2 mb-8 relative">
                    {/* HUD Brackets */}
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute -left-4 -top-4 w-8 h-8 border-l border-t border-white/20"
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mt-1" />
                    <div className="flex flex-col">
                      <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none opacity-40 translate-y-[-35px]">
                        <DecryptedText text="THE —" />
                      </h2>
                      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8] bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent translate-y-[-15px]">
                        <DecryptedText text="WHO IS" delay={0.5} />
                      </h2>
                    </div>
                  </div>
                  <div className="mt-12 space-y-4">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                      PROG_DESIGNER // ARCHITECT
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed max-w-[250px]">
                      CRAFTING MODERN AND IMMERSIVE DIGITAL EXPERIENCES WITH
                      CREATIVE VISUAL DESIGN
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-5 flex justify-center relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute left-[-5%] md:left-[-25%] bottom-[28%] z-10 pointer-events-none w-[110%] md:w-[150%]"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-500/30 tracking-tighter uppercase leading-[0.85]">
                    PROGRAMMER & <br /> DESIGNER <br /> <span>CREATIVE</span>
                  </h3>
                </motion.div>
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
                    <div className="absolute left-[-5%] md:left-[-25%] bottom-[28%] z-30 pointer-events-none w-[110%] md:w-[150%]">
                      <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase leading-[0.85]">
                        PROGRAMMER & <br /> DESIGNER <br />{" "}
                        <span>CREATIVE</span>
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </div>

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
                    <DecryptedText text="FULL-STACK WEB DEVELOPER SPECIALIZED IN LARAVEL, ELYSIA, NEXT.JS, AND SVELTE WITH EXPERIENCE IN GITHUB & GITLAB WORKFLOWS. CREATIVE IN BUILDING MODERN DARK MODE INTERFACES, IMMERSIVE WEB EXPERIENCES, AND MOBILE APPS USING ANDROID NATIVE & REACT NATIVE." />
                  </p>

                  <Link
                    href="/about"
                    className="flex items-center gap-4 ml-auto group"
                  >
                    <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold group-hover:tracking-[0.5em] transition-all duration-300">
                      READ MORE
                    </span>
                    <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 3: Tech Ops */}
          <section
            id="tech"
            className="relative min-h-screen bg-zinc-950 overflow-hidden py-32 flex flex-col justify-center"
          >
            <div className="absolute inset-0 z-40 pointer-events-none flex">
              <motion.div
                whileInView={{ x: "-100%" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.77, 0, 0.175, 1],
                  delay: 0.5,
                }}
                className="w-1/2 h-full bg-black relative"
              >
                <div className="absolute right-0 top-0 w-px h-full bg-zinc-800" />
              </motion.div>
              <motion.div
                whileInView={{ x: "100%" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.77, 0, 0.175, 1],
                  delay: 0.5,
                }}
                className="w-1/2 h-full bg-black relative"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-zinc-800" />
              </motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 mb-12">
              <h2 className="text-5xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none opacity-10">
                TECH_OPS
              </h2>
              <div className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] mt-4 uppercase">
                \\ CORE_INFRASTRUCTURE // STACK_VERSION_2.4
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-8 md:gap-12">
              {/* Row 1: Frontend & Mobile */}
              <TechMarquee
                items={[
                  { name: "Next.js", icon: "NEXT" },
                  { name: "React", icon: "REACT" },
                  { name: "Vue.js", icon: "VUE" },
                  { name: "React Native", icon: "RN" },
                  { name: "Android Native", icon: "AND" },
                  { name: "Tailwind", icon: "TW" },
                ]}
                speed={30}
              />

              {/* Row 2: Backend & Database */}
              <TechMarquee
                items={[
                  { name: "Laravel", icon: "LAR" },
                  { name: "Elysia", icon: "ELY" },
                  { name: "Node.js", icon: "NODE" },
                  { name: "Postgres", icon: "PG" },
                  { name: "MySQL", icon: "SQL" },
                  { name: "Redis", icon: "RDS" },
                  { name: "SQLite", icon: "LITE" },
                ]}
                speed={40}
                reverse
              />
            </div>

            {/* Gradient Fades for the edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
          </section>

          {/* Section 4: Work Archive */}
          <section
            id="work"
            className="relative min-h-screen bg-black py-32 px-6 md:px-12 border-t border-zinc-900"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-24">
                <div>
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4">
                    // PROJECT_FILES
                  </h3>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none break-words">
                    WORK_ARCHIVE
                  </h2>
                </div>
                <div className="text-[10px] font-mono text-zinc-600 text-right hidden md:block">
                  STATUS: DECLASSIFIED
                  <br />
                  ENTRY_ID: 0X_PRJ_24
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    id: "01",
                    name: "LEARNKUY_APP",
                    type: "LMS & Exam Platform",
                    image: "/Learnkuy.jpeg",
                    link: "/work/learnkuy",
                  },
                ].map((project, i) => (
                  <motion.a
                    href={project.link}
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative cursor-pointer block"
                  >
                    <div className="relative aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 group-hover:border-white transition-colors duration-500">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 text-[10px] font-mono text-white bg-black/50 px-2 py-1 backdrop-blur-md">
                        ID_{project.id}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tighter uppercase group-hover:tracking-widest transition-all duration-500">
                          {project.name}
                        </h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                          {project.type}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white transition-all">
                        <span className="text-zinc-600 group-hover:text-black text-xs">
                          ↗
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Social Matrix */}
          <SocialSection />

          {/* Section 6: Contact / Quest Initiation */}
          <ContactSection />

          {/* Footer Section */}
          <Footer />
        </>
      )}
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
      transition={{ delay: 0.8 + index * 0.2 }}
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

function DecryptedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Initialize with random characters of the same length to prevent layout jumps
  const [displayText, setDisplayText] = useState(() =>
    text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : characters[Math.floor(Math.random() * characters.length)],
      )
      .join(""),
  );

  useEffect(() => {
    if (!isInView) return; // Wait until component is in viewport

    let iteration = 0;
    const duration = 15; // Even faster: 2.5s total for ~120 chars

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (text[index] === " ") return " "; // Preserve spaces for proper wrapping
              if (index < iteration) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join(""),
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1; // Reveal one character per 20ms
      }, duration);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay, isInView]);

  return <span ref={ref}>{displayText}</span>;
}

function TechMarquee({
  items,
  speed = 20,
  reverse = false,
}: {
  items: { name: string; icon: string }[];
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div className="flex overflow-hidden group">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-4 md:gap-8 pr-4 md:pr-8"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 px-6 py-4 md:px-10 md:py-6 group/item hover:border-white transition-all duration-300"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              {getTechIcon(item.icon)}
            </div>
            <span className="text-xl md:text-3xl font-bold text-white tracking-tighter uppercase group-hover/item:tracking-widest transition-all duration-500">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function getTechIcon(icon: string) {
  switch (icon) {
    case "NEXT":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "REACT":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "VUE":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 2h20L12 22zM7 2l5 8 5-8h-10z" />
        </svg>
      );
    case "RN":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
        </svg>
      );
    case "AND":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M17.5 13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM6.5 13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
      );
    case "TW":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 3c-4.4 0-7.1 2.2-8.1 6.6 1.8-2.6 3.8-3.6 6.1-2.9.3.1.6.4.9.7 1.8 1.9 3.9 4.1 8.5 4.1 4.4 0 7.1-2.2 8.1-6.6-1.8 2.6-3.8 3.6-6.1 2.9-.3-.1-.6-.4-.9-.7-1.8-1.9-3.9-4.1-8.5-4.1z" />
        </svg>
      );
    case "FM":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 0L4 8h8l8 8H12l-8 8h16V0H12z" />
        </svg>
      );
    case "LAR":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M22 2v20H2V2h20zm-2 2H4v16h16V4z" />
        </svg>
      );
    case "ELY":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      );
    case "PG":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 8h8v8H8V8z" />
        </svg>
      );
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2C6.5 2 2 4.5 2 7.5S6.5 13 12 13s10-2.5 10-5.5S17.5 2 12 2zm0 13c-5.5 0-10-2.5-10-5.5V17c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-7.5c0 3-4.5 5.5-10 5.5z" />
        </svg>
      );
    case "LITE":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
        </svg>
      );
    case "RDS":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </svg>
      );
    case "MNO":
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] bg-black flex items-center justify-center py-32 px-6 overflow-hidden border-t border-zinc-900"
    >
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Scanning Line */}
        <motion.div
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-px bg-white/20 z-0"
        />

        {/* Signal Bars Left - Hidden on small screens */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 space-y-1 hidden lg:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 1, 0.2],
                width: [12, 24, 12],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="h-1 bg-zinc-700"
            />
          ))}
          <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mt-4 rotate-90 origin-left translate-x-4">
            SIGNAL_STRENGTH // 088%
          </div>
        </div>

        {/* Coords Right - Hidden on small screens */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-right font-mono text-[10px] text-zinc-600 space-y-4 hidden lg:block">
          <div>LAT: 40.7128° N</div>
          <div>LNG: 74.0060° W</div>
          <div>ALT: 24.0M</div>
          <div className="w-24 h-px bg-zinc-800 ml-auto" />
          <div className="text-white animate-pulse">STATUS: DECRYPTING...</div>
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10 px-4 md:px-0">
        <div className="text-center mb-16">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4">
            // TERMINAL_05
          </h3>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-8 break-words">
            QUEST_INITIATION
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Dialogue Box Design */}
          <div className="absolute -inset-1 bg-linear-to-r from-zinc-800 via-white/20 to-zinc-800 opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative bg-zinc-950 border border-zinc-800 p-8 md:p-16 flex flex-col items-center gap-12">
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20" />

            <p className="text-lg md:text-2xl text-zinc-400 font-medium tracking-tight text-center max-w-2xl leading-relaxed">
              <DecryptedText
                text="READY TO START A NEW CAMPAIGN? ESTABLISH A SECURE CHANNEL TO DISCUSS COLLABORATION, PROJECTS, OR ANY MISSION OBJECTIVES."
                delay={1}
              />
            </p>

            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                Direct_Channel
              </span>
              <a
                href="mailto:aditcareer12370@gmail.com"
                className="text-xs font-mono text-white/50 hover:text-white transition-colors tracking-widest"
              >
                aditcareer12370@gmail.com
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
              <a
                href="mailto:aditcareer12370@gmail.com"
                className="relative group/btn"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10">INITIATE_COMMS</span>
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-zinc-200 z-0"
                  />
                </motion.div>
              </a>

              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border border-zinc-800 text-white font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                VIEW_ALL_QUESTS
              </motion.a>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-30">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
              <div className="text-[8px] font-mono tracking-widest">
                AWAITING_INPUT...
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialSection() {
  const [stage, setStage] = useState<"init" | "loading" | "revealed">("init");

  const startSequence = () => {
    setStage("loading");
    setTimeout(() => {
      setStage("revealed");
    }, 1500);
  };

  return (
    <section
      id="socials"
      className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center py-32 px-6 border-t border-zinc-900"
    >
      <AnimatePresence mode="wait">
        {stage === "init" && (
          <motion.button
            key="init-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            onClick={startSequence}
            className="group relative px-12 py-6 border border-zinc-800 bg-black hover:border-white transition-all duration-300 z-10"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-zinc-500 group-hover:border-white" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-zinc-500 group-hover:border-white" />
            <span className="text-sm font-mono text-zinc-500 group-hover:text-white tracking-[0.5em] uppercase">
              [ ACCESS_CONNECTION ]
            </span>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
              <span className="text-white">ENCRYPTING_SOCIAL_MATRIX [OK]</span>
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
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function HeroShip() {
  const ships = [
    { id: 1, x: 20, y: 15, delay: 0 },
    { id: 2, x: 10, y: 50, delay: 1 },
    { id: 3, x: 25, y: 80, delay: 2 },
    { id: 4, x: 45, y: 10, delay: 3 },
    { id: 5, x: 80, y: 20, delay: 4 },
    { id: 6, x: 90, y: 55, delay: 5 },
    { id: 7, x: 85, y: 85, delay: 6 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 hidden md:block">
      {ships.map((s) => (
        <Ship key={s.id} x={s.x} y={s.y} delay={s.delay} />
      ))}
    </div>
  );
}

function Ship({ x, y, delay }: { x: number; y: number; delay: number }) {
  const [lasers, setLasers] = useState<{ id: number }[]>([]);
  const shipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const laserId = Date.now();
        setLasers((prev) => [...prev, { id: laserId }]);
        setTimeout(() => {
          setLasers((prev) => prev.filter((l) => l.id !== laserId));
        }, 5000); // Increased timeout to 5s
      },
      1500 + Math.random() * 1000,
    );
    return () => clearInterval(interval);
  }, []);

  // Calculate rotation to face center (50, 50)
  const angle = Math.atan2(50 - y, 50 - x) * (180 / Math.PI);

  return (
    <motion.div
      ref={shipRef}
      initial={{ left: `${x}%`, top: `${y}%`, opacity: 0 }}
      animate={{
        left: [`${x}%`, `${x + 2}%`, `${x}%`],
        top: [`${y}%`, `${y - 2}%`, `${y}%`],
        opacity: [0, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ rotate: angle }} // Changed from angle + 90 because the new SVG is horizontal
      className="absolute w-12 h-6 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      {/* F-14 Fighter Jet SVG */}
      <img
        src="/f14_pesawat.svg"
        alt="F-14"
        className="w-full h-full object-contain"
      />

      {/* Lasers firing towards center */}
      {lasers.map((laser) => (
        <motion.img
          key={laser.id}
          src="/f14_tembakan (1).svg"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: [`0vw`, `${50 - x}vw`],
            y: [`0vh`, `${50 - y}vh`],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.1, 0.6, 1], // Fade in 0.5s, Hold 2.5s, Fade out 2.0s
            ease: "easeInOut",
          }}
          className="absolute w-24 h-12 object-contain pointer-events-none"
        />
      ))}
    </motion.div>
  );
}

function HackerRain() {
  const columns = [
    { text: "REACT_DEVELOPER", left: "5%", delay: 0 },
    { text: "NEXTJS_EXPERT", left: "20%", delay: 2 },
    { text: "FULLSTACK_ENGINEER", left: "35%", delay: 4 },
    { text: "SYSTEM_ARCHITECT", left: "50%", delay: 1 },
    { text: "UI_UX_DESIGNER", left: "65%", delay: 3 },
    { text: "CYBER_CODER", left: "80%", delay: 5 },
    { text: "PROGRAMMING_LOG", left: "92%", delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute top-0 h-full flex flex-col font-mono text-[18px] text-white tracking-[0.2em] font-bold"
          style={{ left: col.left }}
        >
          <RainColumn text={col.text} delay={col.delay} />
        </div>
      ))}
    </div>
  );
}

function RainColumn({ text, delay }: { text: string; delay: number }) {
  const characters = text.split("");
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="flex flex-col"
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col mb-16">
          {characters.map((char, j) => (
            <motion.span
              key={j}
              animate={{
                opacity: [0.1, 1, 0.1],
                color: ["#444", "#fff", "#444"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: j * 0.15,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
