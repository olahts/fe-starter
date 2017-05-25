import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class RequestID extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Request ID
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.requestid)

export default RequestID