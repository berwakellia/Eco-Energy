export default function JoinGalaxy() {
  const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
    "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=6",
  ];

  return (
    <div className="relative bg-[#020617] text-white py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">

      {/* Glow Circles (responsive sizes) */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-green-400/20 rounded-full"></div>
      <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-green-400/10 rounded-full"></div>

      {/* Soft Glow */}
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-green-500/10 blur-[100px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Badge */}
        <div className="mb-4 px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-xs border border-green-500/20">
          Join Our Community
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          Join Our Galaxy <br />
          <span className="text-green-400">of Innovators</span>
        </h2>

        {/* Avatars */}
        <div className="mt-6 flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border ${
                index === 2
                  ? "scale-110 sm:scale-125 border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
                  : "border-white/20"
              } transition`}
            >
              <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 px-5 py-2 bg-green-500 hover:bg-green-400 text-black rounded-full text-sm transition shadow-[0_0_15px_rgba(34,197,94,0.6)]">
          Join Now
        </button>

      </div>
    </div>
  );
}