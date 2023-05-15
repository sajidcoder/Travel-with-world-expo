import './footerStyle.css'

const Footer =()=>{
    return(
        <>
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Dream TD</h1>
                    <h3>Choose Us To Make You Success </h3>
                </div>
                <div>
                   <a href='/'> <i className='fa-brands fa-facebook-square'></i></a>
                   <a href='/'> <i className='fa-brands fa-youtube-square'></i></a>
                   <a href='/'> <i className='fa-brands fa-instagram-square'></i></a>
                   <a href='/'> <i class="fa-brands fa-telegram"></i></a>
                    
                </div>
                
            </div>
            <div className='bottom'>
                <div>
                    <h4></h4>
                    <a href='/about'>About</a>
                    <a href='/service'>Service</a>
                    <a href='/contact'>Contact</a>
                    <a href='/'>Join Now</a>  
                    <a href='/'></a>  
                </div>
                <div className='content'>
                    <h4>Description</h4>
                    <p>Trade Importance
Trade is a practice going on for centuries with its own variations and techniques. With the old barter system as mentioned earlier, the trade saw the problem that not everyone had something of desire to give in place of obtaining something, so the solution to this problem was the creation of money, in other words, a common desirable item which can be traded in place of anything for a mutually decided monetary value.

And even money has seen its fair share of design changes, from precious metals to standardized coins to cash and now in form of the new cryptocurrency or digital currency.
</p>
                </div>
               
               

            </div>
        </div>
        
        </>
    )
}
export default Footer