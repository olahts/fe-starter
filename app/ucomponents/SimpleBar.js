import React, { PropTypes } from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const SimpleBar = ({label, style}) => {
    return (
      <View style={[styles.container, style ]}>
        <Text style={styles.label}> {label} </Text>
      </View>
    )
}

const styles = StyleSheet.create({
	container: {
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDD7E4',
  },
	label: {
    fontWeight: "bold",
    fontSize: 15,
  },
})

SimpleBar.propTypes = {
  label: PropTypes.string,
}
SimpleBar.defaultProps = {
  label: 'Obi Afolabi',
}

export default SimpleBar
