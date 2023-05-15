import './tripStyle.css'
import Trip from './Trip';

const TripData=(props)=>{
    return (
        <>
        <div className='t-card'>
            <div className='t-img'>
                <img src={props.image}alt='t-img'/>
            </div>
            <h4>{props.heading}</h4>
            <h2>{props.price}</h2>
            <p>{props.text}</p>
            <button>Join Now</button>
        </div>
        </>
    )
}
export default TripData;