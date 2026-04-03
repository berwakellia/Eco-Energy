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

  const menuItems = [
    { text: 'Home', hasDropdown: false },
    { text: 'About', hasDropdown: false },
    { text: 'Pages', hasDropdown: true },
    { text: 'Practice Areas', hasDropdown: true },
    { text: 'Attorneys', hasDropdown: false },
    { text: 'Blog', hasDropdown: false },
    { text: 'Contact Us', hasDropdown: false },
  ];

  return (
    // min-h-screen ensures it fills the viewport and centers content vertically
    <section className="relative min-h-screen text-white overflow-hidden bg-[#020617]">
      
      {/* 1. Background Visuals (Fixed to full section) */}
      <img 
        src="/lawyers.jpg" // Replace with your image path
        alt="law firm hero background" 
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700 brightness-[0.35]"
      />

      {/* Background Ambience (Subtle deep green glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full z-1 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full z-1 pointer-events-none"></div>

      {/* 2. Content Layout (Flex Column) */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1700px] mx-auto">
        
        {/* === HEADER SECTION === */}
        <header className="px-6 md:px-12 pt-6 pb-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            
            {/* Logo */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-[#c6a34d] flex items-center justify-center transition hover:scale-105 shadow-md">
                {/* Horse Icon placeholder - Replace with actual SVG */}
                <span className="text-2xl text-black">♘</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold uppercase tracking-widest text-[#c6a34d]">RIGHT FIRM</span>
                <span className="text-[10px] text-white/50 group-hover:text-emerald-200 transition">We provide right justice for you</span>
              </div>
            </div>

            {/* Desktop Menu (Hidden below 'md' breakpoint) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
              <button className="text-emerald-400 text-lg">Q</button>
            </nav>

            {/* Mobile Menu Button (Visible only on mobile) */}
            <button 
              className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              MENU
              <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                <div className="w-4 h-0.5 bg-emerald-300 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-emerald-300 mb-0.5"></div>
                <div className="w-4 h-0.5 bg-emerald-300"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Panel (Slides down when button clicked) */}
          <div className={`transition-all duration-500 ease-in-out md:hidden overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
            <nav className="flex flex-col gap-6 text-center bg-[#030712] border border-white/5 p-6 rounded-2xl shadow-xl">
              {menuItems.map((item, index) => (
                <a key={index} href="#" className="text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-emerald-300 transition">
                  {item.text}
                </a>
              ))}
              <button className="text-emerald-400 text-lg border-t border-white/10 pt-4 mt-2">Q</button>
            </nav>
          </div>
        </header>

        {/* === HERO CONTENT === */}
        {/* flex-1 expands to push content down and mt-auto centers it vertically */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl">
            
            <div className="inline-block mb-6 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[11px] uppercase tracking-[0.2em] border border-emerald-500/20 backdrop-blur-sm">
              We are since 1920
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight max-w-2xl tracking-tight text-white/90">
              ATTORNEYS . LAWYERS . <span className="text-emerald-400">LAW FIRMS</span>
            </h1>

            <p className="mt-8 text-lg text-emerald-100/60 leading-relaxed max-w-xl">
              We measure our success by your success. If you are not satisfied, we don't. We stand by you with unwavering commitment and justice.
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

        {/* Footer Detail (Carousel Dots) */}
        <div className="px-6 md:px-12 pb-10 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full border border-emerald-400/50 bg-[#c6a34d] shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
            <div className="w-3 h-3 rounded-full border border-white/20 hover:border-emerald-400 transition cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full border border-white/20 hover:border-emerald-400 transition cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}