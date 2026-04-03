import React, { useState, useEffect } from 'react';

const data = [
  {
    title: 'Integrated Briquette Production Technology',
    desc: 'Eco-Energy delivers a fully integrated, all-in-one engineering solution that seamlessly bridges biomass carbonization, material mixing, and mechanical compression.',
    img: ['/machine1.jpg', '/machine2.jpg', '/machine3.jpg'],
  },
  {
    title: 'Affordable & Scalable for Entrepreneurs',
    desc: 'Designed with local impact in mind, Eco-Energy offers a low-cost, high-yield solution tailored specifically for small and medium enterprises.',
    img: ['/afforadable1.jpg', '/afforadable2.jpg', '/afforadable3.jpg'],
  },
  {
    title: 'Environmental Sustainability & Waste Recycling',
    desc: `Eco-Energy creates a circular economy by transforming agricultural waste—such as husks, sawdust, and residues—into clean-burning briquettes.`,
    img: ['/environement3.jpg', '/environement2.jpg', '/environement1.jpg'],
  },
  {
    title: 'Job Creation & Economic Impact',
    desc: "Eco-Energy acts as a catalyst for regional industrialization by fostering a robust value chain. Our system creates a multi-tiered economic impact.",
    img: ['/job1.jpg', '/job2.jpg', '/job3.jpg'],
  },
];

// Sub-component for individual cards to manage their own timer
const SolutionCard = ({ item, isHighlighted }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % item.img.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [item.img.length]);

  return (
    <div className={`group relative flex flex-col h-full p-6 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
      isHighlighted 
        ? 'bg-gradient-to-br from-emerald-600 to-green-800 border-emerald-400/50 shadow-[0_20px_50px_-10px_rgba(16,185,129,3.3)]' 
        : 'bg-[#030712] backdrop-blur-md border-white/5 hover:border-emerald-500/40'
    }`}>
      
      <div className="flex-1 pb-6">
        <h3 className={`text-xl font-semibold mb-3 ${isHighlighted ? 'text-white' : 'text-emerald-50'}`}>
          {item.title}
        </h3>
        <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-emerald-50/90' : 'text-emerald-100/50'}`}>
          {item.desc}
        </p>
      </div>

      <div className="relative mt-auto w-full h-[220px] overflow-hidden rounded-2xl bg-black/40">
        {item.img.map((src, idx) => (
          <img 
            key={idx}
            src={src} 
            alt={item.title} 
            className={`absolute bottom-[-5%] right-[-5%] w-[90%] h-[90%] object-contain transition-all duration-1000 ease-in-out
              ${idx === currentImg 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-4 translate-x-10 scale-95'}
              group-hover:translate-x-[-8%] group-hover:translate-y-[-8%] group-hover:scale-110
              ${isHighlighted ? 'brightness-110' : 'grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100'}
            `}
          />
        ))}

        {/* Progress Dots */}
        <div className="absolute top-4 right-4 flex gap-1.5 z-20">
          {item.img.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentImg ? 'w-4 bg-emerald-400' : 'w-1 bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-transparent pointer-events-none"></div>

        <button className={`absolute bottom-4 left-4 z-10 px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-all ${
          isHighlighted 
            ? 'bg-white text-emerald-900' 
            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-400 hover:text-black'
        }`}>
          Learn More <span>→</span>
        </button>
      </div>

      <div className={`absolute top-0 right-0 w-12 h-12 rounded-tr-3xl rounded-bl-3xl border-l border-b ${isHighlighted ? 'border-white/10 bg-white/5' : 'border-white/5 bg-white/[0.02]'}`}></div>
      <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${isHighlighted ? 'bg-white animate-pulse' : 'bg-emerald-500/40'}`}></div>
    </div>
  );
};

export default function BusinessSolutions() {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col items-center pt-24 pb-20 px-6 md:px-12">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>

      <div className="z-10 mb-6 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[10px] uppercase tracking-[0.2em] border border-emerald-500/20 backdrop-blur-sm flex items-center gap-2">
        <span className="w-3 h-3 border border-emerald-400/50 rotate-45 flex items-center justify-center text-[8px]">✦</span>
        Our Galaxy, Your Success
      </div>

      <h2 className="z-10 text-4xl md:text-6xl font-semibold text-center leading-tight max-w-4xl tracking-tight">
        Innovative Solutions to Accelerate <br />
        <span className="text-emerald-400">Your Business</span>
      </h2>

      <div className="relative mt-16 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20">
        {data.map((item, index) => (
          <SolutionCard key={index} item={item} isHighlighted={index === 0} />
        ))}
      </div>
    </section>
  );
}