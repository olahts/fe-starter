import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'
import { Card, } from '../utils'
export { default as idreducers } from './reducers'


class Id extends Component {

  render() {
	    return (
	        <View style={styles.container}>
              <Text style={styles.welcome}>
                ID Page
              </Text>
	        </View>

	    )
  	}
}


const styles = StyleSheet.create(style)

const stateToProps = (state) => {
  return {
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps,dispatchToProps)(Id)
