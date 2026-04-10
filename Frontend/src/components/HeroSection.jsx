export default function HeroSection() {
  return (
    <div className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col justify-center items-center px-6">

      {/* Glow Horizon Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-green-500 opacity-30 blur-[120px] rounded-full"></div>

      {/* Arc line */}
      <div className="absolute bottom-[-120px] w-[1200px] h-[400px] border-t border-green-400 rounded-[50%] opacity-40"></div>

      {/* Top Badge */}
      <div className="mb-6 px-4 py-1 bg-green-900/40 text-green-300 rounded-full text-sm border border-green-500/30">
        Secure Blockchain
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Engineering technology that  <br />
        <span className="text-green-500"> converts agricultural waste into clean and affordable fuel </span>
      </h1>

      {/* Stats Cards */}
      <div className="mt-16 flex flex-col md:flex-row backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {/* Card 1 */}
        <div className="flex items-center gap-4 px-8 py-6 border-b md:border-b-0 md:border-r border-white/10">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <img src='/Sustainable.png' className="w-10 h-10 bg-green-500/20 rounded-full"  />
          </div>
          <div>
            <h2 className="text-xl font-semibold">100%</h2>
            <p className="text-sm text-gray-400">Sustainable Energy <br /> Technology</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 px-8 py-6 border-b md:border-b-0 md:border-r border-white/10">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <img src='/Machine.jpg' className="w-10 h-10 bg-green-500/20 rounded-full"  />
          </div>
          <div>
            <h2 className="text-xl font-semibold">100%</h2>
            <p className="text-sm text-gray-400">Machine Manufacturing and <br /> Innovation</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 px-8 py-6">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <img src='/WaterEnergyWaste.png' className="w-10 h-10 bg-green-500/20 rounded-full"  />
          </div>
          <div>
            <h2 className="text-xl font-semibold">100%</h2>
            <p className="text-sm text-gray-400">Waste-to-Energy & Youth <br />Development</p>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <p className="mt-10 text-gray-400 text-center max-w-xl text-sm">
        Eco-Energy is a smart briquette production solution that converts 
        agricultural waste into clean fuel, reducing waste,
         lowering emissions, and promoting sustainable energy for communities.

      </p>

      {/* Explore More */}
      <div className="mt-4 flex items-center gap-2 text-green-400 cursor-pointer">
        Explore More →
      </div>

    </div>
  );
}