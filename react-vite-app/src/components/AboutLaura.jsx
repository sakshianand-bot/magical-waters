import React from 'react';
import { motion } from 'framer-motion';

const AboutLaura = () => {
  return (
    <section id="about-laura" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <span className="text-[#E07A5F] text-sm tracking-[0.2em] uppercase font-semibold">
                The Healer
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-blue-950 leading-tight">
                About <span className="italic font-light">Laura</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
              <p className="font-medium text-blue-900/80 italic">
                Divine meeting you, I am Laura.
              </p>
              
              <p>
                With 15 years of experience as a Respiratory Therapist, I have cared for individuals across all stages of life—from preterm neonates to the elderly. My journey in healthcare has always been rooted in compassion, presence, and deep listening.
              </p>

              <p>
                In 2025, I felt a profound inner calling to expand my path and became certified in Reiki I & II. This allowed me to move into a more hands-on, energetic approach to healing—supporting not just the physical body, but emotional and spiritual well-being.
              </p>

              <p>
                My work now blends clinical awareness with intuitive healing practices. I also offer personalized intention-based structured water rituals, inspired by the idea that focused intention, symbols, and prayer can support inner clarity and transformation.
              </p>

              <p className="pt-4 border-t border-blue-100">
                I believe true healing begins from within, and I am here to support those who feel called to reconnect, realign, and restore balance in their lives.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
              <img 
                src="/about-laura.png" 
                alt="Healing energy and water" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-50 rounded-full -z-10 blur-2xl opacity-60" />
            
            {/* Subtle floating element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-blue-100 hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-blue-900 font-serif italic text-sm">
                "Reconnect. Realign. Restore."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutLaura;
