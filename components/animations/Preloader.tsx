'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // Progress animation
      gsap.to({}, {
        duration: 2.5,
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100));
        }
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      {/* Mario-style Pixel Blocks */}
      <div className="flex gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={`w-4 h-4 border-2 border-white ${progress > (i + 1) * 20 ? 'bg-white' : 'bg-transparent'} transition-colors duration-200`}
            style={{ 
                imageRendering: 'pixelated',
                boxShadow: progress > (i + 1) * 20 ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
            }}
          />
        ))}
      </div>

      <h1
        ref={textRef}
        className="text-2xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase mb-4"
      >
        Portofolio
      </h1>
      
      <div className="w-48 h-1 bg-zinc-900 overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-[10px] text-zinc-500 tracking-[0.5em] uppercase">
        Loading... {progress}%
      </div>
    </div>
  );
}
