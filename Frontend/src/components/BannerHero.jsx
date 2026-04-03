import React, { useState } from 'react';

// Sub-component for Menu Item to keep code clean and manageable
const MenuItem = ({ text, hasDropdown }) => (
  <div className="relative group flex items-center gap-1.5 cursor-pointer">
    <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-emerald-300 transition uppercase">
      {text}
    </span>
    {hasDropdown && (
      <span className="text-xs text-emerald-400 group-hover:text-emerald-300 transition-transform group-hover:rotate-180 duration-300">
        ▼
      </span>
    )}
    {/* Underline effect on hover */}
    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></div>
  </div>
);

export default function BannerHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // min-h-screen ensures it fills the viewport and centers content vertically
    <section className="relative min-h-screen text-white overflow-hidden bg-[#020617]">
      
      {/* 1. Background Visuals (Fixed to full section) */}
      <img 
        src="/behindgirl.jpg" // Replace with your image path
        alt="law firm hero background" 
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700 brightness-[0.35]"
      />

      {/* Background Ambience (Subtle deep green glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full z-1 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full z-1 pointer-events-none"></div>

      {/* 2. Content Layout (Flex Column) */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1700px] mx-auto">
    

        {/* === HERO CONTENT === */}
        {/* flex-1 expands to push content down and mt-auto centers it vertically */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl">
            
            <div className="inline-block mb-6 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[11px] uppercase tracking-[0.2em] border border-emerald-500/20 backdrop-blur-sm">
              We are since 1920
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight max-w-2xl tracking-tight text-white/90">
             Sustainable Energy <br /> Technology<span className="text-emerald-400 m-5">Eco-Energy</span>
            </h1>

            <p className="mt-8 text-lg text-emerald-100/60 leading-relaxed max-w-xl">
              We measure our success by your success. If you are not satisfied, we don't. We stand by you with unwavering commitment
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#c6a34d] hover:bg-[#b08f40] text-black font-bold rounded-full text-[13px] uppercase tracking-wider transition-all shadow-md hover:scale-[1.03]">
                Free Consultation
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-[12px] uppercase tracking-wider font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}