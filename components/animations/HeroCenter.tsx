"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useTyping(lines: { text: string; type: string }[], speed = 36) {
  const [displayed, setDisplayed] = useState<{ text: string; type: string }[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  // Reset when lines change
  useEffect(() => {
    setDisplayed([]);
    setLineIdx(0);
    setCharIdx(0);
    setDone(false);
  }, [lines]);

  useEffect(() => {
    if (lineIdx >= lines.length) { setDone(true); return; }
    if (charIdx < lines[lineIdx].text.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          if (!next[lineIdx]) next[lineIdx] = { text: "", type: lines[lineIdx].type };
          next[lineIdx] = { text: next[lineIdx].text + lines[lineIdx].text[charIdx], type: lines[lineIdx].type };
          return next;
        });
        setCharIdx(c => c + 1);
      }, speed + Math.random() * 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setLineIdx(l => l + 1); setCharIdx(0); }, 260);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, lines, speed]);

  return { displayed, done };
}

const DEFAULT_LINES = [
  { text: "$ whoami",                       type: "cmd" },
  { text: "  → XYRIONEXX",                  type: "hi" },
  { text: "$ cat role.txt",                 type: "cmd" },
  { text: "  → Web & Mobile Developer",     type: "hi" },
  { text: "$ ls ./stack",                   type: "cmd" },
  { text: "  → Laravel  Next.js  Elysia",   type: "out" },
  { text: "  → React Native  Android Native",type: "out" },
  { text: "$ status --availability",        type: "cmd" },
  { text: "  → [OPEN TO WORK]",             type: "hi" },
];

const TECH_LINES: Record<string, { text: string; type: string }[]> = {
  "Laravel": [
    { text: "$ analyze --tech Laravel", type: "cmd" },
    { text: "  → [MASTERY: 98%]", type: "hi" },
    { text: "  → Fullstack Web Framework.", type: "out" },
    { text: "  → Advanced Routing, Eloquent ORM.", type: "out" },
    { text: "  → Ready for enterprise apps.", type: "out" }
  ],
  "Next.js": [
    { text: "$ analyze --tech Next.js", type: "cmd" },
    { text: "  → [MASTERY: 95%]", type: "hi" },
    { text: "  → React Framework for Web.", type: "out" },
    { text: "  → SSR, SSG, and App Router expert.", type: "out" },
    { text: "  → Optimal performance & SEO.", type: "out" }
  ],
  "Elysia": [
    { text: "$ analyze --tech Elysia", type: "cmd" },
    { text: "  → [MASTERY: 90%]", type: "hi" },
    { text: "  → Ergonomic Framework for Bun.", type: "out" },
    { text: "  → Ultra-fast backend API.", type: "out" },
    { text: "  → End-to-end type safety.", type: "out" }
  ],
  "Vue": [
    { text: "$ analyze --tech Vue.js", type: "cmd" },
    { text: "  → [MASTERY: 85%]", type: "hi" },
    { text: "  → Progressive JavaScript Framework.", type: "out" },
    { text: "  → Composition API & Options API.", type: "out" },
    { text: "  → Intuitive reactive interfaces.", type: "out" }
  ],
  "Android": [
    { text: "$ analyze --tech Android_Native", type: "cmd" },
    { text: "  → [MASTERY: 88%]", type: "hi" },
    { text: "  → Native Mobile Development.", type: "out" },
    { text: "  → Kotlin/Java expertise.", type: "out" },
    { text: "  → Deep OS integration.", type: "out" }
  ],
  "React Native": [
    { text: "$ analyze --tech React_Native", type: "cmd" },
    { text: "  → [MASTERY: 92%]", type: "hi" },
    { text: "  → Cross-platform Mobile Dev.", type: "out" },
    { text: "  → Seamless UI experiences.", type: "out" },
    { text: "  → Native module bridging.", type: "out" }
  ]
};

function Terminal({ activeTech }: { activeTech: string | null }) {
  const linesToDisplay = activeTech && TECH_LINES[activeTech] ? TECH_LINES[activeTech] : DEFAULT_LINES;
  const { displayed, done } = useTyping(linesToDisplay);

  return (
    <div className="relative w-full border border-zinc-800 bg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-white" />
      <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-white" />
      <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-white" />
      <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-white" />
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-950 border-b border-zinc-900">
        <span className="w-2 h-2 rounded-full bg-zinc-700 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-zinc-700" />
        <span className="w-2 h-2 rounded-full bg-zinc-700" />
        <span className="ml-auto font-mono text-[8px] text-zinc-500 tracking-widest uppercase">
          bash — XYRIONEXX — 80×24
        </span>
      </div>
      <div className="px-5 py-4 min-h-[220px] font-mono text-xs leading-[2] tracking-wider">
        {displayed.map((line, i) => (
          <span key={i} className={`block ${
            line.type === "cmd" ? "text-white font-bold" :
            line.type === "hi"  ? "text-zinc-400" : "text-zinc-500"
          }`}>
            {line.text}
            {i === displayed.length - 1 && !done && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.65, repeat: Infinity }}
                className="inline-block w-[7px] h-[13px] bg-white ml-1 align-middle"
              />
            )}
          </span>
        ))}
        {done && (
          <span className="flex items-center gap-2 text-white mt-1">
            <span className="text-zinc-500">$</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.65, repeat: Infinity }}
              className="inline-block w-[7px] h-[13px] bg-white align-middle"
            />
          </span>
        )}
      </div>
    </div>
  );
}

const LEFT_BADGES  = [{ icon: "L", label: "Laravel" }, { icon: "▲", label: "Next.js" }, { icon: "E", label: "Elysia" }, { icon: "V", label: "Vue" }];
const RIGHT_BADGES = [{ icon: "A", label: "Android" }, { icon: "⚛", label: "React Native" }];

