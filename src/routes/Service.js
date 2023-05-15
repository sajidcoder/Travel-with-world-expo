import React from 'react'
import Hero from '../componenets/Hero'
import Footer from '../componenets/Footer'
import Trip from '../componenets/Trip'

const Service = () => {
  return (
   <>
     <Hero
    cName='heroMid' hero='https://img.freepik.com/premium-photo/market-analyze-bar-graphs-diagrams-financial-figures-abstract-glowing-forex-chart-interface-wallpaper-investment-trade-stock-finance_372999-7381.jpg?w=2000'
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