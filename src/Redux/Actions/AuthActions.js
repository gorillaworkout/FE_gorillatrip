import { API_URL } from "../../helpers/Api"
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

export const LoginFunc=(obj)=>{
    return{
        type:'LOGIN',
        payload:obj

    }
}

export const LogoutFunc=()=>{
    return{
        type:'LOGOUT'
    }
}

export const display=(obj)=>{
    return {
        type:'DISPLAY',
        payload:obj
       
    }
}

export const LoginThunk=(username,password)=>{
    return(dispatch)=>{
        console.log('Thunk mulai')
        dispatch({type:'LOADING'})
        Axios.post(`${API_URL}/auth/login`,{
            username,password
        }).then((res)=>{
            console.log('masuk ke res')
            console.log(res.data)
            localStorage.setItem('id',res.data.datauser)
            dispatch({type:'CART',payload:res.data[0]})
            dispatch({type:'LOGIN',payload:res.data[0],cart:res.data})
        }).catch((err)=>{
            console.log(err)
        })
        // Axios.get(`${API_URL}/users`,{
        //     params:{
        //         username:username,
        //         password:password
        //     }
        // }).then((res)=>{
        //     if(res.data.length){
        //         console.log('masuk ke res')
        //         console.log(res.data[0].id)
        //         Axios.get(`${API_URL}/carts`,{
        //             params:{
        //                 id:res.data[0].id,
        //             _expand:'product'
        //             }
        //         }).then((res1)=>{
        //             console.log('masuk ke res1')
        //                 Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
        //                 .then((res2)=>{
        //                     if(res2.length){
        //                         toast.info(`Username / password Sudah ada `, {
        //                             position: "top-right",
        //                             autoClose: 2000,
        //                             hideProgressBar: false,
        //                             closeOnClick: true,
        //                             draggable: true,
        //                             progress: undefined,
        //                         });
        //                     }else {
        //                         localStorage.setItem('id',res.data[0].id)
        //                         toast.info(`Selamat Datang ${username}`, {
        //                             position: "top-right",
        //                             autoClose: 2000,
        //                             hideProgressBar: false,
        //                             closeOnClick: true,
        //                             draggable: true,
        //                             progress: undefined,
        //                         });
        //                         dispatch({type:'CART',payload:res.data[0]})
        //                         dispatch({type:'LOGIN',payload:res.data[0],cart:res1.data})
        //                     }
        //                 }).catch((err)=>{
        //                     console.log(err)
        //                 })
        //         }).catch((err)=>{
        //             dispatch({type:'Error',payload:'error server'})
        //         })
        //     }else {
        //         dispatch({type:'Error',payload:'error dari Redux'})
        //         toast.info(`Username / password Anda Salah`, {
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

}
