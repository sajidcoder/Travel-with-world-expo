import TripData from './TripData';
import './tripStyle.css'

const Trip=()=>{
    return(
    <>
        <div className='trip' >
        <h1>Join the team</h1>
        <p>
          <span><i className='fa-solid  fa-circle-info'></i></span>
              After the payment is completed, You’ll receive a message with a link to our premium group on telegram.</p>
        </div>
        <div className='tripcard'>
                <TripData
                image='https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?cs=srgb&dl=pexels-energepiccom-159888.jpg&fm=jpg'
                heading='1 Month Subscription'
                price='230 $'
                text='
                Position trading: holding positions for weeks, months or even years with the expectation they will become profitable in the long term.
                '
              
                />
                  <TripData
                image='https://i.pinimg.com/originals/e7/46/e7/e746e741bae70a90dc51795b0a48508c.jpg'
                heading='3 Month Subscription'
                price='1290 $'
                text='
                Swing trading: holding positions over several days or weeks, to take advantage of medium-term market moves
                '/>
                  <TripData
                image='https://media.istockphoto.com/id/913219882/photo/financial-graph-on-technology-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=YzzhZzo71M2QMK42WvdqrY_SzbU0Aqh5Ioh4UkiEozs='
                heading='Try Free '
                price='For 15 days'
                text='
                Day trading: opening and closing a small number of trades in the same day and not holding any positions overnight, eliminating some costs and risks
                '/>
        </div>

    </>
    )
    }
    export default Trip;