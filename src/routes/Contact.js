import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Contactform from '../componenets/Contactform'

const Contact = () => {
  return (
    <>
      <Hero
    cName='hero' hero='https://as2.ftcdn.net/v2/jpg/05/72/06/07/1000_F_572060759_utucdz0NcL22Oa6hfcb7lzfNC40PS55v.jpg'
    title='Conatact Us'
    text='Contact Us to We Provide What You Want  '
    btnText='Check'
    url='/about'
    btnClass='show'
    btnText='Choose'
  
  
    />
    <Contactform/>
    <Footer/>
    </>
  )
}

export default Contact