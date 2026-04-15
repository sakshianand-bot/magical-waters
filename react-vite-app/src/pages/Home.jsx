import { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Scriptures from '../components/Scriptures'
import SacredServices from '../components/SacredServices'
import WhatWeOffer from '../components/WhatWeOffer'
import SacredProcess from '../components/SacredProcess'
import Contact from '../components/Contact'
import ServiceModal from '../components/ServiceModal'
import BackgroundEffects from '../components/BackgroundEffects'
import BookNow from '../components/booknow'

const Home = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-[#F7F4F0] selection:bg-[#E2DDD3] overflow-x-hidden">
      {/* 1. Global Background Logic */}
      <BackgroundEffects />
      
      {/* 2. Hero Section: Cinematic Entry */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* 3. Narrative Sections with Staggered Spacing */}
      <main className="relative">
        
        {/* About Section: Wrapped in a soft container to pop from background */}
        <div className="pb-12 bg-white/30 backdrop-blur-sm border-y border-[#E2DDD3]/50 relative z-10">
          <About />
        </div>

        {/* Scriptures */}
        <section className="relative -mt-12 mb-20 z-20">
          <Scriptures />
        </section>

        {/* Sacred Services */}
        <section className="relative -mt-10 mb-6">
          <SacredServices onServiceSelect={setSelectedService} />
        </section>

        {/* What We Offer */}
        <section className="relative">
          <WhatWeOffer />
        </section>

        {/* The Sacred Process */}
        <section className="relative">
          <SacredProcess />
        </section>

        {/* Contact: Minimalist Finish */}
        <section className="py-8">
          <Contact />
        </section>
      </main>

      {/* 4. Global Overlays & Modals */}
      <footer className="relative">
        <BookNow />
      </footer>

      {/* Modal remains functional with a more refined backdrop */}
      <ServiceModal 
        selectedService={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      {/* Subtle Bottom Navigation or Floating Elements */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* BookNow component likely handles this, but ensuring its z-index is highest */}
      </div>
    </div>
  )
}

export default Home;