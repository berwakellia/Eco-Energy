export default function BuildingBrand() {
  return (
    <section className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col items-center pt-24 pb-12 px-6">
      
      {/* 1. Badge */}
      <div className="z-10 mb-6 px-4 py-1.5 bg-green-500/10 text-green-400 rounded-md text-[10px] uppercase tracking-[0.2em] border border-green-500/20 backdrop-blur-sm flex items-center gap-2">
        <span className="w-3 h-3 border border-green-400/50 rotate-45 flex items-center justify-center text-[8px]">✧</span>
        Our Growth, Our Galaxy
      </div>

      {/* 2. Heading */}
      <h1 className="z-10 text-4xl md:text-6xl font-semibold text-center leading-tight max-w-4xl tracking-tight">
      Impact-Focused Version <br />
        <span className="text-green-400">Among the Stars</span>
      </h1>

      {/* 3. Description */}
      <p className="z-10 mt-6 text-gray-400 text-center max-w-2xl text-sm md:text-base leading-relaxed opacity-80">
      We deliver an affordable and locally manufacturable briquette production system that transforms 
      waste into clean energy, 
      promoting sustainability and eco-friendly fuel solutions.This solution will be appeared in galaxy
      </p>

      {/* 4. Globe Effect Container */}
      <div className="relative mt-4 w-full max-w-4xl aspect-[16/9] flex items-center justify-center">
        
        {/* The "Glow" behind the globe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/10 blur-[120px] rounded-full"></div>

        {/* The Spherical Grid */}
        <div className="relative w-full h-full opacity-50">
          <div 
            className="absolute inset-0 rounded-full border border-green-500/20"
            style={{
              background: `
                radial-gradient(circle at center, transparent 30%, #020617 100%),
                repeating-radial-gradient(circle at center, transparent 0, transparent 40px, rgba(34, 197, 94, 0.1) 41px),
                conic-gradient(from 0deg at center, transparent 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)
              `,
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
            }}
          ></div>
          
          {/* Animated Connecting Dots (Simulated) */}
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full blur-[2px] animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-300 rounded-full blur-[1px] animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* 5. Logos (Now positioned to overlap the bottom of the globe) */}
      <div className="relative -mt-20 z-20 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl md:text-2xl font-bold tracking-tighter">Twitter</span>
          <span className="text-lg md:text-xl font-extrabold">NTT DATA</span>
          <span className="text-lg md:text-xl font-semibold italic">Google</span>
          <span className="text-xl md:text-2xl font-serif tracking-widest">linked-in</span>
          <span className="text-lg md:text-xl font-black">email</span>
          <span className="text-lg md:text-xl font-bold flex items-center gap-1">
             <div className="w-5 h-5 bg-gray-400 rounded-sm"></div> discord
          </span>
        </div>
      </div>

    </section>
  );
}