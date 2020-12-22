import React,{Component,createRef} from 'react';
import './Login.css'
import BgLogin from '../../assets/BgLogin-1.jpg'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Alert } from 'reactstrap';
import {GrInstagram,GrFacebook} from 'react-icons/gr'
import { API_URL } from '../../helpers/Api';
import {Redirect} from 'react-router-dom'
import {LoginFunc,LoginThunk} from './../../Redux/Actions'
import Axios from 'axios'
import {connect} from 'react-redux'
import {AiOutlineHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



 
const Styles={
    root:{
   
        '& label.Mui-focused': {
            color: '#fd79a8',
            // color:'white,'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
          '& .MuiOutlinedInput-root': {
    
            '& fieldset': {
              borderColor: 'white',
            //   color:'#fd79a8'
                color:'white'
            },
            '&:hover fieldset': {
              borderColor: 'white',
              color:'#fd79a8'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
              border:'3px solid ',
              color:'#fd79a8'
            },
          },
    }
}
class Login extends Component {
    state={
        username:createRef(),
        password:createRef(),
        alert:'',
        
    }   

    OnLoginClick=()=>{
        const {username,password}=this.state
        var username1 = username.current.value
        var password1 = password.current.value
        console.log(username1,password1)
        this.props.LoginThunk(username1,password1)
        // Axios.get(`${API_URL}/users?username=${username1}&password=${password1}`)
        // .then((res)=>{
        //     console.log('masuk ke Login Click')
        //     console.log(res.data)
        //     toast.success(`Selamat Datang ${username1}`, {
        //         position: "top-center",
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     if(res.data.length){
        //         console.log('masuk kesini')
        //         localStorage.setItem('id',res.data[0].id)
        //         this.props.LoginFunc(res.data[0])
                
               
        //     }else {
        //         console.log('user salah password')
        //         this.setState({alert:'Wrong Password/Username'})
        //         toast.error(`Wrong Username/Password`, {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     }
        // }).catch((err)=>{
        //     console.log(err)
        // })
        
        

    }

    
    render(){
        const {classes} = this.props
        console.log(this.props.Auth)
        if(this.props.Auth.isLogin){
            return <Redirect to='/'/>
        }
        
        return(
        <div className="box-besar">
                <div>
                    <img src={BgLogin} alt="error" className="box-gambar"/>
                </div>
                    
                <div className="box-login d-flex">  
                            <div className='align-self-center mt-3'>
                                {/* <Link to='/manageAdmin' style={{textDecoration:'none'}}> */}
                                    <h1 >LOGIN</h1>
                                {/* </Link> */}
                                
                            </div>
                            <div className="bth">
                                <Link to='/'>
                                <button className="bth-btn">
                                    <p><AiOutlineHome/></p>
                                </button>
                                </Link>
                                
                            </div>



                            <div className='mt-3 box-username-1 px-3'>
                                <TextField className={classes.root} inputRef={this.state.username} label="Username" fullWidth="true" variant="outlined" size='small' ></TextField>
                            </div>
                            <div className='mt-3 box-password-1 px-3'>
                                <TextField className={classes.root} inputRef={this.state.password} label="Password" fullWidth="true" variant="outlined" size='small' type="password"></TextField>
                            </div>
                            <div className='mt-3 mb-2'>
                                    {
                                        this.state.alert?
                                        <Alert color="danger">
                                        {this.state.alert}<span classname='float-right info-error' onClick={()=>this.setState({alert:''})} >  X</span>
                                        </Alert>
                                        :
                                        null
                                    }
                                </div>
                                <div className="div-forgot">
                                    <div className="forgot-pass">
                                        <button className="forgot-pass-btn">
                                            Forgot <br/> Password?
                                        </button>
                                        
                                    </div>
                                    <div>
                                        <Link to='/Register'>
                                        <button className="register-btn">Register</button>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className='align-self-center'>
                                    <button onClick={this.onLoginClick} className='px-3 py-2 rounded btn-login login' onClick={this.OnLoginClick}>Login</button>

                                </div>

                                <div>
                                    <h5 className="orLogin">Or Login With</h5>
                                </div>

                                <div className="box-login-account">
                                    <div>
                                        <button className="box-login-fb">
                                    <GrFacebook className="mr-1"/>
                                    Facebook

                                        </button>
                                    </div>

                                    <div >
                                        <button className="box-login-ig">
                                        <GrInstagram className="mr-1"/> 
                                         Instagram
                                        </button>
                                           
                                    </div>
                                </div>
                               
                            
                        {/* </div> */}
           
                </div>
        </div>

        )
    }
}
const Mapstatetoprops=(state)=>{
    return{
        Auth:state.Auth
    }
}

export default withStyles(Styles) (connect(Mapstatetoprops,{LoginFunc,LoginThunk})(Login))