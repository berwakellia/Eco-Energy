import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Mission() {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    // 1. Subtle floating animation for the main card
    gsap.to(cardRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // 2. Rotating energy "pulse" in the background
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // 3. Hover effect: Glow intensifies when mouse enters
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, { 
        boxShadow: "0px 20px 40px rgba(21, 128, 61, 0.2)",
        scale: 1.02,
        duration: 0.4 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, { 
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
        scale: 1,
        duration: 0.4 
      });
    };

    cardRef.current.addEventListener('mouseenter', handleMouseEnter);
    cardRef.current.addEventListener('mouseleave', handleMouseLeave);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-16 bg-white overflow-hidden relative">
      
      {/* Background Decorative Element: Animated Energy Ring */}
      <div 
        ref={circleRef}
        className="absolute -right-20 -top-20 w-96 h-96 border-[1px] border-green-100 rounded-full pointer-events-none"
        style={{ borderStyle: 'dashed' }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          ref={cardRef}
          className="bg-green-50 p-10 md:p-16 rounded-[2rem] border border-green-100 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Title & Mission */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">
                Strategic Intent
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Our Mission & <span className="text-green-700">Impact</span>
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                To design and develop affordable, efficient, and sustainable briquette production technology that converts agricultural waste into clean energy.
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed">
                By bridging engineering innovation with environmental stewardship, we empower local industries, foster job creation, and drive Rwanda’s transition toward a carbon-neutral future.
              </p>
            </div>

            {/* Right Column: Key Pillars (Extra Meaning) */}
            <div className="space-y-6 border-l border-green-200 pl-8 hidden lg:block">
              <div>
                <h4 className="font-bold text-green-800">Sustainability</h4>
                <p className="text-sm text-slate-500">Transforming waste into high-value resources.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800">Innovation</h4>
                <p className="text-sm text-slate-500">Student-led R&D for local industrial growth.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800">Community</h4>
                <p className="text-sm text-slate-500">Creating jobs through green technology.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}