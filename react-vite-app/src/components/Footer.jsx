import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Our Story' },
    { href: '#services', label: 'Offerings' },
    { href: '#contact', label: 'Connect' }
  ]

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                💧
              </motion.div>
              <span className="text-xl tracking-wide">
                <span className="italic font-serif">Magical</span> Waters
              </span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              This service is for spiritual and wellness support and is not a substitute for medical treatment.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/90">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/90">
              Connect
            </h4>
            <div className="space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/laura-gardner-86063b3b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  in
                </span>
                Laura Gardner
              </motion.a>
              <motion.a
                href="https://magical-waters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  🌐
                </span>
                magical-waters.com
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            &copy; {currentYear} <span className="italic font-serif">Magical Waters</span>. Crafted with intention.
          </p>
          <motion.div
            className="flex items-center gap-2 text-white/60 text-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Structured with love</span>
            <span>&#x1F4A7;</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3B82F6"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.4,32.6C60.6,43.7,50.3,53,39.2,61.3C28.1,69.6,16.2,76.9,2.9,71.5C-10.4,66.1,-26.1,48,-39.3,36.4C-52.5,24.8,-63.2,19.7,-70.6,10.8C-78,1.9,-82.1,-10.8,-77.5,-21.8C-72.9,-32.8,-59.6,-42.1,-47.1,-49.8C-34.6,-57.5,-22.9,-63.6,-10.8,-64.7C1.3,-65.8,13.4,-61.9,30.5,-83.6L44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </footer>
  )
}

export default Footer