function BadgeCol({ 
  badges, side, delay, activeTech, onSelectTech 
}: { 
  badges: typeof LEFT_BADGES; 
  side: "left"|"right"; 
  delay: number;
  activeTech: string | null;
  onSelectTech: (tech: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -12 : 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute top-[8%] hidden lg:flex flex-col gap-2 ${side === "left" ? "right-full mr-6" : "left-full ml-6"}`}
    >
      {badges.map(({ icon, label }, i) => {
        const isActive = activeTech === label;
        return (
          <motion.button
            key={label}
            onClick={() => onSelectTech(label)}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            className={`flex items-center gap-2 px-3 py-1.5 backdrop-blur-md border font-mono text-[9px] tracking-widest uppercase transition-all duration-300 group cursor-pointer
              ${isActive ? "bg-white text-black border-white" : "bg-black/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-white"}
            `}
          >
            <span className={`${isActive ? "text-black" : "text-white"} min-w-[12px] transition-colors`}>{icon}</span>
            {label}
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
              className={`w-1.5 h-1.5 rounded-full ml-auto transition-colors ${isActive ? "bg-black" : "bg-zinc-600 group-hover:bg-white"}`}
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
}

function StatRow() {
  const [ping, setPing] = useState("--");
  const [proj, setProj] = useState(0);

  useEffect(() => {
    const piv = setInterval(() => setPing(String(Math.floor(Math.random() * 18) + 6)), 2800);
    setTimeout(() => setPing(String(Math.floor(Math.random() * 18) + 6)), 500);
    let pv = 0;
    const iv = setInterval(() => { pv++; setProj(pv); if (pv >= 20) clearInterval(iv); }, 60);
    return () => { clearInterval(piv); clearInterval(iv); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8 }}
      className="w-full grid grid-cols-3 gap-2 mt-4"
    >
      {[
        { val: `${proj}+`, lbl: "PROJECTS_BUILT" },
        { val: "2+",       lbl: "YEARS_EXP" },
        { val: `${ping}ms`,lbl: "SYS_RESPONSE" },
      ].map(({ val, lbl }) => (
        <div key={lbl} className="relative border border-zinc-900 bg-black/40 backdrop-blur-sm px-4 py-3 overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="block font-mono text-lg font-black text-white tracking-tight">{val}</span>
          <span className="block font-mono text-[8px] text-zinc-500 tracking-widest mt-1 uppercase">{lbl}</span>
        </div>
      ))}
    </motion.div>
  );
}

const SKILLS = [
  { label: "Web Apps", pct: 95 },
  { label: "Mobile Apps",   pct: 90 },
  { label: "Backend API",  pct: 92 },
  { label: "UI/UX",    pct: 85 },
];

function SkillMeters() {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 5400); return () => clearTimeout(t); }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.2 }}
      className="w-full grid grid-cols-2 gap-x-6 gap-y-3 mt-4 p-4 border border-zinc-900 bg-black/30 backdrop-blur-sm"
    >
      {SKILLS.map(({ label, pct }) => (
        <div key={label} className="flex flex-col gap-1.5">
          <div className="flex justify-between font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
            <span className="text-zinc-300">{label}</span><span>{pct}%</span>
          </div>
          <div className="h-1 w-full bg-zinc-950 relative overflow-hidden border border-zinc-900">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: go ? `${pct}%` : 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function HudBar({ top }: { top?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: top ? 0.2 : 5.5 }}
      className="w-full flex items-center justify-between font-mono text-[9px] text-zinc-600 tracking-widest uppercase"
    >
      {top ? (
        <>
          <span className="text-white font-bold">SYS::INIT</span>
          <div className="flex-1 mx-4 h-px bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900" />
          <span className="animate-pulse">XYRIONEXX_v2.5</span>
          <div className="flex-1 mx-4 h-px bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900" />
          <span className="text-white">ONLINE</span>
        </>
      ) : (
        <>
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            />
            <span className="text-zinc-400">SYSTEM_STATUS: ACTIVE</span>
          </span>
          <span className="flex items-center gap-2 text-zinc-400">
            OPEN_TO_WORK
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              className="w-1.5 h-1.5 bg-zinc-500"
            />
          </span>
        </>
      )}
    </motion.div>
  );
}

export default function HeroCenter() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const handleSelectTech = (tech: string) => {
    // If they click the same one, maybe deselect?
    if (activeTech === tech) {
      setActiveTech(null);
    } else {
      setActiveTech(tech);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4 w-full max-w-2xl mx-auto z-10 px-4 md:px-0">
      {/* Side labels */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
        className="absolute left-[-140px] top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[9px] text-zinc-700 tracking-[0.4em] uppercase whitespace-nowrap hidden lg:block"
      >
        DEVELOPER · BUILDER · ENGINEER
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.7 }}
        className="absolute right-[-140px] top-1/2 -translate-y-1/2 rotate-90 font-mono text-[9px] text-zinc-700 tracking-[0.4em] uppercase whitespace-nowrap hidden lg:block"
      >
        WEB · MOBILE · FULLSTACK
      </motion.div>

      <div className="relative w-full">
        <BadgeCol 
          badges={LEFT_BADGES}  
          side="left"  
          delay={3.8} 
          activeTech={activeTech}
          onSelectTech={handleSelectTech}
        />
        <BadgeCol 
          badges={RIGHT_BADGES} 
          side="right" 
          delay={4.0} 
          activeTech={activeTech}
          onSelectTech={handleSelectTech}
        />
        
        <HudBar top />
        <div className="mt-4"><Terminal activeTech={activeTech} /></div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <StatRow />
        <SkillMeters />
        <div className="mt-2"><HudBar /></div>
      </div>
    </div>
  );
}
