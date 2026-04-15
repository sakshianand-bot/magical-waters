import React from 'react';

const ProfileCard = () => {
  return (
    <section id="contact" className="relative w-full h-[600px] lg:h-[600px] flex overflow-hidden">
      {/* Left Content Side */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6 md:px-8 py-6 lg:py-0">
        <div className="max-w-md w-full">
          
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-5 bg-blue-500/40"></div>
              <span className="text-blue-600 font-medium uppercase tracking-[0.2em] text-xl">
                Begin Your Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-7xl font-serif text-slate-900 leading-tight mb-2">
              Let's <span className="text-blue-600 italic font-light">Connect</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              I'm here to guide you on your spiritual journey with custom sigils, energy healing, and intentional water.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
            <div className="group flex flex-col gap-1.5 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg mb-0 group-hover:scale-110 transition-transform">💫</span>
              <h3 className="font-semibold text-slate-900 tracking-wide text-xs">Spiritual Guide</h3>
              <p className="text-slate-600 font-serif italic text-xs">Laura Gardner</p>
            </div>

            <div className="group flex flex-col gap-1.5 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg mb-0 group-hover:scale-110 transition-transform">🌐</span>
              <h3 className="font-semibold text-slate-900 tracking-wide text-xs">Connect Online</h3>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-xs">magical-waters.com</a>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group relative w-full inline-flex items-center gap-3 justify-center px-6 py-4 font-semibold text-white text-xl transition-all duration-300 bg-slate-900 rounded-full overflow-hidden hover:bg-blue-600 shadow-lg">
            <span className="relative flex  items-center gap-2">
              Schedule a Session
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </button>

        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black">
        <img 
          src="/shpal.jpg" 
          alt="Laura Gardner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Image Text */}
        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white z-10">
          <p className="font-serif italic text-base opacity-90 font-light leading-relaxed">
            "Discovering the Best for Your Spiritual Journey"
          </p>
          <div className="flex gap-2 mt-3">
            <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-medium">✓ 100% Authentic</span>
            <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-medium">🌍 Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;