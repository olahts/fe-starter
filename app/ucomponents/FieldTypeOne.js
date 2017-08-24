import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const FieldTypeOne = ({ label, style }) => {
    return (
      <View style={[styles.container, style ]}>
        <Text style={styles.label}> {label} </Text>
      </View>
    )
}

const styles = StyleSheet.create({
	container: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
	label: {
    fontWeight: "bold",
		fontSize: 15,
  },
})

FieldTypeOne.propTypes = {
  label: PropTypes.string,
}
FieldTypeOne.defaultProps = {
  label: 'Obi Afolabi',
}

export default FieldTypeOne
