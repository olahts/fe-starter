import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class RequestItem extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Request Item
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.requestitem)

export default RequestItem