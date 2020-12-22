import React, {Component} from 'react';
import Header from '../../components/Header'
// import './home.css'

import { FaSuitcaseRolling } from "react-icons/fa";
import {GoLocation} from 'react-icons/go'
import {BsCamera} from 'react-icons/bs'
import Homescreen from '../../assets/homeScreen2.webp'
import Hotel1 from '../../assets/hotel-1.webp'
import Hotel2 from '../../assets/hotel-2.webp'
import Hotel3 from '../../assets/hotel-3.webp'
import Hotel4 from '../../assets/hotel-4.webp'
import Hotel5 from '../../assets/hotel-5.webp'
import Backyard1 from '../../assets/backyard1.webp'
import Backyard2 from '../../assets/backyard5.webp'
import Backyard3 from '../../assets/backyard3.webp'
import Backyard4 from '../../assets/backyard6.webp'
import LivingR1 from '../../assets/livingroom1.webp'
import LivingR2 from '../../assets/livingroom5.webp'
import LivingR3 from '../../assets/livingroom3.webp'
import LivingR4 from '../../assets/livingroom4.webp'
import Kitchen1 from '../../assets/kitchen1.webp'
import Kitchen2 from '../../assets/kitchen2.webp'
import Kitchen3 from '../../assets/kitchen3.webp'
import Kitchen4 from '../../assets/kitchen4.webp'
import HappyFam from '../../assets/happyfam.webp'
import {FaStar} from 'react-icons/fa'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {display} from '../../Redux/Actions'
import { API_URL } from '../../helpers/Api';
import Axios from 'axios'




class ListProduct extends Component{
    state = {
        // obj:{
        //     namePlace:'bayu apartment'
        // }
        Backyard:[],
        Products2:[],
        Products:[],
        LivingRoom:[],
        

    }
    componentDidMount(){
        Axios.get(`${API_URL}/backyard`)
        .then((res)=>{
            this.setState({Backyard:res.data})
            // console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        Axios.get(`${API_URL}/products2`)
        .then((res)=>{  
            this.setState({Products2:res.data})
            // console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        Axios.get(`${API_URL}/livingroom`)
        .then((res)=>{  
            this.setState({LivingRoom:res.data})
            // console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        Axios.get(`${API_URL}/products`)
        .then((res)=>{  
            this.setState({Products:res.data})
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
            console.log(this.state.Products)
    }

    OnClickDisplay=()=>{
        console.log('berhasil')
        Axios.get(`${API_URL}/display`)
        .then((res)=>{
            console.log(res.data)
            this.props.display(res.data[0])
            console.log(res.data[0])
        }).catch((err)=>{
            console.log(err)
        })
    }


    renderProduct=()=>{
        console.log(this.state.Products[0])
    
            if(this.state.Products.length){
                
            return(
                <>
                     <div className="row">
                            <div className="col md-4 box-2-column" >
                                <Link to='/display' onClick={this.OnClickDisplay}>
                                    <img src={this.state.Products[0].gambar} className="box-2-gambar-1" alt='error' />
                                    <div className="box-2-word-1">
                                        {/* <p>San Mario</p> */}
                                        <p>{this.state.Products[0].namatrip}</p>
                                        <p>{this.state.Products[0].negara}</p>
                                    </div>       
                                    <div className="box-2-word-1-price">
                                        <p>{this.state.Products[0].harga} / Night</p>
                                    </div>
                                </Link>
                    </div>

                            <div className="col md-4 box-2-column">
                                <Link to='/display'>
                                    <img src={this.state.Products[1].gambar} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-atas">
                                        <p>{this.state.Products[1].namatrip}</p>
                                        <p>{this.state.Products[1].negara}</p>
                                        
                                        </div>
                                        <div className="box-2-word-1-price">
                                        <p>{this.state.Products[1].harga} / Night</p>
                                        </div>
                                </Link>
                                <Link to='/display'>
                                    <img src={this.state.Products[2].gambar} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-bawah">
                                        <p>{this.state.Products[2].namatrip}</p>
                                        <p>{this.state.Products[2].negara}</p>
                                        </div>
                                        <div className="box-2-word-1-price-bawah">
                                        <p>{this.state.Products[2].harga} / Night</p>
                                        </div>
                                </Link>
                            </div>  

                            <div className="col md-4 box-2-column">
                                <Link to="/display">
                                    <img src={this.state.Products[1].gambar} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-atas">
                                        <p>{this.state.Products[1].namatrip}</p>
                                        <p>{this.state.Products[1].negara}</p>
                                        </div>
                                        <div className="box-2-word-1-price">
                                        <p>{this.state.Products[1].harga} / Night</p>
                                        </div>
                                </Link>
                                <Link to='/display'>
                                    <img src={this.state.Products[1].gambar} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-bawah">
                                        <p>{this.state.Products[1].namatrip}</p>
                                        <p>{this.state.Products[1].negara}</p>
                                        </div>
                                        <div className="box-2-word-1-price-bawah">
                                        <p>{this.state.Products[1].harga} / Night</p>
                                        </div>

                                </Link>
                            </div>
                        </div>    
                </>


                )
        }
        // })
    }

    renderBackyard=()=>{
        return this.state.Backyard.map((val,index)=>{
            return(
                <>
              
                        <div className="row">
                            <div className=" box-3-gambar-div">
                            {/* to={'/products/'+val.id} */}
                            <Link  to={'/products/'+val.id} >
                                    <img src={val.gambar} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip}</p>
                                        <p>{val.negara}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga} / Night</p>
                                        </div>
                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to={`/products/${val.id}`}>
                                    <img src={val.gambar2} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip2}</p>
                                        <p>{val.negara2}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga2} / Night</p>
                                        </div>
                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to='/display'>
                                    <img src={val.gambar3} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip3}</p>
                                        <p>{val.negara3}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga3} / Night</p>
                                        </div>

                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to='/display'>
                                    <img src={val.gambar4} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip4}</p>
                                        <p>{val.negara4}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga4} / Night</p>
                                        </div>
                                </Link>
                            </div>
                        </div>
                    
                </>
            )
        })

    }

