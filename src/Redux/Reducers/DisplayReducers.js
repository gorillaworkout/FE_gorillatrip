const INITIAL_STATE={
    placeName:'',
    placeCountry:'',
    placePrice:'',
    placeDescription:''
}

export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'DISPLAY':
            return {...state,placeName:action.payload.placeName,placeCountry:action.payload.placeCountry, placeDescription:action.payload.placeDescription}
            
    
        default:
            return state
    }
}
