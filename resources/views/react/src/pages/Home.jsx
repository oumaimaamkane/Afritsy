import React from 'react'
import Header from '../components/Header'
import Hero from '../components/HomePageSection/Hero'
import About from '../components/HomePageSection/About'
import Service from '../components/HomePageSection/Service'
import Pays from '../components/HomePageSection/Pays'
import Feature from '../components/HomePageSection/Feature'
import Clients from '../components/HomePageSection/Clients'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Header />
        
        <Hero />
        <About />
        <Service />
        <Pays />
        <Feature />
        <Clients />
      <Footer />
    </>
  )
}

export default Home
