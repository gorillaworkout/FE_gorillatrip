import React,{Component,createRef} from 'react';
import './Register.css'
import BgRegister from '../../assets/BgRegister2.jpg'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Alert } from 'reactstrap';
// import {GrInstagram,GrFacebook} from 'react-icons/gr'
import { API_URL } from '../../helpers/Api';
import {Redirect} from 'react-router-dom'
import {LoginFunc} from './../../Redux/Actions'
import Axios from 'axios'
import {connect} from 'react-redux'
import {AiOutlineHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { CodeSharp } from '@material-ui/icons';

 
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
class Register extends Component {
    state={
        username:createRef(),
        password:createRef(),
        namaLengkap:createRef(),
        email:createRef(),
        alert:'',
        dataUser:[],
        isLogin:false
    }   

     OnRegisterClick=()=>{
         const {username,password,namaLengkap,email} = this.state
        var namaLengkap1 = namaLengkap.current.value
        var username1 = username.current.value
        var password1 = password.current.value
        var email1 = email.current.value
        // console.log(namaLengkap1,username1,password1,email1)
        var obj ={namaLengkap:namaLengkap1,username:username1,password:password1,email:email1}
        console.log(obj,' ini obj')

        Axios.post(`${API_URL}/auth/register`,
            obj
        ).then((res)=>{
            if(res.data.length){    
                console.log(res.data.length)
                alert('Berhasil Registrasi')
                this.props.LoginFunc(res.data)
                localStorage.setItem('id',res.data[0].id)
                   
            }else {
                console.log(res.data.length)
                alert('else')
            }
        }).catch((err)=>{
            alert('username sudah tedaftar')
            console.log(err)
            var namaLengkapRef=this.state.namaLengkap
                   namaLengkapRef.current.value=''
                var usernameRef=this.state.username
                   usernameRef.current.value=''
                var passwordRef=this.state.password
                   passwordRef.current.value=''
                var emailRef=this.state.email
                   emailRef.current.value=''
        })

        // Axios.get(`${API_URL}/users?username=${username1}`)
        // .then((res1)=>{
        //     if(res1.data.length){
        //         var username1 = username.current.value
        //         console.log(res1.data[0].username)
        //         console.log(username1)     
        //            console.log('username Sudah terdaftar')
        //            var namaLengkapRef=this.state.namaLengkap
        //            namaLengkapRef.current.value=''
        //            var usernameRef=this.state.username
        //            usernameRef.current.value=''
        //            var passwordRef=this.state.password
        //            passwordRef.current.value=''
        //            var emailRef=this.state.email
        //            emailRef.current.value=''
        //            this.setState({alert:'Username sudah Terdaftar'})
        //     }else {
                
        //              Axios.post(`${API_URL}/users`,obj)
        //              .then((res)=>{
        //                   var namaLengkapRef=this.state.namaLengkap
        //                   namaLengkapRef.current.value=''
        //                   var usernameRef=this.state.username
        //                   usernameRef.current.value=''
        //                   var passwordRef=this.state.password
        //                   passwordRef.current.value=''
        //                   var emailRef=this.state.email
        //                   emailRef.current.value=''
        //                     this.setState({alert:'Register Berhasil'})
      
        //              }).catch((err)=>{
        //                  console.log(err)
        //              })
        //           console.log('berhasil Register')
                 

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
                    <img src={BgRegister} alt="error" className="box-gambar"/>
                </div>
                    
                <div className="box-login d-flex ">  
                            <div className='align-self-center mt-3 '>
                                {/* <Link to='/manageAdmin' style={{textDecoration:'none'}}> */}
                                    <h1 >Register</h1>
                                {/* </Link> */}
                                
                            </div>
                            <div className="bth ">
                                <Link to='/'>
                                <button className="bth-btn">
                                    <p><AiOutlineHome/></p>
                                </button>
                                </Link>
                                
                            </div>

                            <div className='mt-3 box-username-2 px-3  '>
                                <TextField className={classes.root} inputRef={this.state.namaLengkap} label="Nama Lengkap" fullWidth="true" variant="outlined" size='small' ></TextField>
                            </div>
                            <div className='mt-3 box-username-2 px-3  '>
                                <TextField className={classes.root} inputRef={this.state.username} label="Username" fullWidth="true" variant="outlined" size='small' ></TextField>
                            </div>
                            <div className='mt-3 box-username-2 px-3 box-username-2'>
                                <TextField className={classes.root} inputRef={this.state.password} label="Password" fullWidth="true" variant="outlined" size='small' type="password"></TextField>
                            </div>
                            <div className='mt-3 box-username-2 px-3 box-username-2'>
                                <TextField className={classes.root} inputRef={this.state.email} label="Email" fullWidth="true" variant="outlined" size='small' type="Email"></TextField>
                            </div>
                            <div className='mt-3 mb-2'>
                                    {
                                        //  this.state.username?
                                        this.state.alert?

                                        <Alert color="danger">
                                        {this.state.alert}<span classname='float-right alert' onClick={()=>this.setState({alert:''})}> &nbsp; x</span>
                                        </Alert>
                                       
                                        :
                                       null
                                    }
                                </div>
                               
        
                                <div className='align-self-center login-btn'>
                                    <button onClick={this.onLoginClick} className='px-3 py-2 rounded btn-login login ' onClick={this.OnRegisterClick}>Register</button>

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

export default withStyles(Styles) (connect(Mapstatetoprops,{LoginFunc})(Register))