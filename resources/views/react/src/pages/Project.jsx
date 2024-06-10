import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/ProjectsPageSections/Hero'
import Projects from '../components/ProjectsPageSections/Projects'

function Project() {
  return (
    <>
      <Header />
          <div className="carousel-container">
            <Hero />
          </div> 
          <Projects />
      <Footer />
      
    </>
  )
}

export default Project
