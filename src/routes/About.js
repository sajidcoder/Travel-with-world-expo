import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Aboutus from '../componenets/Aboutus'

const About = () => {
  return (
    <>
    <Hero
    cName='heroMid' hero='https://images.ctfassets.net/2sam6k0rncvg/24MznjozCLzpF1qKIIGJbh/7b5218ec6f36e3a17397f28e42c6a5d1/things-to-carry-on-a-road-trip.png'
    title='About Us'
    text='We Write Your Dream'
    btnText='Check'
    url='/about'
    btnClass='show'
    btnText='Travel Plan'
  
  
    />
    <Aboutus/>
    <Footer/>
      </>
  )
}

export default About