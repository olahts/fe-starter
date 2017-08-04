import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'
import { Header, SwiperWithTabs } from '../utils/components'
import actions from './actions'
import style from './styles'

class IDMessages extends Component {

	showMessage(params){
	    console.log(params)
	}

	render() {
		return (
		    <View style={styles.container}>
		        <Header />
		        <SwiperWithTabs
		        	listdata={this.props.messages}
		        	showItem={this.showMessage.bind(this)} />
		    </View>
		)
	}
}


const styles = StyleSheet.create(style.idmessages)

const stateToProps = ({ message }) => {
	console.log(message)
  return {
    messages: message.list,
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps,dispatchToProps)(IDMessages)
