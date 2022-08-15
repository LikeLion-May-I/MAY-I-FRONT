import React from 'react'
import { Navbar } from '../Navbar'
import Hero from './hero'
import Stats from './stats'
import Work from './Work'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Work />
      <Footer />
    </>
  )
}

export default Landing
