import { Navbar } from '../components/Navbar'
import Hero from '../components/landing/hero'
import Stats from '../components/landing/stats'
import Work from '../components/landing/Work'
import Footer from '../components/landing/Footer'

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
