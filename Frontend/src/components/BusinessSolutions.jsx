import React from 'react';

const data = [
  {
    title: 'Integrated Briquette Production Technology',
    desc: 'Eco-Energy delivers a fully integrated, all-in-one engineering solution that seamlessly bridges biomass carbonization, material mixing, and mechanical compression. By unifying these stages into a single high-efficiency system, we eliminate the need for fragmented machinery.',
    img: ['/machine1.jpg','/machine2.jpg','/machine3.jpg',] // Replace with your local path
  },
  {
    title: 'Affordable & Scalable for Entrepreneurs',
    desc: 'Designed with local impact in mind, Eco-Energy offers a low-cost, high-yield solution tailored specifically for small and medium enterprises. By lowering the barrier to entry, our system empowers individuals and cooperatives to launch their own production lines.',
    img: ['/afforadable1.jpg','/afforadable2.jpg','/afforadable3.jpg']
  },
  {
    title: 'Environmental Sustainability & Waste Recycling',
    desc: `Eco-Energy creates a circular economy by transforming agricultural waste—such as husks, sawdust, and residues—into high-performance, clean-burning briquettes. By diverting waste from landfills, our system directly lowers greenhouse gas emissions.`,
    img: ['/environement3.jpg','/environement2.jpg','/environement1.jpg',]
  },
  {
    title: 'Job Creation & Economic Impact',
    desc: "Eco-Energy acts as a catalyst for regional industrialization by fostering a robust value chain. Our system creates a multi-tiered economic impact: from the precision engineering of machine manufacturing to the high-demand sector of briquette production.",
    img: ['/job1.jpg','/job2.jpg','/job3.jpg'],
  },
];

export default function BusinessSolutions() {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col items-center pt-24 pb-20 px-6 md:px-12">
      
      {/* Dynamic Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>

      {/* 1. Badge */}
      <div className="z-10 mb-6 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[10px] uppercase tracking-[0.2em] border border-emerald-500/20 backdrop-blur-sm flex items-center gap-2">
        <span className="w-3 h-3 border border-emerald-400/50 rotate-45 flex items-center justify-center text-[8px]">✦</span>
        Our Galaxy, Your Success
      </div>

      {/* 2. Heading */}
      <h2 className="z-10 text-4xl md:text-6xl font-semibold text-center leading-tight max-w-4xl tracking-tight">
        Innovative Solutions to Accelerate <br />
        <span className="text-emerald-400">Your Business</span>
      </h2>

      {/* 3. Description */}
      <p className="z-10 mt-6 text-emerald-100/60 text-center max-w-2xl text-sm md:text-base leading-relaxed">
        Eco-Energy provides an integrated, affordable briquette production solution that transforms 
        agricultural waste into clean fuel.
      </p>

      {/* 4. Responsive Card Grid */}
      <div className="relative mt-16 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20">
        
        {data.map((item, index) => {
          const isHighlighted = index === 0;
          return (
            <div 
              key={index} 
              className={`group relative flex flex-col h-full p-6 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
                isHighlighted 
                  ? 'bg-gradient-to-br from-emerald-600 to-green-800 border-emerald-400/50 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.3)]' 
                  : 'bg-[#030712] backdrop-blur-md border-white/5 hover:border-emerald-500/40'
              }`}
            >
              
              {/* Text Area - flex-1 ensures this pushes the image container to the bottom */}
              <div className="flex-1 pb-6">
                <h3 className={`text-xl font-semibold mb-3 ${isHighlighted ? 'text-white' : 'text-emerald-50'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-emerald-50/90' : 'text-emerald-100/50'}`}>
                  {item.desc}
                </p>
              </div>

              {/* Image and Button Container */}
              <div className="relative mt-auto w-full h-[220px] overflow-hidden rounded-2xl bg-gradient-to-t from-black/40 to-transparent">
  
  {/* The Sliding Image Logic */}
  <img 
    src={item.img[0]} 
    alt={item.title} 
    className={`absolute transition-all duration-700 ease-out 
      /* Desktop/Default Position: Bottom Right and slightly tucked away */
      bottom-[-10%] right-[-10%] w-[85%] h-[85%] object-contain 
      
      /* Hover State: Slides up and left into view */
      group-hover:translate-x-[-8%] group-hover:translate-y-[-8%] group-hover:scale-110
      
      /* Visual Polish */
      ${isHighlighted 
        ? 'opacity-100 brightness-110 drop-shadow-[0_10px_20px_rgba(16,185,129,0.4)]' 
        : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100'
      }
    `}
  />

  {/* Gradient Overlay to ensure text/button readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-transparent pointer-events-none"></div>

  {/* Learn More Button */}
  <button 
    className={`absolute bottom-4 left-4 z-10 px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-all ${
      isHighlighted 
        ? 'bg-white text-emerald-900 shadow-lg hover:px-7' 
        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-400 hover:text-black'
    }`}
  >
    Learn More
    <span className="text-base transition-transform group-hover:translate-x-1">→</span>
  </button>
</div>

              {/* Decorative Corner Details */}
              <div className={`absolute top-0 right-0 w-12 h-12 rounded-tr-3xl rounded-bl-3xl border-l border-b ${isHighlighted ? 'border-white/10 bg-white/5' : 'border-white/5 bg-white/[0.02]'}`}></div>
              <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${isHighlighted ? 'bg-white animate-pulse' : 'bg-emerald-500/40'}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}