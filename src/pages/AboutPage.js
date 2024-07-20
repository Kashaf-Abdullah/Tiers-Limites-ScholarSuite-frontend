import React from 'react'
import AboutUs from '../components/AboutUs'
import AboutQuality from '../components/AboutQuality'
import Team from '../components/Team'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div>
    <AboutUs/>
      <AboutQuality/>
      {/* <Team/> */}
      <FAQs/>
      {/* <Footer/> */}
    </div>
  )
}

export default AboutPage
