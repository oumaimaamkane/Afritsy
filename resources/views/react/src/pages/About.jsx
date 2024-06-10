import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/AboutPageSections/Hero'
import Benefices from '../components/AboutPageSections/Benefices'
import Story from '../components/AboutPageSections/Story'
import End from '../components/AboutPageSections/End'

function About() {
  return (
    <>
      <Header/>
        <div className='carousel-container'>
          <Hero />
        </div>
        <Benefices />
        <Story />
        <End />
      <Footer />
    </>
  )
}

export default About
