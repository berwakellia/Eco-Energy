export default function LaunchCTA() {
  return (
    <div className="relative bg-[#020617] text-white py-16 md:py-24 flex items-center justify-center overflow-hidden">

      {/* Bottom Curve Glow */}
      <div className="absolute bottom-[-120px] w-[120%] h-[250px] md:h-[300px] bg-green-500/20 blur-[80px] rounded-[50%]"></div>

      {/* Thin arc line */}
      <div className="absolute bottom-[-60px] w-[120%] h-[200px] md:h-[240px] border-t border-green-400/30 rounded-[50%]"></div>

      {/* Center Glow */}
      <div className="absolute w-[200px] h-[200px] bg-green-500/10 blur-[100px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">

        {/* Icon Circle */}
        <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-green-500/20 border border-green-400/40 shadow-[0_0_25px_rgba(34,197,94,0.7)]">
          🚀
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Let’s Launch Your Business <br />
          <span className="text-green-400">Into a New Orbit</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-300">
          Partner with us to build futuristic experiences, unlock growth, and take your business
          to the next level of innovation.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-400 text-black rounded-full text-sm transition shadow-[0_0_15px_rgba(34,197,94,0.6)]">
          Get Started
        </button>

      </div>
    </div>
  );
}