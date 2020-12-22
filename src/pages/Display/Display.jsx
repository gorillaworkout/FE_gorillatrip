import React, {Component} from 'react';
import Header from '../../components/Header'
import './Display.css'
import {Link} from 'react-router-dom'
import Homescreen from '../../assets/homeScreen2.webp'
import {UncontrolledCarousel} from 'reactstrap';
// import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {GoCalendar} from 'react-icons/go'
import {BiBed} from 'react-icons/bi'
import {GrRestroom} from 'react-icons/gr'
import {AiOutlineWifi} from 'react-icons/ai'
import {CgSmartHomeRefrigerator} from 'react-icons/cg'
import {MdTv} from 'react-icons/md'
import Backyard1 from '../../assets/backyard1.webp'
import Backyard2 from '../../assets/backyard5.webp'
import Backyard3 from '../../assets/backyard3.webp'
import Backyard4 from '../../assets/backyard6.webp'
import HP1 from '../../assets/HP1.jpg'
import HP2 from '../../assets/HP2.jpg'
import HP3 from '../../assets/HP3.jpg'
import HP4 from '../../assets/HP4.jpg'
import {FaStar} from 'react-icons/fa'
import HappyFam2 from '../../assets/happyCouple.jpeg'
import {connect} from 'react-redux'
import {display} from '../../Redux/Actions'
import Axios from 'axios'
import { API_URL } from '../../helpers/Api';

class Display extends Component {
    state = {
        products:[],
        isLoading:true
    }

