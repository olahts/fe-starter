import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import style from './styles'


class HomeAttributes extends Component {
  
  render() {
    return ( 
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Home Attributes
          </Text>
        </View>
    )
  }

}

const styles = StyleSheet.create(style.homeattributes)

export default HomeAttributes