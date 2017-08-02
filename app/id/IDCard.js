import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'
import { Header, Card, } from '../utils/components'
import actions from './actions'
import style from './styles'


class IDCard extends Component {

  render() {
	    return (
	        <View style={styles.container}>
	            <Header style={styles.header}/>
	            <Card tabLabel={"ID"} type={"full"} style={styles.card}/>
	        </View>
	    )
  	}
}


const styles = StyleSheet.create(style.idcard)

const stateToProps = ({ id }) => {
  return {
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps,dispatchToProps)(IDCard)
