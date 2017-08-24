import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import actions from './actions'
import style from './styles'


class Histories extends Component {

  render() {
      return (
            <View style={styles.container}>
                <Text >
                    Message Page
                </Text>
                <TouchableOpacity  underlayColor="#ccc"  onPress = { () => this.props.navigate({route: 'Back', params:{}}) }>
                    <Text > pop </Text>
                </TouchableOpacity>
            </View>
	    )
  	}
}


const styles = StyleSheet.create(style)

const stateToProps = (state) => {
    return {
    }
};

const dispatchToProps = (dispatch) => {
    return {
        navigate: (params) => dispatch(actions.navigate(params)),
    }
};

export default connect(stateToProps,dispatchToProps)(Histories)
