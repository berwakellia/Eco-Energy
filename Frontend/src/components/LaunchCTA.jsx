export default function LaunchCTA() {
  return (
    <div className="relative bg-[#020617] text-white py-12 md:py-16 flex items-center justify-center overflow-hidden">

      {/* Top Glow (for downward curve effect) */}
      <div className="absolute top-[-200px] w-[140%] h-[300px] md:h-[400px] bg-green-500/20 blur-[100px] rounded-[50%]"></div>

      {/* Inverted Arc Line (moved BELOW everything) */}
      <div className="absolute top-[120px] w-[140%] h-[260px] md:h-[320px] border-b border-green-400/40 rounded-[50%]"></div>

      {/* Center Glow */}
      <div className="absolute w-[200px] h-[200px] bg-green-500/10 blur-[100px] rounded"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">

        {/* Icon */}
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