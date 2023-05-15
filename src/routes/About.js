import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Aboutus from '../componenets/Aboutus'

const About = () => {
  return (
    <>
    <Hero
    cName='heroMid' hero='https://e1.pxfuel.com/desktop-wallpaper/301/597/desktop-wallpaper-forex-trading-financial-markets.jpg'
    title='About Us'
    text='We Provide Chance To Dream TD '
    btnText='Check'
    url='/about'
    btnClass='show'
    btnText='Choose'
  
  
    />
    <Aboutus/>
    <Footer/>
      </>
  )
}

export default About