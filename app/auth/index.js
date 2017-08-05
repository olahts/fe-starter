import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';
import { combineReducers } from 'redux'
import { NavState, navreducer } from './utils/nav'
import loginreducer from './login/reducers'
import signupreducer from './signup/reducers'

const authreducer = combineReducers({
  login: loginreducer,
  signup: signupreducer,
  nav: navreducer,
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

const AuthScreen = connect(stateToProps)(Auth)

export {
	AuthScreen,
	authreducer,
}
