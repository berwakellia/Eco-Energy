import React from 'react';
import BannerHero from '../components/BannerHero';
import WhoWeAre from '../components/WhoWeAre';
import Mission  from '../components/Mission';
import Vision  from '../components/Vision';
import OurStory  from '../components/OurStory';

export default function AboutUs() {
  const focusAreas = [
    {
      id: "01",
      title: "Sustainable Energy Technology",
      desc: "Developing renewable power sources that decrease dependency on fossil fuels and promote a greener Rwanda."
    },
    {
      id: "02",
      title: "Machine Manufacturing & Innovation",
      desc: "Designing high-efficiency machinery locally to lower costs and increase accessibility for small-scale industries."
    },
    {
      id: "03",
      title: "Waste-to-Energy Solutions",
      desc: "Converting agricultural and industrial residues into clean fuel, effectively solving waste management and energy scarcity."
    },
    {
      id: "04",
      title: "Youth-Driven Industrial Development",
      desc: "Empowering the next generation of engineers to lead the industrialization of our local communities."
    }
  ];

  return (<>
      
      <BannerHero />

    <section className="relative bg-[#020617] text-white py-20 px-6 md:px-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/5 pb-16">
          <div>
            <div className="inline-block px-3 py-1 mb-4 bg-green-500/10 text-green-400 rounded-md text-[10px] uppercase tracking-widest border border-green-500/20">
              Our Identity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Engineering a <br />
              <span className="text-green-400">Sustainable Future</span>
            </h1>
            <p className="text-emerald-100/60 text-lg leading-relaxed max-w-xl">
              Based at <span className="text-white font-medium">Rwanda Polytechnic – Tumba College</span>, 
              we are a collective of young engineering entrepreneurs dedicated to bridging the gap 
              between environmental challenges and energy solutions.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#030712] border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Our Mission</h3>
              <p className="text-emerald-100/70 leading-relaxed italic">
                "To solve environmental and energy challenges through localized innovation, 
                turning waste into power and ideas into industrial reality."
              </p>
            </div>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Focus</h2>
            <p className="text-emerald-100/40 text-sm max-w-xs">
              Strategic pillars guiding our research, development, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <div key={area.id} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-500">
                <span className="text-4xl font-black text-white/5 group-hover:text-green-500/20 transition-colors duration-500">
                  {area.id}
                </span>
                <h4 className="text-xl font-bold mt-4 mb-3 text-emerald-50 group-hover:text-green-400 transition-colors">
                  {area.title}
                </h4>
                <p className="text-sm text-emerald-100/50 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Community/Call to Action Link */}
        <div className="mt-24 p-12 rounded-3xl bg-gradient-to-b from-green-900/10 to-transparent border border-green-500/10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Driven by Youth. Built for Rwanda.</h2>
          <p className="text-emerald-100/60 mb-8 max-w-2xl mx-auto">
            We are constantly innovating at Tumba College. Whether you are a local cooperative or 
            an energy partner, let’s solve challenges together.
          </p>
          <button className="px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            Partner With Us
          </button>
        </div>

      </div>
    </section>
    
    <WhoWeAre />
    <Mission />
    <Vision />
    <OurStory />
  </>);
}