import { combineReducers } from 'redux'
import navreducers from './navreducers'
import loginreducers from '../ucomponents/login/reducers'
import signupreducers from '../ucomponents/signup/reducers'

export default combineReducers({
    login: loginreducers,
    signup: signupreducers,
    nav: navreducers,
})