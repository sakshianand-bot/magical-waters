import React from 'react';

const booknow = () => {
  return (
    <section id="booknow" className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Form */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-serif italic text-blue-900">
              Book Now
            </h1>
            <p className="mt-3 text-slate-500 text-base leading-relaxed max-w-md">
              Reserve your sacred session — choose a date that feels right and we'll take care of the rest.
            </p>
          </div>
          
          <form className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-blue-800 mb-1 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Jane" 
                  className="px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-blue-800 mb-1 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Smith" 
                  className="px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-blue-800 mb-1 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="jane@example.com" 
                className="px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              />
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-blue-800 mb-1 ml-1">Preferred Date</label>
              <input 
                type="date" 
                className="px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-slate-700"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-medium text-blue-800 mb-1 ml-1">Message</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your intentions or any special requests..." 
                className="px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 resize-none"
              ></textarea>
            </div>
            
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
              SUBMIT 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>

        {/* Right Side: Image with Circular Rotation */}
        <div className="relative flex justify-center items-center">
          <style>{`
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div 
            className="w-full max-w-md aspect-square overflow-hidden rounded-full border-4 border-blue-200 shadow-2xl shadow-blue-200/40"
            style={{ animation: 'spinSlow 20s linear infinite' }}
          >
            <img 
              src="/Necklace Stainless Steel  The Seals Of The 7 Archangels - Gold.jpg" 
              alt="Book Now" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default booknow;
