import React from 'react';

const steps = [
  {
    number: "01",
    title: "Choose Your Symbol",
    description:
      "Select a sacred symbol that speaks to your soul, or collaborate with Laura to design a completely custom sigil that embodies your unique intention.",
    icon: "✦",
    detail: "Custom or curated — your symbol, your energy.",
  },
  {
    number: "02",
    title: "Craft Your Prayer",
    description:
      "Together, we create a personal prayer or affirmation that the symbol represents — words that carry the frequency of your deepest desires and healing.",
    icon: "🙏",
    detail: "Your words become the blueprint for transformation.",
  },
  {
    number: "03",
    title: "Etch & Embed Frequency",
    description:
      "Your chosen symbol is carefully etched onto a premium glass vessel and embedded with 432 Hz or 528 Hz healing frequencies — the vibrations of creation and repair.",
    icon: "🔮",
    detail: "432 Hz · 528 Hz — the frequencies of the universe.",
  },
  {
    number: "04",
    title: "The Evening Ritual",
    description:
      "Each night, fill your vessel with spring water and place it under the etched symbol. Concentrate on the sigil for 2 minutes before bed — letting your intention merge with the water's structure.",
    icon: "🌙",
    detail: "2 minutes of focused intention before sleep.",
  },
  {
    number: "05",
    title: "Rise & Drink Holy Water",
    description:
      "In the morning, rise and drink your structured, intentional Holy Water. This daily ritual restructures negative self-talk and your body's internal water — rewiring you for a more positive life.",
    icon: "☀️",
    detail: "Transform your mornings. Transform your life.",
  },
];

const SacredProcess = () => {
  return (
    <section id="process" className="relative py-24 px-4 md:px-6 font-serif overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-gradient-to-bl from-indigo-200/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-12 bg-indigo-500/40"></div>
            <span className="text-indigo-600 font-medium uppercase tracking-[0.3em] text-xs">
              The Ritual
            </span>
            <div className="h-[1px] w-12 bg-indigo-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            The Sacred Process
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A five-step ritual designed to restructure your inner water, reprogram
            negative self-talk, and awaken a more intentional, positive life.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300/40 via-indigo-300/60 to-violet-300/40 hidden md:block"></div>

          <div className="space-y-8 md:space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative flex gap-6 md:gap-10 items-start">
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-2 border-blue-200/60 
                                flex items-center justify-center shadow-lg shadow-blue-100/30
                                group-hover:border-blue-400 group-hover:shadow-blue-200/50 transition-all duration-500">
                    <span className="text-2xl md:text-3xl">{step.icon}</span>
                  </div>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/0 group-hover:border-blue-400/30 
                                group-hover:scale-125 transition-all duration-700 pointer-events-none"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[1.5rem] p-6 md:p-8
                              group-hover:bg-white/70 group-hover:-translate-y-1 transition-all duration-500
                              shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-blue-400 font-mono text-sm tracking-widest opacity-60">
                      STEP {step.number}
                    </span>
                    <div className="h-[1px] flex-1 bg-blue-200/30"></div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Subtle detail tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 
                                border border-blue-100/50 rounded-full">
                    <span className="text-xs text-blue-600 font-medium tracking-wide italic">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm italic mb-6">
            "Restructure your water. Restructure your life."
          </p>
          <a
            href="#booknow"
            className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800 text-white rounded-full 
                     hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl 
                     hover:-translate-y-0.5 font-medium tracking-wide"
          >
            Begin Your Ritual
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SacredProcess;
