import React from 'react'
import Hero from '../componenets/Hero'
import Destination from '../componenets/destination'
import Trip from '../componenets/Trip'
import Footer from '../componenets/Footer'


const Home = () => {
  return (
   <>
  <Hero
  cName='hero' hero='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&'
  title='Your Jounery Your Story'
  text='Choose Your destination'
  btnText='Travel Plan '
  url='/'
  btnClass='show'
  btnText='Travel Plan'


  />
  <Destination/>
  <Trip/>
 <Footer/>
   </>
  )
}

export default Home