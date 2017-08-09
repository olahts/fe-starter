import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';
import { combineReducers } from 'redux'
import NavState, { navreducers } from './utils/nav'
import { loginreducers } from './login'
import { signupreducers } from './signup'

export const authreducers = combineReducers({
  login: loginreducers,
  signup: signupreducers,
  nav: navreducers,
})

const Auth = (props) => {
  return (
    	<NavState />
  )
}

const stateToProps = (state) => {
  return {
  }
}

export default connect(stateToProps)(Auth)