    renderHome2=()=>{
        return this.state.Products2.map((val,index)=>{
            return(
                <>
        
                        <div className="row">
                            <div className="col md-4 box-2-column" >
                                <Link to='/display' onClick={this.OnClickDisplay}>
                                    <img src={val.gambar} className="box-2-gambar-1" alt='error' />
                                    <div className="box-2-word-1">
                                        {/* <p>San Mario</p> */}
                                        <p>{val.namatrip}</p>
                                        <p>{val.negara}</p>
                                    </div>       
                                <div className="box-2-word-1-price">
                                    <p>{val.harga} / Night</p>
                                </div>
                                </Link>
                            </div>
                            <div className="col md-4 box-2-column">
                                <Link to='/display'>
                                    <img src={val.gambar2} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-atas">
                                        <p>{val.namatrip2}</p>
                                        <p>{val.negara2}</p>
                                        
                                        </div>
                                        <div className="box-2-word-1-price">
                                        <p>{val.harga2} / Night</p>
                                        </div>
                                </Link>
                                <Link to='/display'>
                                    <img src={val.gambar3} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-bawah">
                                        <p>{val.namatrip3}</p>
                                        <p>{val.negara3}</p>
                                        </div>
                                        <div className="box-2-word-1-price-bawah">
                                        <p>{val.harga3} / Night</p>
                                        </div>
                                </Link>
                            </div>  

                            <div className="col md-4 box-2-column">
                                <Link to="/display">
                                    <img src={val.gambar4} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-atas">
                                        <p>{val.namatrip4}</p>
                                        <p>{val.negara4}</p>
                                        </div>
                                        <div className="box-2-word-1-price">
                                        <p>{val.harga4} / Night</p>
                                        </div>
                                </Link>
                                <Link to='/display'>
                                    <img src={val.gambar5} className="box-2-gambar-2"/>
                                        <div className="box-2-word-2-bawah">
                                        <p>{val.namatrip5}</p>
                                        <p>{val.negara5}</p>
                                        </div>
                                        <div className="box-2-word-1-price-bawah">
                                        <p>{val.harga5} / Night</p>
                                        </div>

                                </Link>
                            </div>
                        </div>
                </>
            )
        })
    }

