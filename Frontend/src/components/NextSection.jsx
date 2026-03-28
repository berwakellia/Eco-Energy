export default function NextSection() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="z-10 text-center mb-12">
        <div className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
           <span className="w-4 h-4 border border-green-400/50 rounded-sm rotate-45 flex items-center justify-center text-[10px]">✧</span>
           Why Partner With Us?
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
          Unlock Infinite Possibilities by <br />
          <span className="text-green-400">Eco-Energy</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
         By partnering with us, organizations can turn waste into a profitable resource,
          producing sustainable fuel while contributing to environmental protection 
         and meeting the increasing demand for clean, affordable energy solutions. We make it shine among the stars.
        </p>
      </div>

      {/* MAIN SYSTEM CONTAINER */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-24 md:gap-x-40 items-center">
        
        {/* CENTER ICON (Desktop Only Overlay) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          {/* Connection SVG Lines */}
          <svg className="absolute w-full h-full" viewBox="0 0 800 400" fill="none">
            <path d="M260 80 C 400 80, 350 200, 400 200" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />
            <path d="M260 320 C 400 320, 350 200, 400 200" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />
            <path d="M540 80 C 400 80, 450 200, 400 200" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />
            <path d="M540 320 C 400 320, 450 200, 400 200" stroke="rgba(74, 222, 128, 0.2)" strokeWidth="1.5" />
          </svg>
          
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-3xl opacity-30 rounded-full scale-150"></div>
            <div className="w-16 h-16 bg-black border border-green-500/50 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
               <div className="w-8 h-8 border-2 border-green-400 rounded-full flex items-center justify-center">
                 <div className="w-4 h-[2px] bg-green-400 rotate-45"></div>
               </div>
            </div>
          </div>
        </div>

        {/* TOP LEFT CARD */}
        <div className="group relative bg-green-600/20 backdrop-blur-md border border-green-400/30 p-6 rounded-2xl md:text-left transition-all hover:border-green-400/60">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Proven and Practical Technology</h3>
             <span className="text-green-400">📊</span>
           </div>
           <p className="text-sm text-gray-300 leading-relaxed">
             Our briquette production system is designed using reliable and tested engineering principles,
              ensuring efficient conversion of agricultural waste into high-quality fuel.
           </p>
        </div>

        {/* TOP RIGHT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Local Manufacturing Strength</h3>
             <span className="text-green-400 text-lg">💎</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
            We leverage local materials and skills to build and maintain our machines, 
            reducing costs, ensuring accessibility, and supporting local industry growth.
           </p>
        </div>

        {/* BOTTOM LEFT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Strong Market Demand</h3>
             <span className="text-green-400 text-lg">🎨</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             The increasing need for clean, affordable energy creates a ready and growing market 
             for briquettes, ensuring consistent demand and revenue opportunities.
           </p>
        </div>

        {/* BOTTOM RIGHT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Sustainable and Scalable Model</h3>
             <span className="text-green-400 text-lg">📈</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
            Our solution is environmentally friendly and easily scalable, allowing partners to expand production and 
            increase profits while contributing to a greener future.
           </p>
        </div>

      </div>
    </div>
  );
}