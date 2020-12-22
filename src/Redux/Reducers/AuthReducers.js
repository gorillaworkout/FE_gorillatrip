const INITIAL_STATE={
    username:'',
    namaLengkap:'',
    password:'',
    email:'',
    id:0,
    isLogin:false,
    isLoading:false,
    cart:[]
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            console.log('masuk reducer LOGIn')
            return {...state,...action.payload,isLogin:true, isLoading:false, cart:action.cart}

        case 'LOGOUT':
            return INITIAL_STATE
        
        case 'LOADING':
            return {...state,isLoading:true}
        
        case 'CLEAR':
            return {...state,error:''}

        case 'Error':
            return {...state,error:action.payload,isLoading:false}
        
        case 'CART':
            return {...state,cart2:action.payload}

        default:
            return state
    }
}
