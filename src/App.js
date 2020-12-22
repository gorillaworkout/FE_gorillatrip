import React, { useEffect,useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header'
import Home from './pages/Home/home'
import {Switch,Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Display from './pages/Display/Display'
import Login from './pages/Login/Login'
import Stories from './pages/Stories/Stories'
import { connect } from 'react-redux';
import {LoginFunc} from './Redux/Actions'
import {API_URL} from './helpers/Api'
import Axios from 'axios'
import Listprod from './pages/Listprod/Listprod'
import { toast } from 'react-toastify';
import Form from './pages/Payment/form'
import Upload from './pages/Payment/upload'
import Completed from './pages/Payment/completed'
import Admin from './pages/Admin/admin'
import ManageUser from './pages/Admin/manageUser'
import paymentAdmin from './pages/Admin/paymentAdmin'
toast.configure()

function App(props) {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    console.log('use effect jalan app')
    var id=localStorage.getItem('id')
    console.log(id, ' ini id')

    if(id){
      console.log('masuk ke if id')
      Axios.post(`${API_URL}/auth/autologin`,{
        id
      }).then((res)=>{
        console.log('masuk ke resdata')
        console.log(res.data)
        props.LoginFunc(res.data)
      }).catch((err)=>{
        console.log('masuk ke catch')
        console.log(err)
      }).finally(()=>{
        console.log('masuk ke finally')
        setLoading(false)
      })
    }else {
      setLoading(false)
    }
    // if(id){
    //   Axios.get(`${API_URL}/users/${id}`)
    //   .then((res)=>{
    //     console.log('app js login func')
    //     props.LoginFunc(res.data)
    //   }).catch((err)=>{
    //     console.log(err)
    //   }).finally(()=>{
    //     setLoading(false)
    //   })
    // }else {
    //   setLoading(false)
    // }

  },[])
  if(loading){
    return(
      <div>LOADING</div>
    )
  }
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/stories' component={Stories}></Route>
        <Route exact path='/display/:id' component={Display}></Route>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/products' component={Listprod}></Route>
        <Route exact path='/form' component={Form}></Route>
        <Route exact path='/upload' component={Upload}></Route>
        <Route exact path='/completed' component={Completed}></Route>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/manageuser' component={ManageUser}></Route>
        <Route exact path='/paymentadmin' component={paymentAdmin}></Route>
      </Switch>
    </div>
  );
}

export default connect(null,{LoginFunc}) (App);
