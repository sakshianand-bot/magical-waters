import { motion } from 'framer-motion';

const Scriptures = () => {
  const scriptures = [
    {
      reference: 'Genesis 1:1-2',
      text: 'In the beginning God created the heaven and the earth...',
      theme: '1. Creation'
    },
    {
      reference: 'Hebrews 10:22',
      text: 'Let us draw near with a true heart in full assurance of faith...',
      theme: '2. Purification'
    },
    {
      reference: 'Isaiah 12:3',
      text: 'Therefore with joy shall ye draw water out of the wells of salvation.',
      theme: '3. Joy'
    },
    {
      reference: 'Isaiah 43:2',
      text: 'When thou passest through the waters, I will be with thee...',
      theme: '4. Protection'
    },
    {
      reference: 'Revelation 21:6',
      text: 'I will give unto him that is athirst of the fountain of the water of life freely.',
      theme: '5. Eternal Life'
    },
    {
      reference: 'John 7:38',
      text: 'He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.',
      theme: '6. Living Water'
    }
  ];

  return (
    <section id="scriptures" className="py-24 px-4 overflow-hidden min-h-screen relative flex items-center justify-center">
      {/* Background Image */}      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 -z-10"
        style={{
          backgroundImage: `url('/download (7).jpg')`
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-800 mb-2">Sacred Journey</h2>
          <p className="text-gray-600 text-lg">The flowing path of divine wisdom</p>
        </div>

        {/* Normal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scriptures.map((scripture, index) => (
            <motion.div
              key={scripture.reference}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 h-full relative">
                {index !== 5 && (
                  <>
                    <h3 className="text-gray-800 font-bold text-lg mb-3">
                      {scripture.theme}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4 font-medium">
                      "{scripture.text}"
                    </p>
                    <div className="text-xs text-gray-500 font-semibold tracking-wide">
                      {scripture.reference}
                    </div>
                  </>
                )}

                {/* Arrow Design - Only in 6th box */}
                {index === 5 && (
                  <a 
                    href="#booknow" 
                    className="flex items-center justify-center h-full min-h-[120px] cursor-pointer hover:scale-110 transition-transform"
                  >
                    <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                      {/* Straight line */}
                      <path 
                        d="M10 20 L75 20" 
                        stroke="#3B82F6" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                      />
                      {/* Arrow head */}
                      <path 
                        d="M70 12 L82 20 L70 28" 
                        stroke="#3B82F6" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scriptures;