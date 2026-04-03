import React, { useState, useEffect } from "react";

export default function BannerHero() {

  // 🔥 Slides (image + content together)
  const slides = [
    {
      image: "/behindgirl.jpg",
      tag: "Sustainable Innovation",
      title: "Eco-Energy",
      highlight: "Clean Fuel Technology",
      description:
        "Transforming agricultural waste into eco-friendly fuel through smart and sustainable briquette production systems.",
    },
    {
      image: "/banner3.jpg",
      tag: "Green Future",
      title: "Renewable Solutions",
      highlight: "For Everyday Life",
      description:
        "Providing affordable and reliable renewable energy solutions to empower communities and reduce environmental impact.",
    },
    {
      image: "/banner2.jpg",
      tag: "Eco Systems",
      title: "Smart Energy",
      highlight: "Efficient & Reliable",
      description:
        "Our systems are designed to maximize efficiency while minimizing waste, ensuring long-term sustainability.",
    },
    {
      image: "/banner1.jpg",
      tag: "Clean Environment",
      title: "Better Tomorrow",
      highlight: "Starts Today",
      description:
        "Join us in building a cleaner, greener future through innovative eco-energy technologies.",
    }
  ];

  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-[80vh] text-white overflow-hidden bg-[#020617]">

     
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt="background"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 brightness-[0.35] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

    
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full"></div>

     
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl">

       
          <div className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[11px] uppercase tracking-[0.2em] border border-emerald-500/20 backdrop-blur-sm">
            {slides[current].tag}
          </div>

         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2xl text-white/90">
            {slides[current].title} <br />
            <span className="text-emerald-400">
              {slides[current].highlight}
            </span>
          </h1>

          
          <p className="mt-6 text-base md:text-lg text-emerald-100/60 max-w-xl">
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#c6a34d] hover:bg-[#b08f40] text-black font-bold rounded-full text-[13px] uppercase tracking-wider transition-all">
              Get Started
            </button>

            <button className="px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 rounded-full text-[12px] uppercase tracking-wider">
              Learn More
            </button>
          </div>

        </div>
      </div>

     
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-emerald-400" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}