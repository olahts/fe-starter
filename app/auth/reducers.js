import { combineReducers } from 'redux'
import navreducers from './navreducers'
import loginreducers from './login/reducers'
import signupreducers from './signup/reducers'

export default combineReducers({
    login: loginreducers,
    signup: signupreducers,
    nav: navreducers,
})