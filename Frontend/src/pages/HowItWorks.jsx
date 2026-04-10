import React from "react";
import LaunchCTA from "../components/LaunchCTA";

export default function HowItWorks() {
  const steps = [
    {
      title: "Feedstock Collection",
      desc: "Operators load agricultural waste into the hopper. Sensors validate moisture and particle size for optimal conversion.",
      icon: "/Machine.jpg",
      caption: "Collection",
      short: "Local agricultural residues gathered",
    },
    {
      title: "Preprocessing",
      desc: "Material is shredded and dried by a closed-loop dryer to ensure consistent conversion yield and energy efficiency.",
      icon: "/Sustainable.png",
      caption: "Shredding & Drying",
      short: "Size reduction + moisture control",
    },
    {
      title: "Conversion Module",
      desc: "A controlled thermal conversion chamber (pyrolysis/torrefaction) transforms biomass into high-energy briquettes with minimal emissions.",
      icon: "/WaterEnergyWaste.png",
      caption: "Thermal Conversion",
      short: "High-temperature, low-oxygen processing",
    },
    {
      title: "Briquetting & Cooling",
      desc: "Compressed into dense, uniform briquettes then cooled and inspected automatically for quality assurance.",
      icon: "/Sustainable.png",
      caption: "Compression & Cooling",
      short: "Forming dense, transport-ready fuel",
    },
    {
      title: "Packaging & Distribution",
      desc: "Finished briquettes are packaged, weighed, and routed for local distribution or on-site use, closing the loop on waste-to-energy.",
      icon: "/ecoIcon.png",
      caption: "Packaging",
      short: "Weighing, packing and delivery",
    },
  ];

  return (
    <div className="text-gray-900">

      {/* Hero */}
      <section className="bg-linear-to-b from-[#021024] via-[#041426] to-[#081122] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">How the Machine Works</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A modular, automated process engineered to convert agricultural waste into
            clean, high-density fuel with low emissions and high reliability.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-green-400">Efficient</h3>
              <p className="text-sm text-gray-300 mt-2">Optimized energy recovery and throughput.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-green-400">Safe</h3>
              <p className="text-sm text-gray-300 mt-2">Closed-loop controls and multiple safety interlocks.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold text-green-400">Sustainable</h3>
              <p className="text-sm text-gray-300 mt-2">Low-emission conversion, local circular value chains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Diagram */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 text-center">Lifecycle Overview</h3>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Visual flow showing how the process starts and moves through each stage.</p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <img src={s.icon} alt={s.title} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
                </div>
                <div className="mt-3">
                  <div className="text-sm font-semibold text-green-600">Step {i + 1}</div>
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.short}</div>
                </div>
                {/* Arrow between items on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block mt-4 -ml-6">
                    <svg width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 14H82" stroke="#10B981" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M74 6L82 14L74 22" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile timeline arrows */}
          <div className="md:hidden mt-6">
            <ol className="space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border">
                    <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600">Step {i + 1}</div>
                    <div className="font-semibold text-gray-900">{s.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{s.short}</div>
                    <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Workflow — step by step</h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">From feedstock to finished briquette: the machine orchestrates each stage with precision.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-4 items-start bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-green-50 flex items-center justify-center border border-green-100">
                  <img src={s.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600">Step {i + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Design Highlights</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Key engineering choices that deliver reliability, uptime and low maintenance.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-900">Automated Controls</h4>
              <p className="text-sm text-gray-600 mt-2">PLC-driven sequences with remote telemetry and predictive diagnostics.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-900">Modular Maintenance</h4>
              <p className="text-sm text-gray-600 mt-2">Quick-swap modules reduce downtime and simplify servicing in the field.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-900">Emission Controls</h4>
              <p className="text-sm text-gray-600 mt-2">Catalytic after-treatment and real-time monitoring keep emissions minimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 text-center">Frequently Asked Questions</h3>
          <div className="mt-6 space-y-4">
            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">What feedstock can the machine accept?</summary>
              <p className="mt-2 text-gray-600">A wide range of agricultural residues—stalks, husks, shells—subject to preprocessing for size and moisture.</p>
            </details>

            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">How energy efficient is the process?</summary>
              <p className="mt-2 text-gray-600">The system recovers heat internally and targets high conversion efficiency with minimal external energy input.</p>
            </details>

            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">Is on-site training provided?</summary>
              <p className="mt-2 text-gray-600">Yes — deployment includes operator training, maintenance manuals, and remote support options.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LaunchCTA />

    </div>
  );
}
