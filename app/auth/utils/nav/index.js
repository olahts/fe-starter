import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'
export {default as navreducers} from './navreducers'


const NavState = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = ({ auth }) => ({
  nav: auth.nav
})

export default connect(mapStateToProps)(NavState);
