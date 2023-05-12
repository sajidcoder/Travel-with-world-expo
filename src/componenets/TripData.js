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
            <p>{props.text}</p>
        </div>
        </>
    )
}
export default TripData;