    componentDidMount(){
        // console.log(this.props.Disp)
        Axios.get(`${API_URL}/products/${this.props.match.params.id}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({products:res.data})
            this.setState({isLoading:false})
        }).catch((err)=>{
            console.log(err)
        })

    }

    // OnClickDisplay=()=>{
    //     this.props.display('Miyuki dayo')
    // }

    // console.log(this.props.Disp)

    render() {

        if(this.state.isLoading){
            return <div>LOADING</div>
        }else {
            console.log(this.state.products)

            return (
                
                <div >
                    <Header/>
                    <div className="box-biggest-1">
                        <div className="header-word">
                            {/* <div className="word-home">
                                <Link to='/'><p>Home</p></Link>
                            </div>
                            <div className="word-details">
                                <p> /  &nbsp; Details</p>
                             </div> */}
                            <div>
                                <Breadcrumb
                                    tag="nav"
                                    listTag="div"
                                    style={{
                                    backgroundColor: "transparent"
                                }}>
                                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                                    <BreadcrumbItem tag="a" href="#">Details</BreadcrumbItem>
    
                                </Breadcrumb>
                            </div>
    
                            <div className=" word-apartment-div">
                                <div className="align-self-center word-apartment">
                                    {/* <h1>Constantine Apartment</h1> */}
                                    <h1>{this.state.products.namatrip}</h1>
                                
                                </div>
                                <div className="word-apartment-country ">
                                    {/* <p>
                                        <span
                                            style={{
                                            color: 'gray'
                                        }}>Puera,
                                        </span>Denmark</p> */}
                                        <p>{this.state.products.negara}</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="row div-display">
                            <div className="col-md-6 box-display-kiri" onClick={this.OnClickDisplay}>
                                <div className="box-picture-kiri">
                                    <img src={this.state.products.gambar} alt="error"></img>
                                </div>
                                <div className="box-picture-kiri">
                                    <img src={this.state.products.gambar1} alt="error"></img>
                                </div>
    
                            </div>
                            <div className="col-md-6 box-display-kanan">
                                <div className="box-picture-kanan">
                                    <img src={this.state.products.gambar2} alt="error"></img>
    
                                </div>
                            </div>
                        </div>
    
                        <div className="row div-display">
                            <div className="col-md-6 box-booking-kiri">
                                <div className="booking-box">
                                    <div className="start-book">
                                        <p>Start Booking</p>
                                    </div>
                                    <div className="display-harga">
                                        <p>
                                            <span
                                                style={{
                                                color: '#1abb9b'
                                                }}>${this.state.products.harga}</span>
                                            per Night</p>
                                    </div>
                                    <div className="how-long">
                                        <p>How Long You Will Stay?</p>
                                    </div>
                                    <div className="div-night ">
                                        <button className="btn btn-danger">-</button>
                                        <p className="mt-1 ">2 Night</p>
                                        <button className="btn btn-success">+</button>
                                    </div>
    
                                    <div className="pick">
                                        <p>Pick Date</p>
                                    </div>
    
                                    <div className="date">
                                        <button className="btn btn-danger"><GoCalendar/></button>
                                        <p className="mr-5">20 Feb- 22-feb</p>
                                    </div>
    
                                    <div className="youwill">
                                        <p>
                                            <span
                                                style={{
                                                color: 'gray'
                                            }}>You Will Pay</span>
                                            $560 / Nights</p>
                                    </div>
    
                                    <div className="cont-book">
                                        <Link to='/form'>
                                            <button>Continue Booking</button>
                                        </Link>
                                    </div>
    
                                </div>
    
                            </div>
                            <div className="col-md-6 box-booking-kanan">
                                <div className="display-kanan">
    
                                    <div className="about-place align-self-center">
                                        <p>About The Place</p>
                                    </div>
    
                                    <div className="desc-display">
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo reiciendis
                                            iste assumenda expedita iusto ad repudiandae numquam, commodi impedit adipisci.
                                            Culpa dolor corrupti autem labore debitis? Odio, suscipit maxime. Lorem ipsum
                                            dolor sit amet consectetur adipisicing elit. Ipsa autem voluptates eaque quaerat
                                            et labore deserunt quia expedita adipisci placeat culpa odit nemo mollitia,
                                            vitae enim, assumenda accusantium molestias nam!</p> */}
                                            <p>{this.state.products.deskripsi}</p>
                                    </div>
    
                                    <div className="icons-display">
                                        <div className="mr-3">
                                            <BiBed/>
                                            <p>{this.state.products.bed} Bed</p>
                                        </div>
                                        <div className="mr-3">
                                            <GrRestroom/>
                                            <p>{this.state.products.bathroom} Bathroom</p>
                                        </div>
                                        <div className="mr-3">
                                            <AiOutlineWifi/>
                                            <p>100MBPS</p>
                                        </div>
                                        <div className="mr-3">
                                            <CgSmartHomeRefrigerator/>
                                            <p>{this.state.products.refrigerator} Refrigerator</p>
                                        </div>
                                        <div className="mr-3">
                                            <MdTv/>
                                            <p>{this.state.products.tv} TV</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-3-besar-display">
                                <div>
                                    <h1>House With Backyard</h1>
                                </div>
                                <div className="row">
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={Backyard1} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={Backyard2} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={Backyard3} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
    
                                        </Link>
                                    </div>
                                    <div className="box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={Backyard4} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="box-3-besar-display">
                                <div>
                                    <h1>House With Pool</h1>
                                </div>
                                <div className="row">
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={HP4} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={HP3} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                    <div className=" box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={HP2} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
    
                                        </Link>
                                    </div>
                                    <div className="box-3-gambar-div">
                                        <Link to='/display'>
                                            <img src={HP1} className="box-3-gambar"/>
                                            <div className="box-3-word">
                                                <p>San Mario</p>
                                                <p>Venezuela</p>
                                            </div>
                                            {/* <div className="box-3-word-price">
                                                <p>$96 / Night</p>
                                            </div> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="box-4-biggest">
                                <div className="box-4-kiri">
    
                                    <img src={HappyFam2} className="box-4-gambar"/>
    
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
                                        <p className="mt-5">What a Great trip with my family
                                            <br/>
                                            and i must try again and again next time</p>
                                        <p className="mt-2">Bayu,UI Designer</p>
                                        <Link to="/stories">
                                            <button className="box-4-kanan-btn">Read Story</button>
                                        </Link>
                                    </div>
    
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
    
                </div>
            );
        }
    }
}

const MapStatetoprops=(state)=>{
    return{
        Disp:state.Disp
    }
}

export default  connect(MapStatetoprops,{display}) (Display);