import { Component } from "react";
import './destinationStyle.css'



class DestinationData extends Component{
    render(){
        return(
            <div className='container'>
            
            <div className={`firstDes ${this.props.cName}`}>
                <div className={`desText`}>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text} </p>
                </div>
                <div className="image">
                <img src={this.props.img2} alt='p img'/>
                <img src={this.props.img} alt='p img'/>
            </div>
            </div>
            </div>
        )
    }
}

export default DestinationData