    renderLivingRoom=()=>{
        return this.state.LivingRoom.map((val,index)=>{
            return(
                <>
                <div className="row">
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={val.gambar} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>{val.namatrip}</p>
                                            <p>{val.negara}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga} / Night</p>
                                        </div>
                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={val.gambar2} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>{val.namatrip2}</p>
                                            <p>{val.negara2}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga2} / Night</p>
                                        </div>

                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={val.gambar3} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip3}</p>
                                            <p>{val.negara3}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga3}/ Night</p>
                                        </div>

                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={val.gambar4} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                        <p>{val.namatrip4}</p>
                                            <p>{val.negara4}</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>{val.harga4} / Night</p>
                                        </div>
                                </Link>
                            </div>
                        </div>
                </>
            )
        })
    }

   
    render(){
        console.log(this.props.Disp)
        return (
            
            <div>
                <Header/>
                <div className="d-flex align-items-center box-biggest ">
                    <div className='d-flex align-items-center box-1-besar ' >
                            <div className="box-1-kiri">
                                <div className="box-1-kiri-word">
                                        <h1>YOU DONT HAVE TO BE RICH TO TRAVEL WELL,</h1>
                                        <h1>LETS GO SOMEWHERE</h1>
                                        <p>We Provide what you need to enjoy <br/>your holiday with family</p>
                                        <button className="box-1-kiri-btn" >Show Me Now</button>
                                        <div className="box-1-kiri-icon">
                                            <div>
                                                <FaSuitcaseRolling className="mr-5 ml-3"/>
                                                <p>80K Traveller</p>
                                            </div>
                                            <div>
                                                <GoLocation className="mr-5 ml-3"/>
                                                <p>208 Cities</p>
                                            </div>
                                            <div>   
                                                <BsCamera className="mr-5 ml-3"/>
                                                <p>1996 Treasures</p>
                                            </div>    
                                         </div>
                                    </div>   
                                </div>             
                            <div className="box-1-kanan">
                                <Link to="/stories">
                                <img src={Homescreen} className="box-1-kanan-gambar"/>
                                </Link>
                            </div>
                        </div>
                </div>
                    

                    <div className="box-2-besar">
                        <div>
                            <h1>Most Picked</h1>
                        </div>
                        {/* {this.renderHome2()} */}
                        {this.renderProduct()}
                    </div>

                    <div className="box-3-besar">
                        <div>
                            <h1>House With Backyard</h1>
                        </div>
                    {this.renderBackyard()}
                    </div>
                    


                    <div className="box-3-besar">
                        <div>
                            <h1>Hotel With Living Room</h1>
                        </div>
                        {this.renderLivingRoom()}    
                    </div>

                    <div className="box-3-besar">
                        <div>
                            <h1>Apartment With Kitchen</h1>
                            {/* <h1>{this.props.display.namePlace}</h1> */}
                        </div>
                        <div className="row">
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={Kitchen1} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>San Mario</p>
                                            <p>Venezuela</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>$96 / Night</p>
                                        </div>
                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={Kitchen2} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>San Mario</p>
                                            <p>Venezuela</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>$96 / Night</p>
                                        </div>
                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                    <img src={Kitchen3} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>San Mario</p>
                                            <p>Venezuela</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>$96 / Night</p>
                                        </div>

                                </Link>
                            </div>
                            <div className=" box-3-gambar-div">
                                <Link to="/display">
                                     <img src={Kitchen4} className="box-3-gambar"/>
                                        <div className="box-3-word">
                                            <p>San Mario</p>
                                            <p>Venezuela</p>
                                        </div>
                                        <div className="box-3-word-price">
                                            <p>$96 / Night</p>
                                        </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="box-4-biggest">
                        <div className="box-4-kiri">
                            
                            <img src={HappyFam} className="box-4-gambar"/>
                           
                        </div>
                        <div className="box-4-kanan">
                            <div className="box-4-kanan-word">
                                <h1>Happy Family</h1>
                                <div className="box-4-icons">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="mt-5">What a Great trip with my family <br/> and i must try again and again next time</p>
                                <p className="mt-2">Bayu,UI Designer</p>
                                <Link to="/stories">
                                <button className="box-4-kanan-btn">Read Story</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="box-5-biggest">
                        <div className="box-5-kecil">
                            <h2>GorillaTrip</h2>
                            <p>We Provide your beauty holiday instantly and memorable</p>
                        </div>
                        <div className="box-5-kecil">
                            <h2>For Beginners</h2>
                            <p>New Account</p>
                            <p>Book a Room</p>
                            <p>Payments</p>
                        </div>
                        <div className="box-5-kecil">
                            <h2>Explore Us</h2>
                            <p>About</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                        <div className="box-5-kecil">
                            <h2>Getting Touch</h2>
                            <p>Support@GorillaTrip.id</p>
                            <p>021-96080200</p>
                            <p>Explore US</p>
                        </div>
                    </div>
            </div>
        )
    }
}

const MapStatetoprops=(state)=>{
    return{
        Disp:state.Disp
    }
}

export default  connect(MapStatetoprops,{display})(ListProduct)