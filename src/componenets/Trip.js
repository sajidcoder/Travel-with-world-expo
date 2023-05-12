import TripData from './TripData';
import './tripStyle.css'

const Trip=()=>{
    return(
    <>
        <div className='trip' >
        <h1>Recent Trip</h1>
        <p>You Can Discover Unique destinaiton Using Googl Maps</p>
        </div>
        <div className='tripcard'>
                <TripData
                image='https://images.pexels.com/photos/6271680/pexels-photo-6271680.jpeg?auto=compress&cs=tinysrgb&w=600'
                heading='Trip In Indonesia'
                text='
                Hassle-Free Payments Promised for International Trips
                
                Travel abroad, pay just like in India. Swipe our Multi-Currency Global Cards at malls, restaurants & more, at NO extra transactional cost. Upto 5% savings. over other forex cards. 100% Digital Control.
                '/>
                  <TripData
                image='https://images.pexels.com/photos/6775243/pexels-photo-6775243.jpeg?auto=compress&cs=tinysrgb&w=600'
                heading='Trip In Indonesia'
                text='
                Hassle-Free Payments Promised for International Trips
                
                Travel abroad, pay just like in India. Swipe our Multi-Currency Global Cards at malls, restaurants & more, at NO extra transactional cost. Upto 5% savings. over other forex cards. 100% Digital Control.
                '/>
                  <TripData
                image='https://images.pexels.com/photos/3933128/pexels-photo-3933128.jpeg?auto=compress&cs=tinysrgb&w=600'
                heading='Trip In Indonesia'
                text='
                Hassle-Free Payments Promised for International Trips
                
                Travel abroad, pay just like in India. Swipe our Multi-Currency Global Cards at malls, restaurants & more, at NO extra transactional cost. Upto 5% savings. over other forex cards. 100% Digital Control.
                '/>
        </div>

    </>
    )
    }
    export default Trip;