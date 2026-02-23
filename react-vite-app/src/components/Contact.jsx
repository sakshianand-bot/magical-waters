import React from 'react';

const ProfileCard = () => {
  return (
    <section id="contact" className="min-h-screen bg-blue-100 flex items-center justify-center p-6 font-serif">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/30 backdrop-blur-sm p-8 md:p-16 rounded-3xl">
        
        {/* Left Side: The Image Arch */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-sm aspect-[4/5] rounded-full border border-white/50 overflow-hidden shadow-xl">
            <img 
              src="/💡.jpg" 
              alt="Laura Gardner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="text-slate-800 space-y-6">
          <header>
            <p className="uppercase tracking-widest text-sm mb-2 opacity-70">Begin Your Journey</p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Let's <br /> Connect
            </h1>
          </header>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">💫</span>
              <div>
                <h3 className="font-semibold uppercase text-xs tracking-wider">Online Presence</h3>
                <p className="text-lg italic text-slate-600">Laura Gardner</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">🌐</span>
              <div>
                <h3 className="font-semibold uppercase text-xs tracking-wider">Website</h3>
                <a href="#" className="text-lg hover:underline underline-offset-4">magical-waters.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">📧</span>
              <div>
                <h3 className="font-semibold uppercase text-xs tracking-wider">Ready to Begin?</h3>
                <p className="text-sm leading-relaxed opacity-80 max-w-xs">
                  Whether you're seeking a Reiki session, energy clearing, or your own custom water structuring vessel—I'm here to guide you.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-4 px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all shadow-lg">
            Schedule a Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;