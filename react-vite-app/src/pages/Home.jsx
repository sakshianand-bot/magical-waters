import { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Scriptures from '../components/Scriptures'
import Services from '../components/Services'
import SacredServices from '../components/SacredServices'
import Contact from '../components/Contact'
import ServiceModal from '../components/ServiceModal'
import BackgroundEffects from '../components/BackgroundEffects'
import BookNow from '../components/booknow'

const Home = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-[#F7F4F0] overflow-x-hidden font-light">
      <BackgroundEffects />
      <Hero />
      <About />
      <Scriptures />
      {/* <Services onServiceSelect={setSelectedService} /> */}
      <SacredServices onServiceSelect={setSelectedService} />
      <Contact />
      <BookNow />
      <ServiceModal selectedService={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  )
}

export default Home
