import React from 'react'
import Hero from '../componenets/Hero'
import Destination from '../componenets/destination'
import Trip from '../componenets/Trip'
import Footer from '../componenets/Footer'
import Contactform from '../componenets/Contactform'


const Home = () => {
  return (
   <>
  <Hero
  cName='hero' hero='https://www.wionews.com/iifl/wp-content/uploads/2022/12/A-Basic-Guide-To-Stock-Trading.jpg'
  title='There is no single market secret to discover, no single correct way to trade the markets. ...'
  text='Trust Us to Make You Success'
  btnText='Travel Plan '
  url='/'
  btnClass='show'
  btnText='Choose'


  />
  <Destination/>
  <Trip/>
  <Contactform/>
 <Footer/>
   </>
  )
}

export default Home