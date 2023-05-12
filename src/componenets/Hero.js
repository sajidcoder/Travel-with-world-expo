import React from 'react'
import './heroStyle.css'

const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
        <img className='img' src={props.hero}alt='image'/>

        <div className='text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href='/travela' className={props.btnClass} >{props.btnText}</a>
        </div>
    </div>
    </>
  )
}

export default Hero