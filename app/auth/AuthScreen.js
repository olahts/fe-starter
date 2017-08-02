import React from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';
import AuthLogin from './AuthLogin'
import AuthSignUp from './AuthSignUp'

const AuthScreen = (props) => {
  return (
		<Swiper
          loop={false}
          showsPagination={false}
          index={0}>
          	<AuthLogin />
          	<AuthSignUp />
      </Swiper>
	)
}


const stateToProps = (state) => {
  return {
  }
}

export default connect(stateToProps)(AuthScreen)
