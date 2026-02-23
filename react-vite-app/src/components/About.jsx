import { motion } from 'framer-motion'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true, margin: "-50px" }
  }

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <section id="about" className="py-24 px-4 relative bg-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-[#E07A5F] text-sm tracking-[0.2em] uppercase font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Sacred Practice
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl text-blue-900 mt-4 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="italic font-serif">Water</span> holds memory.
              <br />
              <span className="font-light">Intention holds power.</span>
            </motion.h2>

            <div className="space-y-6 text-blue-500 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Every glass vessel I create is a sacred container for transformation. 
                Together, we design a personal sigil—a symbol infused with your unique 
                intention and prayer.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                This symbol is etched into crystal glass, embedded with healing 
                frequencies of 432Hz and 528Hz—the vibrations of nature and DNA repair.
              </motion.p>
            </div>

            {/* Ritual Steps - Horizontal */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-4"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { num: "01", text: "Design Your Sigil", icon: "✦" },
                { num: "02", text: "Etch & Embed", icon: "◈" },
                { num: "03", text: "Sacred Ritual", icon: "✧" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-2xl text-[#3B82F6] block mb-2">{step.icon}</span>
                  <span className="text-xs text-[#E07A5F] font-medium">{step.num}</span>
                  <p className="text-sm text-blue-900 mt-1 font-medium">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Organic Shape Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Circle */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-[#3B82F6]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-[#3B82F6]/10 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass Icon Large */}
                <div className="text-center mb-6">
                  <motion.div 
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3B82F6]/20 to-blue-900/20 rounded-full flex items-center justify-center text-5xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59,130,246,0.2)",
                        "0 0 0 20px rgba(59,130,246,0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🕯️
                  </motion.div>
                </div>

                <h3 className="text-xl text-blue-900 text-center mb-4 font-medium">
                  The Evening Ritual
                </h3>
                
                <p className="text-blue-500 text-center text-sm leading-relaxed mb-6">
                  Fill your etched glass with spring water before bed. 
                  Gaze upon your sigil for 2 minutes, infusing it with intention.
                </p>

                <div className="bg-[#F7F4F0] rounded-xl p-4 text-center">
                  <p className="text-[#E07A5F] text-sm italic">
                    "Drink the HOLY structured water upon waking.
                    <br />Feel the shift within."
                  </p>
                </div>

                {/* Bottom Decorative Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#E07A5F] to-[#3B82F6]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
