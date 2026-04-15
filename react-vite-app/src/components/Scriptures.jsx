import { motion } from 'framer-motion';

const Scriptures = () => {
  const scriptures = [
    { reference: 'Genesis 1:1-2', text: 'In the beginning God created the heaven and the earth...', theme: 'Creation' },
    { reference: 'Hebrews 10:22', text: 'Let us draw near with a true heart in full assurance of faith...', theme: 'Purification' },
    { reference: 'Isaiah 12:3', text: 'Therefore with joy shall ye draw water out of the wells of salvation.', theme: 'Joy' },
    { reference: 'Isaiah 43:2', text: 'When thou passest through the waters, I will be with thee...', theme: 'Protection' },
    { reference: 'Revelation 21:6', text: 'I will give unto him that is athirst of the fountain of the water of life freely.', theme: 'Eternal Life' },
    { reference: 'John 7:38', text: 'He that believeth on me, out of his belly shall flow rivers of living water.', theme: 'Living Water' }
  ];

  const gridStyles = [
    // 0: Creation
    "md:col-span-2 md:row-span-1 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-blue-100/50",
    // 1: Purification
    "md:col-span-1 md:row-span-1 bg-white hover:shadow-gray-200/50",
    // 2: Joy (Vertical Dark Card)
    "md:col-span-1 md:row-span-2 bg-blue-900 text-white hover:shadow-blue-900/40",
    // 3: Protection
    "md:col-span-2 md:row-span-1 bg-white hover:shadow-gray-200/50",
    // 4: Eternal Life
    "md:col-span-2 md:row-span-1 bg-white hover:shadow-gray-200/50",
    // 5: Living Water (Full width footer)
    "md:col-span-3 md:row-span-1 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 hover:shadow-indigo-100/40"
  ];

  const contentStyles = [
    // 0: Creation
    { theme: "text-blue-500", text: "text-blue-950", ref: "text-blue-400", decoration: "bg-blue-300" },
    // 1: Purification
    { theme: "text-blue-400", text: "text-gray-800", ref: "text-blue-300", decoration: "bg-blue-200" },
    // 2: Joy (Dark card)
    { theme: "text-blue-200", text: "text-white", ref: "text-blue-300", decoration: "bg-blue-400" },
    // 3: Protection
    { theme: "text-indigo-400", text: "text-gray-800", ref: "text-indigo-300", decoration: "bg-indigo-200" },
    // 4: Eternal Life
    { theme: "text-blue-500", text: "text-gray-800", ref: "text-blue-400", decoration: "bg-blue-200" },
    // 5: Living Water
    { theme: "text-blue-600", text: "text-blue-950 text-2xl md:text-3xl", ref: "text-blue-500", decoration: "bg-blue-400" }
  ];

  return (
    <section id="scriptures" className="pt-12 pb-24 md:pt-16 md:pb-32 px-4 md:px-8 overflow-hidden min-h-screen relative font-serif">
      
      {/* Cinematic Background Layer */}
      <motion.div 
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.25] -z-20 mix-blend-multiply"
        style={{ backgroundImage: `url('/download (7).jpg')` }}
      />
      {/* Removed white gradient to fix the white block issue */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Header Section */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-blue-300/60"></div>
            <span className="text-blue-500 font-sans font-bold uppercase tracking-[0.4em] text-xs">Divine Flow</span>
            <div className="h-px w-16 bg-blue-300/60"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light italic text-blue-950 leading-tight tracking-tight"
          >
            Sacred Scriptures
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {scriptures.map((scripture, index) => {
            const styleClass = gridStyles[index];
            const textStyle = contentStyles[index];
            const isDark = index === 2;

            return (
              <motion.div
                key={scripture.reference}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between border ${isDark ? 'border-transparent' : 'border-blue-900/5'} shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${styleClass}`}
              >
                {/* Large Background Decorative Number */}
                <span className={`absolute -top-8 -right-8 text-[10rem] font-light italic leading-none transition-transform duration-700 group-hover:scale-110 ${isDark ? 'text-white/5' : 'text-blue-900/5'}`}>
                  0{index + 1}
                </span>

                <div className="relative z-10 mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`w-8 h-[2px] ${textStyle.decoration} transition-all duration-500 group-hover:w-16`} />
                    <h3 className={`${textStyle.theme} font-sans font-bold text-xs uppercase tracking-[0.3em]`}>
                      {scripture.theme}
                    </h3>
                  </div>
                  <p className={`${textStyle.text} text-2xl md:text-3xl italic leading-snug font-light`}>
                    "{scripture.text}"
                  </p>
                </div>

                <div className={`relative z-10 ${textStyle.ref} font-sans text-sm font-bold tracking-widest uppercase mt-auto flex items-center justify-between`}>
                  <span>— {scripture.reference}</span>
                  
                  {/* Subtle Interactive Arrow */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 ${isDark ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-500'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Scriptures;