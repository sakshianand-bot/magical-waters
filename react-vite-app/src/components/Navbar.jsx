import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AudioToggle from './AudioToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Our Story' },
    { href: '#services', label: 'Offerings' },
    { href: '#contact', label: 'Connect' }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#F7F4F0]/90 backdrop-blur-md shadow-md border-b border-blue-100/20' : 'bg-white/30 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-40 h-40 flex items-center justify-center"
            >
              <img 
                src="/Gemini_Generated_Image_mg8rznmg8rznmg8r-removebg-preview.png" 
                alt="Magical Waters Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <AudioToggle />
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wider font-medium transition-colors ${
                  scrolled ? 'text-[#3B82F6] hover:text-[#1E3A8A]' : 'text-[#3B82F6] hover:text-[#1E3A8A]'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="#booknow"
              className="px-6 py-2.5 bg-[#3B82F6] text-white rounded-full text-sm font-medium tracking-wider hover:bg-[#1E3A8A] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6]"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="w-5 h-5 flex flex-col justify-center items-center">
              <motion.span
                className="w-5 h-0.5 bg-current block absolute"
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -4
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current block absolute"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current block absolute"
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 0 : 4
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#F7F4F0]/95 backdrop-blur-md border-t border-[#3B82F6]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-[#3B82F6] font-medium rounded-xl hover:bg-[#3B82F6]/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="px-4 py-2">
                <AudioToggle />
              </div>

              <motion.a
                href="#booknow"
                className="block mt-4 py-3 px-4 bg-[#3B82F6] text-white text-center rounded-full font-medium"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Session
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
