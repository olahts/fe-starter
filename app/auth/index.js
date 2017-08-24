import React from 'react'
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'


const Auth = ({ dispatch, nav }) =>
    <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />


const mapStateToProps = ({ auth }) => ({
    nav: auth.nav
})

export default connect(mapStateToProps)(Auth);