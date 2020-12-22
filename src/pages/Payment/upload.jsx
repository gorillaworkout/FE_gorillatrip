import React, { Component } from 'react';
import {FaCheckCircle} from 'react-icons/fa'
import './upload.css'
import Hotel from '../../assets/hotel3.jpeg'
import BCA from '../../assets/bca.png'
import {Link} from 'react-router-dom'
class Upload extends Component {
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

                    <div className="dot">
                        <p>3</p>
                    </div>
                 </div> 
                 <div className="information">
                        <h1>Payment</h1>
                        <h4>Kindly follow the instruction below</h4>
                </div>
                <div className="div-besar">
                    <div className="div-dalem-kiri-upload">
                        <div className="div-dalem-upload-1">
                            <p>Transfer Pembayaran</p>
                        </div>
                        <div className="div-dalem-upload">
                            <div>
                            <p>Tax:10%</p>
                            <p> SubTotal:$560 USD</p>
                            <p> Total: $612 USD</p>
                            </div>
                        </div>
                        <div className="div-dalem-upload">
                            <div className="d-flex">
                                <img className="mr-5 mt-2" src={BCA} alt="bca" width="80px" height="50px"/>
                                <p>Bank Central Asia <br/> 490 7777 099 <br/>Bayu Darmawan</p>
                            </div>

                        </div>
             
                    </div>


                    <div className="div-dalem-kanan">
                        <div className="form-name">
                            <p>Upload Bukti Transter</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <p>Asal Bank</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <p>Nama Pengirim</p>
                            <div className="form-name-input">
                                <input type="text"/>
                            </div>
                        </div>
        
                    </div>

            </div>
            <div className="btn-next">
                 <div className="btn-ins">
                    <Link to='completed'>
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
 
export default Upload;