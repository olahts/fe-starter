import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { connect } from 'react-redux'
import { Header, SwiperWithTabs } from '../../components'
import actions from './actions'
import style from './styles'

class IDRequests extends Component {

	showRequest(params){
	    console.log(params)
	}

	render() {
		return ( 
		    <View style={styles.container}>
		        <Header />
		        <SwiperWithTabs  
		        	listdata={this.props.requests} 
		        	showItem={this.showRequest.bind(this)} />
		    </View>
		)
	} 
}


const styles = StyleSheet.create(style.idrequests)

const stateToProps = ({ request }) => {
	console.log(request)
  return {
    requests: request.list,
  }
}

const dispatchToProps = (dispatch) => {
  return {
  
  }
}

export default connect(stateToProps,dispatchToProps)(IDRequests)