import React from 'react';

export default function WhoWeAre() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6 relative">
            Who We Are
            <span className="block w-16 h-1 bg-green-500 mt-2"></span>
          </h2>
          
          <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-green-700">Eco-Energy</span> is a premier student-led engineering initiative based at Rwanda Polytechnic – Tumba College. We are committed to bridging the gap between academic theory and sustainable industrial application.
            </p>
            <p>
              Our multidisciplinary team integrates expertise in <span className="text-slate-900 font-medium">Information Technology, Mechatronics, and Renewable Energy</span>. Together, we engineer high-impact solutions designed to tackle the unique environmental and energy landscape of Rwanda.
            </p>
          </div>
          
          <div className="mt-8">
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
              Learn More About Our Projects
            </button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/womanrobot1.jpg" 
              alt="Eco-Energy Engineering Team at work" 
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
          </div>
        </div>

      </div>
    </section>
  );
}