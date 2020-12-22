import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'
import DisplayReducers from './DisplayReducers'

export default combineReducers({
    Auth:AuthReducers,
    Disp:DisplayReducers
})