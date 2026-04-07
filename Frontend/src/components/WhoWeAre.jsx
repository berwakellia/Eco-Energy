import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    const arrows = gsap.utils.toArray('.moving-arrow');
    
    // Create the timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Ensure the path exists before animating
    if (pathRef.current) {
      // 1. Optional: Animate the border line itself
      tl.fromTo(pathRef.current, 
        { strokeDasharray: 500, strokeDashoffset: 500 },
        { strokeDashoffset: 0, duration: 8, ease: "none" }, 0
      );

      // 2. Animate arrows along the path
      arrows.forEach((arrow, index) => {
        tl.to(arrow, {
          duration: 8,
          ease: "none",
          motionPath: {
            path: pathRef.current,
            autoRotate: true,
            align: pathRef.current,
            alignOrigin: [0.5, 0.5],
          }
        }, index * 0.7); // Stagger start times
      });
    }
  }, { scope: containerRef });

  const arrowColors = ["#15803d", "#22c55e", "#fbbf24", "#3b82f6"];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div 
          ref={containerRef} 
          className="order-2 lg:order-1 relative p-8 bg-white rounded-xl shadow-sm border border-slate-100"
        >
          {/* SVG Overlay - uses a coordinate system of 1000x1000 for smoother pathing */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {/* Using a PATH instead of RECT for better MotionPath compatibility */}
            <path
              ref={pathRef}
              d="M 2,2 L 98,2 L 98,98 L 2,98 Z"
              fill="none"
              stroke="rgba(21, 128, 61, 0.1)"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />

            {/* Multiple Arrows */}
            {arrowColors.map((color, i) => (
              <path
                key={i}
                className="moving-arrow"
                d="M -2,-1.5 L 2,0 L -2,1.5 Z" 
                fill={color}
              />
            ))}
          </svg>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6">
              Who We Are
              <span className="block w-16 h-1 bg-green-500 mt-2"></span>
            </h2>
            
            <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-green-700">Eco-Energy</span> is a premier student-led engineering initiative based at Rwanda Polytechnic – Tumba College.
              </p>
              <p>
                Our multidisciplinary team integrates expertise in <span className="text-slate-900 font-medium">Information Technology, Mechatronics, and Renewable Energy</span>.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
                Learn More About Our Projects
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/womanrobot1.jpg" 
              alt="Eco-Energy Engineering Team" 
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
          </div>
        </div>

      </div>
    </section>
  );
}