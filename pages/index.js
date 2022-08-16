
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import { Navbar } from '../components/Navbar'

import Stats from '../components/Stats'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <Navbar />


      <Hero />
      <Stats />
      <Work />
      <Footer />
    </div>

  )
}

export default Home
