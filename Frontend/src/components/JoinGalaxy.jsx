import React from 'react';

/**
 * JoinGalaxy Component
 * Fixes: Corrected mismatched JSX closing tags and refined avatar overlapping.
 */
export default function JoinGalaxy() {
  const avatars = [
    "/habiyambere.png",
    "/berwa.png",
    "/muhinka.png",
    "/kamigisha.png",
  ];

  return (
    <div className="relative bg-[#020617] text-white py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">

      {/* 1. Background Visuals (Glow Circles) */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-green-400/20 rounded-full pointer-events-none"></div>
      <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-green-400/10 rounded-full pointer-events-none"></div>

      {/* 2. Soft Background Glow */}
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 3. Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Badge */}
        <div className="mb-4 px-3 py-1.5 bg-green-950/40 text-green-300 rounded-full text-[11px] uppercase tracking-wider border border-green-500/30">
          Join Our Community
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-lg">
          Connect with Our Galaxy <br />
          <span className="text-green-400">of Innovators</span>
        </h2>

        {/* 4. Overlapping Avatars Section */}
        <div className="mt-8 flex items-center justify-center">
          
          {/* Overlapping Flex Container */}
          <div className="flex -space-x-3 sm:-space-x-4">
            
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative group w-20 h-20 sm:w-14 sm:h-14 rounded-full  transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:z-20 hover:border-green-400 shadow-[0_4px_20px_-5px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] overflow-hidden"
              >
                <img 
                  src={avatar} 
                  alt={`community member ${index + 1}`} 
                  className="  w-full h-full object-contain mt-2" 
                />
              </div>
            ))}

            {/* Growth Indicator */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-4 border-[#020617] bg-green-950 text-green-400 text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-green-500 hover:text-black cursor-default">
              100+
            </div>

          </div>
        </div>

        {/* 5. Fixed Join Button */}
        <button 
          type="button"
          className="mt-10 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full text-sm transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 active:scale-95"
        >
          Join Now
        </button>

      </div>

      {/* Decorative Corner Details */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-green-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-green-400/10 rounded-full animate-bounce"></div>

    </div>
  );
}