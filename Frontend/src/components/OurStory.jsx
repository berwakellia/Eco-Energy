import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Scroll Reveal Animation
    const items = gsap.utils.toArray('.story-card');
    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });

    // 2. Interactive Cursor Move (Tilt Effect)
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = (e) => {
      gsap.to(e.currentTarget, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    items.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-16 bg-[#14233a] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-green-600 uppercase mb-3">Our Origins</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-400">The Journey of Eco-Energy</h3>
          <div className="h-1.5 w-24 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-24 relative">
          {/* Decorative Vertical Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-100 via-green-400 to-green-100 hidden lg:block"></div>

          {/* Point 1: The Observation */}
          <div className="story-card-container relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-card bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-green-700 mb-4">The Observation</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Eco-Energy was born from a critical observation: the increasing pressure on Rwanda’s forests and the vast potential of agricultural waste left in our fields.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img src="/afforadable2.jpg" alt="Observation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-green-900/20"></div>
               </div>
            </div>
          </div>

          {/* Point 2: The Opportunity */}
          <div className="story-card-container relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
               <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img src="/Machine.jpg" alt="Opportunity" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-green-900/20"></div>
               </div>
            </div>
            <div className="story-card bg-green-900 text-white p-8 rounded-3xl shadow-2xl border border-green-800">
              <h3 className="text-2xl font-bold text-green-400 mb-4">The Opportunity</h3>
              <p className="text-green-50/80 text-lg leading-relaxed">
                As engineering students, we saw beyond the problem. We recognized an opportunity to design technology that makes clean, alternative fuel production accessible.
              </p>
            </div>
          </div>

          {/* Point 3: The Evolution */}
          <div className="story-card-container relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-card bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-green-700 mb-4">The Evolution</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Through rigorous research, we developed a system that transforms waste into value—empowering entrepreneurs and protecting Rwanda’s environment.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img src="/job1.jpg" alt="Evolution" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-green-900/20"></div>
               </div>
            </div>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 p-12 bg-green-50 rounded-[3rem] text-center border border-green-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <p className="text-2xl md:text-3xl font-medium text-green-800 italic relative z-10">
            "Our journey continues as we refine our technologies to power a greener, more industrial Rwanda."
          </p>
        </div>
      </div>
    </section>
  );
}