import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} underlayColor="#ccc" onPress = {() => props.onTouch()} >
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}
 
const propTypes = {
  label: PropTypes.string.isRequired,
}
const defaultProps = {}

const styles = StyleSheet.create({
	container: {
        width: 200,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    	backgroundColor: '#FF69B4',
	    borderRadius: 8,
	},
	label: {
        fontWeight: "bold",
		fontSize: 15,
    },
})
 
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button
