import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const OptionBar = ({ style, ...props}) => {

      return (
	        <View style={[styles.container, style ]}>
                <Text style={styles.label}> Add </Text>
                <Text style={styles.label}> History </Text>
                <Text style={styles.label}> Refer </Text>
                <Text style={styles.label}> Message </Text>
                <Text style={styles.label}> Edit </Text>
            </View>
	    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
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

OptionBar.propTypes = {
  text: PropTypes.string,
}
OptionBar.defaultProps = {
  text: 'View History'
}

export default OptionBar
