import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: 'Baylor Scott & White Medical Center – College Station',
  lat:30.58254420899421,
  lng:-96.27917886514233
};


function App() {
  return (
    <div className="App">
      {/* <IntroSection />
      <ContactSection /> */}
      <MapSection location={location} zoomLevel={15} /> {/* include it here */}
      {/* <DisclaimerSection />
      <FooterSection /> */}
    </div>
  )
}

export default App
