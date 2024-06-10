import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/ContactPageSections/Map'
import backgroundImage from '../assets/afritsy.jpg';
import ContactUs from '../components/ContactPageSections/ContactUs'

function Contact() {
  return (
    <div>
      <Header/>
      
          <div className="carousel-container">
            <ContactUs />
          </div>
            <Map/>

          
      <Footer />
    </div>
  )
}

export default Contact
