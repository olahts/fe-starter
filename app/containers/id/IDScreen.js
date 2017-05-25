import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';
import actions from './actions'
import IDCard from "./IDCard";
import IDRequests from "./IDRequests";

class IDScreen extends Component {

	componentDidMount(){
    	this.props.refresh(this.props.user)
	}

    render(){
    	return (
    		<Swiper
	            loop={false}
	            showsPagination={false}
	            index={0}>
	            	<IDCard />
	            	<IDRequests />
	        </Swiper>
	    )
    }
     
    
}

const stateToProps = ({ user }) => {
  return {}
}

const dispatchToProps = (dispatch) => {
  return {
    refresh: (params) => dispatch(actions.refresh(params)),
  }
}

export default connect(stateToProps,dispatchToProps)(IDScreen)