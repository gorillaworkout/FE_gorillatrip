import React, { Component } from 'react';
import {FaCheckCircle} from 'react-icons/fa'
import Logo from'../../assets/gorillaworkout.png'
import './completed.css'
import {Link} from 'react-router-dom'
class Compleeted extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="headergw">
                <p><span style={{color:'#0884e3'}}>Gorilla</span>Trip</p>
            </div>
            <div className="numberOpt">
                <div className="dot-upload">
                    <p><FaCheckCircle/></p>
                </div>
                
                <div className="dot-upload">
                    <p><FaCheckCircle/></p>
                </div>

                <div className="dot-upload">
                    <p><FaCheckCircle/></p>
                </div>
            </div> 
            <div className="information">
                        <h1>Booking Completed!</h1>
                        
            </div>
            <div className="img-logo">
                <img src={Logo} alt="error" width="200px" height="200px"/>
            </div>

            <div className="inform">
                <p>We Will Inform You via email later <br/>once the transaction has been accepted</p>
            </div>
           

            <div className="btn-next">
                                <div className="btn-ins">
                                    <Link to="/">
                                        <p>Back to Home</p>
                                    </Link>
                                </div>

                    </div>

            </div>
         );
    }
}
 
export default Compleeted;