import React from 'react';

const SacredServices = ({ onServiceSelect }) => {
  const services = [
    {
      icon: "✨",
      title: "Sacred Reiki Session",
      description: "Traditional Reiki healing to balance your energy and restore inner peace",
      options: [
        { label: "In Person Session", price: "$60", duration: "60 min" },
        { label: "Remote Healing", price: "$50", duration: "45 min" }
      ]
    },
    {
      icon: "🌿",
      title: "Energy Massage Ritual",
      description: "Combined Reiki with therapeutic massage and full energy clearing",
      options: [{ label: "Full Ritual", price: "$80", duration: "90 min" }]
    },
    {
      icon: "💧",
      title: "Intention Glass Bottles",
      description: "Personalized water structuring bottles with custom etched sigils",
      options: [{ label: "Custom Vessel", price: "$25", duration: "Shipping included" }]
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-[#E07A5F]/40"></div>
            <span className="text-[#E07A5F] font-medium uppercase tracking-[0.3em] text-xs">Offerings</span>
            <div className="h-[1px] w-12 bg-[#E07A5F]/40"></div>
          </div>
          <h2 className="text-[#3B82F6] text-5xl md:text-6xl font-light tracking-tight">
            Sacred Services
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Refined Quatrefoil Shape */}
              <div className="relative w-48 h-48 mb-12 cursor-pointer"
                   onClick={() => onServiceSelect(service)}>
                {/* The Background Shape Logic */}
                <div className="absolute inset-0 bg-[#F7F4F0] rounded-2xl rotate-45"></div>
                <div className="absolute inset-0 bg-[#F7F4F0] rounded-[3rem]"></div>
                
                {/* Content inside shape */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    {service.icon}
                  </span>
                </div>

              </div>

              {/* Text Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-[#3B82F6] text-2xl font-medium mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic opacity-80">
                  "{service.description}"
                </p>
                
                {/* Pricing List */}
                <div className="space-y-4 mb-8">
                  {service.options.map((opt, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{opt.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#E07A5F] font-semibold text-lg">{opt.price}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                        <span className="text-gray-500 text-sm font-light">{opt.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Button */}
                <button className="relative py-2 px-6 overflow-hidden transition-all duration-300"
                        onClick={() => onServiceSelect(service)}>
                  <span className="relative z-10 text-[#3B82F6] font-medium text-sm tracking-widest flex items-center gap-2">
                    LEARN MORE <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-8 bg-[#3B82F6] transition-all duration-300 group-hover/btn:w-full"></div>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredServices;
