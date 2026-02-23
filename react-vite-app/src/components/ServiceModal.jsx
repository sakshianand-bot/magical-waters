import { motion, AnimatePresence } from 'framer-motion'

const ServiceModal = ({ selectedService, onClose }) => {
  if (!selectedService) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-blue-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-[#F7F4F0] rounded-[2rem] max-w-md w-full relative overflow-hidden"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="bg-[#3B82F6] p-8 text-center text-white">
            <motion.div 
              className="text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {selectedService.icon}
            </motion.div>
            <h3 className="text-2xl font-medium">{selectedService.name}</h3>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <p className="text-blue-500 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>
            
            {selectedService.options ? (
              <div className="space-y-3 mb-6">
                {selectedService.options.map((option, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between items-center p-4 bg-white rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, backgroundColor: "#F7F4F0" }}
                  >
                    <div>
                      <span className="text-blue-900 font-medium text-sm">{option.type}</span>
                      <span className="text-[#3B82F6] text-xs block">{option.duration}</span>
                    </div>
                    <span className="text-[#E07A5F] font-medium text-lg">{option.price}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-6 bg-white rounded-xl mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <span className="text-3xl text-[#E07A5F] font-medium">{selectedService.price}</span>
                {selectedService.duration && (
                  <span className="text-[#3B82F6] text-sm block mt-1">{selectedService.duration}</span>
                )}
                {selectedService.note && (
                  <span className="text-[#3B82F6] text-xs block mt-2">{selectedService.note}</span>
                )}
              </motion.div>
            )}
            
            <div className="flex gap-3">
              <motion.button 
                onClick={onClose}
                className="flex-1 py-3 border border-blue-900 text-blue-900 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.02, backgroundColor: "#1e3a8a", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
              <motion.button 
                className="flex-1 py-3 bg-blue-900 text-white rounded-full text-sm font-medium"
                whileHover={{ scale: 1.02, backgroundColor: "#3B82F6" }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceModal
