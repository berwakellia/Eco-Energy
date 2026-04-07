import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const items = gsap.utils.toArray('.story-item');
    
    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        opacity: 0,
        x: i % 2 === 0 ? -40 : 40, // Alternates slide direction
        duration: 1,
        ease: "power2.out"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Our Story
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical Decorative Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-100 hidden md:block"></div>

          {/* Point 1: The Spark */}
          <div className="story-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right md:pr-12">
              <h3 className="text-xl font-bold text-green-700 mb-2">The Observation</h3>
              <p className="text-slate-600 leading-relaxed">
                Eco-Energy was born from a critical observation: the increasing pressure on Rwanda’s forests and the vast, untapped potential of agricultural waste left in our fields.
              </p>
            </div>
            <div className="hidden md:flex justify-start">
              <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-sm z-10 -ml-2"></div>
            </div>
          </div>

          {/* Point 2: The Engineering Mindset */}
          <div className="story-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:flex justify-end order-2 md:order-1">
              <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-sm z-10 -mr-2"></div>
            </div>
            <div className="md:pl-12 order-1 md:order-2">
              <h3 className="text-xl font-bold text-green-700 mb-2">The Opportunity</h3>
              <p className="text-slate-600 leading-relaxed">
                As engineering students, we saw beyond the problem. We recognized an opportunity to design the technology that makes clean, alternative fuel production accessible and scalable.
              </p>
            </div>
          </div>

          {/* Point 3: The Impact */}
          <div className="story-item relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right md:pr-12">
              <h3 className="text-xl font-bold text-green-700 mb-2">The Evolution</h3>
              <p className="text-slate-600 leading-relaxed">
                Through rigorous research and institutional support, we developed a system that transforms waste into value—empowering entrepreneurs and protecting Rwanda’s environment.
              </p>
            </div>
            <div className="hidden md:flex justify-start">
              <div className="w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow-sm z-10 -ml-2"></div>
            </div>
          </div>

        </div>

        {/* Final "Current Status" Quote */}
        <div className="mt-20 p-8 bg-green-50 rounded-2xl text-center border border-green-100 italic text-slate-700">
          "Our journey continues as we refine our technologies to power a greener, more industrial Rwanda."
        </div>
      </div>
    </section>
  );
}