export default function NextSection() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center leading-tight max-w-3xl">
        Unlock Infinite Possibilities for <br />
        <span className="text-green-400">Your Business</span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-400 text-center max-w-lg text-sm">
        We help your business go beyond limits by providing innovative solutions,
        futuristic strategies, and measurable results that make you shine among the stars.
      </p>

      {/* CENTER SYSTEM */}
      <div className="relative mt-20 w-full max-w-5xl h-[400px] flex items-center justify-center">

        {/* Center Glow */}
        <div className="absolute w-24 h-24 bg-green-500 rounded-full blur-2xl opacity-40"></div>

        {/* Center Circle */}
        <div className="w-16 h-16 bg-green-500/20 border border-green-400 rounded-full flex items-center justify-center z-10">
          ⚡
        </div>

        {/* LEFT TOP */}
        <div className="absolute left-0 top-10 bg-blue-600/40 backdrop-blur-lg border border-blue-400/20 p-5 rounded-xl w-64">
          <h3 className="font-semibold">Futuristic Strategies</h3>
          <p className="text-xs text-gray-300 mt-1">
            We craft smart, innovative strategies designed to keep your business ahead of the curve.
          </p>
        </div>

        {/* LEFT BOTTOM */}
        <div className="absolute left-0 bottom-10 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-64">
          <h3 className="font-semibold">Creative Excellence</h3>
          <p className="text-xs text-gray-400 mt-1">
            From branding to user experience, we deliver creative solutions that stand out.
          </p>
        </div>

        {/* RIGHT TOP */}
        <div className="absolute right-0 top-10 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-64">
          <h3 className="font-semibold">Trusted Expertise</h3>
          <p className="text-xs text-gray-400 mt-1">
            With years of experience, we provide solutions that deliver real impact.
          </p>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="absolute right-0 bottom-10 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-64">
          <h3 className="font-semibold">Scalable Growth</h3>
          <p className="text-xs text-gray-400 mt-1">
            We help your business scale efficiently with sustainable growth strategies.
          </p>
        </div>

        {/* CONNECTION LINES */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute left-[25%] top-1/2 w-[20%] h-[1px] bg-green-400/30"></div>
          <div className="absolute right-[25%] top-1/2 w-[20%] h-[1px] bg-green-400/30"></div>
        </div>

      </div>

    </div>
  );
}