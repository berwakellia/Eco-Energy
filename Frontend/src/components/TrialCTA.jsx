import { Check, Star, Sparkles } from "lucide-react";

export default function TrialCTA() {
  return (
    <section className="w-full bg-[#130f26] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          
          {/* Left Side: Typography */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
              Start Your 7-Day
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white italic font-serif">
              Free Trial
            </h2>
          </div>

          {/* Right Side: Action & Rating */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            
            {/* CTA Button */}
            <button className="group relative flex items-center gap-3 bg-[#5e2bff] hover:bg-[#4d21d6] text-white px-8 py-4 rounded-full text-lg font-medium transition-all active:scale-95 shadow-lg shadow-purple-500/20">
              Get Started
              <div className="bg-white/20 p-1 rounded-full">
                <Sparkles className="size-5 text-white" />
              </div>
            </button>

            {/* Slanted Separator - Visible only on MD+ */}
            <div className="hidden md:block h-12 w-[2px] bg-white/10 rotate-[25deg]"></div>

            {/* Ratings Section */}
            <div className="flex items-center gap-4">
              <div className="bg-[#241d4a] p-3 rounded-xl">
                <Star className="size-6 text-[#5e2bff] fill-[#5e2bff]" />
              </div>
              <div className="space-y-1">
                <div className="text-white font-semibold text-lg">4.8 / 5</div>
                <div className="text-neutral-400 text-sm leading-tight">
                  From 12000+ Customer<br /> Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Tags */}
        <div className="mt-12 flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-[#1c163a] border border-white/5 px-5 py-3 rounded-full">
            <div className="bg-[#5e2bff] p-1 rounded-full">
              <Check className="size-3 text-white" strokeWidth={4} />
            </div>
            <span className="text-neutral-200 text-sm font-medium">No credit card required</span>
          </div>

          <div className="flex items-center gap-3 bg-[#1c163a] border border-white/5 px-5 py-3 rounded-full">
            <div className="bg-[#5e2bff] p-1 rounded-full">
              <Check className="size-3 text-white" strokeWidth={4} />
            </div>
            <span className="text-neutral-200 text-sm font-medium">Free 7-day trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}