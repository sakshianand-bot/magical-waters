import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center px-4 sm:px-6 py-8 lg:py-6 overflow-hidden">
      {/* Optional Light Overlay to maintain text readability */}
      <div className="absolute inset-0 bg-[#F7F4F0]/80 -z-10" />

      {/* --- BACKGROUND DECOR ELEMENTS --- */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      {/* SVG Mask Definition */}
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

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-4 lg:py-0">
        
        {/* Left: Enlarged Frame */}
        <motion.div 
          className="relative flex justify-center items-center h-full"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div 
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[440px] aspect-[4/5] bg-cover bg-center shadow-2xl transition-transform duration-700 hover:scale-[1.01] relative overflow-hidden"
            style={{
              backgroundImage: `url('/download (3).jpg')`,
              clipPath: "url(#scalloped-mask)"
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-blue-400/10 to-transparent" />
            
            {/* Added: 98% Purity Card in corner */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-blue-100/50">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-950 font-bold text-sm">98% Purity</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif text-blue-950 leading-[1.1] tracking-tight">
              Energy Healing <br />
              <span className="italic font-light text-blue-900/80">Rooted in 15 Years of Clinical Experience</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-2xl text-slate-800 font-light max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Reiki & Intention-Based Water Rituals to Support Inner Balance, Clarity, and Emotional Well-Being
          </motion.p>

          {/* Call to Action Group */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative px-8 py-3.5 bg-[#1A3A8A] text-white rounded-full font-semibold text-base hover:bg-blue-900 transition-all flex items-center justify-center">
                  Book a Session
                </div>
            </button>
            
            <button className="group flex items-center gap-2 text-blue-950 font-semibold text-base">
              <span className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                →
              </span>
              Learn More
            </button>
          </motion.div>

          {/* Subtle slow animation element */}
          <motion.div 
            className="pt-8 opacity-40"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;