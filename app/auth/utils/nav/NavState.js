import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'

class NavState extends Component {

    render() {
        const { dispatch, nav } = this.props;
        return (
          <View style={{ flex: 1 }}>
            <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
          </View>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
  nav: auth.nav
})

const dispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, dispatchToProps)(NavState);
