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
          Unlock Infinite Possibilities for <br />
          <span className="text-green-400">Your Business</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          We help your business go beyond limits by providing innovative solutions,
          futuristic strategies, and measurable results that make you shine among the stars.
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
             <h3 className="text-xl font-medium">Futuristic Strategies</h3>
             <span className="text-green-400">📊</span>
           </div>
           <p className="text-sm text-gray-300 leading-relaxed">
             We craft smart, innovative strategies designed to keep your business ahead of the curve.
           </p>
        </div>

        {/* TOP RIGHT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Trusted Expertise</h3>
             <span className="text-green-400 text-lg">💎</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             With years of experience, we've partnered with 150+ global clients to deliver impactful results.
           </p>
        </div>

        {/* BOTTOM LEFT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Creative Excellence</h3>
             <span className="text-green-400 text-lg">🎨</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             From branding to user experience, we deliver creative solutions that captivate your audience.
           </p>
        </div>

        {/* BOTTOM RIGHT CARD */}
        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl md:text-left hover:border-green-400/30 transition-all">
           <div className="flex justify-between items-start mb-4">
             <h3 className="text-xl font-medium">Scalable Growth</h3>
             <span className="text-green-400 text-lg">📈</span>
           </div>
           <p className="text-sm text-gray-400 leading-relaxed">
             We help your business scale rapidly while maintaining sustainable growth in competitive markets.
           </p>
        </div>

      </div>
    </div>
  );
}