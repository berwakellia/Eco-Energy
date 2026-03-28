export default function BuldingBrand() {
  return (
    <div className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex flex-col items-center justify-center px-6">

      {/* Glow Background */}
      <div className="absolute bottom-0 w-[700px] h-[250px] bg-green-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Badge */}
      <div className="mb-6 px-5 py-1.5 bg-green-900/30 text-green-300 rounded-full text-xs border border-green-500/20 backdrop-blur-sm">
        Your Growth, Our Strategy
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-center leading-tight max-w-2xl">
        Building Brands That Shine <br />
        <span className="text-green-400">Among the Stars</span>
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-400 text-center max-w-lg text-sm">
        From bold strategies to cutting-edge technology, we guide companies
        through uncharted territories and unlock limitless possibilities for
        their success.
      </p>

      {/* Globe Effect */}
      <div className="relative mt-12 w-[500px] h-[300px] rounded-full border border-green-500/20 flex items-center justify-center">

        {/* Inner glow */}
        <div className="absolute w-full h-full bg-green-500/10 blur-[80px] rounded-full"></div>

        {/* Fake network lines (simple version) */}
        <div className="absolute w-[90%] h-[90%] border border-green-400/20 rounded-full"></div>
        <div className="absolute w-[70%] h-[70%] border border-green-400/20 rounded-full"></div>
        <div className="absolute w-[50%] h-[50%] border border-green-400/20 rounded-full"></div>

        {/* Center dot */}
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>

      {/* Logos */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60 text-sm text-gray-400">
        <span>amana</span>
        <span>NTT DATA</span>
        <span>Google</span>
        <span>ORACLE</span>
        <span>slack</span>
        <span>discord</span>
      </div>

    </div>
  );
}