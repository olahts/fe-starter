import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const Alert = (props) => {
 	return props.message ? ( 
 		<View style={styles.container} >
          <Text style={styles.message}>{props.message}</Text>
        </View>
	) : null
}
 
const propTypes = {
  message: PropTypes.string.isRequired,
}

const defaultProps = {}

const styles = StyleSheet.create({
	container: {
		height: 50,
	    alignItems: "center",
        paddingVertical: 5,
        flexWrap: "wrap",
 	},
	message: {
		fontFamily: "Arial",
		fontWeight: "bold",
        fontSize: 15,
        color: "#FF0000",
    },
})
 
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
 
export default Alert