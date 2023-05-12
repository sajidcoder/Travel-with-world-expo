import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Contactform from '../componenets/Contactform'

const Contact = () => {
  return (
    <>
      <Hero
    cName='hero' hero='https://assets.gqindia.com/photos/62c4236b5b6a37ba7f473d6f/16:9/pass/solo_travel_top-image.jpg'
    title='About Us'
    text='We Write Your Dream'
    btnText='Check'
    url='/about'
    btnClass='show'
    btnText='Travel Plan'
  
  
    />
    <Contactform/>
    <Footer/>
    </>
  )
}

export default Contact