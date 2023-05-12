import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Trip from '../componenets/Trip'

const Service = () => {
  return (
   <>
     <Hero
    cName='heroMid' hero='https://thumbs.dreamstime.com/b/rear-view-friends-road-trip-driving-convertible-car-67525217.jpg'
    title='Service'
    text='We Provide Best Service'
    btnText='Check'
    url='/Service'
    btnClass='show'
    btnText='Check'
  
  
    />
    <Trip/>
    <Footer/>
   </>
  )
}

export default Service