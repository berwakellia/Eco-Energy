import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(glowRef.current, {
      scale: 1.1,
      opacity: 0.5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-12 md:py-16 px-6 md:px-16 bg-slate-900 text-white overflow-hidden relative"
    >
      {/* Background Abstract Glow (The "Future" Light) */}
      {/* Slightly smaller glow to match reduced height - COMMENT MOVED HERE */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={textRef}>
          <h2 className="text-xs font-bold tracking-[0.3em] text-green-400 uppercase mb-3">
            The Future Horizon
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">Vision</span>
          </h3>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic text-center">
            "To become Rwanda's leading innovation-driven catalyst in sustainable energy technology."
          </p>
          
          <div className="h-px w-16 bg-green-500 mx-auto my-6"></div>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We envision a future where clean, affordable, and locally engineered solutions power every community. 
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-8">
          <div>
            <span className="block text-xl font-bold text-green-400">100%</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Local Engineering</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-green-400">Net Zero</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Carbon Vision</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="block text-xl font-bold text-green-400">Global</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Reach Potential</span>
          </div>
        </div>
      </div>
    </section>
  );
}