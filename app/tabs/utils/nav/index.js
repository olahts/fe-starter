import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'
export {default as navreducers } from './navreducers'


const NavState = ({ dispatch, nav }) =>
    <Navigator screenProps={nav}/>

const mapStateToProps = ({ nav }) => ({
  nav: nav.routes[1].params
})

export default connect(mapStateToProps)(NavState)
