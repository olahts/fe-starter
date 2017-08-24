import React, { PropTypes } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const historiesRoute =  'Histories';

const OptionBar = ({ style, origin, navigateTo }) => {

    return (
	        <View style={[styles.container, style ]}>
                <Text style={styles.label}> Add </Text>
                <TouchableOpacity  underlayColor="#ccc"  onPress = { () => navigateTo({route: historiesRoute, params:{origin} }) }>
                    <Text style={styles.label} > History </Text>
                </TouchableOpacity>
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
