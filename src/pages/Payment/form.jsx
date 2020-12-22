import React, { Component } from 'react';
import Header from '../../components/Header'
import './form.css'
import Hotel from '../../assets/hotel3.jpeg'
import {FaCheckCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
class Form extends Component {
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
                
                <div className="dot">
                    <p>2</p>
                </div>

                <div className="dot">
                    <p>3</p>
                </div>
            </div> 
            <div className="information">
                        <h1>Booking Information</h1>
                        <h4>Please Fill up the blank field below</h4>
            </div>
            <div className="div-besar">
                    <div className="div-dalem-kiri">
                        <img src={Hotel} width="60%" height="250px"></img>
                        <div className="info-kiri">
                        <p>Contantine</p>
                        <p>$560/2 Night</p>
                        </div>


                    </div>
                    <div className="div-dalem-kanan">
                        <div className="form-name">
                            <p>First Name</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <p>Last Name</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <p>Email Address</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <p>Phone Number</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>


            </div>
                    <div className="btn-next">
                            <div className="btn-ins">
                                <Link to='/upload'>
                                    <p>Continue To Book</p> 
                                </Link>

                            </div>
                            <div className="btn-scnd">
                                <Link to='/'> 
                                    <p>Cancel</p>
                                </Link>
                                
                            </div>

                    </div>


        </div> 
        );
    }
}
 
export default Form;