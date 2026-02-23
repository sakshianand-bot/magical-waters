import { motion } from 'framer-motion'

const Services = ({ onServiceSelect }) => {
  const services = [
    {
      id: 1,
      name: "Sacred Reiki Session",
      description: "Traditional Reiki healing to balance your energy and restore inner peace",
      icon: "✨",
      options: [
        { type: "In Person Session", price: "$60", duration: "60 min" },
        { type: "Remote Healing", price: "$50", duration: "45 min" }
      ]
    },
    {
      id: 2,
      name: "Energy Massage Ritual",
      description: "Combined Reiki with therapeutic massage and full energy clearing",
      icon: "🌿",
      price: "$80",
      duration: "90 min"
    },
    {
      id: 3,
      name: "Intention Glass Bottles",
      description: "Personalized water structuring bottles with custom etched sigils",
      icon: "💧",
      price: "$25",
      note: "Shipping included worldwide"
    }
  ]

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
    <section id="services" className="py-24 px-4 bg-white relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#E07A5F] text-sm tracking-[0.2em] uppercase font-medium">
            Offerings
          </span>
          <h2 className="text-4xl md:text-5xl text-blue-900 mt-4">
            <span className="italic font-serif">Sacred</span> Services
          </h2>
        </motion.div>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group relative ${index === 1 ? 'md:mt-12' : ''}`}
              whileHover={{ y: -10 }}
            >
              <div 
                className="bg-[#F7F4F0] rounded-[2rem] p-8 h-full cursor-pointer overflow-hidden relative"
                onClick={() => onServiceSelect(service)}
              >
                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon */}
                <motion.div 
                  className="text-5xl mb-6 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl text-blue-900 mb-3 font-medium">
                  {service.name}
                </h3>
                <p className="text-blue-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price Display */}
                {service.options ? (
                  <div className="space-y-2">
                    {service.options.map((opt, i) => (
                      <motion.div 
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-[#3B82F6]/20 last:border-0"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-xs text-blue-500">{opt.type}</span>
                        <div className="text-right">
                          <span className="text-[#E07A5F] font-medium">{opt.price}</span>
                          <span className="text-xs text-[#3B82F6] block">{opt.duration}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl text-[#E07A5F] font-medium">{service.price}</span>
                      {service.duration && (
                        <span className="text-xs text-[#3B82F6] block">{service.duration}</span>
                      )}
                    </div>
                    {service.note && (
                      <span className="text-xs text-[#3B82F6]">{service.note}</span>
                    )}
                  </div>
                )}

                {/* CTA */}
                <motion.div 
                  className="mt-6 flex items-center gap-2 text-blue-900 text-sm font-medium group-hover:text-[#3B82F6] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
