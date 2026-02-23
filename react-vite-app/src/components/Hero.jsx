import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#FDFEFF] flex items-center justify-center px-4 sm:px-6 py-8 lg:py-6 overflow-hidden">
      {/* --- NEW: BACKGROUND DECOR ELEMENTS --- */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      {/* SVG Mask Definition (Unchanged) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="scalloped-mask" clipPathUnits="objectBoundingBox">
            <path d="M0,1 
                     L1,1 
                     L1,0.3 
                     C1,0.15, 0.85,0.15, 0.8,0.2 
                     C0.75,0.08, 0.65,0, 0.5,0 
                     C0.35,0, 0.25,0.08, 0.2,0.2 
                     C0.15,0.15, 0,0.15, 0,0.3 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative z-10 py-4 lg:py-0">
        
        {/* Left: Enlarged Frame */}
        <div className="relative flex justify-center items-center h-full">
          <div 
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] aspect-[4/5] bg-cover bg-center shadow-2xl transition-transform duration-700 hover:scale-[1.01] relative"
            style={{
              backgroundImage: `url('/download (3).jpg')`,
              clipPath: "url(#scalloped-mask)"
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-blue-400/10 to-transparent" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col space-y-3 lg:space-y-6 text-center lg:text-left items-center lg:items-start">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif italic text-blue-950 leading-[0.85] tracking-tight">
              Magical <br /> 
              <span className="relative inline-block">
                Waters
                {/* Underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200/60" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.5C50 3.5 150 -4.5 299 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-blue-800/60 font-light max-w-md leading-relaxed px-2 sm:px-0">
            Transform your life through the sacred ritual of structured water, 
            custom sigils, and intentional energy healing.
          </p>

          {/* Text Info - Converted from card */}
          <div className="flex flex-col gap-1 text-blue-900 items-center lg:items-start">
            <p className="text-sm font-serif italic text-blue-800/80">
              "Water holds memory. We help you rewrite it."
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-base font-bold text-blue-950">98%</span>
              <span className="text-xs uppercase text-blue-400 tracking-wider">Purity Alignment</span>
            </div>
          </div>

          {/* Call to Action Group */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1A3A8A] text-white rounded-full font-semibold text-sm sm:text-base hover:bg-blue-900 transition-all flex items-center justify-center">
                  Explore Offerings
                </div>
            </button>
            
            <button className="group flex items-center gap-2 text-blue-900 font-semibold text-sm sm:text-base">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-blue-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                →
              </span>
              Discover More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;